import { supabase } from './supabase'

export async function getProducts({ category='', search='', sort='', page=1, perPage=36 } = {}) {
  let query = supabase
    .from('products')
    .select('*', { count: 'exact' })
    .eq('enabled', true)
    .gt('stock', 0)

  if (category) query = query.eq('category', category)
  if (search) query = query.ilike('title', `%${search}%`)

  if (sort === 'price_asc') query = query.order('price', { ascending: true })
  else if (sort === 'price_desc') query = query.order('price', { ascending: false })
  else if (sort === 'popular') query = query.order('watchers', { ascending: false })
  else if (sort === 'sold') query = query.order('sold', { ascending: false })
  else if (sort === 'new') query = query.order('created_at', { ascending: false })
  else query = query.order('created_at', { ascending: false })

  const from = (page - 1) * perPage
  query = query.range(from, from + perPage - 1)

  const { data, error, count } = await query
  if (error) { console.error(error); return { items: [], total: 0, totalPages: 1, page } }

  return {
    items: data || [],
    total: count || 0,
    totalPages: Math.ceil((count || 0) / perPage) || 1,
    page
  }
}

export async function getProduct(id) {
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()
  return data
}

export async function getCategories() {
  const { data } = await supabase
    .from('products')
    .select('category')
    .eq('enabled', true)
    .gt('stock', 0)

  if (!data) return []
  const counts = {}
  data.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1 })
  return Object.entries(counts).sort((a, b) => b[1] - a[1])
}

export async function getFeatured() {
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('enabled', true)
    .gt('stock', 0)
    .order('watchers', { ascending: false })
    .limit(24)
  return data || []
}

export async function getNewArrivals() {
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('enabled', true)
    .gt('stock', 0)
    .order('created_at', { ascending: false })
    .limit(12)
  return data || []
}

export const CAT_META = {
  'Hot Wheels':              { emoji:'🚗', color:'#e8272a' },
  'Hot Wheels Premium':      { emoji:'🏎️', color:'#ff6b00' },
  'Star Wars':               { emoji:'⚔️', color:'#ffe81f' },
  'Marvel':                  { emoji:'⚡', color:'#ec1d24' },
  'DC Comics':               { emoji:'🦇', color:'#0078f0' },
  'Transformers':            { emoji:'🤖', color:'#a020f0' },
  'Jurassic Park / World':   { emoji:'🦕', color:'#4caf50' },
  'WWE & Wrestling':         { emoji:'🏆', color:'#ffd700' },
  'G.I. Joe':                { emoji:'🪖', color:'#5d8a3c' },
  'TMNT':                    { emoji:'🐢', color:'#22c55e' },
  'Power Rangers':           { emoji:'⚡', color:'#ef4444' },
  'Masters of the Universe': { emoji:'⚔️', color:'#f59e0b' },
  'Sonic the Hedgehog':      { emoji:'💨', color:'#1d6fe8' },
  'Pokémon':                 { emoji:'⭐', color:'#ffcc00' },
  'Hallmark Ornaments':      { emoji:'🎄', color:'#dc2626' },
  'Funko Pop':               { emoji:'🎭', color:'#8b5cf6' },
  'McFarlane Figures':       { emoji:'💀', color:'#6b7280' },
  'Disney & Pixar':          { emoji:'✨', color:'#3b82f6' },
  'LEGO':                    { emoji:'🧱', color:'#f59e0b' },
  'VHS Tapes':               { emoji:'📼', color:'#64748b' },
  'Video Games':             { emoji:'🎮', color:'#10b981' },
  'Video Game Figures':      { emoji:'🕹️', color:'#06b6d4' },
  'Diecast & Scale Models':  { emoji:'🚘', color:'#f97316' },
  'Action Figures':          { emoji:'🦸', color:'#7c3aed' },
  'Little People Collector': { emoji:'👨‍👩‍👧', color:'#ec4899' },
  'Dolls & Barbie':          { emoji:'🪆', color:'#f472b6' },
  'Hockey':                  { emoji:'🏒', color:'#0ea5e9' },
  'Playmobil':               { emoji:'🎠', color:'#84cc16' },
  'Fortnite':                { emoji:'🎯', color:'#a855f7' },
  'Électroménager':          { emoji:'🍳', color:'#6b7280' },
  'Bar & Brasserie':         { emoji:'🍺', color:'#92400e' },
  'Autres':                  { emoji:'🛍️', color:'#6b7280' },
}

export function getCatMeta(cat) {
  return CAT_META[cat] || { emoji:'🛍️', color:'#6b7280' }
}

export function calculateShipping(items, country, province) {
  const totalWeight = items.reduce((a, item) => a + (item.weight||250) * item.qty, 0)
  const totalValue = items.reduce((a, item) => a + item.price * item.qty, 0)
  if (totalValue >= 150) return { cost: 0, label: '🎉 Livraison gratuite (commande +150$)' }
  if (country === 'CA') {
    const far = ['BC','AB','SK','MB','YT','NT','NU','NL'].includes(province)
    if (totalWeight <= 500) return { cost: far?12.99:9.99, label: 'Envoi standard Canada (5-10 jours)' }
    if (totalWeight <= 1000) return { cost: far?16.99:13.99, label: 'Envoi standard Canada (5-10 jours)' }
    if (totalWeight <= 2000) return { cost: far?22.99:18.99, label: 'Envoi standard Canada (5-10 jours)' }
    return { cost: far?34.99:28.99, label: 'Envoi standard Canada (5-10 jours)' }
  } else {
    if (totalWeight <= 500) return { cost: 14.99, label: 'USPS Standard USA (7-14 jours)' }
    if (totalWeight <= 1000) return { cost: 19.99, label: 'USPS Standard USA (7-14 jours)' }
    if (totalWeight <= 2000) return { cost: 29.99, label: 'USPS Standard USA (7-14 jours)' }
    return { cost: 44.99, label: 'USPS Standard USA (7-14 jours)' }
  }
}
