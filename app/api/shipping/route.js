import { FREE_SHIPPING_MIN_CAD, FALLBACK_RATE_CAD, canadaCartRate, usCartRate } from '../../../lib/shipping'

function one(amount, days) {
  return Response.json({ rates: [{ name: 'Livraison standard', amount: amount.toFixed(2), service: 'standard', days }] })
}

export async function POST(req) {
  const { items, toCountry, toState, toPostal } = await req.json()
  if (!Array.isArray(items) || items.length === 0) return Response.json({ rates: [], error: 'Empty cart' })

  const subtotal = items.reduce((a, i) => a + i.price * i.qty, 0)
  if (subtotal >= FREE_SHIPPING_MIN_CAD) {
    return Response.json({ rates: [{ name: '🎉 Free Shipping', amount: '0.00', service: 'free', days: '' }], free: true })
  }

  // Canada : table eBay "rate a 14" + 3 $ (lib/shipping.js) ; repli 24.99 si aucune ligne ne correspond
  if (toCountry === 'CA') {
    return one(canadaCartRate(items, toState, toPostal) ?? FALLBACK_RATE_CAD, '5-14 business days')
  }

  // USA : Hot Wheels 16.99 + 1 $ par voiture en plus ; autres articles : ancienne logique (lib/shipping.js)
  if (toCountry === 'US') {
    return one(usCartRate(items), '7-14 business days')
  }

  return one(FALLBACK_RATE_CAD, '5-14 business days')
}
