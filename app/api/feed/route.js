export const dynamic = 'force-dynamic'
import { createClient } from '@supabase/supabase-js'

const SITE_URL = 'https://collectiblethang.vercel.app'
const DEFAULT_CONDITION = 'new'

// Cache 1 heure
let _cache = null
let _cacheTime = 0

function escapeXml(str) {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const now = Date.now()
  if (_cache && now - _cacheTime < 3600 * 1000) {
    return new Response(_cache, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  let all = []
  let from = 0
  while (true) {
    const { data, error } = await supabase
      .from('products')
      .select('id, title, price, category, photos, description, weight')
      .eq('enabled', true)
      .gt('stock', 0)
      .range(from, from + 999)
    if (error || !data || data.length === 0) break
    all = [...all, ...data]
    if (data.length < 1000) break
    from += 1000
  }

  // Filtrer produits sans image ni prix
  const valid = all.filter(p => p.price > 0 && p.photos && p.photos.length > 0 && p.photos[0])

  const items = valid.map(p => {
    const isSmall = ['Hot Wheels', 'Hot Wheels Premium', 'Matchbox'].includes(p.category)

    // Tarifs livraison Canada (QC/ON)
    const shipCA_QcOn = isSmall ? '12.99' : '24.99'
    // Tarifs livraison Canada (autres provinces)
    const shipCA_Other = isSmall ? '15.99' : '29.99'
    // Tarifs livraison USA
    const shipUS = isSmall ? '15.99' : '29.99'

    const additionalImages = (p.photos || []).slice(1, 10)
      .map(url => `<g:additional_image_link>${escapeXml(url)}</g:additional_image_link>`)
      .join('\n      ')

    return `
  <item>
    <g:id>${escapeXml(p.id)}</g:id>
    <title><![CDATA[${p.title}]]></title>
    <link>${SITE_URL}/product/${escapeXml(p.id)}</link>
    <g:price>${p.price.toFixed(2)} CAD</g:price>
    <g:availability>in_stock</g:availability>
    <g:condition>${DEFAULT_CONDITION}</g:condition>
    <g:image_link>${escapeXml(p.photos[0])}</g:image_link>
    ${additionalImages}
    <g:product_type><![CDATA[${p.category}]]></g:product_type>
    <g:identifier_exists>no</g:identifier_exists>
    ${p.weight ? `<g:shipping_weight>${(p.weight / 1000).toFixed(3)} kg</g:shipping_weight>` : ''}
    ${p.description ? `<description><![CDATA[${p.description.slice(0, 5000)}]]></description>` : ''}
    <g:shipping>
      <g:country>CA</g:country>
      <g:region>QC</g:region>
      <g:price>${shipCA_QcOn} CAD</g:price>
    </g:shipping>
    <g:shipping>
      <g:country>CA</g:country>
      <g:region>ON</g:region>
      <g:price>${shipCA_QcOn} CAD</g:price>
    </g:shipping>
    <g:shipping>
      <g:country>CA</g:country>
      <g:price>${shipCA_Other} CAD</g:price>
    </g:shipping>
    <g:shipping>
      <g:country>US</g:country>
      <g:price>${shipUS} CAD</g:price>
    </g:shipping>
  </item>`
  }).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>The Shelf Cartel — Toys &amp; Collectibles</title>
    <link>${SITE_URL}</link>
    <description>Toys and collectibles shipped across Canada and USA. Hot Wheels, Star Wars, Marvel, McFarlane, TMNT and more.</description>
    ${items}
  </channel>
</rss>`

  _cache = xml
  _cacheTime = Date.now()

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
