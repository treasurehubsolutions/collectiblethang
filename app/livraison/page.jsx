'use client'
import { useLang } from '../../components/LangProvider'

export default function LivraisonPage() {
  const { lang } = useLang()
  const en = lang === 'en'

  return (
    <div style={{maxWidth:860,margin:'0 auto',padding:'60px 24px'}}>
      <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(32px,5vw,52px)',letterSpacing:2,color:'#fff',marginBottom:40,lineHeight:1}}>
        {en ? 'Shipping & Returns' : 'Livraison & Retours'}
      </h1>

      {/* Free shipping banner */}
      <div style={{background:'rgba(232,184,32,.08)',border:'1px solid rgba(232,184,32,.25)',borderRadius:10,padding:'20px 24px',marginBottom:32,display:'flex',alignItems:'center',gap:14}}>
        <span style={{fontSize:32}}>🎉</span>
        <div>
          <div style={{fontWeight:800,fontSize:16,color:'#e8b820',marginBottom:4}}>
            {en ? 'Free shipping on orders $150+ CA / $110+ US' : 'Livraison gratuite dès 150 $ CA / 110 $ US'}
          </div>
          <div style={{fontSize:13,color:'#888'}}>
            {en ? 'Applies automatically at checkout' : "S'applique automatiquement au paiement"}
          </div>
        </div>
      </div>

      {/* Delivery times */}
      <S title={en ? '📦 Delivery Times' : '📦 Délais de livraison'}>
        <R l={en ? 'Canada (all regions)' : 'Canada (toutes les régions)'} v={en ? '5–14 business days' : '5 à 14 jours ouvrables'} />
        <R l={en ? 'United States' : 'États-Unis'} v={en ? '7–14 business days' : '7 à 14 jours ouvrables'} />
      </S>

      {/* Canada rates */}
      <S title={en ? '🇨🇦 Shipping Rates — Canada (CAD)' : '🇨🇦 Frais de livraison — Canada (CAD)'}>
        <R l={en ? 'Order $150+ CA' : 'Commande 150 $ CA et plus'} v={en ? 'FREE 🎉' : 'GRATUIT 🎉'} />
        <R l={en ? 'Under 500g' : 'Moins de 500 g'} v="CA$12.99" />
        <R l={en ? '500g – 1kg' : '500 g à 1 kg'} v="CA$16.99" />
        <R l={en ? '1kg – 2kg' : '1 kg à 2 kg'} v="CA$22.99" />
        <R l={en ? 'Over 2kg' : 'Plus de 2 kg'} v="CA$34.99" />
      </S>

      {/* USA rates */}
      <S title={en ? '🇺🇸 Shipping Rates — USA (USD, via USPS)' : '🇺🇸 Frais de livraison — USA (USD, via USPS)'}>
        <R l={en ? 'Order $110+ US' : 'Commande 110 $ US et plus'} v={en ? 'FREE 🎉' : 'GRATUIT 🎉'} />
        <R l={en ? 'Under 500g' : 'Moins de 500 g'} v="US$14.99" />
        <R l={en ? '500g – 1kg' : '500 g à 1 kg'} v="US$19.99" />
        <R l={en ? '1kg – 2kg' : '1 kg à 2 kg'} v="US$29.99" />
        <R l={en ? 'Over 2kg' : 'Plus de 2 kg'} v="US$44.99" />
        <div style={{background:'rgba(232,184,32,.06)',border:'1px solid rgba(232,184,32,.15)',borderRadius:8,padding:'12px 16px',marginTop:12,fontSize:13,color:'#888',lineHeight:1.7}}>
          {en
            ? '⚠️ US import duties and taxes are the responsibility of the buyer, except for packages 250g or under — in that case, applicable tariffs are prepaid by the seller.'
            : "⚠️ Les droits de douane et taxes d'importation américaines sont à la charge de l'acheteur, sauf pour les colis de 250 g ou moins — dans ce cas, les tarifs applicables sont prépayés par le vendeur."}
        </div>
      </S>

      {/* Return policy */}
      <S title={en ? '↩️ Return Policy' : '↩️ Politique de retour'}>
        <p style={{fontSize:14,color:'#888',lineHeight:1.8,marginBottom:16}}>
          {en
            ? 'Returns accepted within 30 days of receiving your order. Items must be new, unopened, unused, and in original condition. Returns accepted for both defective and non-defective items (change of mind included). Method: by post.'
            : "Retours acceptés dans les 30 jours suivant la réception de votre commande. Les articles doivent être neufs, non ouverts, non utilisés et dans leur état d'origine. Retours acceptés pour les articles défectueux ET non défectueux (changement d'avis inclus). Méthode : par envoi postal."}
        </p>
        {[
          ['✅',
            en ? 'Item not as described' : 'Article non conforme à la description',
            en ? 'Full refund + return shipping covered by seller' : 'Remboursement complet + frais de retour remboursés par le vendeur'],
          ['✅',
            en ? 'Item damaged in transit' : 'Article endommagé durant le transport',
            en ? 'Full refund or replacement + return shipping covered' : 'Remboursement complet ou remplacement + frais de retour remboursés'],
          ['⚠️',
            en ? 'Change of mind (item unopened & intact)' : "Changement d'avis (article non ouvert et intact)",
            en ? 'Refund issued — return shipping at buyer\'s expense. No restocking fee.' : "Remboursement accordé — frais de retour à la charge de l'acheteur. Aucun frais de remise en stock."],
        ].map(([icon,cas,action])=>(
          <div key={cas} style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:8,padding:'12px 16px',marginBottom:8}}>
            <div style={{fontSize:13,fontWeight:600,color:'#ddd',marginBottom:3}}>{icon} {cas}</div>
            <div style={{fontSize:12,color:'#666'}}>{action}</div>
          </div>
        ))}
      </S>

      {/* Contact */}
      <S title={en ? '📧 Contact Us' : '📧 Nous contacter'}>
        <p style={{fontSize:14,color:'#888',lineHeight:1.8,margin:'0 0 16px'}}>
          {en
            ? 'Questions about your order, a return, or anything else? We reply within 24 hours.'
            : 'Questions sur votre commande, un retour ou autre chose ? Nous répondons dans les 24 heures.'}
        </p>
        <a href="mailto:treasurehubsolutions@gmail.com"
          style={{display:'inline-block',background:'#e8b820',color:'#000',padding:'10px 20px',borderRadius:6,fontWeight:700,fontSize:13,textDecoration:'none',marginRight:12}}>
          ✉️ treasurehubsolutions@gmail.com
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
