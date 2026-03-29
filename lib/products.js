import { supabase } from './supabase'

export async function getProducts({ category='', search='', sort='', page=1, perPage=36 } = {}) {
  try {
    let q = supabase.from('products').select('*',{count:'exact'}).eq('enabled',true).gt('stock',0)
    if (category && category.trim()) q = q.eq('category', category.trim())
    if (search && search.trim()) q = q.ilike('title', `%${search.trim()}%`)
    if (sort==='price_asc') q = q.order('price',{ascending:true})
    else if (sort==='price_desc') q = q.order('price',{ascending:false})
    else if (sort==='popular') q = q.order('watchers',{ascending:false})
    else if (sort==='sold') q = q.order('sold',{ascending:false})
    else if (sort==='new') q = q.order('created_at',{ascending:false})
    else q = q.order('watchers',{ascending:false})
    const from = (page-1)*perPage
    q = q.range(from, from+perPage-1)
    const { data, error, count } = await q
    if (error) { console.error('getProducts error:', error.message); return {items:[],total:0,totalPages:1,page} }
    return { items: data||[], total: count||0, totalPages: Math.ceil((count||0)/perPage)||1, page }
  } catch(e) {
    console.error('getProducts catch:', e.message)
    return {items:[],total:0,totalPages:1,page}
  }
}

export async function getProduct(id) {
  try {
    const { data, error } = await supabase.from('products').select('*').eq('id',id).single()
    if (error) return null
    return data
  } catch(e) { return null }
}

export async function getCategories() {
  try {
    const { data, error } = await supabase.from('products').select('category').eq('enabled',true).gt('stock',0)
    if (error || !data) return []
    const counts = {}
    data.forEach(p => { counts[p.category] = (counts[p.category]||0)+1 })
    return Object.entries(counts).sort((a,b)=>b[1]-a[1])
  } catch(e) { return [] }
}

export const CAT_META = {
  'Hot Wheels':{emoji:'🚗',color:'#e8272a'},
  'Hot Wheels Premium':{emoji:'🏎️',color:'#ff6b00'},
  'Star Wars':{emoji:'⚔️',color:'#ffe81f'},
  'Marvel':{emoji:'⚡',color:'#ec1d24'},
  'DC Comics':{emoji:'🦇',color:'#0078f0'},
  'Transformers':{emoji:'🤖',color:'#a020f0'},
  'Jurassic Park / World':{emoji:'🦕',color:'#4caf50'},
  'WWE & Wrestling':{emoji:'🏆',color:'#ffd700'},
  'G.I. Joe':{emoji:'🪖',color:'#5d8a3c'},
  'TMNT':{emoji:'🐢',color:'#22c55e'},
  'Power Rangers':{emoji:'⚡',color:'#ef4444'},
  'Masters of the Universe':{emoji:'⚔️',color:'#f59e0b'},
  'Sonic the Hedgehog':{emoji:'💨',color:'#1d6fe8'},
  'Pokémon':{emoji:'⭐',color:'#ffcc00'},
  'Hallmark Ornaments':{emoji:'🎄',color:'#dc2626'},
  'Funko Pop':{emoji:'🎭',color:'#8b5cf6'},
  'McFarlane Figures':{emoji:'💀',color:'#6b7280'},
  'Disney & Pixar':{emoji:'✨',color:'#3b82f6'},
  'LEGO':{emoji:'🧱',color:'#f59e0b'},
  'VHS Tapes':{emoji:'📼',color:'#64748b'},
  'Video Games':{emoji:'🎮',color:'#10b981'},
  'Video Game Figures':{emoji:'🕹️',color:'#06b6d4'},
  'Diecast & Scale Models':{emoji:'🚘',color:'#f97316'},
  'Action Figures':{emoji:'🦸',color:'#7c3aed'},
  'Little People Collector':{emoji:'👨‍👩‍👧',color:'#ec4899'},
  'Dolls & Barbie':{emoji:'🪆',color:'#f472b6'},
  'Hockey':{emoji:'🏒',color:'#0ea5e9'},
  'Playmobil':{emoji:'🎠',color:'#84cc16'},
  'Fortnite':{emoji:'🎯',color:'#a855f7'},
  'UFC & MMA':{emoji:'🥊',color:'#ef4444'},
  'Électroménager':{emoji:'🍳',color:'#6b7280'},
  'Bar & Brasserie':{emoji:'🍺',color:'#92400e'},
  'Électronique & Gadgets':{emoji:'📱',color:'#06b6d4'},
  'Autres':{emoji:'🛍️',color:'#6b7280'},
}

export function getCatMeta(cat) {
  return CAT_META[cat] || {emoji:'🛍️',color:'#6b7280'}
}
