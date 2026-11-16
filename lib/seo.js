// Helpers partages (flux Google Merchant + fiche produit). Aucune donnee inventee :
// la marque n'est deduite que du titre ou de la categorie quand elle est evidente.

const PROMO = /\b(free\s+shipping|fast\s+shipping|ships?\s+(now|fast|today)|in\s+hand|on\s+hand|in\s+stock|in\s+stock\s+now|l@@k)\b[!.]*/gi

export function cleanTitle(t, max = 150) {
  let s = String(t || '').replace(PROMO, ' ').replace(/\s+/g, ' ').trim()
  s = s.replace(/[\s,\-–|:!]+$/, '').replace(/^[\s,\-–|:!]+/, '')
  if (s.length > max) {
    const cut = s.slice(0, max)
    const i = cut.lastIndexOf(' ')
    s = (i > 60 ? cut.slice(0, i) : cut).replace(/[\s,\-–|:]+$/, '')
  }
  return s
}

const BRANDS = [
  [/hot\s*wheels/i, 'Hot Wheels'], [/matchbox/i, 'Matchbox'], [/mcfarlane/i, 'McFarlane Toys'],
  [/funko/i, 'Funko'], [/\blego\b/i, 'LEGO'], [/hallmark/i, 'Hallmark'], [/\bneca\b/i, 'NECA'],
  [/jakks/i, 'Jakks Pacific'], [/hasbro/i, 'Hasbro'], [/\bmattel\b/i, 'Mattel'], [/schleich/i, 'Schleich'],
  [/bburago|burago/i, 'Bburago'], [/bandai/i, 'Bandai'], [/mezco/i, 'Mezco'], [/aquarius/i, 'Aquarius'],
  [/pok[eé]mon/i, 'Pokémon'], [/fisher[\s-]*price/i, 'Fisher-Price'], [/kenner/i, 'Kenner'],
]
const CAT_BRAND = {
  'Hot Wheels': 'Hot Wheels', 'Hot Wheels Premium': 'Hot Wheels', 'Matchbox': 'Matchbox', 'LEGO': 'LEGO',
  'Funko Pop': 'Funko', 'McFarlane Figures': 'McFarlane Toys', 'Hallmark Ornaments': 'Hallmark', 'Pokémon': 'Pokémon',
}

export function guessBrand(title, category) {
  const t = String(title || '')
  for (const [re, name] of BRANDS) if (re.test(t)) return name
  return CAT_BRAND[category] || ''
}

export function feedCondition(p) {
  const c = String(p.condition || '')
  const t = String(p.title || '')
  if (/used|pre-owned|preowned|loose|good|fair|vintage|open\s*box|opened|no\s*box/i.test(c)) return 'used'
  if (/new|sealed|mint|nib|nrfb|nrfp|brand/i.test(c)) return 'new'
  if (/\b(used|pre-owned|loose|vintage|lot\s+of|opened)\b/i.test(t)) return 'used'
  return 'new'
}

export function fallbackDescription(p) {
  const cond = feedCondition(p) === 'used' ? 'Used / pre-owned' : 'New'
  const brand = guessBrand(p.title, p.category)
  return `${cleanTitle(p.title, 200)}. ${brand ? `Brand: ${brand}. ` : ''}Condition: ${p.condition || cond}. Category: ${p.category || 'Toys & Collectibles'}. Ships from Quebec, Canada to Canada and the USA. 30-day return policy. Sold by The Shelf Cartel.`
}
