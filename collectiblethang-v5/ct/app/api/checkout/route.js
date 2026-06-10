import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const { items, customerInfo, shipping } = await req.json()
    
    const lineItems = items.map(item => ({
      price_data: {
        currency: 'cad',
        product_data: { name: item.title, images: item.photos?.[0] ? [item.photos[0]] : [] },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.qty,
    }))

    if (shipping && shipping.cost > 0) {
      lineItems.push({
        price_data: {
          currency: 'cad',
          product_data: { name: `Shipping — ${shipping.label}` },
          unit_amount: Math.round(shipping.cost * 100),
        },
        quantity: 1,
      })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
      customer_email: customerInfo?.email,
      metadata: { customer: JSON.stringify(customerInfo) },
    })

    return NextResponse.json({ url: session.url })
  } catch(e) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
