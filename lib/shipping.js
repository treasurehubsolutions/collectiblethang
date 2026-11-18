// Livraison Canada du site = table eBay "rate a 14 QC rural 25" (id 5304574011, lue dans Seller Hub le 2026-11-18)
// + 3 $ (le site n'a pas les rabais de transporteur d'eBay). Meme table pour tous les formats
// (c'est aussi la table des politiques eBay G1/G2/G4/G5). Zone = [urbain, rural] au prix eBay.
// Rural = 2e caractere du code postal = 0.

export const FREE_SHIPPING_MIN_CAD = 150 // = 150 $ CA (environ 110 $ US) : annonce sur /livraison, /faq, /a-propos
export const SITE_MARKUP_CAD = 3
export const FALLBACK_RATE_CAD = 24.99 // aucun tarif de table applicable

export const EBAY_TABLE = {
  QC: [14.00, 18.00], ON: [14.00, 16.99],
  AB: [17.00, 18.99], MB: [17.00, 18.99], SK: [17.00, 20.00],
  BC: [18.00, 22.00],
  NB: [16.50, 16.50], NS: [17.99, 17.99], PE: [17.99, 17.99], NL: [17.99, 17.99],
  YT: [25.00, 25.00], NT: [25.00, 25.00], NU: [25.00, 25.00],
}

export function isRuralPostal(postal) {
  const p = String(postal || '').replace(/\s/g, '').toUpperCase()
  return p.length >= 2 && p[1] === '0'
}

// Prix du site (prix eBay + 3 $) ou null si la province n'est pas dans la table
export function canadaRate(province, postal) {
  const z = EBAY_TABLE[String(province || '').toUpperCase()]
  if (!z) return null
  const ebay = z[isRuralPostal(postal) ? 1 : 0]
  return Math.round((ebay + SITE_MARKUP_CAD) * 100) / 100
}

// ---------- Hot Wheels (mainline, Silver Series, Premium) ----------
// Prix du site pour 1 voiture = prix eBay + 3 $ (lu dans Seller Hub le 2026-11-18) :
// mainline = table "Hot Wheels Par Province" ; premium = table "Hot Wheels (RURAL A 13.95 partout) URBAN a 9.95".
// [urbain, rural]
export const HW_MAINLINE = {
  QC: [11.89, 12.29], ON: [11.89, 12.99],
  AB: [12.75, 12.99], MB: [12.75, 12.99], SK: [12.75, 15.49],
  BC: [12.79, 16.99],
  NB: [12.75, 12.75], NS: [12.85, 13.99], PE: [13.75, 13.75], NL: [13.79, 13.79],
  YT: [15.99, 15.99], NT: [15.99, 15.99], NU: [15.99, 15.99],
}
export const HW_PREMIUM = {
  QC: [11.99, 12.79], ON: [11.99, 12.99],
  AB: [12.99, 14.99], MB: [12.99, 14.99], SK: [12.99, 14.99],
  BC: [12.99, 17.49],
  NB: [12.99, 12.99], NS: [12.99, 13.49], PE: [13.49, 13.49], NL: [12.99, 13.49],
  YT: [16.99, 16.99], NT: [16.99, 16.99], NU: [16.99, 16.99],
}
// Supplement par voiture en plus selon le type (ordre d'Alex, 2026-11-18)
export const EXTRA_MAINLINE_CAD = 1.99   // Hot Wheels mainline / Silver Series / Matchbox normale
export const EXTRA_PREMIUM_CAD = 2.99    // Premium, Matchbox Collectors, M2, Johnny Lightning (ordre d'Alex : 2.75)
export const EXTRA_CARS_CAD = 2.99       // Disney Pixar Cars 1:55 (ordre d'Alex : meme palier que Premium, 2.75)
export const HW_US_START_USD_LABEL = 16.99  // USA : depart a 16.99, +1 par voiture en plus
export const US_GENERAL_MAX = 29.99         // plafond USA (ancien tarif non-petit)

// M2 Machines, Johnny Lightning, Disney Pixar Cars 1:55 = tarif PREMIUM, VOITURE SEULE seulement
// (ordre d'Alex, 2026-11-18) : exclus si pack / bundle / anniversary (et lot, set, caravane/transporteur Cars) ou > 499 g.
export function isOtherDiecastSingle(item) {
  const title = String(item.title || '')
  const w = Number(item.weight)
  const brand = /\bm2\b|m2\s*machines|johnny\s*lightning|(disney|pixar)[^,]*\bcars\b|\bcars\b[^,]*(disney|pixar)/i.test(title)
  const excluded = /\b(pack|packs|bundle|anniversary|lot|set|playset|carry\s*case|hauler|caravan|trailer)\b/i.test(title)
  return brand && !excluded && !(Number.isFinite(w) && w > 499)
}

