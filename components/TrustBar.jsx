export default function TrustBar() {
  const items = [
    { icon:'🔒', title:'Paiement Sécurisé', desc:'Stripe SSL 256-bit' },
    { icon:'📦', title:'Emballage Soigné', desc:'Chaque article protégé' },
    { icon:'🇨🇦', title:'Expédié du Canada', desc:'Vers Canada & USA' },
    { icon:'⭐', title:'100% Feedback +', desc:'Des milliers de ventes eBay' },
    { icon:'↩️', title:'Retours 30 jours', desc:'Satisfaction garantie' },
    { icon:'💰', title:'Prix Discount', desc:'Liquidation & aubaines' },
  ]
  return (
    <div style={{background:'#0a0a14',borderTop:'1px solid #1c1c28',borderBottom:'1px solid #1c1c28',padding:'20px 24px'}}>
      <div style={{maxWidth:1300,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:16}}>
        {items.map(({icon,title,desc})=>(
          <div key={title} style={{display:'flex',alignItems:'center',gap:10}}>
            <span style={{fontSize:22,flexShrink:0}}>{icon}</span>
            <div>
              <div style={{fontSize:12,fontWeight:700,color:'#ddd'}}>{title}</div>
              <div style={{fontSize:11,color:'#555',marginTop:1}}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
