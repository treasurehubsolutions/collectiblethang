// Affiche l'usage des limites d'appels eBay (API Analytics getRateLimits). Lecture seule.
const fs = require('fs'), path = require('path')
try { fs.readFileSync(path.join(__dirname, '.env.local'), 'utf8').split(/\r?\n/).forEach(l => {
  const m = l.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*?)\s*$/); if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '') }) } catch (e) {}
const APP = 'AlexAbra-Collecti-PRD-af606d196-62405c9d', CERT = process.env.EBAY_CERT_ID
if (!CERT) { console.error('EBAY_CERT_ID manquant dans .env.local'); process.exit(1) }
;(async () => {
  const creds = Buffer.from(`${APP}:${CERT}`).toString('base64')
  const t = await fetch('https://api.ebay.com/identity/v1/oauth2/token', { method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Authorization: `Basic ${creds}` },
    body: 'grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope' })
  if (!t.ok) { console.error('OAuth refusé: HTTP ' + t.status); return }
  const tok = (await t.json()).access_token
  for (const ctx of ['tradingapi', 'buy', 'sell']) {
    const r = await fetch(`https://api.ebay.com/developer/analytics/v1_beta/rate_limit/?api_context=${ctx}`, { headers: { Authorization: `Bearer ${tok}` } })
    const txt = await r.text()
    if (!r.ok) { console.log(`[${ctx}] HTTP ${r.status}: ${txt.slice(0, 200)}`); continue }
    const d = JSON.parse(txt)
    for (const a of d.rateLimits || []) for (const res of a.resources || []) for (const x of res.rates || [])
      console.log(`[${a.apiContext}] ${a.apiName} / ${res.name}: ${x.count}/${x.limit} utilisés, reste ${x.remaining}, fenêtre ${x.timeWindow}s, reset ${x.reset}`)
  }
})().catch(e => console.error('Erreur:', e.message))
