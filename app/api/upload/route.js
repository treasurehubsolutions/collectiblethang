import { NextResponse } from 'next/server'
import { getAdminClient } from '../../../lib/supabase'

export async function POST(req) {
  try {
    const formData = await req.formData()
    const file = formData.get('file')
    if (!file) return NextResponse.json({ error: 'No file' })
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const ext = file.name.split('.').pop()
    const name = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
    const supabase = getAdminClient()
    const { error } = await supabase.storage.from('product-images').upload(name, buffer, { contentType: file.type })
    if (error) return NextResponse.json({ error: error.message })
    const { data } = supabase.storage.from('product-images').getPublicUrl(name)
    return NextResponse.json({ url: data.publicUrl })
  } catch(e) {
    return NextResponse.json({ error: e.message })
  }
}
