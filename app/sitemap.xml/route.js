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
    `<url><loc>${baseUrl}/blog/video-game-collectibles-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/hockey-collectibles-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/vhs-tapes-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/wwe-wrestling-collectibles-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/mcfarlane-dc-multiverse-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/gi-joe-classified-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/diecast-funko-storage-display-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/calico-critters-playmobil-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/hot-wheels-rlc-elite-64-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/anime-figures-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/gundam-gunpla-model-kits-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/masters-of-the-universe-he-man-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/retro-80s-90s-nostalgia-toys-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/squishmallows-plush-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/barbie-doll-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/disney-pixar-cars-diecast-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/cyber-monday-collectibles-online-shopping-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/boxing-day-collectibles-collectors-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/black-friday-collectibles-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/buying-collectibles-on-ebay-canada-checklist</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/funko-pop-chase-exclusives-holiday-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/power-rangers-collectibles-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/alaskan-de-icer-windshield-winter-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`,
    `<url><loc>${baseUrl}/blog/collectors-stocking-stuffers-under-20-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/little-people-collector-sets-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/sonic-the-hedgehog-collectibles-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/minecraft-collectibles-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/hello-kitty-sanrio-collectibles-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/advent-calendars-for-collectors-buying-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/disney-collectibles-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/pokemon-figures-plush-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/lego-star-wars-sets-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/harry-potter-collectibles-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/care-bears-plush-collectibles-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/model-trains-ho-n-scale-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/monster-high-bratz-fashion-dolls-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/polly-pocket-mini-playsets-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/vintage-lunch-boxes-thermos-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/vintage-tin-toys-wind-up-toys-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/lol-surprise-hatchimals-surprise-toys-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/tamagotchi-virtual-pets-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/jdm-hot-wheels-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/beyblade-x-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/neca-action-figures-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/hot-wheels-formula-1-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/kidult-collectors-starter-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/catalogue-and-insure-your-collection-canada-guide</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/keep-collectibles-in-box-or-open-them-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/collectible-condition-terms-explained-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/how-to-spot-fake-bootleg-collectibles-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/how-to-check-collectible-value-sold-listings-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/what-to-check-when-your-collectible-arrives-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/order-collectibles-early-holiday-shipping-canada-guide</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/mystery-blind-box-collectibles-buying-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/trading-cards-raw-vs-graded-buying-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/clean-loose-action-figures-diecast-cars-safely-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/star-trek-collectibles-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/lego-technic-sets-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/batman-collectibles-collecting-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/blog/large-scale-diecast-model-cars-1-18-1-24-1-43-guide-canada</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    `<url><loc>${baseUrl}/returns</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.4</priority></url>`,
    `<url><loc>${baseUrl}/faq</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.4</priority></url>`,
    `<url><loc>${baseUrl}/contact</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.4</priority></url>`,
    `<url><loc>${baseUrl}/privacy-policy</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.4</priority></url>`,
    `<url><loc>${baseUrl}/terms</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.4</priority></url>`,
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

      // Pagination : Supabase plafonne a 1000 lignes par requete (le sitemap n'avait que 1000 produits)
      let data = []
      let error = null
      let from = 0
      while (true) {
        const res = await supabase
          .from('products')
          .select('id')
          .eq('enabled', true)
          .gt('stock', 0)
          .range(from, from + 999)
        if (res.error) { error = res.error; break }
        if (!res.data || res.data.length === 0) break
        data = data.concat(res.data)
        if (res.data.length < 1000) break
        from += 1000
      }

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
