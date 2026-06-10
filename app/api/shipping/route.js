import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { items, toPostal, toCountry } = await req.json()
    const totalWeight = items.reduce((a, i) => a + (i.weight || 250) * i.qty, 0)
    const totalValue = items.reduce((a, i) => a + i.price * i.qty, 0)
    
    if (totalValue >= 150) return NextResponse.json({ free: true, rates: [{ name: '🎉 Free Shipping', amount: '0.00', days: '5-10 business days', service: 'free' }] })
    
    const isCA = toCountry === 'CA'
    let rates = []
    
    if (totalWeight < 500) {
      rates = isCA ? [{ name: '📦 Canada Post Regular', amount: '9.99', days: '5-10 bus. days', service: 'cp_regular' }, { name: '⚡ Canada Post Expedited', amount: '14.99', days: '3-5 bus. days', service: 'cp_xpedited' }]
                   : [{ name: '📦 USPS First Class', amount: '14.99', days: '7-14 bus. days', service: 'usps_fc' }]
    } else if (totalWeight < 1000) {
      rates = isCA ? [{ name: '📦 Canada Post Regular', amount: '13.99', days: '5-10 bus. days', service: 'cp_regular' }, { name: '⚡ Canada Post Expedited', amount: '19.99', days: '3-5 bus. days', service: 'cp_xpedited' }]
                   : [{ name: '📦 USPS Priority', amount: '19.99', days: '7-14 bus. days', service: 'usps_p' }]
    } else {
      rates = isCA ? [{ name: '📦 Canada Post Regular', amount: '18.99', days: '5-10 bus. days', service: 'cp_regular' }, { name: '⚡ Canada Post Expedited', amount: '26.99', days: '3-5 bus. days', service: 'cp_xpedited' }]
                   : [{ name: '📦 USPS Priority', amount: '29.99', days: '7-14 bus. days', service: 'usps_p' }]
    }
    
    return NextResponse.json({ rates })
  } catch(e) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
