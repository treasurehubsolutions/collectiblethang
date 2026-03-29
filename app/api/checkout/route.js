export const dynamic = 'force-dynamic'
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
export async function POST(req) {
  try {
    const { items, customerInfo, shipping } = await req.json()
    const line_items = items.map(item => ({
      price_data: { currency:'cad', product_data:{name:item.title.substring(0,200)}, unit_amount:Math.round(item.price*100) },
      quantity: item.qty,
    }))
    if (shipping?.cost > 0) {
      line_items.push({
        price_data: { currency:'cad', product_data:{name:`Shipping — ${shipping.label}`}, unit_amount:Math.round(shipping.cost*100) },
        quantity: 1,
      })
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      customer_email: customerInfo.email,
      shipping_address_collection: { allowed_countries:['CA','US'] },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
    })
    return Response.json({url:session.url})
  } catch(e) { return Response.json({error:e.message},{status:500}) }
}
