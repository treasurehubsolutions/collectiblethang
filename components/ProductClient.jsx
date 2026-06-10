'use client'
import { useState } from 'react'
import { useCart } from './CartProvider'

export default function ProductClient({ product: p }) {
  const { addItem } = useCart()
  const [mainImg, setMainImg] = useState(0)
  const [added, setAdded] = useState(false)

  const CAT_META = {
    'Hot Wheels':{emoji:'🚗',color:'#e8272a'},
    'Hot Wheels Premium':{emoji:'🏎️',color:'#ff6b00'},
    'Star Wars':{emoji:'⚔️',color:'#ffe81f'},
    'Marvel':{emoji:'⚡',color:'#ec1d24'},
    'DC Comics':{emoji:'🦇',color:'#0078f0'},
    'Transformers':{emoji:'🤖',color:'#a020f0'},
    'Jurassic Park / World':{emoji:'🦕',color:'#4caf50'},
    'WWE & Wrestling':{emoji:'🏆',color:'#ffd700'},
    'Hallmark Ornaments':{emoji:'🎄',color:'#dc2626'},
    'McFarlane Figures':{emoji:'💀',color:'#6b7280'},
    'VHS Tapes':{emoji:'📼',color:'#64748b'},
    'Action Figures':{emoji:'🦸',color:'#7c3aed'},
    'Collectibles':{emoji:'🏺',color:'#a78bfa'},
  }
  const m = CAT_META[p.category] || {emoji:'🛍️',color:'#6b7280'}
  const photos = p.photos || []

  function handleAdd() {
    addItem(p)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:40,alignItems:'start'}}>
      {/* Images */}
      <div>
        <div style={{aspectRatio:'1',background:'#0f0f1c',border:'1px solid #1c1c30',borderRadius:12,overflow:'hidden',marginBottom:10,position:'relative'}}>
          {photos[mainImg]
            ? <img src={photos[mainImg]} alt={p.title} style={{width:'100%',height:'100%',objectFit:'contain',padding:16}}/>
            : <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:80}}>{m.emoji}</div>}
        </div>
        {photos.length > 1 && (
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            {photos.map((ph,i) => (
              <div key={i} onClick={() => setMainImg(i)}
                style={{width:60,height:60,borderRadius:6,overflow:'hidden',background:'#0f0f1c',border:`2px solid ${i===mainImg?m.color:'#1c1c30'}`,cursor:'pointer',flexShrink:0}}>
                <img src={ph} alt="" style={{width:'100%',height:'100%',objectFit:'contain',padding:4}}/>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <div style={{fontSize:11,color:m.color,textTransform:'uppercase',letterSpacing:'0.1em',fontWeight:700,marginBottom:8}}>{p.category}</div>
        <h1 style={{fontSize:'clamp(18px,2.5vw,26px)',fontWeight:800,lineHeight:1.3,marginBottom:16,color:'#fff'}}>{p.title}</h1>

        <div style={{display:'flex',alignItems:'baseline',gap:12,marginBottom:20}}>
          <span style={{fontFamily:'Bebas Neue',fontSize:40,color:'#f0c030'}}>CA${p.price?.toFixed(2)}</span>
          {p.condition && <span style={{background:'rgba(74,222,128,.1)',color:'#4ade80',border:'1px solid rgba(74,222,128,.2)',padding:'3px 10px',borderRadius:4,fontSize:11,fontWeight:700}}>{p.condition}</span>}
        </div>

        <button onClick={handleAdd}
          style={{width:'100%',background:added?'#166534':'#cc1100',color:'#fff',border:'none',borderRadius:10,padding:'16px',fontWeight:800,fontSize:16,cursor:'pointer',marginBottom:12,transition:'background .3s'}}>
          {added ? '✓ Added to cart!' : '🛒 Add to Cart'}
        </button>

        <div style={{background:'#0f0f1c',border:'1px solid #1c1c30',borderRadius:8,padding:'14px 16px'}}>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {[['Condition', p.condition || 'N/A'],['Category', p.category],['Stock', `${p.stock} available`],['SKU', p.sku || p.id]].map(([k,v]) => (
              <div key={k} style={{display:'flex',justifyContent:'space-between',fontSize:12}}>
                <span style={{color:'#555'}}>{k}</span>
                <span style={{color:'#aaa',fontWeight:600}}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginTop:16,fontSize:12,color:'#555',lineHeight:1.8}}>
          📦 Ships from Quebec, Canada<br/>
          🇨🇦 Canada & USA shipping available<br/>
          ↩️ 30-day return policy<br/>
          🔒 Secure payment via Stripe
        </div>
      </div>
    </div>
  )
}
