'use client'
import Link from 'next/link'
import { useLang } from '../../components/LangProvider'
import { T } from '../../lib/i18n'

export default function AboutPage() {
  const { lang } = useLang()
  const tx = T[lang]
  return (
    <div style={{maxWidth:900,margin:'0 auto',padding:'60px 24px'}}>
      <div style={{fontFamily:'Bebas Neue',fontSize:12,letterSpacing:4,color:'#e8b820',textTransform:'uppercase',marginBottom:8}}>{tx.aboutBadge}</div>
      <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(36px,5vw,60px)',letterSpacing:2,color:'#fff',marginBottom:20,lineHeight:1}}>{tx.aboutTitle}</h1>
      <p style={{fontSize:15,color:'#888',lineHeight:1.8,marginBottom:16}}>{tx.aboutP1}</p>
      <p style={{fontSize:15,color:'#888',lineHeight:1.8,marginBottom:16}}>{tx.aboutP2}</p>
      <p style={{fontSize:15,color:'#888',lineHeight:1.8,marginBottom:40}}>{tx.aboutP3}</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))',gap:16,marginBottom:40}}>
        {[['1 500+','Items / Articles'],['100%','Positive Feedback'],['9 000+','Real Photos'],['30 days','Return Policy']].map(([n,l])=>(
          <div key={n} style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:10,padding:'24px',textAlign:'center'}}>
            <div style={{fontFamily:'Bebas Neue',fontSize:36,color:'#e8b820',letterSpacing:1}}>{n}</div>
            <div style={{fontSize:11,color:'#666',marginTop:4}}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:12,padding:'32px',marginBottom:32}}>
        <h2 style={{fontFamily:'Bebas Neue',fontSize:24,letterSpacing:2,color:'#e8b820',marginBottom:16}}>{tx.aboutWhat}</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:8}}>
          {['🚗 Hot Wheels & Premium','⚔️ Star Wars','⚡ Marvel Legends','🦇 DC Comics','🤖 Transformers','🦕 Jurassic Park','🏆 WWE & Wrestling','🎄 Hallmark Ornaments','💀 McFarlane Figures','📼 VHS Tapes','🧱 LEGO','🎮 Video Games','🚘 Diecast & Models','🦸 Action Figures','🛍️ And more...'].map(cat=>(
            <div key={cat} style={{fontSize:13,color:'#888',padding:'6px 0',borderBottom:'1px solid #1a1a28'}}>{cat}</div>
          ))}
        </div>
      </div>
      <div style={{textAlign:'center'}}>
        <Link href="/shop" style={{display:'inline-block',background:'#e8b820',color:'#000',padding:'14px 36px',borderRadius:8,fontWeight:800,fontSize:16,textDecoration:'none'}}>{tx.aboutCta}</Link>
      </div>
    </div>
  )
}
