export const dynamic = 'force-dynamic'
import { supabase } from '../../../lib/supabase'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get('type')
  try {
    if (type === 'featured') {
      // Only products with photos, sorted by watchers
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('enabled', true)
        .gt('stock', 0)
        .not('photos', 'eq', '{}')
        .order('watchers', { ascending: false })
        .limit(24)
      return Response.json(data || [])
    }
    if (type === 'new') {
      // Only products with photos, sorted by created_at
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('enabled', true)
        .gt('stock', 0)
        .not('photos', 'eq', '{}')
        .order('created_at', { ascending: false })
        .limit(24)
      // Filter client-side to ensure photos array is not empty
      const withPhotos = (data || []).filter(p => p.photos && p.photos.length > 0 && p.photos[0])
      return Response.json(withPhotos.slice(0, 12))
    }
    if (type === 'categories') {
      const { data } = await supabase
        .from('products')
        .select('category')
        .eq('enabled', true)
        .gt('stock', 0)
      if (!data) return Response.json([])
      const counts = {}
      data.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1 })
      return Response.json(Object.entries(counts).sort((a, b) => b[1] - a[1]))
    }
    return Response.json({ error: 'Unknown type' }, { status: 400 })
  } catch(e) {
    return Response.json({ error: e.message }, { status: 500 })
  }
}
