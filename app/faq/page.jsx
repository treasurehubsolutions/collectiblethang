'use client'
import { useLang } from '../../components/LangProvider'

const FAQ = [
  {
    q: ['How long does delivery take?', 'Quels sont les délais de livraison ?'],
    a: ['Canada: 5–14 business days. United States: 7–14 business days.', 'Canada : 5 à 14 jours ouvrables. États-Unis : 7 à 14 jours ouvrables.'],
  },
  {
    q: ['How much is shipping?', 'Combien coûte la livraison ?'],
    a: ['Shipping is free on orders of CA$150+ (Canada) or US$110+ (USA). Below that, rates depend on weight and start at CA$12.99 (Canada) or US$14.99 (USA). See the Shipping page for the full table.', 'La livraison est gratuite dès 150 $ CA (Canada) ou 110 $ US (États-Unis). Sous ce seuil, les frais dépendent du poids et commencent à 12,99 $ CA (Canada) ou 14,99 $ US (États-Unis). Voir la page Livraison pour le tableau complet.'],
  },
  {
    q: ['Do you ship to the United States?', 'Livrez-vous aux États-Unis ?'],
    a: ['Yes, via USPS. US import duties and taxes are the buyer\'s responsibility, except for packages of 250 g or less, where applicable tariffs are prepaid by us.', "Oui, via USPS. Les droits de douane et taxes d'importation américaines sont à la charge de l'acheteur, sauf pour les colis de 250 g ou moins, où les tarifs applicables sont prépayés par nous."],
  },
  {
    q: ['Can I return an item?', 'Puis-je retourner un article ?'],
    a: ['Yes, within 30 days of receiving your order. Items must be new, unopened, unused and in original condition. Email us first and we reply within 24 hours with the return instructions. Refunds go to your original payment method within 3–5 business days of receiving the item.', "Oui, dans les 30 jours suivant la réception. Les articles doivent être neufs, non ouverts, non utilisés et dans leur état d'origine. Écrivez-nous d'abord; nous répondons dans les 24 heures avec les instructions. Le remboursement est émis au mode de paiement d'origine dans les 3 à 5 jours ouvrables suivant la réception de l'article."],
  },
  {
    q: ['Who pays return shipping?', 'Qui paie les frais de retour ?'],
    a: ['We do if the item is not as described or was damaged in transit. For a change of mind, return shipping is at the buyer\'s expense, with no restocking fee.', "Nous les payons si l'article est non conforme ou endommagé durant le transport. Pour un changement d'avis, les frais de retour sont à la charge de l'acheteur, sans frais de remise en stock."],
  },
  {
    q: ['What if an item is unavailable after I order?', "Que se passe-t-il si un article n'est plus disponible après ma commande ?"],
    a: ['Our items are also sold on other platforms. If an item is no longer available, a full refund is issued right away to your credit card.', "Nos articles sont aussi vendus sur d'autres plateformes. Si un article n'est plus disponible, un remboursement complet est émis immédiatement sur votre carte de crédit."],
  },
  {
    q: ['Is there a promotion on Hot Wheels?', 'Y a-t-il une promotion sur les Hot Wheels ?'],
    a: ['Yes: buy 3 eligible Hot Wheels under CA$10 and the cheapest one is free. The discount is applied automatically in your cart.', 'Oui : pour 3 Hot Wheels admissibles à moins de 10 $ CA, le moins cher est gratuit. Le rabais s\'applique automatiquement dans votre panier.'],
  },
  {
    q: ['How do I pay?', 'Comment payer ?'],
    a: ['Payment is by credit card through Stripe, a secure payment processor. We never see or store your card number.', 'Le paiement se fait par carte de crédit via Stripe, un processeur de paiement sécurisé. Nous ne voyons ni ne conservons votre numéro de carte.'],
  },
  {
    q: ['How can I contact you?', 'Comment vous joindre ?'],
    a: ['Email theshelfcartel@gmail.com. We reply within 24 hours.', 'Écrivez à theshelfcartel@gmail.com. Nous répondons dans les 24 heures.'],
  },
]

export default function FaqPage() {
  const { lang } = useLang()
  const i = lang === 'en' ? 0 : 1

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(f => ({
      '@type': 'Question',
      name: f.q[i],
      acceptedAnswer: { '@type': 'Answer', text: f.a[i] },
    })),
  }

  return (
    <div style={{maxWidth:860,margin:'0 auto',padding:'60px 24px'}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(32px,5vw,52px)',letterSpacing:2,color:'#fff',marginBottom:40,lineHeight:1}}>
        {i === 0 ? 'Frequently Asked Questions' : 'Foire aux questions'}
      </h1>
      {FAQ.map((f, n) => (
        <div key={n} style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:8,padding:'16px 20px',marginBottom:10}}>
          <h2 style={{fontSize:15,fontWeight:700,color:'#e8b820',margin:'0 0 8px'}}>{f.q[i]}</h2>
          <p style={{fontSize:14,color:'#888',lineHeight:1.8,margin:0}}>{f.a[i]}</p>
        </div>
      ))}
      <div style={{marginTop:28,display:'flex',gap:12,flexWrap:'wrap'}}>
        <a href="/livraison" style={{color:'#e8b820',fontSize:13}}>{i === 0 ? 'Shipping & Returns' : 'Livraison & Retours'}</a>
        <a href="/contact" style={{color:'#e8b820',fontSize:13}}>Contact</a>
      </div>
    </div>
  )
}
