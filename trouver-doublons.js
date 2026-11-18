#!/usr/bin/env node
/**
 * THE SHELF CARTEL — Doublons sur le site
 *
 *   node trouver-doublons.js          -> RAPPORT seulement (ne modifie rien)
 *   node trouver-doublons.js --fix    -> désactive les copies en trop (enabled=false, stock=0)
 *                                        pour les produits qui ont le MÊME ebay_id.
 *
 * Rien n'est supprimé: on désactive seulement, c'est réversible.
 * Les produits ayant le même titre mais un ebay_id différent sont des annonces eBay
 * distinctes: ils sont listés dans le rapport, mais jamais touchés.
 */
const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

try {
  fs.readFileSync(path.join(__dirname, '.env.local'), 'utf8').split(/\r?\n/).forEach(l => {
    const m = l.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*?)\s*$/)
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '')
  })
} catch (e) {}

const SUPABASE_URL = 'https://eptnfpvwfxloimmbzxcl.supabase.co'
const SERVICE_KEY = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_KEY
if (!SERVICE_KEY) { console.error('Clé Supabase manquante dans .env.local'); process.exit(1) }
const supabase = createClient(SUPABASE_URL, SERVICE_KEY)
const FIX = process.argv.includes('--fix')

const norm = t => (t || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

async function loadAll() {
  const all = []
  let from = 0
  const PAGE = 1000
  while (true) {
    const { data, error } = await supabase.from('products').select('*').eq('enabled', true).range(from, from + PAGE - 1)
    if (error) { console.error('Erreur Supabase:', error.message); process.exit(1) }
    if (!data || !data.length) break
    all.push(...data)
    if (data.length < PAGE) break
    from += PAGE
  }
  return all
}

// Quelle copie garder: protégée admin > plus de photos > id le plus petit
function score(p) {
  return (p.admin_created ? 1000 : 0) + (p.admin_price != null ? 500 : 0) + ((p.photos || []).length) * 2 - (p.id ? 0 : 0)
}

async function main() {
  const prods = await loadAll()
  console.log(`📦 ${prods.length} produits actifs sur le site\n`)

  // 1) Même ebay_id
  const byEbay = {}
  for (const p of prods) {
    if (!p.ebay_id) continue
    ;(byEbay[p.ebay_id] = byEbay[p.ebay_id] || []).push(p)
  }
  const sameId = Object.entries(byEbay).filter(([, v]) => v.length > 1)
  console.log(`🔁 Même ebay_id (vrais doublons): ${sameId.length} annonces, ${sameId.reduce((a, [, v]) => a + v.length - 1, 0)} copies en trop`)
  const toDisable = []
  for (const [ebayId, list] of sameId) {
    list.sort((a, b) => score(b) - score(a) || String(a.id).localeCompare(String(b.id)))
    const keep = list[0]
    console.log(`  • ${ebayId}  ${(keep.title || '').slice(0, 60)}  (garde id ${keep.id}, source ${keep.source})`)
    for (const extra of list.slice(1)) {
      console.log(`      ✗ copie id ${extra.id} (source ${extra.source})`)
      if (!extra.admin_created) toDisable.push(extra.id)
    }
  }

  // 2) Même titre, ebay_id différent (annonces eBay séparées ou ancienne source)
  const byTitle = {}
  for (const p of prods) {
    const k = norm(p.title)
    if (!k) continue
    ;(byTitle[k] = byTitle[k] || []).push(p)
  }
  const sameTitle = Object.values(byTitle).filter(v => new Set(v.map(p => p.ebay_id)).size > 1)
  console.log(`\n👯 Même titre mais ebay_id différent: ${sameTitle.length} titres (à décider par toi, jamais modifiés)`)
  for (const list of sameTitle) {
    console.log(`  • ${(list[0].title || '').slice(0, 70)}`)
    for (const p of list) console.log(`      ebay_id ${p.ebay_id || '(aucun)'} | ${p.price} $ | source ${p.source} | id ${p.id}`)
  }

  // 3) Produits actifs sans ebay_id (ancienne source: copies probables)
  const noId = prods.filter(p => !p.ebay_id)
  console.log(`\n❓ Produits actifs sans ebay_id: ${noId.length}`)
  noId.slice(0, 15).forEach(p => console.log(`  • ${(p.title || '').slice(0, 60)} | source ${p.source} | id ${p.id}`))

  console.log()
  if (!FIX) {
    console.log(`ℹ️  Rapport seulement. Pour désactiver les ${toDisable.length} copies en trop (même ebay_id): node trouver-doublons.js --fix`)
    return
  }
  const B = 100
  for (let i = 0; i < toDisable.length; i += B) {
    await supabase.from('products').update({ enabled: false, stock: 0 }).in('id', toDisable.slice(i, i + B))
  }
  console.log(`✅ ${toDisable.length} copies désactivées (réversible: enabled=true dans Supabase).`)
}

main().catch(e => { console.error('Erreur:', e.message); process.exit(1) })
