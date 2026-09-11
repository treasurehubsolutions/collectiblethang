#!/usr/bin/env node
/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║   THE SHELF CARTEL — Mise à jour quotidienne            ║
 * ║                                                          ║
 * ║   UTILISATION:                                           ║
 * ║   1. Exporte ton CSV eBay "All Active Listings"          ║
 * ║   2. Mets le CSV dans ce dossier                         ║
 * ║   3. Lance: node mise-a-jour.js                          ║
 * ║   4. C'est tout ! Le script fait tout automatiquement    ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// ── CONFIG ────────────────────────────────────────────────
const SUPABASE_URL = 'https://eptnfpvwfxloimmbzxcl.supabase.co'
const SERVICE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254'

const EBAY_APP_ID  = 'AlexAbra-Collecti-PRD-af606d196-62405c9d'
const EBAY_DEV_ID  = '881bff2e-587b-4149-9df6-6ff133c033c2'
const EBAY_CERT_ID = 'PRD-f606d1966eec-0cc5-4d34-9603-bea5'
let   EBAY_TOKEN   = 'v^1.1#i^1#I^3#r^1#f^0#p^3#t^Ul4xMF82OkE2RDJCMjUwMEVBMTlCODdGNTA0ODhDOUJFNTk5NTExXzJfMSNFXjI2MA=='

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

// ── CATEGORY MAPPING ──────────────────────────────────────
const CAT_KEYWORDS = {
  'Hot Wheels Premium': ['premium','car culture','boulevard','retro entertainment','pop culture','fast & furious','hw screen time','hw art cars'],
  'Hot Wheels':         ['hot wheels','hotwheels','hw ','matchbox'],
  'Star Wars':          ['star wars','mandalorian','vader','yoda','jedi','sith','skywalker','boba fett','stormtrooper','grogu','ahsoka','black series','vintage collection','retro collection'],
  'Marvel':             ['marvel','spider-man','spiderman','iron man','captain america','thor','hulk','wolverine','deadpool','black panther','avengers','x-men','venom','legends series'],
  'DC Comics':          ['dc comics','batman','superman','wonder woman','the flash','aquaman','joker','harley quinn','dc multiverse'],
  'Transformers':       ['transformers','optimus prime','bumblebee','megatron','autobot','decepticon'],
  'WWE & Wrestling':    ['wwe','wrestling','john cena','the rock','undertaker','stone cold','aew','ljn'],
  'Jurassic Park / World': ['jurassic','dinosaur','t-rex','velociraptor'],
  'Hallmark Ornaments': ['hallmark','ornament','keepsake'],
  'McFarlane Figures':  ['mcfarlane','spawn'],
  'Funko Pop':          ['funko','pop!'],
  'Disney & Pixar':     ['disney','pixar','mickey','frozen','toy story','buzz lightyear','simba'],
  'LEGO':               ['lego'],
  'GI Joe':             ['g.i. joe','gi joe','cobra'],
  'Power Rangers':      ['power ranger','mighty morphin'],
  'Masters of the Universe': ['masters of the universe','he-man','skeletor','motu'],
  'TMNT':               ['tmnt','ninja turtle','teenage mutant'],
  'Pokémon':            ['pokemon','pokémon','pikachu','charizard'],
  'Sonic':              ['sonic','hedgehog'],
  'VHS Tapes':          ['vhs','cassette'],
  'DVD & Blu-ray':      ['dvd','blu-ray','blu ray','bluray'],
  'Video Games':        ['nintendo','playstation','xbox','sega','gameboy','n64','gamecube','atari'],
  'Diecast & Scale Models': ['diecast','die-cast','1:18','1:24','1:43','1:64','greenlight','maisto'],
  'Action Figures':     ['action figure','figure','figurine'],
  'Dolls & Barbie':     ['barbie','doll'],
  'Hockey':             ['hockey','nhl'],
  'Apparel':            ['hoodie','sweatshirt','t-shirt','jacket'],
}

const EBAY_CAT_MAP = {
  'Contemporary Manufacture': 'Action Figures',
  'Action Figures':           'Action Figures',
  'DVDs & Blu-ray Discs':     'DVD & Blu-ray',
  'Other Formats':            'VHS Tapes',
  'VHS Tapes':                'VHS Tapes',
  'Hoodies & Sweatshirts':    'Apparel',
  'Dolls & Doll Playsets':    'Dolls & Barbie',
  'Ornaments':                'Hallmark Ornaments',
  'LEGO (R) Complete Sets & Packs': 'LEGO',
  'Video Games':              'Video Games',
  'Cars, Trucks & Motorcycles': 'Diecast & Scale Models',
  'Collectible Figures & Bobbleheads': 'Collectibles',
  'Hockey-NHL':               'Hockey',
  'Fast Food':                'Collectibles',
}

