import './globals.css'
import Header from '../components/Header'
import CartProvider from '../components/CartProvider'

export const metadata = {
  title: 'COLLECTIBLETHANG – Vintage Toys & Collectibles',
  description: '1974 articles. Hot Wheels, Action Figures, Star Wars, Marvel, DC, VHS, LEGO et plus.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bebas+Neue&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <CartProvider>
          <Header />
          <main style={{minHeight:'80vh'}}>{children}</main>
          <footer style={{background:'#08080e',borderTop:'1px solid #1c1c28',padding:'40px 24px',marginTop:60}}>
            <div style={{maxWidth:1300,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:32}}>
              <div>
                <div style={{fontFamily:'Bebas Neue',fontSize:24,color:'#e8b820',letterSpacing:2,marginBottom:8}}>COLLECTIBLETHANG</div>
                <div style={{fontSize:12,color:'#555',lineHeight:1.8}}>Vintage Treasures & Collectibles<br/>Hot Wheels · Action Figures · VHS<br/>Star Wars · Marvel · DC · LEGO</div>
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#555',marginBottom:10}}>Navigation</div>
                {[['/ ','Accueil'],['/shop','Boutique'],['/shop?sort=popular','Populaires'],['/shop?sort=new','Nouveautés']].map(([href,label])=>(
                  <a key={href} href={href} style={{display:'block',fontSize:13,color:'#888',marginBottom:5,textDecoration:'none'}}>{label}</a>
                ))}
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#555',marginBottom:10}}>Catégories populaires</div>
                {['Hot Wheels','Star Wars','Marvel','DC Comics','Transformers','WWE & Wrestling'].map(cat=>(
                  <a key={cat} href={`/shop?category=${encodeURIComponent(cat)}`} style={{display:'block',fontSize:13,color:'#888',marginBottom:5,textDecoration:'none'}}>{cat}</a>
                ))}
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#555',marginBottom:10}}>Info</div>
                <div style={{fontSize:12,color:'#555',lineHeight:1.9}}>
                  ✅ 100% Feedback Positif<br/>
                  📦 Emballage sécurisé<br/>
                  🔒 Paiement Stripe SSL<br/>
                  🇨🇦 Basé au Canada
                </div>
              </div>
            </div>
            <div style={{maxWidth:1300,margin:'24px auto 0',paddingTop:20,borderTop:'1px solid #1c1c28',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:8}}>
              <div style={{fontSize:11,color:'#444'}}>© 2026 COLLECTIBLETHANG · Tous droits réservés</div>
              <div style={{fontSize:11,color:'#444'}}>Paiements sécurisés par Stripe</div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
