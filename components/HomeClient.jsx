'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLang } from './LangProvider'
import { T } from '../lib/i18n'
import AddToCartBtn from './AddToCartBtn'

export default function HomeClient() {
  const { lang } = useLang()
  const tx = T[lang]
  const [newArrivals, setNewArrivals] = useState([])
  const [popular, setPopular] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const CAT_META = {
    'Hot Wheels':{emoji:'🚗',color:'#e8272a'},
    'Hot Wheels Premium':{emoji:'🏎️',color:'#ff6b00'},
    'Star Wars':{emoji:'⚔️',color:'#ffe81f'},
    'Marvel':{emoji:'⚡',color:'#ec1d24'},
    'DC Comics':{emoji:'🦇',color:'#0078f0'},
    'Transformers':{emoji:'🤖',color:'#a020f0'},
    'Jurassic Park / World':{emoji:'🦕',color:'#4caf50'},
    'WWE & Wrestling':{emoji:'🏆',color:'#ffd700'},
    'GI Joe':{emoji:'🪖',color:'#5d8a3c'},
    'TMNT':{emoji:'🐢',color:'#22c55e'},
    'Power Rangers':{emoji:'⚡',color:'#ef4444'},
    'Masters of the Universe':{emoji:'⚔️',color:'#f59e0b'},
    'Sonic':{emoji:'💨',color:'#1d6fe8'},
    'Pokémon':{emoji:'⭐',color:'#ffcc00'},
    'Hallmark Ornaments':{emoji:'🎄',color:'#dc2626'},
    'Funko Pop':{emoji:'🎭',color:'#8b5cf6'},
    'McFarlane Figures':{emoji:'💀',color:'#6b7280'},
    'Disney & Pixar':{emoji:'✨',color:'#3b82f6'},
    'LEGO':{emoji:'🧱',color:'#f59e0b'},
    'VHS Tapes':{emoji:'📼',color:'#64748b'},
    'Video Games':{emoji:'🎮',color:'#10b981'},
    'Diecast & Scale Models':{emoji:'🚘',color:'#f97316'},
    'Action Figures':{emoji:'🦸',color:'#7c3aed'},
    'Dolls & Barbie':{emoji:'🪆',color:'#f472b6'},
    'Hockey':{emoji:'🏒',color:'#0ea5e9'},
    'Apparel':{emoji:'👕',color:'#84cc16'},
    'Collectibles':{emoji:'🏺',color:'#a78bfa'},
  }

  useEffect(() => {
    async function load() {
      try {
        const [newRes, popRes, catRes] = await Promise.all([
          fetch('/api/products?sort=new&perPage=12'),
          fetch('/api/products?sort=popular&perPage=12'),
          fetch('/api/products?action=categories'),
        ])
        const [newData, popData, catData] = await Promise.all([newRes.json(), popRes.json(), catRes.json()])
        setNewArrivals(newData.items || [])
        setPopular(popData.items || [])
        setCategories(catData.categories || [])
      } catch(e) { console.error(e) }
      setLoading(false)
    }
    load()
  }, [])

  function ProductCard({ p }) {
    const m = CAT_META[p.category] || {emoji:'🛍️',color:'#6b7280'}
    const isNew = p.condition==='New'||p.condition==='Brand New'
    return (
      <div style={{background:'#0f0f1c',border:'1px solid #1c1c30',borderRadius:8,overflow:'hidden',display:'flex',flexDirection:'column',position:'relative'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:m.color,zIndex:1}}/>
        <Link href={`/product/${p.id}`} style={{textDecoration:'none'}}>
          <div style={{position:'relative',aspectRatio:'1',background:'#07070f'}}>
            {p.photos?.[0]
              ? <img src={p.photos[0]} alt={p.title} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain',padding:8}} loading='lazy'/>
              : <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:40}}>{m.emoji}</div>}
            {isNew&&<span style={{position:'absolute',bottom:4,left:4,background:'#166534',color:'#86efac',fontSize:9,fontWeight:700,padding:'2px 5px',borderRadius:3}}>NEW</span>}
            {p.watchers>10&&<span style={{position:'absolute',top:4,right:4,background:'rgba(204,17,0,.9)',color:'#fff',fontSize:9,fontWeight:700,padding:'2px 5px',borderRadius:3}}>🔥{p.watchers}</span>}
          </div>
        </Link>
        <div style={{padding:'8px 9px',flex:1,display:'flex',flexDirection:'column'}}>
          <div style={{fontSize:8,color:m.color,textTransform:'uppercase',letterSpacing:'0.06em',fontWeight:700,marginBottom:3}}>{p.category}</div>
          <Link href={`/product/${p.id}`} style={{textDecoration:'none'}}>
            <div style={{fontSize:11,fontWeight:500,lineHeight:1.35,flex:1,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden',color:'#bbb',marginBottom:7}}>{p.title}</div>
          </Link>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:4,marginTop:'auto'}}>
            <span style={{fontFamily:'Bebas Neue',fontSize:16,color:'#f0c030'}}>CA${p.price?.toFixed(2)}</span>
            <AddToCartBtn product={p}/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* HERO */}
      <section style={{position:'relative',overflow:'hidden',borderBottom:'1px solid #1c1c28'}}>
        <div style={{position:'absolute',inset:0,background:'url(/logo.png) center/contain no-repeat',opacity:0.07,filter:'blur(2px)'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(155deg,rgba(11,11,26,.97),rgba(9,13,20,.95))'}}/>
        <div style={{position:'relative',maxWidth:1300,margin:'0 auto',padding:'60px 24px 50px',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:24}}>
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:6,padding:'5px 14px',borderRadius:20,fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:16,background:'rgba(240,192,48,.1)',border:'1px solid rgba(240,192,48,.25)',color:'#f0c030'}}>
              ✦ Vintage Treasures & Collectibles
            </div>
            <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(40px,6vw,72px)',letterSpacing:2,lineHeight:1,marginBottom:12,color:'#fff'}}>
              {tx.heroTitle}<br/><span style={{color:'#f0c030'}}>{tx.heroEm}</span>
            </h1>
            <p style={{color:'#666',fontSize:14,marginBottom:28,lineHeight:1.6}}>{tx.heroSub}</p>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <Link href="/shop" style={{display:'inline-block',background:'#f0c030',color:'#000',padding:'13px 28px',borderRadius:8,fontWeight:800,fontSize:15,textDecoration:'none'}}>
                {tx.browse}
              </Link>
              <Link href="/shop?sort=popular" style={{display:'inline-block',background:'rgba(204,17,0,.15)',color:'#ff4444',border:'1px solid rgba(204,17,0,.3)',padding:'13px 24px',borderRadius:8,fontWeight:700,fontSize:15,textDecoration:'none'}}>
                {tx.hot}
              </Link>
            </div>
          </div>
          <div style={{display:'flex',border:'1px solid rgba(255,255,255,.08)',borderRadius:12,overflow:'hidden',background:'rgba(255,255,255,.03)'}}>
            {[['1 584+', tx.items],['10 000+', tx.photos],['100%', tx.feedback],['CA', 'Canada & USA']].map(([n,l]) => (
              <div key={l} style={{padding:'20px 24px',textAlign:'center',borderRight:'1px solid rgba(255,255,255,.06)'}}>
                <div style={{fontFamily:'Bebas Neue',fontSize:26,color:'#f0c030',letterSpacing:1}}>{n}</div>
                <div style={{fontSize:10,color:'#555',textTransform:'uppercase',letterSpacing:'0.08em',marginTop:4}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{maxWidth:1300,margin:'0 auto',padding:'40px 24px 0'}}>
        <h2 style={{fontFamily:'Bebas Neue',fontSize:24,letterSpacing:3,color:'#fff',marginBottom:20}}>{tx.browseByCategory}</h2>
        {loading ? (
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))',gap:10}}>
            {Array(18).fill(0).map((_,i)=><div key={i} style={{background:'#0f0f1c',borderRadius:8,aspectRatio:'1',animation:'pulse 1.5s infinite'}}/>)}
          </div>
        ) : (
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))',gap:10}}>
            {categories.slice(0,21).map(([cat,count]) => {
              const m = CAT_META[cat] || {emoji:'🛍️',color:'#6b7280'}
              return (
                <Link key={cat} href={`/shop?category=${encodeURIComponent(cat)}`}
                  style={{background:'#0f0f1c',border:`1px solid #1c1c30`,borderRadius:8,padding:'16px 10px',textAlign:'center',textDecoration:'none',display:'block',borderTop:`2px solid ${m.color}`}}>
                  <div style={{fontSize:28,marginBottom:8}}>{m.emoji}</div>
                  <div style={{fontSize:11,fontWeight:600,color:'#ccc',lineHeight:1.3,marginBottom:4}}>{cat}</div>
                  <div style={{fontSize:10,color:'#555'}}>{count} items</div>
                </Link>
              )
            })}
          </div>
        )}
      </section>

      {/* NEW ARRIVALS */}
      <section style={{maxWidth:1300,margin:'0 auto',padding:'40px 24px 0'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
          <h2 style={{fontFamily:'Bebas Neue',fontSize:24,letterSpacing:3,color:'#fff',margin:0}}>{tx.newArrivals}</h2>
          <Link href="/shop?sort=new" style={{fontSize:13,color:'#f0c030',textDecoration:'none'}}>{tx.seeAll}</Link>
        </div>
        {loading ? <div style={{color:'#555',fontSize:13}}>Loading...</div> : (
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:10}}>
            {newArrivals.map(p => <ProductCard key={p.id} p={p}/>)}
          </div>
        )}
      </section>

      {/* POPULAR */}
      <section style={{maxWidth:1300,margin:'0 auto',padding:'40px 24px 60px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
          <h2 style={{fontFamily:'Bebas Neue',fontSize:24,letterSpacing:3,color:'#fff',margin:0}}>🔥 POPULAIRES</h2>
          <Link href="/shop?sort=popular" style={{fontSize:13,color:'#f0c030',textDecoration:'none'}}>{tx.seeAll}</Link>
        </div>
        {loading ? <div style={{color:'#555',fontSize:13}}>Loading...</div> : (
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:10}}>
            {popular.map(p => <ProductCard key={p.id} p={p}/>)}
          </div>
        )}
      </section>
    </div>
  )
}
