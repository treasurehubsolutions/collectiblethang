export const metadata = {
  title: 'Livraison & Retours – Born2BeToys',
  description: 'Politique de livraison et retours Born2BeToys. Expédition Canada et USA. Livraison gratuite sur les commandes de 150$ et plus.',
}
export default function LivraisonPage() {
  return (
    <div style={{maxWidth:860,margin:'0 auto',padding:'60px 24px'}}>
      <div style={{fontFamily:'Bebas Neue',fontSize:12,letterSpacing:4,color:'#e8b820',textTransform:'uppercase',marginBottom:8}}>Informations</div>
      <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(32px,5vw,52px)',letterSpacing:2,color:'#fff',marginBottom:40,lineHeight:1}}>
        LIVRAISON & RETOURS
      </h1>

      {/* Livraison gratuite */}
      <div style={{background:'rgba(232,184,32,.08)',border:'1px solid rgba(232,184,32,.25)',borderRadius:10,padding:'20px 24px',marginBottom:32,display:'flex',alignItems:'center',gap:14}}>
        <span style={{fontSize:32}}>🎉</span>
        <div>
          <div style={{fontWeight:800,fontSize:16,color:'#e8b820',marginBottom:4}}>Livraison GRATUITE dès CA$150 !</div>
          <div style={{fontSize:13,color:'#888'}}>Sur toutes les commandes de 150$ et plus, livrées au Canada.</div>
        </div>
      </div>

      <Section title="📦 Délais de livraison">
        <Row label="Canada (QC, ON, Maritimes)" value="5 à 10 jours ouvrables"/>
        <Row label="Canada (Ouest, Territoires)" value="7 à 14 jours ouvrables"/>
        <Row label="États-Unis" value="7 à 14 jours ouvrables"/>
      </Section>

      <Section title="💰 Frais de livraison — Canada">
        <Row label="Commande +150$ CA" value="GRATUIT 🎉"/>
        <Row label="Colis léger (moins de 500g)" value="CA$9.99 – $12.99"/>
        <Row label="Colis moyen (500g – 1kg)" value="CA$13.99 – $16.99"/>
        <Row label="Colis lourd (1kg – 2kg)" value="CA$18.99 – $22.99"/>
        <Row label="Colis très lourd (+2kg)" value="CA$28.99 – $34.99"/>
        <div style={{fontSize:11,color:'#555',marginTop:8}}>* Les tarifs varient selon la province de destination.</div>
      </Section>

      <Section title="🇺🇸 Frais de livraison — États-Unis (USPS)">
        <Row label="Colis léger (moins de 500g)" value="USD$14.99"/>
        <Row label="Colis moyen (500g – 1kg)" value="USD$19.99"/>
        <Row label="Colis lourd (1kg – 2kg)" value="USD$29.99"/>
        <Row label="Colis très lourd (+2kg)" value="USD$44.99"/>
      </Section>

      <Section title="📬 Traitement des commandes">
        <p style={{fontSize:14,color:'#888',lineHeight:1.8,margin:0}}>
          Les commandes sont traitées dans les <strong style={{color:'#ddd'}}>1 à 3 jours ouvrables</strong> suivant la réception du paiement. Vous recevrez un email de confirmation avec le numéro de suivi dès l'expédition.
        </p>
      </Section>

      <Section title="📦 Emballage">
        <p style={{fontSize:14,color:'#888',lineHeight:1.8,margin:0}}>
          Chaque article est emballé avec soin pour garantir son arrivée en parfait état. Les figurines et items fragiles sont protégés avec du papier bulle et des boîtes rigides. La boîte d'origine est préservée autant que possible pour les collectionneurs.
        </p>
      </Section>

      <Section title="↩️ Politique de retour">
        <p style={{fontSize:14,color:'#888',lineHeight:1.8,marginBottom:12}}>
          Nous acceptons les retours dans les <strong style={{color:'#ddd'}}>30 jours suivant la réception</strong> de votre commande, sous réserve que l'article soit dans son état d'origine.
        </p>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {[
            ['✅','Article non conforme à la description','Remboursement complet + frais de retour couverts'],
            ['✅','Article endommagé durant le transport','Remboursement complet ou remplacement'],
            ['⚠️','Changement d'avis (article intact)','Remboursement moins les frais de retour'],
            ['❌','Article ouvert ou utilisé','Non retournable'],
          ].map(([icon,cas,action])=>(
            <div key={cas} style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:8,padding:'12px 16px'}}>
              <div style={{fontSize:13,fontWeight:600,color:'#ddd',marginBottom:3}}>{icon} {cas}</div>
              <div style={{fontSize:12,color:'#666'}}>{action}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="📧 Contact">
        <p style={{fontSize:14,color:'#888',lineHeight:1.8,margin:0}}>
          Pour toute question concernant une commande, un retour ou une livraison, contactez-nous via notre boutique eBay. Nous répondons dans les <strong style={{color:'#ddd'}}>24 heures</strong>.
        </p>
        <a href="https://www.ebay.com/str/collectiblethang" target="_blank"
          style={{display:'inline-block',marginTop:12,background:'#e8b820',color:'#000',padding:'10px 20px',borderRadius:6,fontWeight:700,fontSize:13,textDecoration:'none'}}>
          Nous contacter sur eBay →
        </a>
      </Section>
    </div>
  )
}

function Section({title, children}) {
  return (
    <div style={{marginBottom:32}}>
      <h2 style={{fontFamily:'Bebas Neue',fontSize:20,letterSpacing:1.5,color:'#fff',marginBottom:16,borderBottom:'1px solid #1c1c28',paddingBottom:8}}>{title}</h2>
      {children}
    </div>
  )
}

function Row({label, value}) {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',borderBottom:'1px solid #1a1a28'}}>
      <span style={{fontSize:13,color:'#888'}}>{label}</span>
      <span style={{fontSize:13,fontWeight:700,color:'#e8b820'}}>{value}</span>
    </div>
  )
}
