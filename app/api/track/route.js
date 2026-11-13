import { NextResponse } from 'next/server'
import { getAdminClient } from '../../../lib/supabase'

export const dynamic = 'force-dynamic'

const BOT = /bot|crawl|spider|slurp|facebookexternalhit|preview|headless|lighthouse|pagespeed|monitor|curl|wget|python|axios|node-fetch|vercel/i

const HOSTS = [
  [/(^|\.)google\./, 'Google'], [/(^|\.)bing\.com$/, 'Bing'], [/duckduckgo\.com$/, 'DuckDuckGo'], [/(^|\.)yahoo\./, 'Yahoo'],
  [/(^|\.)(facebook|fb)\.com$|^fb\.me$|^l\.facebook\.com$|^lm\.facebook\.com$|^m\.me$/, 'Facebook'],
  [/instagram\.com$/, 'Instagram'], [/(^|\.)(twitter|x)\.com$|^t\.co$/, 'X / Twitter'], [/reddit\.com$/, 'Reddit'],
  [/pinterest\./, 'Pinterest'], [/tiktok\.com$/, 'TikTok'], [/ebay\./, 'eBay'], [/poshmark\./, 'Poshmark'],
  [/youtube\.com$|^youtu\.be$/, 'YouTube'], [/kijiji\./, 'Kijiji'],
]
function label(h) {
  for (const [re, name] of HOSTS) if (re.test(h)) return name
  return h
}
function clean(v, n = 120) { return String(v || '').slice(0, n).trim() }

export async function POST(req) {
  try {
    const ua = req.headers.get('user-agent') || ''
    if (!ua || BOT.test(ua)) return new NextResponse(null, { status: 204 })
    const b = await req.json().catch(() => null)
    if (!b || typeof b.path !== 'string' || !b.path.startsWith('/')) return new NextResponse(null, { status: 204 })

    const utm = clean(b.utm_source, 60).toLowerCase()
    let host = ''
    try { host = b.ref ? new URL(b.ref).hostname.replace(/^www\./, '') : '' } catch (e) {}
    if (host === 'theshelfcartel.com' || host.endsWith('.vercel.app')) host = ''
    const source = utm ? label(utm + '.com') === utm + '.com' ? utm : label(utm + '.com') : host ? label(host) : 'Direct'

    const device = /ipad|tablet/i.test(ua) ? 'Tablette' : /mobile|android|iphone/i.test(ua) ? 'Mobile' : 'Ordinateur'
    const country = clean(req.headers.get('x-vercel-ip-country'), 2).toUpperCase() || null
    const region = clean(decodeURIComponent(req.headers.get('x-vercel-ip-country-region') || ''), 10) || null

    const supabase = getAdminClient()
    await supabase.from('page_views').insert({
      path: clean(b.path, 200), country, region, source, referrer_host: host || null,
      utm_source: utm || null, utm_medium: clean(b.utm_medium, 60) || null, utm_campaign: clean(b.utm_campaign, 80) || null,
      device, sid: clean(b.sid, 40) || null,
    })
  } catch (e) {}
  return new NextResponse(null, { status: 204 })
}
