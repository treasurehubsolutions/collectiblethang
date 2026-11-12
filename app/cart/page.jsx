'use client'
import { useEffect } from 'react'
import { useCart } from '../../components/CartProvider'
import { useLang } from '../../components/LangProvider'

export default function CartPage() {
  const { items, setOpen } = useCart()
  const { lang } = useLang()
  const en = lang === 'en'

  useEffect(() => { setOpen && setOpen(true) }, [])

  return (
    <div style={{maxWidth:640,margin:'0 auto',padding:'80px 24px',textAlign:'center'}}>
      <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(32px,5vw,52px)',letterSpacing:2,color:'#fff',marginBottom:16,lineHeight:1}}>
        {en ? 'Your cart' : 'Votre panier'}
      </h1>
      <p style={{fontSize:14,color:'#888',lineHeight:1.8,marginBottom:28}}>
        {items.length === 0
          ? (en ? 'Your cart is empty.' : 'Votre panier est vide.')
          : (en ? `${items.length} item(s) in your cart.` : `${items.length} article(s) dans votre panier.`)}
      </p>
      <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
        <a href="/shop" style={{background:'#e8b820',color:'#000',padding:'12px 22px',borderRadius:6,fontWeight:700,fontSize:14,textDecoration:'none'}}>
          {en ? 'Continue shopping' : 'Continuer mes achats'}
        </a>
        {items.length > 0 && (
          <a href="/checkout" style={{background:'#cc1100',color:'#fff',padding:'12px 22px',borderRadius:6,fontWeight:700,fontSize:14,textDecoration:'none'}}>
            {en ? 'Checkout →' : 'Passer la commande →'}
          </a>
        )}
      </div>
    </div>
  )
}
