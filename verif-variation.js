#!/usr/bin/env node
/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║   THE SHELF CARTEL — Import listings à variation        ║
 * ║                                                          ║
 * ║   Traite 1 listing à la fois, du plus de variantes      ║
 * ║   au moins. Récupère les photos via API eBay.            ║
 * ║                                                          ║
 * ║   UTILISATION:                                           ║
 * ║   node import-variations.js                              ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const { createClient } = require('@supabase/supabase-js')
const fs   = require('fs')
const path = require('path')
const https = require('https')
const readline = require('readline')

// -- Les secrets sont lus dans .env.local (jamais ecrits dans ce fichier) --
try {
  fs.readFileSync(path.join(__dirname, '.env.local'), 'utf8').split(/\r?\n/).forEach(l => {
    const m = l.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*?)\s*$/)
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '')
  })
} catch (e) {}

// ── CONFIG ────────────────────────────────────────────────
const SUPABASE_URL = 'https://eptnfpvwfxloimmbzxcl.supabase.co'
const SERVICE_KEY  = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_KEY

const EBAY_APP_ID  = 'AlexAbra-Collecti-PRD-af606d196-62405c9d'
const EBAY_CERT_ID = process.env.EBAY_CERT_ID
const EBAY_DEV_ID  = process.env.EBAY_DEV_ID
const EBAY_TOKEN   = process.env.EBAY_TOKEN

if (!SERVICE_KEY || !EBAY_TOKEN || !EBAY_CERT_ID) {
  console.error('Cles manquantes: ajoute SUPABASE_SECRET_KEY, EBAY_TOKEN et EBAY_CERT_ID dans .env.local')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

// ── HELPERS ───────────────────────────────────────────────
function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  return new Promise(resolve => rl.question(question, ans => { rl.close(); resolve(ans.trim()) }))
}

function parseCsv(text) {
  const lines = []
  let cur = '', inQ = false
  for (const ch of text) {
    if (ch === '"') { inQ = !inQ }
    else if (ch === '\n' && !inQ) { lines.push(cur); cur = '' }
    else { cur += ch }
  }
  if (cur) lines.push(cur)

  const parseRow = row => {
    const cols = [], re = /("([^"]*)"|([^,]*))(,|$)/g
    let m
    while ((m = re.exec(row)) !== null) {
      cols.push((m[2] !== undefined ? m[2] : m[3]).trim())
      if (m[4] === '') break
    }
    return cols
  }

  const headers = parseRow(lines[0])
  return lines.slice(1).filter(l => l.trim()).map(l => {
    const vals = parseRow(l)
    const obj = {}
    headers.forEach((h, i) => obj[h] = vals[i] || '')
    return obj
  })
}

// ── API EBAY GetItem ──────────────────────────────────────
function ebayGetItem(itemId) {
  return new Promise((resolve, reject) => {
    const xml = `<?xml version="1.0" encoding="utf-8"?>
<GetItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">
  <RequesterCredentials>
    <eBayAuthToken>${EBAY_TOKEN}</eBayAuthToken>
  </RequesterCredentials>
  <ItemID>${itemId}</ItemID>
  <IncludeItemSpecifics>true</IncludeItemSpecifics>
  <DetailLevel>ReturnAll</DetailLevel>
</GetItemRequest>`

    const options = {
      hostname: 'api.ebay.com',
      path: '/ws/api.dll',
      method: 'POST',
      headers: {
        'X-EBAY-API-COMPATIBILITY-LEVEL': '967',
        'X-EBAY-API-CALL-NAME': 'GetItem',
        'X-EBAY-API-SITEID': '2',
        'X-EBAY-API-APP-NAME': EBAY_APP_ID,
        'X-EBAY-API-CERT-NAME': EBAY_CERT_ID,
        ...(EBAY_DEV_ID ? { 'X-EBAY-API-DEV-NAME': EBAY_DEV_ID } : {}),
        'Content-Type': 'text/xml',
        'Content-Length': Buffer.byteLength(xml),
      }
    }

    let data = ''
    const req = https.request(options, res => {
      res.on('data', chunk => data += chunk)
      res.on('end', () => resolve(data))
    })
    req.on('error', reject)
    req.write(xml)
    req.end()
  })
}

// eBay renvoie le XML avec des entités (&apos; &amp; ...): on les décode pour comparer aux noms du CSV
function decodeXml(t) {
  return String(t).replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&amp;/g, '&')
}

// Extraire toutes les URLs de photos du XML
function extractPhotos(xml) {
  const photos = []
  const re = /<PictureURL>(https?:\/\/[^<]+)<\/PictureURL>/g
  let m
  while ((m = re.exec(xml)) !== null) {
    if (!photos.includes(m[1])) photos.push(m[1])
  }
  return photos
}

