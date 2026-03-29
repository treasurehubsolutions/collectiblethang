import Link from 'next/link'
export const metadata = {
  title: 'À propos – Born2BeToys | Jouets & Collectibles Canada',
  description: 'Born2BeToys est une boutique canadienne spécialisée dans les jouets vintage, collectibles et liquidations. Hot Wheels, Star Wars, Marvel, DC et plus.',
}
export default function AboutPage() {
  return (
    <div style={{maxWidth:900,margin:'0 auto',padding:'60px 24px'}}>
      <div style={{marginBottom:48}}>
        <div style={{fontFamily:'Bebas Neue',fontSize:12,letterSpacing:4,color:'#e8b820',textTransform:'uppercase',marginBottom:8}}>Notre Histoire</div>
        <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(36px,5vw,60px)',letterSpacing:2,color:'#fff',marginBottom:20,lineHeight:1}}>
          QUI SOMMES-NOUS ?
        </h1>
        <p style={{fontSize:15,color:'#888',lineHeight:1.8,marginBottom:16}}>
          Born2BeToys est une boutique canadienne passionnée par les jouets vintage, les collectibles et les aubaines. Nous sommes des collectionneurs avant tout — on sait ce que ça fait de trouver la pièce rare à un bon prix.
        </p>
        <p style={{fontSize:15,color:'#888',lineHeight:1.8,marginBottom:16}}>
          Notre mission : te proposer les meilleurs Hot Wheels, figurines Star Wars, Marvel, DC Comics, Transformers, ornements Hallmark et bien plus — à des prix discount et de liquidation. Pas de superflu, juste de vraies aubaines.
        </p>
        <p style={{fontSize:15,color:'#888',lineHeight:1.8}}>
          Basés au Canada, on expédie partout au Canada et aux États-Unis. Chaque article est emballé avec soin pour arriver en parfait état.
        </p>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:16,marginBottom:48}}>
        {[
          {n:'1 800+',l:'Articles en stock'},
          {n:'100%',l:'Feedback positif eBay'},
          {n:'9 000+',l:'Photos réelles'},
          {n:'30 jours',l:'Politique de retour'},
        ].map(({n,l})=>(
          <div key={l} style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:10,padding:'24px',textAlign:'center'}}>
            <div style={{fontFamily:'Bebas Neue',fontSize:36,color:'#e8b820',letterSpacing:1}}>{n}</div>
            <div style={{fontSize:12,color:'#666',marginTop:4,textTransform:'uppercase',letterSpacing:'0.05em'}}>{l}</div>
          </div>
        ))}
      </div>

      <div style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:12,padding:'32px',marginBottom:32}}>
        <h2 style={{fontFamily:'Bebas Neue',fontSize:24,letterSpacing:2,color:'#e8b820',marginBottom:16}}>CE QU'ON VEND</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:8}}>
          {['🚗 Hot Wheels & Premium','⚔️ Star Wars','⚡ Marvel Legends','🦇 DC Comics','🤖 Transformers','🦕 Jurassic Park','🏆 WWE & Wrestling','🎄 Hallmark Ornaments','💀 McFarlane Figures','📼 Cassettes VHS','🧱 LEGO','🎮 Jeux Vidéo','🚘 Diecast & Modèles','🦸 Action Figures','🛍️ Et bien plus...'].map(cat=>(
            <div key={cat} style={{fontSize:13,color:'#888',padding:'6px 0',borderBottom:'1px solid #1a1a28'}}>{cat}</div>
          ))}
        </div>
      </div>

      <div style={{textAlign:'center'}}>
        <Link href="/shop" style={{display:'inline-block',background:'#e8b820',color:'#000',padding:'14px 36px',borderRadius:8,fontWeight:800,fontSize:16,textDecoration:'none',letterSpacing:.3}}>
          Explorer la boutique →
        </Link>
      </div>
    </div>
  )
}
