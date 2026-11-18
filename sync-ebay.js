#!/usr/bin/env node
/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║   THE SHELF CARTEL — Mise à jour via API eBay (sans CSV) ║
 * ║                                                          ║
 * ║   UTILISATION:                                           ║
 * ║   node mise-a-jour-api.js --dry-run  (essai, rien écrit) ║
 * ║   node mise-a-jour-api.js            (mise à jour réelle)║
 * ║   --force : ignore les garde-fous (à éviter)             ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

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
const EBAY_DEV_ID  = process.env.EBAY_DEV_ID
const EBAY_CERT_ID = process.env.EBAY_CERT_ID
let   EBAY_TOKEN   = process.env.EBAY_TOKEN

if (!SERVICE_KEY || !EBAY_TOKEN || !EBAY_CERT_ID) {
  console.error('Cles manquantes: ajoute SUPABASE_SECRET_KEY, EBAY_TOKEN et EBAY_CERT_ID dans .env.local')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

// ── CATEGORY MAPPING ──────────────────────────────────────
const CAT_KEYWORDS = {
  // Hot Wheels Premium : doit contenir "hot wheels" ET un mot-clé premium
  // (géré séparément dans smartCategory)
  'Hot Wheels':         ['hot wheels','hotwheels','hw '],
  'Star Wars':          ['star wars','mandalorian','vader','yoda','jedi','sith','skywalker','boba fett','stormtrooper','grogu','ahsoka','black series','vintage collection','retro collection','clone trooper','darth'],
  'Marvel':             ['marvel','spider-man','spiderman','iron man','captain america','thor','hulk','wolverine','deadpool','black panther','avengers','x-men','venom','legends series'],
  'DC Comics':          ['dc comics','batman','superman','wonder woman','the flash','aquaman','joker','harley quinn','dc multiverse'],
  'Transformers':       ['transformers','optimus prime','bumblebee','megatron','autobot','decepticon'],
  'WWE & Wrestling':    ['wwe','wrestling','john cena','the rock','undertaker','stone cold','aew','ljn'],
  'Jurassic Park / World': ['jurassic','dinosaur','t-rex','velociraptor'],
  'Hallmark Ornaments': ['hallmark','keepsake'],
  'McFarlane Figures':  ['mcfarlane','spawn'],
  'Funko Pop':          ['funko','pop!'],
  'Disney & Pixar':     ['disney','pixar','mickey','frozen','toy story','buzz lightyear','simba'],
  'LEGO':               ['lego'],
  'GI Joe':             ['g.i. joe','gi joe','cobra'],
  'Power Rangers':      ['power ranger','mighty morphin'],
  'Masters of the Universe': ['masters of the universe','he-man','skeletor','motu'],
  'TMNT':               ['tmnt','ninja turtle','teenage mutant'],
  'Pokémon':            ['pokemon','pokémon','pikachu','charizard'],
  'Sonic':              ['sonic the hedgehog','sonic hedgehog'],
  'VHS Tapes':          ['vhs','cassette'],
  'DVD & Blu-ray':      ['dvd','blu-ray','blu ray','bluray'],
  'Video Games':        ['nintendo','playstation','xbox','sega','gameboy','n64','gamecube','atari'],
  'Diecast & Scale Models': ['diecast','die-cast','1:18','1:24','1:43','1:64','greenlight','maisto','bburago','burago','jada 1:','jada 25','fast & furious','fast and furious','majorette','m2 machines','m2 ','brick shop','johnny lightning','racing champions','welly','tomica'],
  'Action Figures':     ['action figure','figure','figurine'],
  'Dolls & Barbie':     ['barbie','doll'],
  'Hockey':             ['hockey','nhl'],
  'Apparel':            ['hoodie','sweatshirt','t-shirt','jacket'],
  'Matchbox':           ['matchbox'],
}

const EBAY_CAT_MAP = {
  'Contemporary Manufacture': 'Diecast & Scale Models',  // sur eBay = diecast (confirmé par Alex)
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
const HW_PREMIUM_KEYWORDS = ['car culture','boulevard','retro entertainment','pop culture','hw screen time','hw art cars','hw id','hw race day','hw exotics','hw slammed','hw digital circuit','hw metro']

function smartCategory(title, ebayCategory, fallback) {
  const t = title.toLowerCase()
  const isHotWheels = t.includes('hot wheels') || t.includes('hotwheels') || t.includes('hw ')

  // Hot Wheels Premium : DOIT contenir "hot wheels" ET un mot-clé de série premium
  if (isHotWheels && HW_PREMIUM_KEYWORDS.some(kw => t.includes(kw))) return 'Hot Wheels Premium'

  // Parcourir les autres catégories dans l'ordre
  for (const [cat, keywords] of Object.entries(CAT_KEYWORDS)) {
    if (keywords.some(kw => t.includes(kw.toLowerCase()))) return cat
  }
  return EBAY_CAT_MAP[ebayCategory] || fallback || 'Collectibles'
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
    const line = lines[i]
    if (!line.trim()) continue
    const values = []
    let cur = '', inQ = false
    for (let c = 0; c < line.length; c++) {
      if (line[c] === '"') { inQ = !inQ }
      else if (line[c] === ',' && !inQ) { values.push(cur); cur = '' }
      else cur += line[c]
    }
    values.push(cur)
    const row = {}
    headers.forEach((h, j) => { row[h] = (values[j] || '').trim() })
    rows.push(row)
  }
  return rows
}


// ── LECTURE DES ANNONCES VIA L'API EBAY (remplace le CSV) ───────────────
const DRY   = process.argv.includes('--dry-run')
const FORCE = process.argv.includes('--force')
const STATE_FILE = path.join(__dirname, '.api-sync-state.json')

const xmlDecode = s => String(s || '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&')
const tag = (x, t) => { const m = x.match(new RegExp('<' + t + '(?:\\s[^>]*)?>([\\s\\S]*?)</' + t + '>')); return m ? xmlDecode(m[1]).trim() : '' }

async function tradingCall(callName, bodyInner) {
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<${callName}Request xmlns="urn:ebay:apis:eBLBaseComponents">
  <RequesterCredentials><eBayAuthToken>${EBAY_TOKEN}</eBayAuthToken></RequesterCredentials>
  ${bodyInner}
</${callName}Request>`
  const r = await fetch('https://api.ebay.com/ws/api.dll', {
    method: 'POST',
    headers: {
      'X-EBAY-API-SITEID': '2', 'X-EBAY-API-COMPATIBILITY-LEVEL': '967',
      'X-EBAY-API-CALL-NAME': callName, 'X-EBAY-API-APP-NAME': EBAY_APP_ID,
      'X-EBAY-API-DEV-NAME': EBAY_DEV_ID || '', 'X-EBAY-API-CERT-NAME': EBAY_CERT_ID,
      'Content-Type': 'text/xml'
    },
    body: xml
  })
  const text = await r.text()
  const ack = tag(text, 'Ack')
  if (!r.ok || (ack !== 'Success' && ack !== 'Warning')) {
    const msg = tag(text, 'LongMessage') || tag(text, 'ShortMessage') || ('HTTP ' + r.status)
    const code = tag(text, 'ErrorCode')
    const e = new Error(`eBay ${callName}: ${msg} [code ${code || r.status}]`)
    e.quota = /usage limit|exceeded/i.test(msg) || code === '518'
    e.badToken = ['931', '932', '16110', '17470'].includes(code) || /token/i.test(msg)
    throw e
  }
  return text
}

// Variantes d'un bloc XML (Item) -> [{ spec: "Nom=Valeur", qty }]
function parseVariations(x) {
  const out = []
  for (const m of x.matchAll(/<Variation>([\s\S]*?)<\/Variation>/g)) {
    const v = m[1]
    const specs = [...v.matchAll(/<NameValueList>([\s\S]*?)<\/NameValueList>/g)].map(n => `${tag(n[1], 'Name')}=${tag(n[1], 'Value')}`)
    const qty = (parseInt(tag(v, 'Quantity')) || 0) - (parseInt(tag(v, 'QuantitySold')) || 0)
    if (specs.length) out.push({ spec: specs.join(';'), qty: Math.max(qty, 0) })
  }
  return out
}

async function dbVariationBaseIds() {
  const ids = new Set()
  let from = 0
  while (true) {
    const { data, error } = await supabase.from('products').select('ebay_id').eq('source', 'ebay').range(from, from + 999)
    if (error) throw new Error('Supabase: ' + error.message)
    if (!data || data.length === 0) break
    for (const p of data) if (/^\d+_\d+$/.test(p.ebay_id)) ids.add(p.ebay_id.split('_')[0])
    if (data.length < 1000) break
    from += 1000
  }
  return ids
}

// Retourne des lignes au MEME format que le CSV eBay, pour que la suite du script reste inchangée
async function fetchRowsFromApi() {
  // Pages gardées sur disque: si eBay coupe en cours de route, la relance reprend où on s'est arrêté
  const PAGES_FILE = path.join(__dirname, '.api-pages-cache.json')
  const sleep = ms => new Promise(r => setTimeout(r, ms))
  let cache = { ts: 0, pages: {}, totalPages: 0 }
  try {
    const c = JSON.parse(fs.readFileSync(PAGES_FILE, 'utf8'))
    if (Date.now() - c.ts < 6 * 3600 * 1000) cache = c
  } catch (e) {}
  if (!cache.ts) cache.ts = Date.now()
  let page = 1, totalPages = cache.totalPages || 1
  while (page <= totalPages) {
    if (!cache.pages[page]) {
      let tries = 0, text
      while (true) {
        try {
          text = await tradingCall('GetMyeBaySelling',
            `<ActiveList><Include>true</Include><Pagination><EntriesPerPage>200</EntriesPerPage><PageNumber>${page}</PageNumber></Pagination></ActiveList>`)
          break
        } catch (e) {
          if (e.quota && tries < 3) {
            tries++
            console.log(`\n   eBay demande de ralentir (page ${page}), pause 90 s puis nouvel essai ${tries}/3...`)
            await sleep(90000)
            continue
          }
          fs.writeFileSync(PAGES_FILE, JSON.stringify(cache))
          e.message += `\n   Pages déjà reçues et gardées: ${Object.keys(cache.pages).length}/${totalPages}. Relance dans ~15 minutes: le script reprendra à la page ${page}.`
          throw e
        }
      }
      const active = (text.match(/<ActiveList>([\s\S]*?)<\/ActiveList>/) || [])[1] || ''
      totalPages = parseInt(tag(active, 'TotalNumberOfPages')) || 1
      cache.totalPages = totalPages
      cache.pages[page] = [...active.matchAll(/<Item>([\s\S]*?)<\/Item>/g)].map(m => m[1])
      fs.writeFileSync(PAGES_FILE, JSON.stringify(cache))
      await sleep(4000)
    }
    process.stdout.write(`\r   API eBay: page ${page}/${totalPages}`)
    page++
  }
  console.log()
  const items = []
  for (let p = 1; p <= totalPages; p++) items.push(...(cache.pages[p] || []))
  try { fs.unlinkSync(PAGES_FILE) } catch (e) {}

  const baseIds = await dbVariationBaseIds()
  const rows = []
  let varListings = 0, varFallback = 0
  for (const x of items) {
    const id = tag(x, 'ItemID')
    const title = tag(x, 'Title')
    const listingType = tag(x, 'ListingType')
    const cur = x.match(/<CurrentPrice[^>]*currencyID="([A-Z]{3})"[^>]*>([\d.]+)<\/CurrentPrice>/) || x.match(/<BuyItNowPrice[^>]*currencyID="([A-Z]{3})"[^>]*>([\d.]+)<\/BuyItNowPrice>/)
    const currency = cur ? cur[1] : 'CAD'
    const price = cur ? cur[2] : '0'
    let avail = tag(x, 'QuantityAvailable')
    if (avail === '') avail = String((parseInt(tag(x, 'Quantity')) || 0) - (parseInt(tag(x, 'QuantitySold')) || 0))
    const base = {
      'Item number': id, 'Title': title,
      'Format': listingType === 'Chinese' ? 'AUCTION' : 'FIXED_PRICE',
      'Currency': currency, 'Current price': price, 'Start price': price,
      'Condition': tag(x, 'ConditionDisplayName'), 'eBay category 1 name': tag(x, 'PrimaryCategoryName')
    }
    let vars = parseVariations(x)
    if (vars.length === 0 && baseIds.has(id)) {
      // Listing à variations connu dans Supabase mais détail non fourni par la liste -> GetItem
      try {
        const t = await tradingCall('GetItem', `<ItemID>${id}</ItemID><DetailLevel>ReturnAll</DetailLevel>`)
        vars = parseVariations(t)
        if (vars.length) varFallback++
      } catch (e) { throw new Error(`Variantes illisibles pour ${id}: ${e.message}`) }
      await new Promise(r => setTimeout(r, 200))
    }
    if (vars.length) {
      varListings++
      for (const v of vars) rows.push({ ...base, 'Variation details': v.spec, 'Available quantity': String(v.qty) })
    } else {
      rows.push({ ...base, 'Variation details': '', 'Available quantity': avail })
    }
  }
  console.log(`   Listings à variations: ${varListings} (dont ${varFallback} lus via GetItem)`)
  return { rows, listingCount: items.length, varListings }
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
async function showQuota() {
  const text = await tradingCall('GetApiAccessRules', '')
  console.log('Usage des appels eBay (Trading API):')
  for (const m of text.matchAll(/<ApiAccessRule>([\s\S]*?)<\/ApiAccessRule>/g)) {
    const b = m[1]
    const name = tag(b, 'CallName')
    if (!/ApplicationAggregate|GetMyeBaySelling|GetItem$|GetApiAccessRules/.test(name)) continue
    console.log(`  ${name}: jour ${tag(b, 'DailyUsage')}/${tag(b, 'DailyHardLimit')} | heure ${tag(b, 'HourlyUsage')}/${tag(b, 'HourlyHardLimit')} | période ${tag(b, 'Period')} ${tag(b, 'PeriodicUsage')}/${tag(b, 'PeriodicHardLimit')}`)
  }
}

async function main() {
  if (process.argv.includes('--quota')) {
    try { await showQuota() } catch (e) { console.error('❌ ' + e.message) }
    return
  }
  console.log('╔══════════════════════════════════════════════╗')
  console.log('║   THE SHELF CARTEL — Mise à jour             ║')
  console.log('╚══════════════════════════════════════════════╝')
  console.log()

  console.log(DRY ? '🧪 MODE ESSAI (--dry-run): aucune écriture' : '⚙️  Mode réel')
  // 1-2. Lecture des annonces actives via l'API eBay
  let rows, listingCount
  try {
    const r = await fetchRowsFromApi()
    rows = r.rows; listingCount = r.listingCount
  } catch (e) {
    console.error('❌ ' + e.message)
    if (e.quota) {
      console.error('   -> Limite d\'appels eBay atteinte (ce n\'est PAS un problème de token). Lance: node mise-a-jour-api.js --quota')
      console.error('      pour voir l\'usage et la limite, puis réessaie plus tard (les compteurs repartent à minuit, heure du Pacifique).')
    } else if (e.badToken) {
      console.error('   -> Token eBay invalide ou expiré: renouvelle EBAY_TOKEN dans .env.local.')
    }
    console.error('   Rien n\'a été modifié.')
    process.exitCode = 1
    return
  }
  console.log(`📦 ${listingCount} annonces actives (${rows.length} lignes)`)
  // Garde-fou: réponse suspecte (liste trop courte par rapport à la dernière fois)
  let lastCount = 0
  try { lastCount = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')).listingCount || 0 } catch (e) {}
  if (listingCount === 0 || (lastCount > 0 && listingCount < lastCount * 0.7)) {
    console.error(`❌ Garde-fou: ${listingCount} annonces reçues contre ${lastCount} la dernière fois. Rien modifié.${FORCE ? ' (--force: on continue)' : ''}`)
    if (!FORCE) { process.exitCode = 1; return }
  }

  // 3. Separate variations from clean products
  const variationIds = new Set(
    rows.filter(r => r['Variation details'] && r['Variation details'].trim())
        .map(r => r['Item number'].trim())
  )
  // Exclure les annonces aux enchères (Format = AUCTION) : elles ne doivent pas apparaître sur le site
  const auctionIds = new Set(
    rows.filter(r => (r['Format'] || '').toUpperCase().includes('AUCTION'))
        .map(r => r['Item number'].trim())
  )
  // Also exclude products with YOU PICK / YOUR PICK in title
  const YOU_PICK_KEYWORDS = ['you pick', 'your pick', 'you choose', 'you select', 'pick your', 'pick one']
  const cleanRows = rows.filter(r => {
    const itemId = r['Item number'].trim()
    const title = (r['Title'] || '').toLowerCase()
    const stock = parseInt(r['Available quantity'] ?? 0)
    if (variationIds.has(itemId)) return false
    if (auctionIds.has(itemId)) return false  // enchère eBay = jamais sur le site
    if (YOU_PICK_KEYWORDS.some(kw => title.includes(kw))) {
      variationIds.add(itemId) // track for disabling
      return false
    }
    if (stock <= 0) return false  // exclure stock 0 = sera désactivé
    return true
  })
  const activeIds = new Set(cleanRows.map(r => r['Item number'].trim()))

  // Stock par variante, reconnue par son NOM (pas par sa position dans le CSV, qui change d'un export à l'autre)
  const variantNames = {}   // item -> { nom en minuscules -> quantité }
  {
    for (const r of rows) {
      const vd = (r['Variation details'] || '').trim()
      if (!vd || vd.includes(';')) continue   // ligne récap ignorée
      const id = r['Item number'].trim()
      const name = (vd.includes('=') ? vd.split('=').slice(1).join('=') : vd).trim().toLowerCase()
      ;(variantNames[id] = variantNames[id] || {})[name] = parseInt(r['Available quantity']) || 0
    }
  }
  // Retrouve la quantité d'une variante d'après la fin de son titre: "... — <nom>"
  const variantQtyFor = (baseId, title) => {
    const names = variantNames[baseId]
    if (!names) return undefined
    const t = (title || '').toLowerCase()
    let best = null
    for (const n of Object.keys(names)) {
      if (t.endsWith(' — ' + n) && (best === null || n.length > best.length)) best = n
    }
    return best === null ? undefined : names[best]
  }
  const variantUpdates = []
  let noPhoto = 0   // produits en stock mais sans photo: jamais affichés sur le site

  console.log(`   ✓ Produits valides (sans variation): ${cleanRows.length}`)
  console.log(`   ✗ Variations exclues: ${variationIds.size}`)
  console.log(`   ✗ Enchères exclues: ${auctionIds.size}`)
  console.log()

  // 4. Get current Supabase products (ALL - paginated)
  console.log('📋 Lecture Supabase...')
  const existingMap = {}
  const dupExtras = []
  let from = 0
  const PAGE = 1000
  while (true) {
    const { data: page, error } = await supabase
      .from('products')
      .select('id, ebay_id, title, enabled, source, photos, admin_deleted, admin_price, admin_created, admin_oos, admin_fields, condition, category, stock')
      .eq('source', 'ebay')
      .range(from, from + PAGE - 1)
    if (error || !page || page.length === 0) break
    for (const p of page) {
      // 🔁 Doublons: plusieurs lignes avec le même ebay_id -> on garde la meilleure, les autres seront désactivées
      const cur = existingMap[p.ebay_id]
      if (!cur) { existingMap[p.ebay_id] = p; continue }
      const sc = x => (x.enabled ? 10 : 0) + (x.admin_created ? 5 : 0) + (x.admin_price != null ? 3 : 0) + Math.min((x.photos || []).length, 2)
      if (sc(p) > sc(cur)) { dupExtras.push(cur); existingMap[p.ebay_id] = p } else { dupExtras.push(p) }
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

  if (missingImages.length > 0 && DRY) console.log(`🖼  (essai) ${missingImages.length} produits sans image en cache: récupération ignorée`)
  if (missingImages.length > 0 && !DRY) {
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

  // Disable products no longer on eBay, that are variations, or have stock 0
  // 🔒 PROTECTION ADMIN : ne jamais toucher aux produits avec flags admin
  let skippedAdmin = 0
  const locks = (x, k) => Array.isArray(x.admin_fields) && x.admin_fields.includes(k)
  for (const [ebayId, prod] of Object.entries(existingMap)) {
    if (prod.admin_deleted || prod.admin_created) {
      skippedAdmin++
      continue // Jamais toucher aux produits admin
    }
    // 🔒 Visibilité ou stock choisis dans l'admin (ex. précommande) : le sync ne désactive ni ne change rien
    if (locks(prod, 'enabled') || locks(prod, 'stock')) {
      skippedAdmin++
      continue
    }
    // 🎛  Produits issus d'un listing à variations (ebay_id = "<item>_<n>", créés par import-variations.js)
    if (/^\d+_\d+$/.test(ebayId)) {
      const baseId = ebayId.split('_')[0]
      const q = variantQtyFor(baseId, prod.title)
      const hasPhoto = Array.isArray(prod.photos) ? prod.photos.length > 0 : !!prod.photos
      if (q === undefined || q <= 0 || auctionIds.has(baseId) || !hasPhoto) {
        if (!hasPhoto && q > 0) noPhoto++
        if (prod.enabled) toDisable.push(prod.id)          // variante épuisée, listing terminé ou SANS PHOTO
      } else if (!prod.admin_oos && (!prod.enabled || prod.stock !== q)) {
        variantUpdates.push({ id: prod.id, stock: q })     // variante encore en stock: on réactive / met à jour le stock
      }
      continue
    }
    if (!activeIds.has(ebayId) || variationIds.has(ebayId) || auctionIds.has(ebayId)) {
      if (prod.enabled) toDisable.push(prod.id)
    }
  }

  // Copies en trop (même ebay_id): toujours désactivées, sauf produits admin
  let dupDisabled = 0
  for (const x of dupExtras) {
    if (x.admin_deleted || x.admin_created || locks(x, 'enabled') || locks(x, 'stock')) continue
    if (x.enabled && !toDisable.includes(x.id)) { toDisable.push(x.id); dupDisabled++ }
  }
  if (dupExtras.length) console.log(`   🔁 Doublons (même ebay_id) trouvés: ${dupExtras.length}, copies actives désactivées: ${dupDisabled}`)

  // Process active products
  for (const row of cleanRows) {
    const itemId = row['Item number'].trim()
    const title = (row['Title'] || '').trim()
    const ebayCategory = (row['eBay category 1 name'] || '').trim()
    const prevRow = existingMap[itemId]
    const category = smartCategory(title, ebayCategory, prevRow && prevRow.category)
    const specs = CAT_SPECS[category] || { weight: 350, length: 30, width: 20, height: 10 }

    let price = parseFloat(row['Current price'] || row['Start price'] || 0)
    if ((row['Currency'] || 'CAD').toUpperCase() === 'USD') price = Math.round(price * 1.38 * 100) / 100

    const stock = parseInt(row['Available quantity'] ?? 0)
    const condition = (row['Condition'] || (prevRow && prevRow.condition) || 'New').trim()
    const imgs = cache[`api:${itemId}`] || cache[itemId] || []

    if (existingMap[itemId]) {
      const existing = existingMap[itemId]

      // 🔒 PROTECTION ADMIN : ignorer complètement les produits admin_deleted ou admin_created
      if (existing.admin_deleted || existing.admin_created) continue

      const photos = imgs.length > 0 ? imgs : (existing.photos || [])

      // 🔒 Si admin_price est défini, garder ce prix — ne jamais l'écraser avec le prix eBay
      const finalPrice = existing.admin_price != null ? existing.admin_price : price

      // 🔒 Si admin_oos=true, garder stock=0 — ne jamais remettre en stock depuis eBay
      const finalStock = existing.admin_oos ? 0 : stock
      // 📷 Sans photo = jamais affiché sur le site, même avec du stock
      if (photos.length === 0 && stock > 0) noPhoto++
      const finalEnabled = existing.admin_oos ? existing.enabled : (stock > 0 && photos.length > 0)

      const productData = {
        title, price: finalPrice, currency: 'CAD', stock: finalStock,
        condition, category, ebay_id: itemId,
        photos, enabled: finalEnabled,
        source: 'ebay', ...specs
      }
      // 🔒 Champs modifiés à la main dans l'admin : ne jamais les écraser avec eBay
      for (const k of (existing.admin_fields || [])) delete productData[k]
      if (locks(existing, 'stock') || locks(existing, 'enabled')) { delete productData.stock; delete productData.enabled }
      toUpdate.push({ id: existing.id, ...productData })
    } else {
      // New product from eBay
      const productData = {
        title, price, currency: 'CAD', stock,
        condition, category, ebay_id: itemId,
        photos: imgs, enabled: stock > 0 && imgs.length > 0,
        source: 'ebay', ...specs
      }
      toInsert.push(productData)
    }
  }

  // 8. Apply changes
  console.log(`   🔒 Protégés admin (ignorés): ${skippedAdmin}`)
  console.log(`   📷 Sans photo (cachés du site même avec du stock): ${noPhoto}`)
  console.log(`   🎛  Variantes à réactiver / mettre à jour: ${variantUpdates.length}`)
  console.log(`   🗑  À désactiver: ${toDisable.length}`)
  console.log(`   ✏️  À mettre à jour: ${toUpdate.length}`)
  console.log(`   ➕ Nouveaux: ${toInsert.length}`)
  console.log()

  // Garde-fou: trop de désactivations d'un coup = probablement un problème
  const enabledNow = Object.values(existingMap).filter(p => p.enabled).length
  if (!FORCE && enabledNow > 50 && toDisable.length > enabledNow * 0.4) {
    console.error(`❌ Garde-fou: ${toDisable.length} désactivations sur ${enabledNow} produits actifs (>40%). Rien modifié. Vérifie le résultat avec --dry-run, puis --force si c'est normal.`)
    process.exitCode = 1
    return
  }
  if (DRY) {
    const byId = Object.fromEntries(Object.values(existingMap).map(p => [p.id, p]))
    console.log('— À désactiver (15 premiers):')
    toDisable.slice(0, 15).forEach(id => console.log('   ✗', (byId[id] && byId[id].title || id).slice(0, 80)))
    console.log('— Nouveaux (15 premiers):')
    toInsert.slice(0, 15).forEach(p => console.log('   +', p.title.slice(0, 80), '|', p.category, '|', p.condition))
    // Comparaison avec le dernier CSV, si présent
    const csv = findEbayCsv()
    if (csv) {
      const csvIds = new Set(parseCSV(csv).map(r => (r['Item number'] || '').trim()).filter(Boolean))
      const apiIds = new Set(rows.map(r => r['Item number']))
      const onlyApi = [...apiIds].filter(i => !csvIds.has(i)).length
      const onlyCsv = [...csvIds].filter(i => !apiIds.has(i)).length
      console.log(`— Comparaison avec ${path.basename(csv)}: ${onlyApi} annonces seulement dans l'API (nouvelles depuis l'export), ${onlyCsv} seulement dans le CSV (terminées/vendues depuis)`)
    }
    console.log('\n🧪 Essai terminé: rien n\'a été écrit dans Supabase.')
    return
  }
  try { fs.writeFileSync(STATE_FILE, JSON.stringify({ listingCount, date: new Date().toISOString() })) } catch (e) {}

  // Disable old products
  if (toDisable.length > 0) {
    const BATCH = 100
    for (let i = 0; i < toDisable.length; i += BATCH) {
      await supabase.from('products').update({ enabled: false, stock: 0 }).in('id', toDisable.slice(i, i + BATCH))
    }
    console.log(`✓ ${toDisable.length} produits désactivés`)
  }

  // Variantes (listings à dropdown): réactiver + stock
  if (variantUpdates.length > 0) {
    let vdone = 0
    for (let i = 0; i < variantUpdates.length; i += 20) {
      await Promise.all(variantUpdates.slice(i, i + 20).map(v =>
        supabase.from('products').update({ enabled: true, stock: v.stock }).eq('id', v.id).then(({ error }) => { if (!error) vdone++ })
      ))
    }
    console.log(`✓ ${vdone} variantes réactivées / stock mis à jour`)
  }

  // Update existing products — par batch via upsert
  let updated = 0
  const BATCH_UPDATE = 50
  for (let i = 0; i < toUpdate.length; i += BATCH_UPDATE) {
    const batch = toUpdate.slice(i, i + BATCH_UPDATE)
    const { error } = await supabase.from('products').upsert(batch, { onConflict: 'id' })
    if (!error) updated += batch.length
    process.stdout.write(`\r   Mise à jour: ${Math.min(i + BATCH_UPDATE, toUpdate.length)}/${toUpdate.length}`)
  }
  console.log(`\n✓ ${updated} produits mis à jour`)

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
  process.exitCode = 1
})
