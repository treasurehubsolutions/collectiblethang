'use client'
import Link from 'next/link'
import { useLang } from '../../components/LangProvider'

const EMAIL = 'theshelfcartel@gmail.com'

const SECTIONS = [
  {
    t: ['About these terms', 'À propos de ces conditions'],
    b: [
      'These terms apply to purchases made on theshelfcartel.com, an online shop operated from Quebec, Canada under the name The Shelf Cartel (also selling on eBay as theshelfcartel). By placing an order you agree to them.',
      'Ces conditions s’appliquent aux achats faits sur theshelfcartel.com, une boutique en ligne exploitée du Québec, Canada, sous le nom The Shelf Cartel (aussi présente sur eBay sous theshelfcartel). En passant une commande, vous les acceptez.',
    ],
  },
  {
    t: ['Products and condition', 'Produits et état'],
    b: [
      'We sell toys and collectibles, new and pre-owned. Each listing shows real photos and states the condition. Colours may vary slightly depending on your screen. Stock is limited and an item may sell out before your order is confirmed; if so we will refund you in full.',
      'Nous vendons des jouets et articles de collection, neufs et d’occasion. Chaque fiche présente de vraies photos et indique l’état. Les couleurs peuvent varier légèrement selon votre écran. Les quantités sont limitées et un article peut être vendu avant la confirmation de votre commande; le cas échéant, nous vous remboursons en totalité.',
    ],
  },
  {
    t: ['Prices and payment', 'Prix et paiement'],
    b: [
      'Prices are shown in the currency displayed at checkout. Applicable taxes and shipping are shown before you pay. Payment is made by credit or debit card through Stripe. An order is confirmed once payment is accepted.',
      'Les prix sont indiqués dans la devise affichée au paiement. Les taxes applicables et la livraison sont indiquées avant de payer. Le paiement se fait par carte de crédit ou de débit via Stripe. Une commande est confirmée une fois le paiement accepté.',
    ],
  },
  {
    t: ['Shipping', 'Livraison'],
    b: [
      'We ship from Quebec to Canada and the United States. Rates, free-shipping thresholds, delivery times and customs information are on the Shipping & Returns page. Delivery times are estimates and are not guaranteed.',
      'Nous expédions du Québec vers le Canada et les États-Unis. Les tarifs, seuils de livraison gratuite, délais et renseignements sur les douanes se trouvent sur la page Livraison & Retours. Les délais sont des estimations et ne sont pas garantis.',
    ],
  },
  {
    t: ['Returns and refunds', 'Retours et remboursements'],
    b: [
      'You may return an item within 30 days of delivery if it is new, unopened and unused. Email us first to receive the return instructions. Refunds go to the original payment method within 3 to 5 business days of receiving the item. If an item is damaged or not as described, we cover the return shipping. Details are on the Shipping & Returns and Return Policy pages.',
      'Vous pouvez retourner un article dans les 30 jours suivant la livraison s’il est neuf, non ouvert et non utilisé. Écrivez-nous d’abord pour recevoir les instructions de retour. Les remboursements sont faits au mode de paiement d’origine dans les 3 à 5 jours ouvrables suivant la réception de l’article. Si un article est endommagé ou non conforme, nous payons les frais de retour. Les détails se trouvent sur les pages Livraison & Retours et Politique de retour.',
    ],
  },
  {
    t: ['Liability', 'Responsabilité'],
    b: [
      'Collectible items are not toys for children under the age indicated on the original packaging. To the extent permitted by law, our liability is limited to the price paid for the item. Nothing in these terms limits your rights under applicable consumer protection law.',
      'Les articles de collection ne sont pas des jouets pour les enfants en dessous de l’âge indiqué sur l’emballage d’origine. Dans la mesure permise par la loi, notre responsabilité se limite au prix payé pour l’article. Rien dans ces conditions ne limite vos droits en vertu des lois applicables en matière de protection du consommateur.',
    ],
  },
  {
    t: ['Governing law', 'Droit applicable'],
    b: [
      'These terms are governed by the laws of Quebec and the federal laws of Canada applicable there.',
      'Ces conditions sont régies par les lois du Québec et les lois fédérales du Canada qui s’y appliquent.',
    ],
  },
  {
    t: ['Contact', 'Contact'],
    b: [
      'Questions about these terms: ' + EMAIL + '.',
      'Questions sur ces conditions : ' + EMAIL + '.',
    ],
  },
]

export default function TermsPage() {
  const { lang } = useLang()
  const i = lang === 'en' ? 0 : 1
  return (
    <div style={{maxWidth:800,margin:'0 auto',padding:'60px 24px'}}>
      <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(32px,5vw,52px)',letterSpacing:2,color:'#fff',marginBottom:8,lineHeight:1}}>
        {i === 0 ? 'Terms of Sale' : 'Conditions de vente'}
      </h1>
      <p style={{fontSize:12,color:'#555',marginBottom:32}}>{i === 0 ? 'Last updated: November 2026' : 'Dernière mise à jour : novembre 2026'}</p>
      {SECTIONS.map(s => (
        <section key={s.t[0]} style={{marginBottom:28}}>
          <h2 style={{fontFamily:'Bebas Neue',fontSize:20,letterSpacing:1.5,color:'#fff',marginBottom:10}}>{s.t[i]}</h2>
          <p style={{fontSize:14,color:'#888',lineHeight:1.8,margin:0}}>{s.b[i]}</p>
        </section>
      ))}
      <p style={{fontSize:12,color:'#555'}}>
        <Link href="/livraison" style={{color:'#666'}}>{i === 0 ? 'Shipping & Returns' : 'Livraison & Retours'}</Link>{' · '}
        <Link href="/privacy-policy" style={{color:'#666'}}>{i === 0 ? 'Privacy Policy' : 'Politique de confidentialité'}</Link>
      </p>
    </div>
  )
}