const CAT_SPECS = {
  'Hot Wheels':              { weight: 180, length: 30, width: 15, height: 5  },
  'Hot Wheels Premium':      { weight: 220, length: 30, width: 15, height: 5  },
  'Star Wars':               { weight: 400, length: 32, width: 20, height: 10 },
  'Marvel':                  { weight: 450, length: 32, width: 20, height: 10 },
  'DC Comics':               { weight: 450, length: 32, width: 20, height: 10 },
  'Transformers':            { weight: 500, length: 32, width: 20, height: 15 },
  'WWE & Wrestling':         { weight: 700, length: 36, width: 30, height: 16 },
  'McFarlane Figures':       { weight: 500, length: 32, width: 20, height: 15 },
  'GI Joe':                  { weight: 350, length: 30, width: 18, height: 8  },
  'TMNT':                    { weight: 400, length: 32, width: 20, height: 10 },
  'Power Rangers':           { weight: 400, length: 32, width: 20, height: 10 },
  'Masters of the Universe': { weight: 400, length: 32, width: 20, height: 10 },
  'Jurassic Park / World':   { weight: 400, length: 32, width: 20, height: 10 },
  'Disney & Pixar':          { weight: 350, length: 30, width: 18, height: 8  },
  'Funko Pop':               { weight: 300, length: 20, width: 15, height: 20 },
  'Pokémon':                 { weight: 250, length: 25, width: 15, height: 5  },
  'Sonic':                   { weight: 350, length: 30, width: 18, height: 8  },
  'Action Figures':          { weight: 400, length: 32, width: 20, height: 10 },
  'Collectibles':            { weight: 350, length: 25, width: 20, height: 10 },
  'Diecast & Scale Models':  { weight: 300, length: 25, width: 15, height: 8  },
  'VHS Tapes':               { weight: 350, length: 25, width: 15, height: 10 },
  'DVD & Blu-ray':           { weight: 250, length: 25, width: 15, height: 5  },
  'Video Games':             { weight: 300, length: 25, width: 18, height: 5  },
  'Hallmark Ornaments':      { weight: 300, length: 20, width: 15, height: 10 },
  'LEGO':                    { weight: 600, length: 40, width: 30, height: 15 },
  'Dolls & Barbie':          { weight: 400, length: 35, width: 20, height: 10 },
  'Hockey':                  { weight: 300, length: 25, width: 15, height: 8  },
  'Apparel':                 { weight: 400, length: 35, width: 25, height: 5  },
}

// ── HELPERS ───────────────────────────────────────────────
function smartCategory(title, ebayCategory) {
  const t = title.toLowerCase()
  for (const [cat, keywords] of Object.entries(CAT_KEYWORDS)) {
    if (keywords.some(kw => t.includes(kw.toLowerCase()))) return cat
  }
  return EBAY_CAT_MAP[ebayCategory] || 'Collectibles'
}

function findEbayCsv() {
  const dirs = [__dirname, require('os').homedir() + '/Downloads', require('os').homedir() + '/Desktop']
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue
    const files = fs.readdirSync(dir)
      .filter(f => f.endsWith('.csv') && (f.toLowerCase().includes('ebay') || f.toLowerCase().includes('active') || f.toLowerCase().includes('listing')))
      .sort((a, b) => fs.statSync(path.join(dir, b)).mtime - fs.statSync(path.join(dir, a)).mtime)
    if (files.length > 0) return path.join(dir, files[0])
  }
  return null
}

function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''))
  const rows = []
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue
    const values = lines[i].match(/(".*?"|[^,]+|(?<=,)(?=,)|(?<=,)$|^(?=,))/g) || []
    const row = {}
    headers.forEach((h, j) => {
      row[h] = (values[j] || '').replace(/^"|"$/g, '').trim()
    })
    rows.push(row)
  }
  return rows
}

// ── EBAY IMAGE FETCH ──────────────────────────────────────
let _oauthToken = null
let _oauthExpiry = 0

async function getOAuthToken() {
  if (_oauthToken && Date.now() < _oauthExpiry) return _oauthToken
  const creds = Buffer.from(`${EBAY_APP_ID}:${EBAY_CERT_ID}`).toString('base64')
  const res = await fetch('https://api.ebay.com/identity/v1/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': `Basic ${creds}` },
    body: 'grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope'
  })
  if (res.ok) {
    const d = await res.json()
    _oauthToken = d.access_token
    _oauthExpiry = Date.now() + (d.expires_in - 60) * 1000
    return _oauthToken
  }
  return null
}

