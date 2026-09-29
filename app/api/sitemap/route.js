import { getAdminClient } from '../../../lib/supabase'

export async function GET() {
  const baseUrl = 'https://collectiblethang.vercel.app'

  const staticUrls = [
    baseUrl,
    `${baseUrl}/shop`,
    `${baseUrl}/a-propos`,
    `${baseUrl}/livraison`,
  ]

  let productUrls = []
  try {
    const sb = getAdminClient()
    const { data } = await sb
      .from('products')
      .select('id, updated_at')
      .limit(5000)
    if (data) productUrls = data.map(p => ({ id: p.id, updated_at: p.updated_at }))
  } catch(e) {}

  const allUrls = [
    ...staticUrls.map(url => `<url><loc>${url}</loc><changefreq>daily</changefreq><priority>0.9</priority></url>`),
    ...productUrls.map(p => `<url><loc>${baseUrl}/product/${p.id}</loc><lastmod>${p.updated_at ? new Date(p.updated_at).toISOString() : new Date().toISOString()}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`)
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.join('\n')}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  })
}
