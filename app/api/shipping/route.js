export async function POST(req) {
  const { items, toCountry, toState } = await req.json()

  const subtotal = items.reduce((a, i) => a + i.price * i.qty, 0)

  if (subtotal >= 250) {
    return Response.json({ rates: [{ name: '🎉 Free Shipping', amount: '0.00', service: 'free', days: '' }], free: true })
  }

  const isQcOnt = ['QC', 'ON'].includes(toState)

  function getRate(title) {
    const t = (title || '').toLowerCase()
    const isSmall = (t.includes('hot wheels') || t.includes('matchbox')) && !t.includes('lot')
    if (isSmall) return isQcOnt ? 12.99 : 15.99
    return isQcOnt ? 24.99 : 29.99
  }

  const rate = Math.max(...items.map(i => getRate(i.title)))
  const label = isQcOnt ? 'Livraison standard (QC/ON)' : 'Livraison standard'

  return Response.json({
    rates: [{ name: label, amount: rate.toFixed(2), service: 'standard', days: '5-10 business days' }]
  })
}
