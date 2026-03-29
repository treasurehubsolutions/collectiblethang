export const dynamic = 'force-dynamic'

// Shippo API — get real Canada Post + USPS rates
export async function POST(req) {
  try {
    const { items, toPostal, toCountry, toState } = await req.json()

    // Calculate total weight in grams
    const totalWeight = items.reduce((sum, item) => sum + (item.weight || 250) * item.qty, 0)
    const totalValue = items.reduce((sum, item) => sum + item.price * item.qty, 0)

    // Free shipping over $150
    if (totalValue >= 150) {
      return Response.json({
        rates: [{ service: 'FREE', name: '🎉 Free Shipping', amount: '0.00', currency: 'CAD', days: '5-10' }],
        free: true
      })
    }

    // Box dimensions estimate based on weight
    const { length, width, height } = estimateBox(totalWeight)

    const shippoBody = {
      address_from: {
        name: 'Born2BeToys',
        street1: '123 Main St',
        city: 'Trois-Rivieres',
        state: 'QC',
        zip: process.env.SHIP_FROM_POSTAL || 'G8T2K4',
        country: 'CA',
        phone: '819-555-0000',
        email: 'info@born2betoys.com'
      },
      address_to: {
        name: 'Customer',
        street1: '123 Main St',
        city: toCountry === 'CA' ? 'Destination' : 'New York',
        state: toState || (toCountry === 'CA' ? 'ON' : 'NY'),
        zip: toPostal.replace(/\s/g, ''),
        country: toCountry || 'CA',
      },
      parcels: [{
        length: String(length),
        width: String(width),
        height: String(height),
        distance_unit: 'cm',
        weight: String(Math.max(totalWeight / 1000, 0.1).toFixed(3)),
        mass_unit: 'kg'
      }],
      async: false
    }

    const resp = await fetch('https://api.goshippo.com/shipments/', {
      method: 'POST',
      headers: {
        'Authorization': `ShippoToken ${process.env.SHIPPO_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(shippoBody)
    })

    const data = await resp.json()

    if (!data.rates || data.rates.length === 0) {
      // Fallback to fixed rates if Shippo fails
      return Response.json({ rates: getFallbackRates(totalWeight, toCountry), fallback: true })
    }

    // Filter and format rates
    const wantedCarriers = toCountry === 'CA'
      ? ['canada_post']
      : ['usps', 'ups', 'fedex']

    const rates = data.rates
      .filter(r => wantedCarriers.includes(r.provider.toLowerCase()))
      .filter(r => r.amount && parseFloat(r.amount) > 0)
      .map(r => ({
        objectId: r.object_id,
        service: r.servicelevel?.token || r.servicelevel?.name,
        name: formatServiceName(r.provider, r.servicelevel?.name),
        amount: parseFloat(r.amount).toFixed(2),
        currency: r.currency,
        days: r.estimated_days ? `${r.estimated_days} days` : '5-10 days',
        provider: r.provider
      }))
      .sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount))
      .slice(0, 4)

    if (rates.length === 0) {
      return Response.json({ rates: getFallbackRates(totalWeight, toCountry), fallback: true })
    }

    return Response.json({ rates })

  } catch (err) {
    console.error('Shipping API error:', err)
    return Response.json({ error: err.message, rates: [] }, { status: 500 })
  }
}

function estimateBox(weightG) {
  if (weightG <= 100) return { length: 15, width: 10, height: 5 }
  if (weightG <= 300) return { length: 20, width: 15, height: 8 }
  if (weightG <= 600) return { length: 25, width: 20, height: 12 }
  if (weightG <= 1000) return { length: 30, width: 25, height: 15 }
  if (weightG <= 2000) return { length: 40, width: 30, height: 20 }
  return { length: 50, width: 40, height: 30 }
}

function formatServiceName(provider, serviceName) {
  if (provider === 'canada_post') {
    if (serviceName?.includes('Expedited')) return '📦 Canada Post Expedited (3-7 days)'
    if (serviceName?.includes('Xpresspost')) return '⚡ Canada Post Xpresspost (1-2 days)'
    if (serviceName?.includes('Regular')) return '📬 Canada Post Regular (5-10 days)'
    if (serviceName?.includes('Priority')) return '🚀 Canada Post Priority (1 day)'
    return `📦 Canada Post ${serviceName}`
  }
  if (provider === 'usps') return `🇺🇸 USPS ${serviceName}`
  if (provider === 'ups') return `🟤 UPS ${serviceName}`
  return `${provider} ${serviceName}`
}

function getFallbackRates(weightG, country) {
  if (country === 'CA') {
    if (weightG <= 200) return [{ service:'fallback', name:'📦 Standard Canada (5-10 days)', amount:'9.99', currency:'CAD', days:'5-10 days' }]
    if (weightG <= 500) return [{ service:'fallback', name:'📦 Standard Canada (5-10 days)', amount:'11.99', currency:'CAD', days:'5-10 days' }]
    if (weightG <= 1000) return [{ service:'fallback', name:'📦 Standard Canada (5-10 days)', amount:'14.99', currency:'CAD', days:'5-10 days' }]
    return [{ service:'fallback', name:'📦 Standard Canada (5-10 days)', amount:'19.99', currency:'CAD', days:'5-10 days' }]
  } else {
    if (weightG <= 500) return [{ service:'fallback', name:'🇺🇸 USPS Standard (7-14 days)', amount:'14.99', currency:'CAD', days:'7-14 days' }]
    if (weightG <= 1000) return [{ service:'fallback', name:'🇺🇸 USPS Standard (7-14 days)', amount:'19.99', currency:'CAD', days:'7-14 days' }]
    return [{ service:'fallback', name:'🇺🇸 USPS Standard (7-14 days)', amount:'29.99', currency:'CAD', days:'7-14 days' }]
  }
}