async function fetchImages(itemId) {
  // Try OAuth2 Browse API first
  try {
    const token = await getOAuthToken()
    if (token) {
      const r = await fetch(`https://api.ebay.com/buy/browse/v1/item/v1|${itemId}|0`, {
        headers: { 'Authorization': `Bearer ${token}`, 'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US' }
      })
      if (r.ok) {
        const d = await r.json()
        const imgs = []
        if (d.image?.imageUrl) imgs.push(d.image.imageUrl.replace(/s-l\d+/, 's-l1600'))
        for (const img of (d.additionalImages || [])) {
          const url = (img.imageUrl || '').replace(/s-l\d+/, 's-l1600')
          if (url && !imgs.includes(url)) imgs.push(url)
        }
        if (imgs.length > 0) return imgs.slice(0, 10)
      }
    }
  } catch(e) {}

  // Fallback: Trading API with user token
  try {
    const xml = `<?xml version="1.0" encoding="utf-8"?>
<GetItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">
  <RequesterCredentials><eBayAuthToken>${EBAY_TOKEN}</eBayAuthToken></RequesterCredentials>
  <ItemID>${itemId}</ItemID>
  <DetailLevel>ReturnAll</DetailLevel>
</GetItemRequest>`
    const r = await fetch('https://api.ebay.com/ws/api.dll', {
      method: 'POST',
      headers: {
        'X-EBAY-API-SITEID': '0', 'X-EBAY-API-COMPATIBILITY-LEVEL': '967',
        'X-EBAY-API-CALL-NAME': 'GetItem', 'X-EBAY-API-APP-NAME': EBAY_APP_ID,
        'X-EBAY-API-DEV-NAME': EBAY_DEV_ID, 'X-EBAY-API-CERT-NAME': EBAY_CERT_ID,
        'Content-Type': 'text/xml'
      },
      body: xml
    })
    const text = await r.text()
    const urls = [...text.matchAll(/<PictureURL>(.*?)<\/PictureURL>/g)]
      .map(m => m[1].replace(/s-l\d+/, 's-l1600'))
      .filter(Boolean)
    const unique = [...new Set(urls)]
    if (unique.length > 0) return unique.slice(0, 10)
  } catch(e) {}

  return []
}

// ── CACHE ─────────────────────────────────────────────────
const CACHE_FILE = path.join(__dirname, 'images_cache.json')

function loadCache() {
  if (fs.existsSync(CACHE_FILE)) {
    return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'))
  }
  return {}
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2))
}

