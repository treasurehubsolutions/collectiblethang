'use client'
import Link from 'next/link'
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
        <span aria-hidden="true" style={{fontSize:32}}>🎉</span>
        <div>
          <div style={{fontWeight:800,fontSize:16,color:'#e8b820',marginBottom:4}}>
            {en ? 'Free shipping on orders $150+ CA / $110+ US' : 'Livraison gratuite dès 150 $ CA / 110 $ US'}
          </div>
          <div style={{fontSize:13,color:'#a0a0ae'}}>
            {en ? 'Applies automatically at checkout' : "S'applique automatiquement au paiement"}
          </div>
        </div>
      </div>

      {/* Delivery times */}
      <S title={en ? '📦 Delivery Times' : '📦 Délais de livraison'}>
        <R l={en ? 'Canada (all regions)' : 'Canada (toutes les régions)'} v={en ? '5–14 business days' : '5 à 14 jours ouvrables'} />
        <R l={en ? 'United States' : 'États-Unis'} v={en ? '7–14 business days' : '7 à 14 jours ouvrables'} />
      </S>

      {/* Canada rates : provincial tables (keep in sync with lib/shipping.js) */}
      <S title={en ? '🇨🇦 Shipping Rates — Canada (CAD)' : '🇨🇦 Frais de livraison — Canada (CAD)'}>
        <R l={en ? 'Order $150+ CA' : 'Commande 150 $ CA et plus'} v={en ? 'FREE 🎉' : 'GRATUIT 🎉'} />
        <div>
          {[
            ['Ontario (urbain / urban)','17.00'],
            ['Québec (urbain / urban)','17.00'],
            ['Ontario rural','19.99'],
            ['Québec rural','21.00'],
            ['AB / MB / SK urbain / urban','20.00'],
            ['Alberta / Manitoba rural','21.99'],
            ['Saskatchewan rural','23.00'],
            ['BC urbain / urban','21.00'],
            ['BC rural','25.00'],
            ['NB','19.50'],
            ['NS / PE / NL','20.99'],
            ['YT / NT / NU','28.00'],
          ].map(([l,v])=>(<R key={l} l={l} v={'CA$'+v} />))}
        </div>
        <p style={{fontSize:12,color:'#9a9aa8',lineHeight:1.7,marginTop:12}}>
          {en
            ? 'Rate depends on your province and whether your postal code is rural (second character is 0). Your exact rate is shown at checkout; if no rate applies, CA$24.99.'
            : "Le tarif dépend de votre province et de la zone rurale ou non (2e caractère du code postal = 0). Le tarif exact s'affiche au paiement ; si aucun tarif ne s'applique, 24,99 $ CA."}
        </p>
      </S>

      {/* Hot Wheels (Canada) : keep in sync with lib/shipping.js */}
      <S title={en ? '🚗 Hot Wheels, Matchbox & die-cast cars — Canada (CAD)' : '🚗 Hot Wheels, Matchbox et voitures miniatures — Canada (CAD)'}>
        <p style={{fontSize:13,color:'#a0a0ae',lineHeight:1.7,margin:'0 0 12px'}}>
          {en
            ? 'Single cars (Hot Wheels mainline, Silver Series and Premium, Matchbox, Matchbox Collectors, M2 Machines, Johnny Lightning, Disney Pixar Cars 1:55) ship at a reduced rate: from CA$11.89 for one car (Ontario/Québec urban). Each additional car adds CA$1.25 (mainline), CA$2.75 (Premium, Matchbox Collectors, M2, Johnny Lightning, Disney Pixar Cars). USA: from US$16.99 for the first car, same additions.'
            : "Les voitures seules (Hot Wheels mainline, Silver Series et Premium, Matchbox, Matchbox Collectors, M2 Machines, Johnny Lightning, Disney Pixar Cars 1:55) ont un tarif réduit : à partir de 11,89 $ CA pour une voiture (Ontario/Québec urbain). Chaque voiture additionnelle ajoute 1,25 $ (mainline), 2,75 $ (Premium, Matchbox Collectors, M2, Johnny Lightning, Disney Pixar Cars). USA : à partir de 16,99 $ US pour la première voiture, mêmes ajouts."}
        </p>
      </S>

      {/* VHS (Canada) : keep in sync with lib/shipping.js */}
      <S title={en ? '📼 VHS Tapes — Canada (CAD)' : '📼 Cassettes VHS — Canada (CAD)'}>
        <p style={{fontSize:13,color:'#a0a0ae',lineHeight:1.7,margin:0}}>
          {en
            ? 'From CA$11.99 for one tape (Ontario/Québec), CA$14.99 (Atlantic), CA$16.99 (Prairies/BC), CA$18.99 (North). Each additional tape adds CA$1.50 (tapes 2 to 4), CA$2.00 (tapes 5 to 8), CA$2.75 (tapes 9 to 12) and CA$3.25 (13th tape and up).'
            : "À partir de 11,99 $ CA pour une cassette (Ontario/Québec), 14,99 $ (Atlantique), 16,99 $ (Prairies/CB), 18,99 $ (Nord). Chaque cassette additionnelle ajoute 1,50 $ (cassettes 2 à 4), 2,00 $ (cassettes 5 à 8), 2,75 $ (cassettes 9 à 12) et 3,25 $ (13e cassette et plus)."}
        </p>
      </S>

      {/* USA rates */}
      <S title={en ? '🇺🇸 Shipping Rates — USA (USD, via USPS)' : '🇺🇸 Frais de livraison — USA (USD, via USPS)'}>
        <R l={en ? 'Order $110+ US' : 'Commande 110 $ US et plus'} v={en ? 'FREE 🎉' : 'GRATUIT 🎉'} />
        <R l={en ? 'Under 500g' : 'Moins de 500 g'} v="US$14.99" />
        <R l={en ? '500g – 1kg' : '500 g à 1 kg'} v="US$19.99" />
        <R l={en ? '1kg – 2kg' : '1 kg à 2 kg'} v="US$29.99" />
        <R l={en ? 'Over 2kg' : 'Plus de 2 kg'} v="US$44.99" />
        <div style={{background:'rgba(232,184,32,.06)',border:'1px solid rgba(232,184,32,.15)',borderRadius:8,padding:'12px 16px',marginTop:12,fontSize:13,color:'#a0a0ae',lineHeight:1.7}}>
          {en
            ? '⚠️ US import duties and taxes are the responsibility of the buyer, except for packages 250g or under — in that case, applicable tariffs are prepaid by the seller.'
            : "⚠️ Les droits de douane et taxes d'importation américaines sont à la charge de l'acheteur, sauf pour les colis de 250 g ou moins — dans ce cas, les tarifs applicables sont prépayés par le vendeur."}
        </div>
      </S>

      {/* Return policy */}
      <S title={en ? '↩️ Return Policy' : '↩️ Politique de retour'}>
        <p style={{fontSize:14,color:'#a0a0ae',lineHeight:1.8,marginBottom:16}}>
          {en
            ? 'Returns accepted within 30 days of receiving your order. Items must be new, unopened, unused, and in original condition. Returns accepted for both defective and non-defective items (change of mind included). Method: by post. To start a return, email us first; we reply within 24 hours with the return instructions and address. Refunds are issued to the original payment method within 3–5 business days of receiving the returned item.'
            : "Retours acceptés dans les 30 jours suivant la réception de votre commande. Les articles doivent être neufs, non ouverts, non utilisés et dans leur état d'origine. Retours acceptés pour les articles défectueux ET non défectueux (changement d'avis inclus). Méthode : par envoi postal. Pour amorcer un retour, écrivez-nous d'abord; nous répondons dans les 24 heures avec les instructions et l'adresse de retour. Les remboursements sont émis au mode de paiement d'origine dans les 3 à 5 jours ouvrables suivant la réception de l'article retourné."}
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
            <div style={{fontSize:12,color:'#9a9aa8'}}>{action}</div>
          </div>
        ))}
      </S>

      {/* Contact */}
      <S title={en ? '📧 Contact Us' : '📧 Nous contacter'}>
        <p style={{fontSize:14,color:'#a0a0ae',lineHeight:1.8,margin:'0 0 16px'}}>
          {en
            ? 'Questions about your order, a return, or anything else? We reply within 24 hours.'
            : 'Questions sur votre commande, un retour ou autre chose ? Nous répondons dans les 24 heures.'}
        </p>
        <a href="mailto:theshelfcartel@gmail.com"
          style={{display:'inline-block',background:'#e8b820',color:'#000',padding:'10px 20px',borderRadius:6,fontWeight:700,fontSize:13,textDecoration:'none',marginRight:12}}>
          <span aria-hidden="true">✉️</span> theshelfcartel@gmail.com
        </a>
        <nav aria-label={en ? 'Related pages' : 'Pages connexes'} style={{fontSize:13,color:'#9a9aa8',lineHeight:1.8,margin:'16px 0 0'}}>
          <Link href="/contact" style={{color:'#e8b820'}}>{en ? 'All contact options' : 'Toutes les façons de nous joindre'}</Link>{' · '}
          <Link href="/returns" style={{color:'#e8b820'}}>{en ? 'Full return policy' : 'Politique de retour complète'}</Link>{' · '}
          <Link href="/faq" style={{color:'#e8b820'}}>FAQ</Link>
        </nav>
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
      <span style={{fontSize:13,color:'#a0a0ae'}}>{l}</span>
      <span style={{fontSize:13,fontWeight:700,color:'#e8b820'}}>{v}</span>
    </div>
  )
}
