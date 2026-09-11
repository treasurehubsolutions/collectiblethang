import './globals.css'
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
                    ⭐ 100% positive eBay feedback<br/>
                    🇨🇦 Ships from Quebec, Canada<br/>
                    ↩️ 30-day return policy
                  </div>
                </div>
              </div>
              <div style={{maxWidth:1300,margin:'0 auto',paddingTop:20,borderTop:'1px solid #1a1a20',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:8}}>
                <div style={{fontSize:11,color:'#333'}}>© 2026 The Shelf Cartel · All rights reserved · Quebec, Canada</div>
                <div style={{fontSize:11,color:'#333'}}>Toys · Collectibles · Liquidation · Discount</div>
              </div>
            </footer>
          </CartProvider>
        </LangProvider>
      </body>
    </html>
  )
}
