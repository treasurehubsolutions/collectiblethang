import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default async function sitemap() {
  const baseUrl = 'https://collectiblethang.vercel.app'

  // Pages statiques
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/shop`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/livraison`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  // Pages produits depuis Supabase
  let productPages = []
  try {
    const { data } = await supabase
      .from('products')
      .select('id, updated_at')
      .eq('status', 'active')
      .limit(5000)

    if (data) {
      productPages = data.map(p => ({
        url: `${baseUrl}/product/${p.id}`,
        lastModified: p.updated_at ? new Date(p.updated_at) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
    }
  } catch(e) {}

  return [...staticPages, ...productPages]
}
