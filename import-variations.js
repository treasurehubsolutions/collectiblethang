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

// Extraire le titre du listing parent
function extractTitle(xml) {
  const m = xml.match(/<Title>([^<]+)<\/Title>/)
  return m ? m[1] : ''
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

// ── MAIN ──────────────────────────────────────────────────
async function main() {
  console.log('═'.repeat(60))
  console.log('  THE SHELF CARTEL — Import Variations')
  console.log('═'.repeat(60))

  // 1. Lire le CSV
  const csvFiles = fs.readdirSync('.').filter(f =>
    f.endsWith('.csv') && (f.toLowerCase().includes('ebay') || f.toLowerCase().includes('active') || f.toLowerCase().includes('listing'))
  ).sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)

  if (!csvFiles.length) { console.log('❌ Aucun CSV eBay trouvé dans ce dossier'); process.exit(1) }
  const csvPath = csvFiles[0]
  console.log(`\n📂 CSV: ${csvPath}`)

  const rows = parseCsv(fs.readFileSync(csvPath, 'utf8'))

  // 2. Grouper par listing avec variation
  const listingMap = {}
  for (const r of rows) {
    const varDetail = (r['Variation details'] || '').trim()
    if (!varDetail) continue
    const id = r['Item number']
    if (!listingMap[id]) listingMap[id] = { id, title: r['Title'], price: parseFloat(r['Start price']) || 0, variants: [] }
    // Ligne "tout" (liste toutes les options) vs ligne individuelle
    if (varDetail.includes(';')) continue // ligne récap — ignorer
    listingMap[id].variants.push({ detail: varDetail, qty: parseInt(r['Available quantity']) || 0, price: parseFloat(r['Start price']) || 0 })
  }

  // 3. Trier par nombre de variantes décroissant
  const listings = Object.values(listingMap).sort((a, b) => b.variants.length - a.variants.length)

  console.log(`\n📋 ${listings.length} listings à variation trouvés:`)
  listings.forEach((l, i) => console.log(`  ${i+1}. [${l.variants.length} variantes] ${l.title.substring(0, 60)}`))

  // 4. Traiter un par un
  for (let i = 0; i < listings.length; i++) {
    const listing = listings[i]
    console.log('\n' + '─'.repeat(60))
    console.log(`\n[${i+1}/${listings.length}] ${listing.title}`)
    console.log(`  Item ID: ${listing.id}`)
    console.log(`  Variantes: ${listing.variants.length}`)
    console.log(`  Prix: $${listing.price}`)
    console.log(`  Variantes:`)
    listing.variants.slice(0, 5).forEach(v => console.log(`    - ${v.detail} (qty: ${v.qty})`))
    if (listing.variants.length > 5) console.log(`    ... et ${listing.variants.length - 5} autres`)

    const ans = await ask(`\n  Importer ce listing ? (oui/non/stop) : `)
    if (ans.toLowerCase() === 'stop') { console.log('\nArrêt demandé.'); break }
    if (!['oui', 'o', 'yes', 'y'].includes(ans.toLowerCase())) { console.log('  → Ignoré'); continue }

    // 5. Appel API eBay
    console.log(`  🔍 Récupération des photos via API eBay...`)
    let photos = []
    try {
      const xml = await ebayGetItem(listing.id)
      photos = extractPhotos(xml)
      console.log(`  📸 ${photos.length} photos trouvées`)
      if (photos.length === 0) {
        console.log('  ⚠️  Aucune photo — on continue sans photo')
      }
    } catch (e) {
      console.log(`  ⚠️  Erreur API eBay: ${e.message} — on continue sans photo`)
    }

    // 6. Créer les produits Supabase
    const category = smartCategory(listing.title)
    const ebayUrl = `https://www.ebay.ca/itm/${listing.id}`
    let created = 0, skipped = 0

    for (let vi = 0; vi < listing.variants.length; vi++) {
      const v = listing.variants[vi]
      if (v.qty <= 0) { skipped++; continue }

      // Extraire le nom propre de la variante (après le "=")
      const varName = v.detail.includes('=') ? v.detail.split('=').slice(1).join('=').trim() : v.detail
      const title = `${listing.title} — ${varName}`

      // Photo: on répartit les photos entre les variantes
      const photo = photos.length > 0 ? [photos[vi % photos.length]] : []

      // Vérifier si existe déjà
      const { data: existing } = await supabase
        .from('products')
        .select('id')
        .eq('ebay_id', `${listing.id}_${vi}`)
        .single()

      if (existing) { skipped++; continue }

      const { error } = await supabase.from('products').insert({
        ebay_id:  `${listing.id}_${vi}`,
        title,
        price:    v.price || listing.price,
        currency: 'CAD',
        stock:    v.qty,
        category,
        photos:   photo,
        enabled:  true,
        source:   'ebay',
      })

      if (error) { console.log(`  ❌ Erreur: ${error.message}`); skipped++ }
      else { created++ }

      process.stdout.write(`\r  Importé: ${created}/${listing.variants.length - skipped} variantes...`)
    }

    console.log(`\n  ✅ ${created} variantes importées, ${skipped} ignorées (qty=0 ou déjà existantes)`)
  }

  console.log('\n' + '═'.repeat(60))
  console.log('  Terminé !')
  console.log('═'.repeat(60))
}

main().catch(console.error)
