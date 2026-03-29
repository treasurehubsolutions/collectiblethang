export const dynamic = 'force-dynamic'

export async function POST(req) {
  try {
    const { items, toPostal, toCountry, toState } = await req.json()
    const totalWeight = items.reduce((s,i) => s+(i.weight||250)*i.qty, 0)
    const totalValue = items.reduce((s,i) => s+i.price*i.qty, 0)

    if (totalValue >= 150) {
      return Response.json({ rates:[{service:'FREE',name:'🎉 Free Shipping',amount:'0.00',currency:'CAD',days:'5-10 days'}], free:true })
    }

    const { length, width, height } = estimateBox(totalWeight)
    const resp = await fetch('https://api.goshippo.com/shipments/', {
      method: 'POST',
      headers: { 'Authorization':`ShippoToken ${process.env.SHIPPO_API_KEY}`, 'Content-Type':'application/json' },
      body: JSON.stringify({
        address_from: { name:'Born2BeToys', street1:'1 Rue Principale', city:'Trois-Rivieres', state:'QC', zip: process.env.SHIP_FROM_POSTAL||'G8T2K4', country:'CA' },
        address_to: { name:'Customer', street1:'1 Main St', city:'Destination', state: toState||(toCountry==='CA'?'ON':'NY'), zip:toPostal.replace(/\s/g,''), country:toCountry||'CA' },
        parcels: [{ length:String(length), width:String(width), height:String(height), distance_unit:'cm', weight:String(Math.max(totalWeight/1000,0.1).toFixed(3)), mass_unit:'kg' }],
        async: false
      })
    })
    const data = await resp.json()

    if (!data.rates?.length) {
      return Response.json({ rates: fallback(totalWeight, toCountry) })
    }

    const wanted = toCountry==='CA' ? ['canada_post'] : ['usps','ups']
    const rates = data.rates
      .filter(r => wanted.includes(r.provider?.toLowerCase()))
      .filter(r => r.amount && parseFloat(r.amount) > 0)
      .map(r => ({
        objectId: r.object_id,
        service: r.servicelevel?.token||r.servicelevel?.name||'standard',
        name: fmtName(r.provider, r.servicelevel?.name),
        amount: parseFloat(r.amount).toFixed(2),
        currency: r.currency,
        days: r.estimated_days ? `${r.estimated_days} days` : '5-10 days',
      }))
      .sort((a,b) => parseFloat(a.amount)-parseFloat(b.amount))
      .slice(0,4)

    return Response.json({ rates: rates.length ? rates : fallback(totalWeight, toCountry) })
  } catch(err) {
    return Response.json({ error:err.message, rates:[] }, {status:500})
  }
}

function estimateBox(g) {
  if (g<=100) return {length:15,width:10,height:5}
  if (g<=300) return {length:20,width:15,height:8}
  if (g<=600) return {length:25,width:20,height:12}
  if (g<=1000) return {length:30,width:25,height:15}
  if (g<=2000) return {length:40,width:30,height:20}
  return {length:50,width:40,height:30}
}

function fmtName(provider, name) {
  if (provider==='canada_post') {
    if (name?.includes('Expedited')) return '📦 Canada Post Expedited (3-7 days)'
    if (name?.includes('Xpresspost')) return '⚡ Canada Post Xpresspost (1-2 days)'
    if (name?.includes('Regular')) return '📬 Canada Post Regular (5-10 days)'
    if (name?.includes('Priority')) return '🚀 Canada Post Priority (1 day)'
    return `📦 Canada Post ${name}`
  }
  return `🇺🇸 ${provider?.toUpperCase()} ${name}`
}

function fallback(g, country) {
  if (country==='CA') {
    if (g<=200) return [{service:'fallback',name:'📦 Standard Canada (5-10 days)',amount:'9.99',currency:'CAD',days:'5-10 days'}]
    if (g<=500) return [{service:'fallback',name:'📦 Standard Canada (5-10 days)',amount:'11.99',currency:'CAD',days:'5-10 days'}]
    if (g<=1000) return [{service:'fallback',name:'📦 Standard Canada (5-10 days)',amount:'14.99',currency:'CAD',days:'5-10 days'}]
    return [{service:'fallback',name:'📦 Standard Canada (5-10 days)',amount:'19.99',currency:'CAD',days:'5-10 days'}]
  }
  if (g<=500) return [{service:'fallback',name:'🇺🇸 USPS Standard (7-14 days)',amount:'14.99',currency:'CAD',days:'7-14 days'}]
  if (g<=1000) return [{service:'fallback',name:'🇺🇸 USPS Standard (7-14 days)',amount:'19.99',currency:'CAD',days:'7-14 days'}]
  return [{service:'fallback',name:'🇺🇸 USPS Standard (7-14 days)',amount:'29.99',currency:'CAD',days:'7-14 days'}]
}
