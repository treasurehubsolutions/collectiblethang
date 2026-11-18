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

if (!SERVICE_KEY) {
  console.error('Cles manquantes: ajoute SUPABASE_SECRET_KEY dans .env.local')
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


// Met la condition (New / Used / Very Good...) de eBay sur tous les produits du site.
// Usage: node maj-condition.js
async function main() {
  const csvFiles = fs.readdirSync('.').filter(f => f.endsWith('.csv') && (f.toLowerCase().includes('ebay') || f.toLowerCase().includes('active') || f.toLowerCase().includes('listing')))
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)
  if (!csvFiles.length) { console.log('Aucun CSV eBay trouvé'); process.exit(1) }
  console.log('CSV:', csvFiles[0])
  const rows = parseCsv(fs.readFileSync(csvFiles[0], 'utf8'))
  const condOf = {}
  for (const r of rows) {
    const id = (r['Item number'] || '').trim(), c = (r['Condition'] || '').trim()
    if (id && c && !condOf[id]) condOf[id] = c
  }
  let all = [], from = 0
  while (true) {
    const { data, error } = await supabase.from('products').select('id, ebay_id, condition, admin_created').range(from, from + 999)
    if (error) { console.log('Erreur:', error.message); process.exit(1) }
    all = all.concat(data); if (data.length < 1000) break; from += 1000
  }
  const groups = {}
  for (const p of all) {
    if (p.admin_created || !p.ebay_id) continue
    const c = condOf[String(p.ebay_id).split('_')[0]]
    if (!c || p.condition === c) continue
    ;(groups[c] = groups[c] || []).push(p.id)
  }
  let n = 0
  for (const [c, ids] of Object.entries(groups)) {
    for (let i = 0; i < ids.length; i += 100) {
      const { error } = await supabase.from('products').update({ condition: c }).in('id', ids.slice(i, i + 100))
      if (error) console.log('Erreur', c, error.message); else n += ids.slice(i, i + 100).length
    }
    console.log(`  ${c}: ${ids.length} produits`)
  }
  console.log(`\nTerminé: ${n} produits mis à jour sur ${all.length}.`)
}
main().catch(e => { console.error(e.message); process.exit(1) })
