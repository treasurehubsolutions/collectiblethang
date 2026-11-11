import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY

  console.log('[sitemap] supabaseUrl=', supabaseUrl ? 'OK' : 'MISSING')
  console.log('[sitemap] supabaseKey=', supabaseKey ? 'OK' : 'MISSING')

  const baseUrl = 'https://theshelfcartel.com'
  const now = new Date().toISOString()

  const staticUrls = [
    `<url><loc>${baseUrl}/</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>`,
    `<url><loc>${baseUrl}/shop</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>`,
    `<url><loc>${baseUrl}/a-propos</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.5</priority></url>`,
    `<url><loc>${baseUrl}/livraison</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.5</priority></url>`,
    `<url><loc>${baseUrl}/blog</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/guide-debuter-collection-hot-wheels</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/hot-wheels-premium-vs-mainline</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/ou-acheter-funko-pop-rares-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/hot-wheels-car-culture-series-a-collectionner</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/hot-wheels-treasure-hunt-guide</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/collectors-holiday-gift-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/pokemon-cards-collecting-canada-beginners</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/lego-buying-guide-collectors-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/pokemon-tcg-new-set-launch-buying-guide</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/matchbox-collecting-guide-vintage-collectors</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/star-wars-marvel-legends-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/hallmark-keepsake-ornaments-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/transformers-dc-multiverse-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/jurassic-park-world-collectibles-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/tmnt-collectibles-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/returns</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.4</priority></url>`,
  ]

  let dynamicUrls = []

  if (supabaseUrl && supabaseKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      })

      const { data, error } = await supabase
        .from('products')
        .select('id')
        .eq('enabled', true)
        .limit(5000)

      console.log('[sitemap] rows=', data?.length, 'error=', error?.message || 'none')

      if (data && !error) {
        dynamicUrls = data.map((p) => {
          const lastmod = now
          return `<url><loc>${baseUrl}/product/${p.id}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`
        })
      }
    } catch (e) {
      console.error('[sitemap] exception:', e.message)
    }
  }

  console.log('[sitemap] total URLs=', staticUrls.length + dynamicUrls.length)

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...dynamicUrls].join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'CDN-Cache-Control': 'no-store',
      'Vercel-CDN-Cache-Control': 'no-store',
    },
  })
}
