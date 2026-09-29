export const dynamic = 'force-dynamic'
export const revalidate = 0
import { createClient } from '@supabase/supabase-js'

export default async function sitemap() {
  const baseUrl = 'https://collectiblethang.vercel.app'

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/shop`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/livraison`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  let productPages = []
  try {
    const supaUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supaKey = process.env.SUPABASE_SERVICE_KEY

    console.log('SITEMAP2: supaUrl=', supaUrl ? 'OK' : 'MISSING')
    console.log('SITEMAP2: supaKey=', supaKey ? 'OK (' + supaKey.substring(0, 20) + '...)' : 'MISSING')

    if (!supaUrl || !supaKey) {
      console.log('SITEMAP2: missing env vars, returning static only')
      return staticPages
    }

    const sb = createClient(supaUrl, supaKey)
    const { data, error } = await sb
      .from('products')
      .select('id, updated_at')
      .limit(5000)

    console.log('SITEMAP2: data count=', data?.length, 'error=', error?.message || 'none')

    if (data && !error) {
      productPages = data.map(p => ({
        url: `${baseUrl}/product/${p.id}`,
        lastModified: p.updated_at ? new Date(p.updated_at) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
    }
  } catch(e) {
    console.log('SITEMAP2 ERROR:', e.message)
  }

  console.log('SITEMAP2: total URLs=', staticPages.length + productPages.length)
  return [...staticPages, ...productPages]
}
