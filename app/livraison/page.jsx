'use client'
import { useLang } from '../../components/LangProvider'
import { T } from '../../lib/i18n'

export default function LivraisonPage() {
  const { lang } = useLang()
  const tx = T[lang]
  const en = lang === 'en'
  return (
    <div style={{maxWidth:860,margin:'0 auto',padding:'60px 24px'}}>
      <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(32px,5vw,52px)',letterSpacing:2,color:'#fff',marginBottom:40,lineHeight:1}}>{tx.shippingPage}</h1>
      <div style={{background:'rgba(232,184,32,.08)',border:'1px solid rgba(232,184,32,.25)',borderRadius:10,padding:'20px 24px',marginBottom:32,display:'flex',alignItems:'center',gap:14}}>
        <span style={{fontSize:32}}>🎉</span>
        <div>
          <div style={{fontWeight:800,fontSize:16,color:'#e8b820',marginBottom:4}}>{tx.freeShipping}</div>
          <div style={{fontSize:13,color:'#888'}}>{tx.freeShippingDesc}</div>
        </div>
      </div>
      <S title={en?'📦 Delivery Times':'📦 Délais de livraison'}>
        <R l={en?'Canada (QC, ON, Maritimes)':'Canada (QC, ON, Maritimes)'} v={en?'5–10 business days':'5 à 10 jours ouvrables'}/>
        <R l={en?'Canada (West, Territories)':'Canada (Ouest, Territoires)'} v={en?'7–14 business days':'7 à 14 jours ouvrables'}/>
        <R l="United States / États-Unis" v={en?'7–14 business days':'7 à 14 jours ouvrables'}/>
      </S>
      <S title={en?'💰 Shipping Rates — Canada':'💰 Frais de livraison — Canada'}>
        <R l={en?'Order $150+ CA':'Commande +150$ CA'} v={en?'FREE 🎉':'GRATUIT 🎉'}/>
        <R l={en?'Light parcel (under 500g)':'Colis léger (moins de 500g)'} v="CA$9.99 – $12.99"/>
        <R l={en?'Medium parcel (500g–1kg)':'Colis moyen (500g–1kg)'} v="CA$13.99 – $16.99"/>
        <R l={en?'Heavy parcel (1kg–2kg)':'Colis lourd (1kg–2kg)'} v="CA$18.99 – $22.99"/>
        <R l={en?'Very heavy (+2kg)':'Colis très lourd (+2kg)'} v="CA$28.99 – $34.99"/>
      </S>
      <S title={en?'🇺🇸 Shipping Rates — USA (USPS)':'🇺🇸 Frais de livraison — USA (USPS)'}>
        <R l={en?'Light (under 500g)':'Léger (moins de 500g)'} v="USD$14.99"/>
        <R l={en?'Medium (500g–1kg)':'Moyen (500g–1kg)'} v="USD$19.99"/>
        <R l={en?'Heavy (1kg–2kg)':'Lourd (1kg–2kg)'} v="USD$29.99"/>
        <R l={en?'Very heavy (+2kg)':'Très lourd (+2kg)'} v="USD$44.99"/>
      </S>
      <S title={en?'↩️ Return Policy':'↩️ Politique de retour'}>
        <p style={{fontSize:14,color:'#888',lineHeight:1.8,marginBottom:12}}>
          {en?'Returns accepted within 30 days of receiving your order, item must be in original condition.'
             :"Retours acceptés dans les 30 jours suivant la réception, article dans son état d'origine."}
        </p>
        {[
          ['✅',en?'Item not as described':'Article non conforme',en?'Full refund + return shipping covered':'Remboursement complet + frais retour'],
          ['✅',en?'Item damaged in transit':'Article endommagé durant transport',en?'Full refund or replacement':'Remboursement complet ou remplacement'],
          ['⚠️',en?'Change of mind (item intact)':'Changement avis (article intact)',en?'Refund minus return shipping':'Remboursement moins frais retour'],
          ['❌',en?'Opened or used item':'Article ouvert ou utilisé',en?'Not returnable':'Non retournable'],
        ].map(([icon,cas,action])=>(
          <div key={cas} style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:8,padding:'12px 16px',marginBottom:8}}>
            <div style={{fontSize:13,fontWeight:600,color:'#ddd',marginBottom:3}}>{icon} {cas}</div>
            <div style={{fontSize:12,color:'#666'}}>{action}</div>
          </div>
        ))}
      </S>
      <S title={en?'📧 Contact':'📧 Contact'}>
        <p style={{fontSize:14,color:'#888',lineHeight:1.8,margin:'0 0 12px'}}>
          {en?'Questions? Contact us via our eBay store. We reply within 24 hours.'
             :'Des questions ? Contactez-nous via eBay. Réponse dans les 24 heures.'}
        </p>
        <a href="https://www.ebay.com/str/collectiblethang" target="_blank"
          style={{display:'inline-block',background:'#e8b820',color:'#000',padding:'10px 20px',borderRadius:6,fontWeight:700,fontSize:13,textDecoration:'none'}}>
          {en?'Contact us on eBay →':'Nous contacter sur eBay →'}
        </a>
      </S>
    </div>
  )
}
function S({title,children}) {
  return (
    <div style={{marginBottom:32}}>
      <h2 style={{fontFamily:'Bebas Neue',fontSize:20,letterSpacing:1.5,color:'#fff',marginBottom:16,borderBottom:'1px solid #1c1c28',paddingBottom:8}}>{title}</h2>
      {children}
    </div>
  )
}
function R({l,v}) {
  return (
    <div style={{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid #1a1a28'}}>
      <span style={{fontSize:13,color:'#888'}}>{l}</span>
      <span style={{fontSize:13,fontWeight:700,color:'#e8b820'}}>{v}</span>
    </div>
  )
}
