'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useCart } from './CartProvider'

export default function ProductClient({ product: p }) {
  const [main, setMain] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const sym = p.currency==='CAD'?'CA$':'$'
  function handleAdd() { for(let i=0;i<qty;i++) addItem(p); setAdded(true); setTimeout(()=>setAdded(false),2000) }
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:40}}>
      <div>
        <div style={{position:'relative',aspectRatio:'1',background:'#12121e',border:'1px solid #1c1c28',borderRadius:10,overflow:'hidden',marginBottom:10}}>
          {p.photos?.[main]
            ? <Image src={p.photos[main]} alt={p.title} fill style={{objectFit:'contain',padding:16}} unoptimized/>
            : <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:80}}>🛍️</div>}
        </div>
        {p.photos?.length>1&&(
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            {p.photos.map((ph,i)=>(
              <button key={i} onClick={()=>setMain(i)} style={{position:'relative',width:64,height:64,borderRadius:6,overflow:'hidden',background:'#12121e',border:i===main?'2px solid #e8b820':'2px solid #1c1c28',cursor:'pointer',padding:0}}>
                <img src={ph} alt="" style={{width:'100%',height:'100%',objectFit:'contain',padding:4}}/>
              </button>
            ))}
          </div>
        )}
      </div>
      <div>
        <div style={{fontSize:10,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#555',marginBottom:8}}>{p.category}</div>
        <h1 style={{fontSize:20,fontWeight:700,lineHeight:1.3,marginBottom:16,color:'#eee'}}>{p.title}</h1>
        <div style={{fontFamily:'Bebas Neue',fontSize:44,color:'#e8b820',letterSpacing:1,marginBottom:6,lineHeight:1}}>{sym}{p.price.toFixed(2)}</div>
        <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:20}}>
          {(p.condition==='New'||p.condition==='Brand New')&&<span style={{background:'#166534',color:'#86efac',fontSize:11,fontWeight:700,padding:'3px 10px',borderRadius:4}}>✓ Neuf</span>}
          {p.condition==='Open box'&&<span style={{background:'#713f12',color:'#fde68a',fontSize:11,fontWeight:700,padding:'3px 10px',borderRadius:4}}>Open Box</span>}
          {p.stock>0&&<span style={{background:'#1c1c28',color:'#888',fontSize:11,padding:'3px 10px',borderRadius:4}}>{p.stock} en stock</span>}
          {p.sold>0&&<span style={{background:'#1c1c28',color:'#888',fontSize:11,padding:'3px 10px',borderRadius:4}}>{p.sold} vendus</span>}
          {p.watchers>5&&<span style={{background:'rgba(220,38,38,.15)',color:'#f87171',fontSize:11,fontWeight:600,padding:'3px 10px',borderRadius:4}}>🔥 {p.watchers} personnes regardent</span>}
        </div>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
          <span style={{fontSize:13,color:'#666'}}>Quantité :</span>
          <div style={{display:'flex',alignItems:'center',gap:0,border:'1px solid #1c1c28',borderRadius:6,overflow:'hidden'}}>
            <button onClick={()=>setQty(q=>Math.max(1,q-1))} style={{width:34,height:34,background:'#1a1a26',border:'none',color:'#eee',cursor:'pointer',fontSize:18,borderRight:'1px solid #1c1c28'}}>−</button>
            <span style={{width:40,textAlign:'center',fontWeight:700,fontSize:14}}>{qty}</span>
            <button onClick={()=>setQty(q=>Math.min(p.stock||99,q+1))} style={{width:34,height:34,background:'#1a1a26',border:'none',color:'#eee',cursor:'pointer',fontSize:18,borderLeft:'1px solid #1c1c28'}}>+</button>
          </div>
        </div>
        <button onClick={handleAdd} style={{width:'100%',background:added?'#166534':'#e8b820',color:added?'#86efac':'#000',border:'none',borderRadius:8,padding:'16px',fontWeight:800,fontSize:16,cursor:'pointer',transition:'all .2s',marginBottom:10}}>
          {added?'✓ Ajouté au panier !`':`🛒 Ajouter — ${sym}${(p.price*qty).toFixed(2)}`}
        </button>
        <div style={{fontSize:12,color:'#444',textAlign:'center',marginBottom:20}}>🔒 Paiement sécurisé par Stripe · SSL</div>
        {p.description&&(
          <div style={{borderTop:'1px solid #1c1c28',paddingTop:18}}>
            <div style={{fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'#555',marginBottom:10}}>Description</div>
            <div style={{fontSize:13,color:'#666',lineHeight:1.8}}>{p.description}</div>
          </div>
        )}
      </div>
    </div>
  )
}
