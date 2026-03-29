export const dynamic = 'force-dynamic'
import { getAdminClient } from '../../../lib/supabase'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const action = searchParams.get('action')
    const admin = getAdminClient()
    if (action==='list') {
      const { data, error } = await admin.from('products').select('*').order('created_at',{ascending:false})
      if (error) return Response.json({error:error.message},{status:500})
      return Response.json(data||[])
    }
    return Response.json({error:'Unknown action'},{status:400})
  } catch(e) { return Response.json({error:e.message},{status:500}) }
}

export async function POST(req) {
  try {
    const { action, id, product, enabled } = await req.json()
    const admin = getAdminClient()
    if (action==='create') {
      const { data, error } = await admin.from('products').insert([{...product,source:'manual'}]).select().single()
      if (error) return Response.json({error:error.message},{status:500})
      return Response.json(data)
    }
    if (action==='update') {
      const { data, error } = await admin.from('products').update(product).eq('id',id).select().single()
      if (error) return Response.json({error:error.message},{status:500})
      return Response.json(data)
    }
    if (action==='delete') {
      const { error } = await admin.from('products').delete().eq('id',id)
      if (error) return Response.json({error:error.message},{status:500})
      return Response.json({deleted:true})
    }
    if (action==='toggle') {
      const { data, error } = await admin.from('products').update({enabled}).eq('id',id).select().single()
      if (error) return Response.json({error:error.message},{status:500})
      return Response.json(data)
    }
    return Response.json({error:'Unknown action'},{status:400})
  } catch(e) { return Response.json({error:e.message},{status:500}) }
}
