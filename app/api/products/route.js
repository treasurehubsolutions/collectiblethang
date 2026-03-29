export const dynamic = 'force-dynamic'
import { supabase } from '../../../lib/supabase'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const type = searchParams.get('type')

    if (type === 'featured') {
      const { data } = await supabase.from('products').select('*')
        .eq('enabled',true).gt('stock',0)
        .order('watchers',{ascending:false}).limit(48)
      const withPhotos = (data||[]).filter(p=>p.photos&&p.photos.length>0&&p.photos[0])
      return Response.json(withPhotos.slice(0,24))
    }

    if (type === 'new') {
      const { data } = await supabase.from('products').select('*')
        .eq('enabled',true).gt('stock',0)
        .order('created_at',{ascending:false}).limit(60)
      const withPhotos = (data||[]).filter(p=>p.photos&&p.photos.length>0&&p.photos[0])
      return Response.json(withPhotos.slice(0,12))
    }

    if (type === 'categories') {
      const { data } = await supabase.from('products').select('category')
        .eq('enabled',true).gt('stock',0)
      if (!data) return Response.json([])
      const counts = {}
      data.forEach(p => { counts[p.category]=(counts[p.category]||0)+1 })
      return Response.json(Object.entries(counts).sort((a,b)=>b[1]-a[1]))
    }

    return Response.json({error:'Unknown type'},{status:400})
  } catch(e) {
    console.error('products API error:', e)
    return Response.json({error:e.message},{status:500})
  }
}
