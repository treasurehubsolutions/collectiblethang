import './globals.css'
import Header from '../components/Header'
import CartProvider from '../components/CartProvider'
export const metadata = {
  title: 'COLLECTIBLETHANG – Vintage Toys & Collectibles',
  description: 'Hot Wheels, Action Figures, Star Wars, Marvel, DC, VHS, LEGO et plus.',
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
          <Header/>
          <main style={{minHeight:'80vh'}}>{children}</main>
          <footer style={{background:'#08080e',borderTop:'1px solid #1c1c28',padding:'32px 24px',textAlign:'center',color:'#444',fontSize:12,marginTop:60}}>
            <div style={{fontFamily:'Bebas Neue',fontSize:20,color:'#e8b820',letterSpacing:2,marginBottom:6}}>COLLECTIBLETHANG</div>
            <div>Vintage Treasures & Collectibles · Paiement sécurisé Stripe</div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
