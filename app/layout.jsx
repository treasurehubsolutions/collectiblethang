import './globals.css'
import Script from 'next/script'
import Header from '../components/Header'
import CartProvider from '../components/CartProvider'
import TrustBar from '../components/TrustBar'
import LangProvider from '../components/LangProvider'

export const metadata = {
  title: 'The Shelf Cartel – Toys & Collectibles | Hot Wheels Star Wars Marvel Canada',
  description: 'The Shelf Cartel — discount toys and collectibles shop based in Quebec, Canada. Hot Wheels, Star Wars, Marvel, DC Comics, Transformers, LEGO, VHS, DVD, Action Figures. Ships Canada & USA.',
  keywords: 'the shelf cartel, theshelfcartel, hot wheels, star wars, marvel, dc comics, transformers, lego, action figures, vhs, dvd, collectibles, toys canada, quebec, discount toys, cheap collectibles',
  openGraph: {
    title: 'The Shelf Cartel – Discount Toys & Collectibles Quebec Canada',
    description: 'Toys & Collectibles. Hot Wheels, Star Wars, Marvel, DC, Transformers, VHS, DVD. Ships Canada & USA.',
    siteName: 'The Shelf Cartel',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bebas+Neue&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QZ9RQ1MQJF" strategy="afterInteractive"/>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QZ9RQ1MQJF');`}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2748276305566340');
          fbq('track', 'PageView');`}
        </Script>
        <LangProvider>
          <CartProvider>
            <Header/>
            <main style={{minHeight:'80vh'}}>{children}</main>
            <TrustBar/>
            <footer style={{background:'#05050a',borderTop:'1px solid #1c1c20',padding:'48px 24px 32px'}}>
              <div style={{maxWidth:1300,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:40,marginBottom:40}}>
                <div>
                  <img src="/logo.jpg" alt="The Shelf Cartel" style={{height:40,marginBottom:12}}/>
                  <div style={{fontSize:12,color:'#555',lineHeight:1.9}}>
                    Discount toys & collectibles<br/>
                    Based in Quebec, Canada 🇨🇦<br/>
                    Hot Wheels · Star Wars · Marvel · DC<br/>
                    Transformers · VHS · DVD · LEGO
                  </div>
                </div>
                <div>
                  <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#c9a227',marginBottom:12}}>Navigation</div>
                  {[['/', 'Home'],['/shop','Shop'],['/shop?sort=popular','Popular'],['/shop?sort=new','New Arrivals'],['/a-propos','About us'],['/livraison','Shipping & Returns']].map(([href,label])=>(
                    <a key={href} href={href} style={{display:'block',fontSize:13,color:'#666',marginBottom:6,textDecoration:'none'}}>{label}</a>
                  ))}
                </div>
                <div>
                  <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#c9a227',marginBottom:12}}>Popular Categories</div>
                  {['Hot Wheels','Hot Wheels Premium','Star Wars','Marvel','DC Comics','Transformers','VHS Tapes','DVD & Blu-ray'].map(cat=>(
                    <a key={cat} href={`/shop?category=${encodeURIComponent(cat)}`} style={{display:'block',fontSize:13,color:'#666',marginBottom:6,textDecoration:'none'}}>{cat}</a>
                  ))}
                </div>
                <div>
                  <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#c9a227',marginBottom:12}}>Trust & Security</div>
                  <div style={{fontSize:12,color:'#555',lineHeight:2.1}}>
                    🔒 Secure Stripe payment<br/>
                    📦 Careful packaging<br/>
                    🇨🇦 Ships from Quebec, Canada<br/>
                    ↩️ 30-day return policy
                  </div>
                  <a href="mailto:alexabran241@gmail.com" style={{display:'block',fontSize:13,color:'#666',marginTop:12,textDecoration:'none'}}>✉️ Contact Us</a>
                </div>
              </div>
              <div style={{maxWidth:1300,margin:'0 auto',paddingTop:20,borderTop:'1px solid #1a1a20',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:8,alignItems:'center'}}>
                <div style={{fontSize:11,color:'#333'}}>© 2026 The Shelf Cartel · All rights reserved · Quebec, Canada</div>
                <div style={{display:'flex',alignItems:'center',gap:16,flexWrap:'wrap'}}>
                  <a href="https://www.ebay.ca/str/collectiblethang?_tab=feedback" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:5,fontSize:11,color:'#555',textDecoration:'none'}}>
                    <img src="https://pages.ebay.com/favicon.ico" alt="eBay" style={{width:12,height:12}}/>
                    <span>⭐ 99.5% on eBay</span>
                  </a>
                  <a href="https://www.instagram.com/theshelfcartel/" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:5,fontSize:11,color:'#555',textDecoration:'none'}}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#555"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/theshelfcartel" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:5,fontSize:11,color:'#555',textDecoration:'none'}}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#555"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                  </a>
                </div>
              </div>
            </footer>
          </CartProvider>
        </LangProvider>
      </body>
    </html>
  )
}