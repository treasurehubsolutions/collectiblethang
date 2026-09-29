import { createClient } from '@supabase/supabase-js'

export async function GET() {
  const baseUrl = 'https://collectiblethang.vercel.app'

  const staticUrls = [
    { url: baseUrl, changefreq: 'daily', priority: '1.0' },
    { url: `${baseUrl}/shop`, changefreq: 'daily', priority: '0.9' },
    { url: `${baseUrl}/a-propos`, changefreq: 'monthly', priority: '0.5' },
    { url: `${baseUrl}/livraison`, changefreq: 'monthly', priority: '0.5' },
  ]

  let productUrls = []
  try {
    const supaUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supaKey = process.env.SUPABASE_SERVICE_KEY

    console.log('SITEMAP: supaUrl=', supaUrl ? 'OK' : 'MISSING')
    console.log('SITEMAP: supaKey=', supaKey ? 'OK' : 'MISSING')

    if (supaUrl && supaKey) {
      const sb = createClient(supaUrl, supaKey)
      const { data, error } = await sb.from('products').select('id, updated_at').limit(5000)
      console.log('SITEMAP: data count=', data?.length, 'error=', error?.message)
      if (data) productUrls = data
    }
  } catch(e) {
    console.log('SITEMAP ERROR:', e.message)
  }

  const allEntries = [
    ...staticUrls.map(u => `<url><loc>${u.url}</loc><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`),
    ...productUrls.map(p => `<url><loc>${baseUrl}/product/${p.id}</loc><lastmod>${p.updated_at ? new Date(p.updated_at).toISOString() : new Date().toISOString()}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`)
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allEntries.join('\n')}\n</urlset>`

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