// Photos par valeur de variante (vraie photo de chaque option du dropdown)
function extractVariationPhotos(xml) {
  const map = {}
  const setRe = /<VariationSpecificPictureSet>([\s\S]*?)<\/VariationSpecificPictureSet>/g
  let m
  while ((m = setRe.exec(xml)) !== null) {
    const block = m[1]
    const val = (block.match(/<VariationSpecificValue>([^<]*)<\/VariationSpecificValue>/) || [])[1]
    if (!val) continue
    const urls = [...block.matchAll(/<PictureURL>(https?:\/\/[^<]+)<\/PictureURL>/g)].map(x => x[1])
    if (urls.length) map[decodeXml(val).trim().toLowerCase()] = urls
  }
  return map
}

// Message d'erreur eBay (token expiré, accès refusé, etc.)
function extractError(xml) {
  const ack = (xml.match(/<Ack>([^<]+)<\/Ack>/) || [])[1]
  const msg = (xml.match(/<LongMessage>([^<]+)<\/LongMessage>/) || xml.match(/<ShortMessage>([^<]+)<\/ShortMessage>/) || [])[1]
  return ack && ack !== 'Success' && ack !== 'Warning' ? `${ack}: ${msg || 'erreur inconnue'}` : (msg || '')
}

// Extraire le titre du listing parent
function extractTitle(xml) {
  const m = xml.match(/<Title>([^<]+)<\/Title>/)
  return m ? decodeXml(m[1]) : ''
}

// Mapping catégorie (simplifié)
function smartCategory(title) {
  const t = title.toLowerCase()
  if (t.includes('hot wheels') && (t.includes('premium') || t.includes('car culture') || t.includes('pop culture') || t.includes('fast & furious'))) return 'Hot Wheels Premium'
  if (t.includes('hot wheels') || t.includes('hotwheels')) return 'Hot Wheels'
  if (t.includes('matchbox')) return 'Matchbox'
  if (t.includes('star wars') || t.includes('mandalorian')) return 'Star Wars'
  if (t.includes('marvel') || t.includes('spider-man') || t.includes('iron man')) return 'Marvel'
  if (t.includes('batman') || t.includes('dc comics') || t.includes('superman')) return 'DC Comics'
  if (t.includes('transformers')) return 'Transformers'
  if (t.includes('wwe') || t.includes('wrestling')) return 'WWE & Wrestling'
  if (t.includes('mcfarlane') || t.includes('spawn')) return 'McFarlane Figures'
  if (t.includes('funko') || t.includes('pop!')) return 'Funko Pop'
  if (t.includes('pokemon') || t.includes('pokémon')) return 'Pokémon'
  if (t.includes('lego')) return 'LEGO'
  if (t.includes('jurassic')) return 'Jurassic Park / World'
  if (t.includes('hallmark')) return 'Hallmark Ornaments'
  if (t.includes('tmnt') || t.includes('ninja turtle')) return 'TMNT'
  if (t.includes('gi joe') || t.includes('g.i. joe')) return 'GI Joe'
  if (t.includes('vhs')) return 'VHS Tapes'
  if (t.includes('dvd') || t.includes('blu-ray') || t.includes('bluray')) return 'DVD & Blu-ray'
  if (t.includes('hockey') || t.includes('nhl')) return 'Hockey'
  if (t.includes('diecast') || t.includes('die-cast') || t.includes('greenlight') || t.includes('maisto')) return 'Diecast & Scale Models'
  return 'Collectibles'
}

// Usage: node verif-variation.js <numero d'item eBay>   (ex: node verif-variation.js 147542448142)
async function main() {
  const id = process.argv[2]
  if (!id) { console.log('Usage: node verif-variation.js NUMERO_ITEM'); process.exit(1) }
  const xml = await ebayGetItem(id)
  const live = extractTitle(xml)
  const vp = extractVariationPhotos(xml)
  console.log('Titre eBay actuel:', live || '(introuvable) ' + extractError(xml))
  console.log('Options avec photo eBay:', Object.keys(vp).length)
  const { data } = await supabase.from('products').select('id,ebay_id,title,photos,stock,enabled').like('ebay_id', `${id}_%`).limit(2000)
  console.log('Lignes sur le site pour cet item:', (data || []).length, '\n')
  let bad = 0, oldTitle = 0
  for (const r of (data || [])) {
    const t = r.title || ''
    const name = t.includes(' — ') ? t.split(' — ').pop().trim() : ''
    const want = vp[name.toLowerCase()]
    const have = (r.photos || [])[0]
    const photoOk = !want ? '?' : (want[0] === have ? 'OK' : 'MAUVAISE PHOTO')
    const titleOk = (t.includes(' — ') && !t.startsWith(live + ' — ')) ? 'OK' : 'ANCIEN TITRE'
    if (photoOk === 'MAUVAISE PHOTO') bad++
    if (titleOk !== 'OK') oldTitle++
    console.log(`${r.ebay_id} | ${name} | photo:${photoOk} | titre:${titleOk} | stock:${r.stock} | ${r.enabled ? 'visible' : 'cache'} | id=${r.id}`)
  }
  console.log(`\nMauvaises photos: ${bad} — anciens titres: ${oldTitle}`)
}
main().catch(e => { console.error(e.message); process.exit(1) })
