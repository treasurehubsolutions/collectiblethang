import './globals.css'
import Header from '../components/Header'
import CartProvider from '../components/CartProvider'
import TrustBar from '../components/TrustBar'
import LangProvider from '../components/LangProvider'

export const metadata = {
  title: 'Born2BeToys – Toys & Collectibles Cheap | Hot Wheels Star Wars Marvel Discount Canada',
  description: 'Discount toys and collectibles shop based in Quebec, Canada. Hot Wheels, Star Wars, Marvel, DC Comics, Transformers, LEGO, VHS, Action Figures. Toy liquidation and trending toys. Shipping Canada & USA.',
  keywords: 'cheap toys, discount collectibles, toy liquidation, trending toys, hot wheels, star wars, marvel, dc comics, transformers, lego, action figures, funko pop, diecast, vintage toys, Quebec Canada, born2betoys, deals, toy store canada',
  openGraph: {
    title: 'Born2BeToys – Discount Toys & Collectibles Quebec Canada',
    description: 'Toy liquidation. Hot Wheels, Star Wars, Marvel, DC, Transformers. Ships Canada & USA.',
    siteName: 'Born2BeToys',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
            <footer style={{background:'#05050a',borderTop:'1px solid #1c1c28',padding:'48px 24px 32px'}}>
              <div style={{maxWidth:1300,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:40,marginBottom:40}}>
                <div>
                  <div style={{fontFamily:'Bebas Neue',fontSize:22,color:'#d4a800',letterSpacing:2,marginBottom:10}}>Born2BeToys</div>
                  <div style={{fontSize:12,color:'#555',lineHeight:1.9}}>
                    Discount toys & collectibles<br/>
                    Based in Quebec, Canada 🇨🇦<br/>
                    Hot Wheels · Star Wars · Marvel · DC<br/>
                    Transformers · VHS · LEGO
                  </div>
                </div>
                <div>
                  <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#444',marginBottom:12}}>Navigation</div>
                  {[['/', 'Home'],['/shop','Shop'],['/shop?sort=popular','Popular'],['/shop?sort=new','New Arrivals'],['/a-propos','About us'],['/livraison','Shipping & Returns']].map(([href,label])=>(
                    <a key={href} href={href} style={{display:'block',fontSize:13,color:'#666',marginBottom:6,textDecoration:'none'}}>{label}</a>
                  ))}
                </div>
                <div>
                  <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#444',marginBottom:12}}>Popular Categories</div>
                  {['Hot Wheels','Hot Wheels Premium','Star Wars','Marvel','DC Comics','Transformers','WWE & Wrestling','Hallmark Ornaments'].map(cat=>(
                    <a key={cat} href={`/shop?category=${encodeURIComponent(cat)}`} style={{display:'block',fontSize:13,color:'#666',marginBottom:6,textDecoration:'none'}}>{cat}</a>
                  ))}
                </div>
                <div>
                  <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#444',marginBottom:12}}>Trust & Security</div>
                  <div style={{fontSize:12,color:'#555',lineHeight:2.1}}>
                    🔒 100% secure Stripe payment<br/>
                    📦 Careful packaging guaranteed<br/>
                    ⭐ 100% positive eBay feedback<br/>
                    🇨🇦 Ships from Quebec, Canada<br/>
                    ↩️ 30-day return policy
                  </div>
                </div>
              </div>
              <div style={{maxWidth:1300,margin:'0 auto',paddingTop:20,borderTop:'1px solid #1a1a28',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:8}}>
                <div style={{fontSize:11,color:'#333'}}>© 2026 Born2BeToys · All rights reserved · Quebec, Canada</div>
                <div style={{fontSize:11,color:'#333'}}>Toys · Collectibles · Liquidation · Discount</div>
              </div>
            </footer>
          </CartProvider>
        </LangProvider>
      </body>
    </html>
  )
}
