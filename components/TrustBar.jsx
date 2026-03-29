'use client'
import { useLang } from './LangProvider'
import { T } from '../lib/i18n'

export default function TrustBar() {
  const { lang } = useLang()
  const tx = T[lang]
  const items = [
    {icon:'🔒',title:tx.trust1t,desc:tx.trust1d},
    {icon:'📦',title:tx.trust2t,desc:tx.trust2d},
    {icon:'🇨🇦',title:tx.trust3t,desc:tx.trust3d},
    {icon:'⭐',title:tx.trust4t,desc:tx.trust4d},
    {icon:'↩️',title:tx.trust5t,desc:tx.trust5d},
    {icon:'💰',title:tx.trust6t,desc:tx.trust6d},
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
