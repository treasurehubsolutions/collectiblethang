'use client'
import Link from 'next/link'
import { useLang } from '../../components/LangProvider'

const EMAIL = 'theshelfcartel@gmail.com'

const SECTIONS = [
  {
    t: ['Who we are', 'Qui nous sommes'],
    b: [
      'The Shelf Cartel (theshelfcartel.com) is an online shop based in Quebec, Canada, selling toys and collectibles. We also sell on eBay under the store name theshelfcartel. This policy explains what personal information we collect, why, and your rights.',
      'The Shelf Cartel (theshelfcartel.com) est une boutique en ligne du Québec, Canada, qui vend des jouets et articles de collection. Nous vendons aussi sur eBay sous le nom de boutique theshelfcartel. Cette politique explique quels renseignements personnels nous recueillons, pourquoi, et quels sont vos droits.',
    ],
  },
  {
    t: ['Information we collect', 'Renseignements recueillis'],
    b: [
      'When you place an order we collect your name, email address, shipping address and the details of your order. If you contact us, we keep the messages you send. Like most websites, we also receive basic technical data (browser, device, pages visited) through analytics.',
      'Lorsque vous passez une commande, nous recueillons votre nom, votre adresse courriel, votre adresse de livraison et le détail de votre commande. Si vous nous écrivez, nous conservons vos messages. Comme la plupart des sites, nous recevons aussi des données techniques de base (navigateur, appareil, pages visitées) par l’analyse de trafic.',
    ],
  },
  {
    t: ['Payments', 'Paiements'],
    b: [
      'Payments are processed by Stripe. Your card number is entered on Stripe’s secure payment page and is never stored on our servers or seen by us.',
      'Les paiements sont traités par Stripe. Votre numéro de carte est saisi sur la page de paiement sécurisée de Stripe et n’est jamais conservé sur nos serveurs ni vu par nous.',
    ],
  },
  {
    t: ['How we use your information', 'Utilisation des renseignements'],
    b: [
      'We use your information to process and ship orders, send order confirmations and tracking, handle returns and customer service, prevent fraud, meet legal and accounting obligations, and understand how the site is used so we can improve it. We do not sell your personal information.',
      'Nous utilisons vos renseignements pour traiter et expédier vos commandes, envoyer confirmations et suivis, gérer les retours et le service à la clientèle, prévenir la fraude, respecter nos obligations légales et comptables, et comprendre l’usage du site afin de l’améliorer. Nous ne vendons pas vos renseignements personnels.',
    ],
  },
  {
    t: ['Who we share it with', 'Avec qui nous les partageons'],
    b: [
      'Only with service providers needed to run the shop: Stripe (payments), shipping carriers such as Canada Post and USPS (delivery), our hosting and database providers (Vercel and Supabase), and Google Analytics (site statistics). These providers may be located outside Quebec, including in the United States. We may also disclose information when required by law.',
      'Seulement avec les fournisseurs nécessaires au fonctionnement de la boutique : Stripe (paiements), transporteurs comme Postes Canada et USPS (livraison), nos fournisseurs d’hébergement et de base de données (Vercel et Supabase), et Google Analytics (statistiques). Ces fournisseurs peuvent se trouver hors du Québec, notamment aux États-Unis. Nous pouvons aussi divulguer des renseignements lorsque la loi l’exige.',
    ],
  },
  {
    t: ['Cookies', 'Témoins (cookies)'],
    b: [
      'The site uses cookies for the shopping cart, language choice and Google Analytics statistics. You can block or delete cookies in your browser settings; the cart may not work without them.',
      'Le site utilise des témoins pour le panier, le choix de la langue et les statistiques Google Analytics. Vous pouvez bloquer ou supprimer les témoins dans votre navigateur; le panier pourrait alors ne plus fonctionner.',
    ],
  },
  {
    t: ['Retention', 'Conservation'],
    b: [
      'We keep order information only as long as needed for the purposes above, including tax, accounting and warranty obligations, then delete or anonymize it.',
      'Nous conservons les renseignements de commande seulement le temps nécessaire aux fins ci-dessus, y compris nos obligations fiscales, comptables et de garantie, puis nous les supprimons ou les anonymisons.',
    ],
  },
  {
    t: ['Your rights', 'Vos droits'],
    b: [
      'Under Quebec’s Act respecting the protection of personal information in the private sector and Canadian privacy law, you may ask to access, correct or delete the personal information we hold about you, or withdraw your consent, by emailing us. We will answer within 30 days.',
      'En vertu de la Loi sur la protection des renseignements personnels dans le secteur privé du Québec et des lois canadiennes sur la vie privée, vous pouvez demander d’accéder à vos renseignements, de les corriger ou de les supprimer, ou de retirer votre consentement, en nous écrivant. Nous répondons dans un délai de 30 jours.',
    ],
  },
  {
    t: ['Contact', 'Contact'],
    b: [
      'For any privacy question or request, contact our privacy officer at ' + EMAIL + '.',
      'Pour toute question ou demande liée à la vie privée, écrivez à notre responsable de la protection des renseignements personnels à ' + EMAIL + '.',
    ],
  },
]

export default function PrivacyPage() {
  const { lang } = useLang()
  const i = lang === 'en' ? 0 : 1
  return (
    <div style={{maxWidth:800,margin:'0 auto',padding:'60px 24px'}}>
      <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(32px,5vw,52px)',letterSpacing:2,color:'#fff',marginBottom:8,lineHeight:1}}>
        {i === 0 ? 'Privacy Policy' : 'Politique de confidentialité'}
      </h1>
      <p style={{fontSize:12,color:'#555',marginBottom:32}}>{i === 0 ? 'Last updated: November 2026' : 'Dernière mise à jour : novembre 2026'}</p>
      {SECTIONS.map(s => (
        <section key={s.t[0]} style={{marginBottom:28}}>
          <h2 style={{fontFamily:'Bebas Neue',fontSize:20,letterSpacing:1.5,color:'#fff',marginBottom:10}}>{s.t[i]}</h2>
          <p style={{fontSize:14,color:'#888',lineHeight:1.8,margin:0}}>{s.b[i]}</p>
        </section>
      ))}
      <p style={{fontSize:12,color:'#555'}}>
        <Link href="/terms" style={{color:'#666'}}>{i === 0 ? 'Terms of Sale' : 'Conditions de vente'}</Link>{' · '}
        <Link href="/contact" style={{color:'#666'}}>Contact</Link>
      </p>
    </div>
  )
}
