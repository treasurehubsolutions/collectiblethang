import './globals.css'
import Header from '../components/Header'
import CartProvider from '../components/CartProvider'
import TrustBar from '../components/TrustBar'

export const metadata = {
  title: 'Born2BeToys – Jouets & Collectibles Pas Cher | Hot Wheels, Star Wars, Marvel',
  description: 'Boutique de jouets et collectibles discount au Canada. Hot Wheels, Star Wars, Marvel, DC Comics, Transformers, LEGO, VHS, Action Figures. Liquidation de jouets vintage et tendance. Livraison Canada & USA.',
  keywords: 'jouets pas cher, collectibles discount, liquidation jouets, hot wheels, star wars, marvel, dc comics, transformers, lego, action figures, toys cheap, trending toys, diecast, figurines, VHS, vintage toys, Canada, québec, born2betoys',
  openGraph: {
    title: 'Born2BeToys – Jouets & Collectibles Discount',
    description: 'Liquidation de jouets et collectibles. Hot Wheels, Star Wars, Marvel, DC, Transformers et plus. Livraison Canada & USA.',
    url: 'https://collectiblethang.vercel.app',
    siteName: 'Born2BeToys',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://collectiblethang.vercel.app' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bebas+Neue&display=swap" rel="stylesheet"/>
        <meta name="google-site-verification" content="born2betoys"/>
      </head>
      <body>
        <CartProvider>
          <Header/>
          <main style={{minHeight:'80vh'}}>{children}</main>
          <TrustBar/>
          <footer style={{background:'#05050a',borderTop:'1px solid #1c1c28',padding:'48px 24px 32px',marginTop:0}}>
            <div style={{maxWidth:1300,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:40,marginBottom:40}}>
              <div>
                <div style={{fontFamily:'Bebas Neue',fontSize:22,color:'#e8b820',letterSpacing:2,marginBottom:10}}>Born2BeToys</div>
                <div style={{fontSize:12,color:'#555',lineHeight:1.9}}>
                  Votre boutique de jouets et collectibles discount au Canada.<br/>
                  Hot Wheels · Star Wars · Marvel · DC<br/>
                  Transformers · VHS · Action Figures · LEGO
                </div>
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#444',marginBottom:12}}>Navigation</div>
                {[['/','Accueil'],['/shop','Boutique'],['/shop?sort=popular','Populaires'],['/shop?sort=new','Nouveautés'],['/a-propos','À propos'],['/livraison','Livraison & Retours']].map(([href,label])=>(
                  <a key={href} href={href} style={{display:'block',fontSize:13,color:'#666',marginBottom:6,textDecoration:'none'}}>{label}</a>
                ))}
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#444',marginBottom:12}}>Catégories populaires</div>
                {['Hot Wheels','Hot Wheels Premium','Star Wars','Marvel','DC Comics','Transformers','WWE & Wrestling','Hallmark Ornaments'].map(cat=>(
                  <a key={cat} href={`/shop?category=${encodeURIComponent(cat)}`} style={{display:'block',fontSize:13,color:'#666',marginBottom:6,textDecoration:'none'}}>{cat}</a>
                ))}
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#444',marginBottom:12}}>Confiance & Sécurité</div>
                <div style={{fontSize:12,color:'#555',lineHeight:2.1}}>
                  🔒 Paiement 100% sécurisé Stripe<br/>
                  📦 Emballage soigné garanti<br/>
                  ⭐ 100% feedback positif eBay<br/>
                  🇨🇦 Expédié depuis le Canada<br/>
                  ↩️ Retours acceptés 30 jours
                </div>
              </div>
            </div>
            <div style={{maxWidth:1300,margin:'0 auto',paddingTop:20,borderTop:'1px solid #1a1a28',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:8}}>
              <div style={{fontSize:11,color:'#333'}}>© 2026 Born2BeToys · Tous droits réservés · Canada</div>
              <div style={{fontSize:11,color:'#333'}}>Jouets · Collectibles · Liquidation · Discount</div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
