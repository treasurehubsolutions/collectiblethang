'use client'
import { useLang } from '../../components/LangProvider'
import { T } from '../../lib/i18n'

export default function LivraisonPage() {
  const { lang } = useLang()
  const tx = T[lang]
  const isEn = lang === 'en'
  return (
    <div style={{maxWidth:860,margin:'0 auto',padding:'60px 24px'}}>
      <div style={{fontFamily:'Bebas Neue',fontSize:12,letterSpacing:4,color:'#e8b820',textTransform:'uppercase',marginBottom:8}}>
        {isEn ? 'Information' : 'Informations'}
      </div>
      <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(32px,5vw,52px)',letterSpacing:2,color:'#fff',marginBottom:40,lineHeight:1}}>
        {tx.shippingPage}
      </h1>

      <div style={{background:'rgba(232,184,32,.08)',border:'1px solid rgba(232,184,32,.25)',borderRadius:10,padding:'20px 24px',marginBottom:32,display:'flex',alignItems:'center',gap:14}}>
        <span style={{fontSize:32}}>🎉</span>
        <div>
          <div style={{fontWeight:800,fontSize:16,color:'#e8b820',marginBottom:4}}>{tx.freeShipping}</div>
          <div style={{fontSize:13,color:'#888'}}>{tx.freeShippingDesc}</div>
        </div>
      </div>

      <Section title={isEn ? '📦 Delivery Times' : '📦 Délais de livraison'}>
        <Row label={isEn ? 'Canada (QC, ON, Maritimes)' : 'Canada (QC, ON, Maritimes)'} value={isEn ? '5–10 business days' : '5 à 10 jours ouvrables'}/>
        <Row label={isEn ? 'Canada (West, Territories)' : 'Canada (Ouest, Territoires)'} value={isEn ? '7–14 business days' : '7 à 14 jours ouvrables'}/>
        <Row label="United States / États-Unis" value={isEn ? '7–14 business days' : '7 à 14 jours ouvrables'}/>
      </Section>

      <Section title={isEn ? '💰 Shipping Rates — Canada' : '💰 Frais de livraison — Canada'}>
        <Row label={isEn ? 'Order $150+ CA' : 'Commande +150$ CA'} value={isEn ? 'FREE 🎉' : 'GRATUIT 🎉'}/>
        <Row label={isEn ? 'Light parcel (under 500g)' : 'Colis léger (moins de 500g)'} value="CA$9.99 – $12.99"/>
        <Row label={isEn ? 'Medium parcel (500g–1kg)' : 'Colis moyen (500g–1kg)'} value="CA$13.99 – $16.99"/>
        <Row label={isEn ? 'Heavy parcel (1kg–2kg)' : 'Colis lourd (1kg–2kg)'} value="CA$18.99 – $22.99"/>
        <Row label={isEn ? 'Very heavy (+2kg)' : 'Colis très lourd (+2kg)'} value="CA$28.99 – $34.99"/>
      </Section>

      <Section title={isEn ? '🇺🇸 Shipping Rates — USA (USPS)' : '🇺🇸 Frais de livraison — États-Unis (USPS)'}>
        <Row label={isEn ? 'Light parcel (under 500g)' : 'Colis léger (moins de 500g)'} value="USD$14.99"/>
        <Row label={isEn ? 'Medium parcel (500g–1kg)' : 'Colis moyen (500g–1kg)'} value="USD$19.99"/>
        <Row label={isEn ? 'Heavy parcel (1kg–2kg)' : 'Colis lourd (1kg–2kg)'} value="USD$29.99"/>
        <Row label={isEn ? 'Very heavy (+2kg)' : 'Colis très lourd (+2kg)'} value="USD$44.99"/>
      </Section>

      <Section title={isEn ? '↩️ Return Policy' : '↩️ Politique de retour'}>
        <p style={{fontSize:14,color:'#888',lineHeight:1.8,marginBottom:12}}>
          {isEn
            ? 'We accept returns within 30 days of receiving your order, provided the item is in its original condition.'
            : 'Nous acceptons les retours dans les 30 jours suivant la réception, sous réserve que l'article soit dans son état d'origine.'}
        </p>
        {[
          ['✅', isEn?'Item not as described':'Article non conforme', isEn?'Full refund + return shipping covered':'Remboursement complet + frais retour couverts'],
          ['✅', isEn?'Item damaged in transit':'Article endommagé durant transport', isEn?'Full refund or replacement':'Remboursement complet ou remplacement'],
          ['⚠️', isEn?'Change of mind (item intact)':'Changement d'avis (article intact)', isEn?'Refund minus return shipping':'Remboursement moins frais de retour'],
          ['❌', isEn?'Opened or used item':'Article ouvert ou utilisé', isEn?'Not returnable':'Non retournable'],
        ].map(([icon,cas,action])=>(
          <div key={cas} style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:8,padding:'12px 16px',marginBottom:8}}>
            <div style={{fontSize:13,fontWeight:600,color:'#ddd',marginBottom:3}}>{icon} {cas}</div>
            <div style={{fontSize:12,color:'#666'}}>{action}</div>
          </div>
        ))}
      </Section>

      <Section title={isEn ? '📧 Contact us' : '📧 Nous contacter'}>
        <p style={{fontSize:14,color:'#888',lineHeight:1.8,margin:'0 0 12px'}}>
          {isEn
            ? 'For any questions about an order, return or delivery, contact us via our eBay store. We reply within 24 hours.'
            : 'Pour toute question concernant une commande, un retour ou une livraison, contactez-nous via eBay. Nous répondons dans les 24 heures.'}
        </p>
        <a href="https://www.ebay.com/str/collectiblethang" target="_blank"
          style={{display:'inline-block',background:'#e8b820',color:'#000',padding:'10px 20px',borderRadius:6,fontWeight:700,fontSize:13,textDecoration:'none'}}>
          {isEn ? 'Contact us on eBay →' : 'Nous contacter sur eBay →'}
        </a>
      </Section>
    </div>
  )
}

function Section({title,children}) {
  return (
    <div style={{marginBottom:32}}>
      <h2 style={{fontFamily:'Bebas Neue',fontSize:20,letterSpacing:1.5,color:'#fff',marginBottom:16,borderBottom:'1px solid #1c1c28',paddingBottom:8}}>{title}</h2>
      {children}
    </div>
  )
}
function Row({label,value}) {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',borderBottom:'1px solid #1a1a28'}}>
      <span style={{fontSize:13,color:'#888'}}>{label}</span>
      <span style={{fontSize:13,fontWeight:700,color:'#e8b820'}}>{value}</span>
    </div>
  )
}
