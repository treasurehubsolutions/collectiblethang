export const dynamic = 'force-dynamic'
import { supabase } from '../../../lib/supabase'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get('type')
  try {
    if (type === 'featured') {
      const { data } = await supabase.from('products').select('*').eq('enabled',true).gt('stock',0).order('watchers',{ascending:false}).limit(24)
      return Response.json(data||[])
    }
    if (type === 'new') {
      const { data } = await supabase.from('products').select('*').eq('enabled',true).gt('stock',0).order('created_at',{ascending:false}).limit(12)
      return Response.json(data||[])
    }
    if (type === 'categories') {
      const { data } = await supabase.from('products').select('category').eq('enabled',true).gt('stock',0)
      if (!data) return Response.json([])
      const counts = {}
      data.forEach(p => { counts[p.category]=(counts[p.category]||0)+1 })
      return Response.json(Object.entries(counts).sort((a,b)=>b[1]-a[1]))
    }
    return Response.json({error:'Unknown type'},{status:400})
  } catch(e) {
    return Response.json({error:e.message},{status:500})
  }
}
