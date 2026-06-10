import { NextResponse } from 'next/server'
import { getAdminClient } from '../../../lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const action = searchParams.get('action')
  const supabase = getAdminClient()
  if (action === 'list') {
    const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false })
    return NextResponse.json(data || [])
  }
  return NextResponse.json([])
}

export async function POST(req) {
  const body = await req.json()
  const { action, id, product, enabled } = body
  const supabase = getAdminClient()
  
  if (action === 'toggle') {
    const { error } = await supabase.from('products').update({ enabled }).eq('id', id)
    return NextResponse.json({ ok: !error })
  }
  if (action === 'delete') {
    await supabase.from('products').delete().eq('id', id)
    return NextResponse.json({ ok: true })
  }
  if (action === 'create') {
    const { data, error } = await supabase.from('products').insert({ ...product, source: 'manual' }).select().single()
    if (error) return NextResponse.json({ error: error.message })
    return NextResponse.json(data)
  }
  if (action === 'update') {
    const { error } = await supabase.from('products').update(product).eq('id', id)
    return NextResponse.json({ ok: !error, error: error?.message })
  }
  return NextResponse.json({ error: 'Unknown action' })
}
