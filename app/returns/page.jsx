import Link from 'next/link'

export const metadata = {
  title: 'Return Policy | The Shelf Cartel',
  description: '30-day return policy for toys and collectibles. The Shelf Cartel ships from Quebec, Canada.',
}

export default function ReturnsPage() {
  return (
    <div style={{maxWidth:800,margin:'0 auto',padding:'40px 24px',color:'#ccc',fontFamily:'sans-serif'}}>
      <div style={{fontSize:12,color:'#555',marginBottom:24,display:'flex',gap:6}}>
        <Link href="/" style={{color:'#666',textDecoration:'none'}}>Home</Link>
        <span>›</span>
        <span style={{color:'#aaa'}}>Return Policy</span>
      </div>

      <h1 style={{fontFamily:'Bebas Neue',fontSize:36,color:'#fff',letterSpacing:2,marginBottom:8}}>Return Policy</h1>
      <p style={{color:'#555',fontSize:13,marginBottom:40}}>Last updated: October 2024</p>

      <section style={{marginBottom:32}}>
        <h2 style={{color:'#fff',fontSize:18,fontWeight:700,marginBottom:12}}>30-Day Return Window</h2>
        <p style={{lineHeight:1.8,fontSize:14}}>
          We accept returns within <strong style={{color:'#fff'}}>30 days</strong> of the delivery date.
          Items must be in their original condition — unused, unaltered, and in original packaging where applicable.
        </p>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{color:'#fff',fontSize:18,fontWeight:700,marginBottom:12}}>How to Return</h2>
        <ol style={{lineHeight:2,fontSize:14,paddingLeft:20}}>
          <li>Contact us via eBay message or email before shipping your return.</li>
          <li>We will provide the return shipping address (Quebec, Canada).</li>
          <li>Pack the item securely in its original packaging.</li>
          <li>Ship the item back using a trackable shipping method.</li>
          <li>Once we receive and inspect the item, a refund will be issued within 3–5 business days.</li>
        </ol>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{color:'#fff',fontSize:18,fontWeight:700,marginBottom:12}}>Return Shipping Costs</h2>
        <p style={{lineHeight:1.8,fontSize:14}}>
          Return shipping costs are the responsibility of the buyer, unless the item was received damaged or is not as described.
          In that case, we will cover the return shipping cost in full.
        </p>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{color:'#fff',fontSize:18,fontWeight:700,marginBottom:12}}>Refunds</h2>
        <p style={{lineHeight:1.8,fontSize:14}}>
          Refunds are issued to the original payment method. Original shipping charges are non-refundable unless the return is due to our error.
          Refunds are processed within <strong style={{color:'#fff'}}>3–5 business days</strong> of receiving the returned item.
        </p>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{color:'#fff',fontSize:18,fontWeight:700,marginBottom:12}}>Non-Returnable Items</h2>
        <ul style={{lineHeight:2,fontSize:14,paddingLeft:20}}>
          <li>Items returned after 30 days of delivery</li>
          <li>Items that have been opened, used, or altered</li>
          <li>Items damaged by the buyer</li>
        </ul>
      </section>

      <section style={{marginBottom:32}}>
        <h2 style={{color:'#fff',fontSize:18,fontWeight:700,marginBottom:12}}>Contact Us</h2>
        <p style={{lineHeight:1.8,fontSize:14}}>
          For any return requests or questions, please contact us through eBay or at{' '}
          <a href="mailto:theshelfcartel@gmail.com" style={{color:'#c9a227'}}>theshelfcartel@gmail.com</a>.
          We respond within 24 hours.
        </p>
      </section>

      <div style={{marginTop:48,padding:'20px 24px',background:'#0f0f1c',border:'1px solid #1c1c30',borderRadius:8,fontSize:13,color:'#888'}}>
        📦 Ships from Quebec, Canada &nbsp;·&nbsp; 🇨🇦 Canada & USA &nbsp;·&nbsp; ↩️ 30-day returns &nbsp;·&nbsp; 🔒 Secure payment via Stripe
      </div>
    </div>
  )
}