// ── MAIN ──────────────────────────────────────────────────
async function main() {
  console.log('╔══════════════════════════════════════════════╗')
  console.log('║   THE SHELF CARTEL — Mise à jour             ║')
  console.log('╚══════════════════════════════════════════════╝')
  console.log()

  // 1. Find CSV
  const csvPath = findEbayCsv()
  if (!csvPath) {
    console.error('❌ CSV eBay introuvable! Mets ton CSV dans ce dossier.')
    process.exit(1)
  }
  console.log(`✅ CSV trouvé: ${path.basename(csvPath)}`)

  // 2. Parse CSV
  const rows = parseCSV(csvPath)
  console.log(`📦 ${rows.length} annonces dans le CSV`)

  // 3. Separate variations from clean products
  const variationIds = new Set(
    rows.filter(r => r['Variation details'] && r['Variation details'].trim())
        .map(r => r['Item number'].trim())
  )
  // Also exclude products with YOU PICK / YOUR PICK in title
  const YOU_PICK_KEYWORDS = ['you pick', 'your pick', 'you choose', 'you select', 'pick your', 'pick one']
  const cleanRows = rows.filter(r => {
    const itemId = r['Item number'].trim()
    const title = (r['Title'] || '').toLowerCase()
    if (variationIds.has(itemId)) return false
    if (YOU_PICK_KEYWORDS.some(kw => title.includes(kw))) {
      variationIds.add(itemId) // track for disabling
      return false
    }
    return true
  })
  const activeIds = new Set(cleanRows.map(r => r['Item number'].trim()))

  console.log(`   ✓ Produits valides (sans variation): ${cleanRows.length}`)
  console.log(`   ✗ Variations exclues: ${variationIds.size}`)
  console.log()

  // 4. Get current Supabase products (ALL - paginated)
  console.log('📋 Lecture Supabase...')
  const existingMap = {}
  let from = 0
  const PAGE = 1000
  while (true) {
    const { data: page, error } = await supabase
      .from('products')
      .select('id, ebay_id, title, enabled, source, photos')
      .eq('source', 'ebay')
      .range(from, from + PAGE - 1)
    if (error || !page || page.length === 0) break
    for (const p of page) {
      existingMap[p.ebay_id] = p
    }
    if (page.length < PAGE) break
    from += PAGE
  }
  console.log(`   ${Object.keys(existingMap).length} produits eBay dans Supabase`)
  console.log()

  // 5. Load image cache
  const cache = loadCache()
  console.log(`📷 Cache images: ${Object.keys(cache).length} items`)
  console.log()

  // 6. Fetch missing images
  const missingImages = cleanRows.filter(r => {
    const id = r['Item number'].trim()
    const cached = cache[`api:${id}`] || cache[id] || []
    return cached.length === 0
  })

  if (missingImages.length > 0) {
    console.log(`🖼  Récupération images manquantes: ${missingImages.length} produits...`)
    let fetched = 0
    for (const row of missingImages) {
      const itemId = row['Item number'].trim()
      const imgs = await fetchImages(itemId)
      cache[`api:${itemId}`] = imgs
      fetched++
      if (fetched % 50 === 0) {
        saveCache(cache)
        process.stdout.write(`\r   ${fetched}/${missingImages.length} récupérés`)
      }
      await new Promise(r => setTimeout(r, 300))
    }
    saveCache(cache)
    console.log(`\n   ✓ Images récupérées`)
    console.log()
  }

  // 7. Process each product
  console.log('⚙️  Traitement des produits...')

  const toInsert = []
  const toUpdate = []
  const toDisable = []

  // Disable products no longer on eBay or that are variations
  for (const [ebayId, prod] of Object.entries(existingMap)) {
    if (!activeIds.has(ebayId) || variationIds.has(ebayId)) {
      if (prod.enabled) toDisable.push(prod.id)
    }
  }

  // Process active products
  for (const row of cleanRows) {
    const itemId = row['Item number'].trim()
    const title = (row['Title'] || '').trim()
    const ebayCategory = (row['eBay category 1 name'] || '').trim()
    const category = smartCategory(title, ebayCategory)
    const specs = CAT_SPECS[category] || { weight: 350, length: 30, width: 20, height: 10 }

    let price = parseFloat(row['Current price'] || row['Start price'] || 0)
    if ((row['Currency'] || 'CAD').toUpperCase() === 'USD') price = Math.round(price * 1.38 * 100) / 100

    const stock = parseInt(row['Available quantity'] || 1) || 1
    const condition = (row['Condition'] || 'New').trim()
    const imgs = cache[`api:${itemId}`] || cache[itemId] || []

    const productData = {
      title, price, currency: 'CAD', stock,
      condition, category, ebay_id: itemId,
      photos: imgs, enabled: stock > 0,
      source: 'ebay', ...specs
    }

    if (existingMap[itemId]) {
      // Update existing — preserve manual photos if no new ones
      const existing = existingMap[itemId]
      const photos = imgs.length > 0 ? imgs : (existing.photos || [])
      toUpdate.push({ id: existing.id, ...productData, photos })
    } else {
      // New product
      toInsert.push(productData)
    }
  }

  // 8. Apply changes
  console.log(`   🗑  À désactiver: ${toDisable.length}`)
  console.log(`   ✏️  À mettre à jour: ${toUpdate.length}`)
  console.log(`   ➕ Nouveaux: ${toInsert.length}`)
  console.log()

  // Disable old products
  if (toDisable.length > 0) {
    const BATCH = 100
    for (let i = 0; i < toDisable.length; i += BATCH) {
      await supabase.from('products').update({ enabled: false, stock: 0 }).in('id', toDisable.slice(i, i + BATCH))
    }
    console.log(`✓ ${toDisable.length} produits désactivés`)
  }

  // Update existing products
  let updated = 0
  for (const prod of toUpdate) {
    const { id, ...data } = prod
    const { error } = await supabase.from('products').update(data).eq('id', id)
    if (!error) updated++
  }
  console.log(`✓ ${updated} produits mis à jour`)

  // Insert new products
  if (toInsert.length > 0) {
    const BATCH = 50
    let inserted = 0
    for (let i = 0; i < toInsert.length; i += BATCH) {
      const { error } = await supabase.from('products').insert(toInsert.slice(i, i + BATCH))
      if (!error) inserted += Math.min(BATCH, toInsert.length - i)
    }
    console.log(`✓ ${inserted} nouveaux produits ajoutés`)
  }

  console.log()
  console.log('╔══════════════════════════════════════════════╗')
  console.log('║   ✅  MISE À JOUR TERMINÉE !                 ║')
  console.log('╚══════════════════════════════════════════════╝')
  console.log()
  console.log(`  Produits actifs: ${toUpdate.length + toInsert.length}`)
  console.log(`  Désactivés:      ${toDisable.length}`)
  console.log(`  Nouveaux:        ${toInsert.length}`)
  console.log()
  console.log('  Ton site est à jour ! 🚀')
}

main().catch(err => {
  console.error('❌ Erreur:', err.message)
  process.exit(1)
})
