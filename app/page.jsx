export const dynamic = 'force-dynamic'
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '../components/LangProvider'
import { T } from '../lib/i18n'
import { getCatMeta } from '../lib/products'

const HERO_CATS = ['Hot Wheels','Hot Wheels Premium','Star Wars','Marvel','DC Comics','Transformers','Jurassic Park / World','WWE & Wrestling','Hallmark Ornaments','McFarlane Figures','G.I. Joe','Masters of the Universe']

export default function Home() {
  const { lang } = useLang()
  const tx = T[lang]
  const [featured, setFeatured] = useState([])
  const [newArrivals, setNewArrivals] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/api/products?type=featured').then(r=>r.json()).then(setFeatured).catch(()=>{})
    fetch('/api/products?type=new').then(r=>r.json()).then(setNewArrivals).catch(()=>{})
    fetch('/api/products?type=categories').then(r=>r.json()).then(setCategories).catch(()=>{})
  }, [])

  return (
    <div>
      {/* HERO */}
      <div style={{background:'linear-gradient(180deg,#12121e 0%,#0d0d12 100%)',borderBottom:'2px solid #e8b820',position:'relative',overflow:'hidden'}}>
        <div style={{maxWidth:1300,margin:'0 auto',padding:'48px 24px 42px',position:'relative',zIndex:1}}>
          <div style={{display:'flex',alignItems:'center',gap:40,flexWrap:'wrap',justifyContent:'space-between'}}>
            <div style={{maxWidth:580}}>
              <div style={{display:'inline-block',background:'rgba(232,184,32,.12)',border:'1px solid rgba(232,184,32,.3)',color:'#e8b820',fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',padding:'4px 14px',borderRadius:4,marginBottom:16}}>
                {tx.heroBadge}
              </div>
              <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(48px,6vw,80px)',letterSpacing:3,lineHeight:.95,marginBottom:14,color:'#fff'}}>
                {tx.heroTitle1}<br/><span style={{color:'#e8b820'}}>{tx.heroTitle2}</span>
              </h1>
              <p style={{fontSize:15,color:'#888',lineHeight:1.7,marginBottom:28}}>{tx.heroSub}</p>
              <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
                <Link href="/shop" style={{display:'inline-block',background:'#e8b820',color:'#000',padding:'13px 28px',borderRadius:6,fontWeight:800,fontSize:15,textDecoration:'none'}}>{tx.heroCta}</Link>
                <Link href="/shop?sort=popular" style={{display:'inline-block',background:'transparent',color:'#e8b820',padding:'13px 28px',borderRadius:6,fontWeight:700,fontSize:15,textDecoration:'none',border:'1px solid #e8b820'}}>{tx.heroPopular}</Link>
              </div>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:'#1c1c28',borderRadius:10,overflow:'hidden'}}>
              {[[tx.stat1n,tx.stat1l],[tx.stat2n,tx.stat2l],[tx.stat3n,tx.stat3l],[tx.stat4n,tx.stat4l]].map(([n,l])=>(
                <div key={l} style={{background:'#12121e',padding:'18px 24px',textAlign:'center'}}>
                  <div style={{fontFamily:'Bebas Neue',fontSize:28,color:'#e8b820',letterSpacing:1}}>{n}</div>
                  <div style={{fontSize:11,color:'#666',marginTop:3,textTransform:'uppercase',letterSpacing:'0.05em'}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY NAV */}
      <div style={{background:'#141420',borderBottom:'1px solid #1c1c28',overflowX:'auto'}}>
        <div style={{maxWidth:1300,margin:'0 auto',padding:'0 16px',display:'flex'}}>
          {HERO_CATS.map(cat => {
            const meta = getCatMeta(cat)
            return (
              <Link key={cat} href={`/shop?category=${encodeURIComponent(cat)}`}
                style={{display:'flex',alignItems:'center',gap:5,padding:'11px 13px',whiteSpace:'nowrap',textDecoration:'none',color:'#777',fontSize:12,fontWeight:500,borderRight:'1px solid #1c1c28'}}>
                {meta.emoji} {cat}
              </Link>
            )
          })}
        </div>
      </div>

      {/* CATEGORIES */}
      {categories.length > 0 && (
        <div style={{maxWidth:1300,margin:'0 auto',padding:'36px 24px 0'}}>
          <h2 style={{fontFamily:'Bebas Neue',fontSize:26,letterSpacing:2,color:'#fff',borderBottom:'2px solid #e8b820',paddingBottom:4,marginBottom:16,display:'inline-block'}}>{tx.categories}</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:10}}>
            {categories.slice(0,24).map(([cat,count]) => {
              const meta = getCatMeta(cat)
              return (
                <Link key={cat} href={`/shop?category=${encodeURIComponent(cat)}`}
                  style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:8,padding:'14px 12px',textAlign:'center',textDecoration:'none',display:'block',position:'relative',overflow:'hidden'}}>
                  <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:meta.color}}/>
                  <div style={{fontSize:26,marginBottom:6}}>{meta.emoji}</div>
                  <div style={{fontWeight:700,fontSize:11,color:'#ddd',lineHeight:1.3}}>{cat}</div>
                  <div style={{fontSize:10,color:'#555',marginTop:4}}>{count} {lang==='fr'?'articles':'items'}</div>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* NEW ARRIVALS */}
      {newArrivals.length > 0 && (
        <div style={{maxWidth:1300,margin:'0 auto',padding:'36px 24px 0'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
            <h2 style={{fontFamily:'Bebas Neue',fontSize:26,letterSpacing:2,color:'#fff',borderBottom:'2px solid #e8b820',paddingBottom:4,display:'inline-block'}}>{tx.newArrivals}</h2>
            <Link href="/shop?sort=new" style={{fontSize:13,color:'#e8b820',textDecoration:'none',fontWeight:600}}>{tx.seeAll}</Link>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(185px,1fr))',gap:12}}>
            {newArrivals.map(p => <ProductCard key={p.id} p={p} tx={tx}/>)}
          </div>
        </div>
      )}

      {/* POPULAR */}
      {featured.length > 0 && (
        <div style={{maxWidth:1300,margin:'0 auto',padding:'36px 24px 60px'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
            <h2 style={{fontFamily:'Bebas Neue',fontSize:26,letterSpacing:2,color:'#fff',borderBottom:'2px solid #e8b820',paddingBottom:4,display:'inline-block'}}>{tx.mostPopular}</h2>
            <Link href="/shop?sort=popular" style={{fontSize:13,color:'#e8b820',textDecoration:'none',fontWeight:600}}>{tx.seeAll}</Link>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(185px,1fr))',gap:12}}>
            {featured.slice(0,12).map(p => <ProductCard key={p.id} p={p} tx={tx}/>)}
          </div>
        </div>
      )}

      {/* Loading state */}
      {featured.length === 0 && categories.length === 0 && (
        <div style={{textAlign:'center',padding:'80px 24px',color:'#555'}}>
          <div style={{fontSize:48,marginBottom:12}}>🛍️</div>
          <div style={{fontFamily:'Bebas Neue',fontSize:24,letterSpacing:2,color:'#333'}}>Loading products...</div>
        </div>
      )}
    </div>
  )
}

function ProductCard({p, tx}) {
  const sym = p.currency==='CAD'?'CA$':'$'
  const meta = getCatMeta(p.category)
  const isNew = p.condition==='New'||p.condition==='Brand New'
  return (
    <Link href={`/product/${p.id}`} style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:8,overflow:'hidden',display:'flex',flexDirection:'column',textDecoration:'none',position:'relative'}}>
      <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:meta.color,zIndex:1}}/>
      <div style={{position:'relative',aspectRatio:'1',background:'#0d0d12'}}>
        {p.photos?.[0]
          ? <Image src={p.photos[0]} alt={p.title} fill style={{objectFit:'contain',padding:10}} unoptimized/>
          : <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:48}}>{meta.emoji}</div>}
        {isNew && <span style={{position:'absolute',bottom:6,left:6,background:'#166534',color:'#86efac',fontSize:9,fontWeight:700,padding:'2px 6px',borderRadius:3}}>{tx.new}</span>}
        {p.watchers>10 && <span style={{position:'absolute',top:6,right:6,background:'rgba(220,38,38,.85)',color:'#fff',fontSize:9,fontWeight:700,padding:'2px 6px',borderRadius:3}}>🔥 {p.watchers}</span>}
      </div>
      <div style={{padding:'10px 11px',flex:1,display:'flex',flexDirection:'column'}}>
        <div style={{fontSize:9,color:meta.color,textTransform:'uppercase',letterSpacing:'0.06em',fontWeight:700,marginBottom:4}}>{p.category}</div>
        <div style={{fontSize:11.5,fontWeight:500,lineHeight:1.4,flex:1,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden',color:'#ccc',marginBottom:8}}>{p.title}</div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:4}}>
          <span style={{fontFamily:'Bebas Neue',fontSize:19,color:'#e8b820',letterSpacing:.5}}>{sym}{p.price.toFixed(2)}</span>
          {p.sold>0 && <span style={{fontSize:9,color:'#555'}}>{p.sold} {tx.sold}</span>}
        </div>
      </div>
    </Link>
  )
}
