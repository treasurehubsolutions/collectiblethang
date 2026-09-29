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
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!url || !key) return staticPages

    const sb = createClient(url, key)
    const { data, error } = await sb
      .from('products')
      .select('id, updated_at')
      .eq('enabled', true)
      .gt('stock', 0)
      .limit(5000)

    if (data && !error) {
      productPages = data.map(p => ({
        url: `${baseUrl}/product/${p.id}`,
        lastModified: p.updated_at ? new Date(p.updated_at) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
    }
  } catch(e) {
    console.error('Sitemap error:', e)
  }

  return [...staticPages, ...productPages]
}
