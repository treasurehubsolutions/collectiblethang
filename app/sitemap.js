import { unstable_noStore as noStore } from 'next/cache'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function sitemap() {
  // Force Next.js to skip ALL caches — critical for sitemap to be dynamic
  noStore()

  const baseUrl = 'https://collectiblethang.vercel.app'

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/shop`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/livraison`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY

  console.log('[sitemap] supabaseUrl=', supabaseUrl ? 'OK' : 'MISSING')
  console.log('[sitemap] supabaseKey=', supabaseKey ? 'OK' : 'MISSING')

  if (!supabaseUrl || !supabaseKey) {
    console.error('[sitemap] Missing env vars — returning static pages only')
    return staticPages
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })

    const { data, error } = await supabase
      .from('products')
      .select('id, updated_at')
      .limit(5000)

    console.log('[sitemap] rows=', data?.length, 'error=', error?.message || 'none')

    if (error || !data) {
      return staticPages
    }

    const productPages = data.map((p) => ({
      url: `${baseUrl}/product/${p.id}`,
      lastModified: p.updated_at ? new Date(p.updated_at) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }))

    console.log('[sitemap] total=', staticPages.length + productPages.length)
    return [...staticPages, ...productPages]
  } catch (e) {
    console.error('[sitemap] exception:', e.message)
    return staticPages
  }
}