export function isHotWheels(item) {
  const title = String(item.title || '')
  const cat = String(item.category || '')
  const w = Number(item.weight)
  // Matchbox = meme tarif que Hot Wheels (ordre d'Alex, 2026-11-18)
  const isHW = cat === 'Hot Wheels' || cat === 'Hot Wheels Premium' || cat === 'Matchbox' || /hot\s*wheels|silver\s*series|matchbox/i.test(title)
  if (isOtherDiecastSingle(item)) return true
  return isHW && !/\blot\b/i.test(title) && !(Number.isFinite(w) && w > 499)
}
export function isPremium(item) {
  if (isOtherDiecastSingle(item)) return true
  const t = String(item.title || '')
  // Matchbox + "collector" dans le titre = tarif Premium
  if (/matchbox/i.test(t + ' ' + String(item.category || '')) && /collector/i.test(t)) return true
  return String(item.category || '') === 'Hot Wheels Premium' ||
    /premium|car culture|boulevard|pop culture|team transport|real riders/i.test(String(item.title || ''))
}


export function isDisneyCars(item) {
  return /(disney|pixar)[^,]*\bcars\b|\bcars\b[^,]*(disney|pixar)/i.test(String(item.title || ''))
}
export function carStepCad(item) {
  if (isDisneyCars(item)) return EXTRA_CARS_CAD
  return isPremium(item) ? EXTRA_PREMIUM_CAD : EXTRA_MAINLINE_CAD
}
// Somme des supplements : chaque voiture ajoute le sien ; si skipLargest, la plus chere est couverte par le prix de base
export function carsExtra(cars, skipLargest) {
  const steps = []
  for (const c of cars) for (let k = 0; k < (Number(c.qty) || 1); k++) steps.push(carStepCad(c))
  steps.sort((a, b) => b - a)
  if (skipLargest) steps.shift()
  return steps.reduce((a, b) => a + b, 0)
}

// Prix de base d'1 voiture pour la province/zone (premium si au moins une premium au panier)
export function hwBaseRate(province, postal, hasPremium, hasMainline = !hasPremium) {
  const prov = String(province || '').toUpperCase()
  const idx = isRuralPostal(postal) ? 1 : 0
  const m = HW_MAINLINE[prov], p = HW_PREMIUM[prov]
  if (!m || !p) return null
  if (hasPremium && hasMainline) return Math.max(m[idx], p[idx])
  return hasPremium ? p[idx] : m[idx]
}

// ---------- VHS ----------
// Prix du site pour 1 cassette = table eBay "VHS par province 450 g" (id 5298573011) + 3 $.
const VHS_BASE = {
  QC: 11.99, ON: 11.99,
  NB: 14.99, PE: 14.99, NS: 14.99, NL: 14.99,
  AB: 16.99, MB: 16.99, SK: 16.99, BC: 16.99,
  YT: 18.99, NT: 18.99, NU: 18.99,
}
// Ajout par cassette en plus (ordre d'Alex 2026-11-18) : 2e a 4e = +1.50 ; 5e a 8e = +2.00 ; 9e a 12e = +2.75 ; 13e et plus = +3.25
export function vhsStepCad(k) { return k <= 4 ? 1.5 : k <= 8 ? 2.0 : k <= 12 ? 2.75 : 3.25 }
export function isVhs(item) {
  const title = String(item.title || '')
  const w = Number(item.weight)
  return (String(item.category || '') === 'VHS Tapes' || /\bvhs\b/i.test(title)) &&
    !/\blot\b/i.test(title) && !(Number.isFinite(w) && w > 500)
}
// Supplement VHS pour n cassettes a partir de la 2e (VHS seulement) ou pour toutes (panier mixte)
function vhsExtra(n, fromSecond) {
  let t = 0
  for (let k = fromSecond ? 2 : 1; k <= n; k++) t += vhsStepCad(k)
  return t
}

