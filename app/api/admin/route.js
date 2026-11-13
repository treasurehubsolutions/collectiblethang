import { NextResponse } from 'next/server'
import { getAdminClient } from '../../../lib/supabase'
import { isAdmin } from '../../../lib/adminAuth'

export const dynamic = 'force-dynamic'

export async function GET(req) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
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

  if (action === 'traffic') {
    const days = Math.min(Math.max(parseInt(searchParams.get('days')) || 30, 1), 90)
    const since = new Date(Date.now() - days * 86400000).toISOString()
    const rows = []
    for (let from = 0; from < 50000; from += 1000) {
      const { data, error } = await supabase.from('page_views')
        .select('created_at, path, country, source, device, sid')
        .gte('created_at', since).order('created_at', { ascending: true }).range(from, from + 999)
      if (error) return NextResponse.json({ error: 'table', message: error.message })
      if (!data || data.length === 0) break
      rows.push(...data)
      if (data.length < 1000) break
    }
    const fmt = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hourCycle: 'h23' })
    const agg = () => ({ views: 0, sids: new Set() })
    const bump = (m, k, sid) => { const a = m[k] || (m[k] = agg()); a.views++; if (sid) a.sids.add(sid) }
    const byDay = {}, byHour = {}, byCountry = {}, bySource = {}, byPage = {}, byDevice = {}
    const allSids = new Set()
    for (const r of rows) {
      const parts = Object.fromEntries(fmt.formatToParts(new Date(r.created_at)).map(x => [x.type, x.value]))
      bump(byDay, `${parts.year}-${parts.month}-${parts.day}`, r.sid)
      bump(byHour, String(parseInt(parts.hour)), r.sid)
      bump(byCountry, r.country || '??', r.sid)
      bump(bySource, r.source || 'Direct', r.sid)
      bump(byPage, r.path, r.sid)
      bump(byDevice, r.device || '?', r.sid)
      if (r.sid) allSids.add(r.sid)
    }
    const out = m => Object.entries(m).map(([k, a]) => ({ key: k, views: a.views, visitors: a.sids.size })).sort((a, b) => b.views - a.views)
    const hours = Array.from({ length: 24 }, (_, h) => ({ key: String(h), views: byHour[h]?.views || 0 }))
    return NextResponse.json({
      days, views: rows.length, visitors: allSids.size,
      byDay: out(byDay).sort((a, b) => a.key.localeCompare(b.key)),
      byHour: hours, byCountry: out(byCountry).slice(0, 15), bySource: out(bySource).slice(0, 15),
      byPage: out(byPage).slice(0, 15), byDevice: out(byDevice),
    })
  }

  return NextResponse.json([])
}

export async function POST(req) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
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
