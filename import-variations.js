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
    if (!listingMap[id]) listingMap[id] = { id, title: r['Title'], condition: (r['Condition'] || '').trim(), price: parseFloat(r['Start price']) || 0, variants: [] }
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

    // node import-variations.js 147542448142 [autres numéros]  => traite seulement ces annonces, sans aucune question
    // node import-variations.js tout                           => traite toutes les annonces ayant du stock, sans question
    const only = process.argv.slice(2)
    const totalQty = listing.variants.reduce((a, v) => a + v.qty, 0)
    let ans
    if (only.length) {
      ans = (only.includes('tout') || only.includes(String(listing.id))) && totalQty > 0 ? 'oui' : 'non'
      console.log(ans === 'oui' ? '  → Traité' : '  → Ignoré (pas demandé / stock 0)')
    } else if (totalQty === 0) {
      ans = 'non'; console.log('  → Ignoré automatiquement (stock 0)')
    } else {
      ans = await ask(`\n  Importer ce listing ? (oui/non/stop) : `)
    }
    if (ans.toLowerCase() === 'stop') { console.log('\nArrêt demandé.'); break }
    if (!['oui', 'o', 'yes', 'y'].includes(ans.toLowerCase())) { console.log('  → Ignoré'); continue }

    // 5. Appel API eBay
    console.log(`  🔍 Récupération des photos via API eBay...`)
    let photos = []
    let varPhotos = {}
    let liveTitle = ''   // titre ACTUEL de l'annonce sur eBay (le CSV peut être plus vieux)
    try {
      const xml = await ebayGetItem(listing.id)
      photos = extractPhotos(xml)
      varPhotos = extractVariationPhotos(xml)
      liveTitle = (extractTitle(xml) || '').trim()
      if (liveTitle && liveTitle !== listing.title) console.log(`  📝 Titre actuel sur eBay: ${liveTitle}`)
      console.log(`  📸 ${photos.length} photos trouvées (${Object.keys(varPhotos).length} options avec leur propre photo)`)
      if (photos.length === 0) {
        console.log(`  ⚠️  Aucune photo — eBay répond: ${extractError(xml) || '(pas de message)'}`)
        console.log('     → Les variantes seront créées mais NON affichées (désactivées) tant qu\'elles n\'ont pas de photo.')
        if (/usage limit/i.test(extractError(xml))) {
          console.log('\n⛔ eBay a atteint la limite quotidienne d\'appels API. Rien n\'a été modifié. Relance demain (la limite se remet à zéro environ à minuit, heure du Pacifique), idéalement avec: node import-variations.js NUMERO_ITEM')
          process.exit(0)
        }
        if (/token|auth|expired|IAF/i.test(extractError(xml))) console.log('     → Le jeton EBAY_TOKEN dans .env.local est probablement expiré: renouvelle-le (eBay Developer).')
      }
    } catch (e) {
      console.log(`  ⚠️  Erreur API eBay: ${e.message} — on continue sans photo`)
    }

    // 6. Créer les produits Supabase
    const category = smartCategory(listing.title)
    const ebayUrl = `https://www.ebay.ca/itm/${listing.id}`
    let created = 0, skipped = 0, updatedCount = 0

    // Produits déjà sur le site pour CE listing. On les reconnaît par le NOM de la variante (fin du titre),
    // jamais par leur position dans le CSV: l'ordre du CSV peut changer d'un export à l'autre.
    const { data: existingRows } = await supabase
      .from('products')
      .select('id, ebay_id, title, photos, enabled, admin_created, admin_oos')
      .like('ebay_id', `${listing.id}_%`)
      .limit(2000)
    const pool = (existingRows || []).slice()
    let nextIdx = pool.reduce((m, r) => Math.max(m, parseInt(String(r.ebay_id).split('_')[1]) || 0), -1) + 1
    const takeExisting = varName => {
      const suffix = (' — ' + varName).toLowerCase()
      const i = pool.findIndex(r => (r.title || '').toLowerCase().endsWith(suffix))
      return i >= 0 ? pool.splice(i, 1)[0] : null
    }

    for (let vi = 0; vi < listing.variants.length; vi++) {
      const v = listing.variants[vi]
      if (v.qty <= 0) { skipped++; continue }

      // Extraire le nom propre de la variante (après le "=")
      const varName = v.detail.includes('=') ? v.detail.split('=').slice(1).join('=').trim() : v.detail
      // Titre court: "<catégorie> — <nom de la variante>" (ex: "Hot Wheels — The Dark Knight Batman - Case M")
      const prefix = category !== 'Collectibles' ? category : (liveTitle || listing.title)
      const title = `${prefix} — ${varName}`

      // Photo: on répartit les photos entre les variantes
      // 1) vraie photo de l'option si eBay la fournit, 2) sinon répartition dans l'ordre
      const own = varPhotos[varName.trim().toLowerCase()]
      // Si l'annonce a des photos par option, une option sans photo reste SANS photo (donc cachée): jamais une photo au hasard
      const photo = own ? own.slice(0, 3) : (Object.keys(varPhotos).length === 0 && photos.length > 0 ? [photos[vi % photos.length]] : [])

      // Vérifier si existe déjà (reconnu par le nom de la variante)
      const existing = takeExisting(varName)

      if (existing) {
        // Variante déjà sur le site: on corrige sa photo avec la VRAIE photo de l'option (ou on la complète si elle n'en avait pas)
        if (existing.admin_created) { skipped++; continue }
        const curPhotos = Array.isArray(existing.photos) ? existing.photos : (existing.photos ? [existing.photos] : [])
        const wantPhotos = own ? own.slice(0, 3) : (curPhotos.length === 0 ? photo : curPhotos)
        const samePhotos = JSON.stringify(curPhotos) === JSON.stringify(wantPhotos)
        const wantEnabled = !existing.admin_oos && wantPhotos.length > 0
        const titleChanged = existing.title !== title
        // Annonce avec photos par option mais celle-ci n'en a pas: on la cache plutôt que d'afficher une mauvaise photo
        if (!own && Object.keys(varPhotos).length > 0) {
          if (existing.enabled) { await supabase.from('products').update({ enabled: false, title }).eq('id', existing.id); updatedCount++ } else { skipped++ }
          continue
        }
        if (titleChanged || (wantPhotos.length > 0 && (!samePhotos || (wantEnabled && !existing.enabled)))) {
          const upd = { title, stock: v.qty }
          if (wantPhotos.length > 0) upd.photos = wantPhotos
          if (wantEnabled) upd.enabled = true
          const { error: uerr } = await supabase.from('products').update(upd).eq('id', existing.id)
          if (uerr) { console.log(`  ❌ Erreur maj: ${uerr.message}`); skipped++ } else { updatedCount++ }
        } else { skipped++ }
        continue
      }

      const { error } = await supabase.from('products').insert({
        ebay_id:  `${listing.id}_${nextIdx++}`,
        condition: listing.condition || 'New',
        title,
        price:    v.price || listing.price,
        currency: 'CAD',
        stock:    v.qty,
        category,
        photos:   photo,
        enabled:  photo.length > 0,   // sans photo = jamais affiché sur le site
        source:   'ebay',
      })

      if (error) { console.log(`  ❌ Erreur: ${error.message}`); skipped++ }
      else { created++ }

      process.stdout.write(`\r  Importé: ${created}/${listing.variants.length - skipped} variantes...`)
    }

    console.log(`\n  ✅ ${created} variantes importées, ${updatedCount} corrigées (photo/stock), ${skipped} ignorées (qty=0 ou déjà correctes)`)
  }

  console.log('\n' + '═'.repeat(60))
  console.log('  Terminé !')
  console.log('═'.repeat(60))
}

main().catch(console.error)