// ---------- Figurines (GI Joe, LEGO, Transformers, WWE, TMNT, McFarlane ; PAS Jurassic Park) ----------
// Table d'Alex (2026-11-18), bati sur Canada Post (Regular Parcel, depart G8V 2A6, rabais entreprise ~12,5 %).
// Colis mesures : 1 figurine 0,3 kg 20x10x8 cm ; 5 figurines 1,5 kg 25x21x20 cm. Les valeurs de 2 a 4 sont interpolees.
// Chaque tableau = prix pour 1, 2, 3, 4, 5 figurines et plus (5+ plafonne). Panier 100 % figurines seulement.
const FIG_QC_ON_URBAN = [21.99, 25.99, 32.99, 39.99, 59.99]
const FIG_QC_ON_RURAL = [24.99, 30.99, 38.99, 46.99, 69.99]
const FIG_WEST_URBAN  = [25.99, 31.99, 39.99, 47.99, 68.99]   // BC, AB, MB, SK urbain
const FIG_WEST_RURAL  = [28.99, 35.99, 43.99, 52.99, 74.99]   // BC, AB, MB, SK rural (Prairies rural = BC rural)
const FIG_NB          = [23.99, 29.99, 37.99, 45.99, 67.99]
const FIG_ATL_URBAN   = [25.99, 31.99, 39.99, 48.99, 71.99]   // NS, PE, NL urbain
const FIG_ATL_RURAL   = [27.99, 34.99, 43.99, 52.99, 77.99]   // NS, PE, NL rural
const FIG_NORTH       = [31.99, 42.99, 54.99, 66.99, 99.99]   // YT, NT, NU
export const FIGURINE_TABLE = {
  QC: [FIG_QC_ON_URBAN, FIG_QC_ON_RURAL], ON: [FIG_QC_ON_URBAN, FIG_QC_ON_RURAL],
  BC: [FIG_WEST_URBAN, FIG_WEST_RURAL], AB: [FIG_WEST_URBAN, FIG_WEST_RURAL],
  MB: [FIG_WEST_URBAN, FIG_WEST_RURAL], SK: [FIG_WEST_URBAN, FIG_WEST_RURAL],
  NB: [FIG_NB, FIG_NB],
  NS: [FIG_ATL_URBAN, FIG_ATL_RURAL], PE: [FIG_ATL_URBAN, FIG_ATL_RURAL], NL: [FIG_ATL_URBAN, FIG_ATL_RURAL],
  YT: [FIG_NORTH, FIG_NORTH], NT: [FIG_NORTH, FIG_NORTH], NU: [FIG_NORTH, FIG_NORTH],
}
const FIGURINE_CATEGORIES = ['GI Joe', 'Transformers', 'WWE & Wrestling', 'TMNT', 'McFarlane Figures', 'LEGO']
export function isFigurine(item) {
  const w = Number(item.weight)
  if (Number.isFinite(w) && w > 600) return false   // trop lourd pour un colis "figurine" (ex. gros set LEGO) -> tarif general
  if (/\blot\b|bundle/i.test(String(item.title || ''))) return false
  if (/jurassic/i.test(String(item.title || '') + ' ' + String(item.category || ''))) return false
  return FIGURINE_CATEGORIES.includes(String(item.category || ''))
}
export function figurineRate(items, province, postal) {
  const z = FIGURINE_TABLE[String(province || '').toUpperCase()]
  if (!z) return null
  const n = items.reduce((a, i) => a + (Number(i.qty) || 1), 0)
  if (n < 1) return null
  return z[isRuralPostal(postal) ? 1 : 0][Math.min(n, 5) - 1]
}

// Panier Canada. Retourne le montant ou null (-> repli 24.99).
// - Figurines seulement (voir FIGURINE_TABLE) : table figurines, plafonnee a 5 et plus.
// - Hot Wheels seulement : base + 1 $ par voiture en plus, SANS plafond (ordre d'Alex : 30 voitures = lourd).
// - VHS seulement : base VHS de la province + paliers par cassette en plus.
// - Autres articles seulement : tarif general (table "rate a 14" + 3 $).
// - Mixte : tarif general + 1 $ par voiture Hot Wheels + paliers VHS.
export function canadaCartRate(items, province, postal) {
  if (items.length > 0 && items.every(i => !isHotWheels(i) && isFigurine(i))) {
    const f = figurineRate(items, province, postal)
    if (f != null) return f
  }
  const hw =items.filter(isHotWheels)
  const vhs = items.filter(i => !isHotWheels(i) && isVhs(i))
  const others = items.filter(i => !isHotWheels(i) && !isVhs(i))
  const qty = list => list.reduce((a, i) => a + (Number(i.qty) || 1), 0)
  const nHW = qty(hw), nVHS = qty(vhs)
  const general = canadaRate(province, postal)
  const round = x => Math.round(x * 100) / 100
  if (others.length === 0 && nVHS === 0) {
    const base = hwBaseRate(province, postal, hw.some(isPremium), hw.some(i => !isPremium(i)))
    if (base == null) return null
    return round(base + carsExtra(hw, true))
  }
  if (others.length === 0 && nHW === 0) {
    const base = VHS_BASE[String(province || '').toUpperCase()]
    if (base == null) return null
    return round(base + vhsExtra(nVHS, true))
  }
  if (general == null) return null
  return round(general + carsExtra(hw, false) + vhsExtra(nVHS, false))
}

// Panier USA : Hot Wheels seulement = 16.99 + 1 $ par voiture en plus (plafond 29.99) ; sinon ancienne logique
export function usCartRate(items) {
  const hw = items.filter(isHotWheels)
  if (hw.length === items.length) {
    const n = hw.reduce((a, i) => a + (Number(i.qty) || 1), 0)
    return Math.round((HW_US_START_USD_LABEL + carsExtra(hw, true)) * 100) / 100 // pas de plafond
  }
  const small = items.every(i => /matchbox/i.test(String(i.title || '')) || isHotWheels(i))
  return Math.min((small ? 15.99 : 29.99) + carsExtra(hw, false), US_GENERAL_MAX)
}

// 20 cassettes VHS ou plus (ordre d'Alex, 2026-11-18) : pas de tarif automatique, "contactez-nous"
export const VHS_CONTACT_MIN = 20
export function needsContact(items) {
  return items.filter(isVhs).reduce((a, i) => a + (Number(i.qty) || 1), 0) >= VHS_CONTACT_MIN
}
