'use client'
import Link from 'next/link'
import { useLang } from '../../components/LangProvider'

export default function ContactPage() {
  const { lang } = useLang()
  const en = lang === 'en'
  const box = {background:'#12121e',border:'1px solid #1c1c28',borderRadius:10,padding:'20px 24px',marginBottom:16}
  const h2 = {fontFamily:'Bebas Neue',fontSize:20,letterSpacing:1.5,color:'#fff',marginBottom:10}
  const p = {fontSize:14,color:'#888',lineHeight:1.8,margin:0}
  return (
    <div style={{maxWidth:800,margin:'0 auto',padding:'60px 24px'}}>
      <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(32px,5vw,52px)',letterSpacing:2,color:'#fff',marginBottom:12,lineHeight:1}}>
        {en ? 'Contact Us' : 'Nous contacter'}
      </h1>
      <p style={{...p,marginBottom:32}}>
        {en
          ? 'The Shelf Cartel is an online shop based in Quebec, Canada, selling toys and collectibles in Canada and the United States. We answer every message within 24 hours.'
          : 'The Shelf Cartel est une boutique en ligne du Québec, Canada, qui vend des jouets et articles de collection au Canada et aux États-Unis. Nous répondons à chaque message dans les 24 heures.'}
      </p>
      <div style={box}>
        <h2 style={h2}>{en ? 'Email' : 'Courriel'}</h2>
        <p style={p}>
          <a href="mailto:theshelfcartel@gmail.com" style={{color:'#e8b820',fontWeight:700}}>theshelfcartel@gmail.com</a>
        </p>
        <p style={{...p,marginTop:8}}>
          {en ? 'Please include your order number if your question is about an order.' : 'Indiquez votre numéro de commande si votre question concerne une commande.'}
        </p>
      </div>
      <div style={box}>
        <h2 style={h2}>{en ? 'Contact us on Messenger' : 'Contactez-nous sur Messenger'}</h2>
        <p style={{...p,marginBottom:12}}>
          {en ? 'Send us a message on Messenger. We reply within 24 hours.' : 'Écrivez-nous sur Messenger. Nous répondons dans les 24 heures.'}
        </p>
        <a href="https://m.me/theshelfcartel" target="_blank" rel="noopener noreferrer"
          style={{display:'inline-block',background:'#1877f2',color:'#fff',padding:'10px 20px',borderRadius:6,fontWeight:700,fontSize:13,textDecoration:'none'}}>
          💬 {en ? 'Contact us on Messenger' : 'Contactez-nous sur Messenger'}
        </a>
      </div>
      <div style={box}>
        <h2 style={h2}>{en ? 'Orders, shipping and returns' : 'Commandes, livraison et retours'}</h2>
        <p style={p}>
          {en ? 'Delivery times, shipping rates and our 30-day return policy are on the ' : 'Les délais, frais de livraison et notre politique de retour de 30 jours sont sur la page '}
          <Link href="/livraison" style={{color:'#e8b820'}}>{en ? 'Shipping & Returns' : 'Livraison & Retours'}</Link>
          {en ? ' page.' : '.'}
        </p>
      </div>
      <div style={box}>
        <h2 style={h2}>{en ? 'Find us elsewhere' : 'Nous trouver ailleurs'}</h2>
        <p style={p}>
          <a href="https://www.ebay.ca/str/collectiblethang" target="_blank" rel="noopener noreferrer" style={{color:'#e8b820'}}>eBay (theshelfcartel)</a>{' · '}
          <a href="https://www.instagram.com/theshelfcartel/" target="_blank" rel="noopener noreferrer" style={{color:'#e8b820'}}>Instagram</a>{' · '}
          <a href="https://www.facebook.com/theshelfcartel" target="_blank" rel="noopener noreferrer" style={{color:'#e8b820'}}>Facebook</a>
        </p>
      </div>
      <p style={{fontSize:12,color:'#555',marginTop:24}}>
        <Link href="/privacy-policy" style={{color:'#666'}}>{en ? 'Privacy Policy' : 'Politique de confidentialité'}</Link>{' · '}
        <Link href="/terms" style={{color:'#666'}}>{en ? 'Terms of Sale' : 'Conditions de vente'}</Link>
      </p>
    </div>
  )
}
