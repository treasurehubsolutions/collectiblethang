export const dynamic = 'force-dynamic'
import { getAdminClient } from '../../../lib/supabase'
export async function POST(req) {
  try {
    const formData = await req.formData()
    const file = formData.get('file')
    if (!file) return Response.json({error:'No file'},{status:400})
    const admin = getAdminClient()
    const ext = file.name.split('.').pop().toLowerCase()
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
    const bytes = await file.arrayBuffer()
    const { error } = await admin.storage.from('product-images').upload(filename, Buffer.from(bytes), {contentType:file.type})
    if (error) return Response.json({error:error.message},{status:500})
    const { data:{publicUrl} } = admin.storage.from('product-images').getPublicUrl(filename)
    return Response.json({url:publicUrl})
  } catch(e) { return Response.json({error:e.message},{status:500}) }
}
