import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
export async function POST(req) {
  try {
    const { items, customerInfo } = await req.json()
    const line_items = items.map(item => ({
      price_data: {
        currency: item.currency === 'CAD' ? 'cad' : 'usd',
        product_data: { name: item.title.substring(0,200), images: item.photos?.slice(0,1).filter(Boolean)||[] },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.qty,
    }))
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      customer_email: customerInfo.email,
      shipping_address_collection: { allowed_countries: ['CA','US'] },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
      metadata: { customer_name: customerInfo.name }
    })
    return Response.json({ url: session.url })
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}
