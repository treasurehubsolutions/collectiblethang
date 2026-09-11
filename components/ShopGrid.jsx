'use client'
import Link from 'next/link'
import AddToCartBtn from './AddToCartBtn'
import { getCatMeta } from '../lib/products'

export default function ShopGrid({ items }) {
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:10}}>
      {items.map(p => {
        const m = getCatMeta(p.category)
        const isNew = p.condition==='New'||p.condition==='Brand New'
        return (
          <div key={p.id} style={{background:'#0f0f1c',border:'1px solid #1c1c30',borderRadius:8,overflow:'hidden',display:'flex',flexDirection:'column',position:'relative'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:m.color,zIndex:1}}/>
            <Link href={`/product/${p.id}`} style={{textDecoration:'none'}}>
              <div style={{position:'relative',aspectRatio:'1',background:'#07070f'}}>
                {p.photos?.[0]
                  ? <img src={p.photos[0]} alt={p.title} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain',padding:8}} loading='lazy'/>
                  : <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:40}}>{m.emoji}</div>}
                {isNew&&<span style={{position:'absolute',bottom:4,left:4,background:'#166534',color:'#86efac',fontSize:9,fontWeight:700,padding:'2px 5px',borderRadius:3}}>NEW</span>}
                {p.condition==='Open box'&&<span style={{position:'absolute',bottom:4,left:4,background:'#713f12',color:'#fde68a',fontSize:9,fontWeight:700,padding:'2px 5px',borderRadius:3}}>OPEN BOX</span>}
                {p.watchers>10&&<span style={{position:'absolute',top:4,right:4,background:'rgba(204,17,0,.9)',color:'#fff',fontSize:9,fontWeight:700,padding:'2px 5px',borderRadius:3}}>🔥{p.watchers}</span>}
              </div>
            </Link>
            <div style={{padding:'8px 9px',flex:1,display:'flex',flexDirection:'column'}}>
              <div style={{fontSize:8,color:m.color,textTransform:'uppercase',letterSpacing:'0.06em',fontWeight:700,marginBottom:3}}>{p.category}</div>
              <Link href={`/product/${p.id}`} style={{textDecoration:'none'}}>
                <div style={{fontSize:11,fontWeight:500,lineHeight:1.35,flex:1,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden',color:'#bbb',marginBottom:7}}>{p.title}</div>
              </Link>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:4,marginTop:'auto',flexWrap:'wrap'}}>
                <span style={{fontFamily:'Bebas Neue',fontSize:16,color:'#c9a227'}}>{p.currency==='CAD'?'CA$':'$'}{p.price.toFixed(2)}</span>
                <AddToCartBtn product={p}/>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
