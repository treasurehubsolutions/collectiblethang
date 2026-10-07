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

  if (action === 'orders') {
    const stripe = (await import('stripe')).default(process.env.STRIPE_SECRET_KEY)
    const sessions = await stripe.checkout.sessions.list({ limit: 100, expand: ['data.line_items'] })
    const orders = sessions.data.map(s => ({
      id: s.id,
      date: new Date(s.created * 1000).toISOString(),
      customer: s.customer_details?.name || '—',
      email: s.customer_details?.email || '—',
      amount: (s.amount_total / 100).toFixed(2),
      currency: s.currency?.toUpperCase(),
      status: s.payment_status,
      pickup: s.metadata?.pickup === 'true',
      items: s.line_items?.data?.map(i => ({ name: i.description, qty: i.quantity, price: (i.amount_total / 100).toFixed(2) })) || []
    }))
    return NextResponse.json(orders)
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
    // Marquer admin_deleted=true au lieu de vraiment supprimer
    const { error } = await supabase.from('products').update({ enabled: false, admin_deleted: true, stock: 0 }).eq('id', id)
    return NextResponse.json({ ok: !error })
  }

  if (action === 'create') {
    const { data, error } = await supabase.from('products').insert({ ...product, source: 'manual', admin_created: true }).select().single()
    if (error) return NextResponse.json({ error: error.message })
    return NextResponse.json(data)
  }

  if (action === 'update') {
    const updates = { ...product }
    // Si le prix a changé, marquer admin_price pour protéger du sync eBay
    if (product.price !== undefined) updates.admin_price = product.price
    const { error } = await supabase.from('products').update(updates).eq('id', id)
    return NextResponse.json({ ok: !error, error: error?.message })
  }

  if (action === 'oos') {
    // Out of Stock forcé : visible pour le client mais stock=0, jamais remis en stock par le sync
    const { error } = await supabase.from('products').update({ admin_oos: true, stock: 0 }).eq('id', id)
    return NextResponse.json({ ok: !error })
  }

  if (action === 'unoos') {
    // Annuler le OOS admin — l'admin remet le stock manuellement
    const { error } = await supabase.from('products').update({ admin_oos: false }).eq('id', id)
    return NextResponse.json({ ok: !error })
  }

  if (action === 'restore') {
    const { error } = await supabase.from('products').update({ admin_deleted: false, enabled: true }).eq('id', id)
    return NextResponse.json({ ok: !error })
  }

  return NextResponse.json({ error: 'Unknown action' })
}
