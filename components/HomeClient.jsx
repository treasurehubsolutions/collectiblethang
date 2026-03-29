'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from './LangProvider'
import { T } from '../lib/i18n'
import { getCatMeta } from '../lib/products'

const HERO_CATS = [
  'Hot Wheels','Hot Wheels Premium','Star Wars','Marvel','DC Comics',
  'Transformers','Jurassic Park / World','WWE & Wrestling',
  'Hallmark Ornaments','McFarlane Figures','G.I. Joe','Masters of the Universe'
]

// Slogans by lang
const SLOGANS = {
  en: { line1: 'BORN TO COLLECT.', line2: 'BUILT TO PLAY.', sub: 'Your #1 source for discount toys & collectibles — shipped from Quebec 🇨🇦' },
  fr: { line1: 'NÉ POUR COLLECTIONNER.', line2: 'FAIT POUR JOUER.', sub: 'Votre source #1 de jouets & collectibles discount — expédié du Québec 🇨🇦' }
}

export default function HomeClient() {
  const { lang } = useLang()
  const tx = T[lang]
  const slogan = SLOGANS[lang]
  const [featured, setFeatured] = useState([])
  const [newArrivals, setNewArrivals] = useState([])
  const [categories, setCategories] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    Promise.all([
      fetch('/api/products?type=featured').then(r=>r.json()),
      fetch('/api/products?type=new').then(r=>r.json()),
      fetch('/api/products?type=categories').then(r=>r.json()),
    ]).then(([f,n,c]) => {
      setFeatured(f||[])
      setNewArrivals(n||[])
      setCategories(c||[])
      setLoaded(true)
    }).catch(()=>setLoaded(true))
  }, [])

  return (
    <div>

      {/* ── HERO — Logo as full background ─────────────────────────────────── */}
      <div style={{position:'relative',overflow:'hidden',borderBottom:'3px solid #00c8d4'}}>

        {/* Logo background image — fills the entire hero */}
        <div style={{position:'absolute',inset:0,zIndex:0}}>
          <Image
            src="/logo.png"
            alt="Born2BeToys"
            fill
            style={{objectFit:'cover',objectPosition:'center',opacity:.35}}
            priority
            unoptimized
          />
          {/* Dark gradient overlay so text is readable */}
          <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(7,7,15,.92) 0%,rgba(7,7,15,.75) 40%,rgba(7,7,15,.85) 100%)'}}/>
          {/* Cyan glow left */}
          <div style={{position:'absolute',top:'10%',left:'-5%',width:400,height:400,background:'radial-gradient(circle,rgba(0,200,212,.12) 0%,transparent 70%)',pointerEvents:'none'}}/>
          {/* Purple glow right */}
          <div style={{position:'absolute',bottom:'10%',right:'-5%',width:400,height:400,background:'radial-gradient(circle,rgba(124,34,232,.12) 0%,transparent 70%)',pointerEvents:'none'}}/>
        </div>

        {/* Hero content */}
        <div style={{position:'relative',zIndex:1,maxWidth:1300,margin:'0 auto',padding:'70px 24px 60px'}}>
          <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:16}}>

            {/* Badge */}
            <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(0,200,212,.1)',border:'1px solid rgba(0,200,212,.35)',color:'#00c8d4',fontSize:11,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',padding:'5px 16px',borderRadius:20}}>
              <span style={{width:6,height:6,borderRadius:'50%',background:'#00c8d4',display:'inline-block',boxShadow:'0 0 8px #00c8d4'}}/>
              {tx.heroBadge}
            </div>

            {/* SLOGAN — main headline */}
            <div>
              <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(52px,7vw,96px)',letterSpacing:4,lineHeight:.9,margin:0,color:'#fff',textShadow:'0 2px 20px rgba(0,0,0,.8)'}}>
                {slogan.line1}
              </h1>
              <h2 style={{fontFamily:'Bebas Neue',fontSize:'clamp(52px,7vw,96px)',letterSpacing:4,lineHeight:.9,margin:0,
                background:'linear-gradient(90deg,#cc1100,#d4a800,#00c8d4)',
                WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
                backgroundClip:'text',
                filter:'drop-shadow(0 0 20px rgba(0,200,212,.4))'}}>
                {slogan.line2}
              </h2>
            </div>

            {/* Subtitle */}
            <p style={{fontSize:15,color:'rgba(238,236,216,.75)',lineHeight:1.7,maxWidth:560,margin:0}}>
              {slogan.sub}
            </p>

            {/* CTAs */}
            <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:8}}>
              <Link href="/shop" style={{display:'inline-block',background:'linear-gradient(135deg,#cc1100,#aa0000)',color:'#fff',padding:'14px 32px',borderRadius:8,fontWeight:800,fontSize:15,textDecoration:'none',boxShadow:'0 4px 20px rgba(204,17,0,.4)',letterSpacing:.3}}>
                {tx.heroCta}
              </Link>
              <Link href="/shop?sort=popular" style={{display:'inline-block',background:'rgba(0,200,212,.1)',color:'#00c8d4',padding:'14px 32px',borderRadius:8,fontWeight:700,fontSize:15,textDecoration:'none',border:'1px solid rgba(0,200,212,.4)',backdropFilter:'blur(4px)'}}>
                {tx.heroPopular}
              </Link>
            </div>

            {/* Stats row */}
            <div style={{display:'flex',gap:32,flexWrap:'wrap',marginTop:12,paddingTop:20,borderTop:'1px solid rgba(255,255,255,.08)'}}>
              {[[tx.stat1n,tx.stat1l,'#d4a800'],[tx.stat2n,tx.stat2l,'#00c8d4'],[tx.stat3n,tx.stat3l,'#7c22e8'],[tx.stat4n,tx.stat4l,'#cc1100']].map(([n,l,c])=>(
                <div key={l}>
                  <div style={{fontFamily:'Bebas Neue',fontSize:26,color:c,letterSpacing:1,lineHeight:1,filter:`drop-shadow(0 0 8px ${c}66)`}}>{n}</div>
                  <div style={{fontSize:10,color:'#66668a',marginTop:2,textTransform:'uppercase',letterSpacing:'0.06em'}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:60,background:'linear-gradient(to bottom,transparent,#07070f)',zIndex:1}}/>
      </div>

      {/* ── CATEGORY NAV BAR ─────────────────────────────────────────────── */}
      <div style={{background:'#0a0a16',borderBottom:'1px solid #1c1c30',overflowX:'auto'}}>
        <div style={{maxWidth:1300,margin:'0 auto',padding:'0 16px',display:'flex'}}>
          {HERO_CATS.map(cat => {
            const meta = getCatMeta(cat)
            return (
              <Link key={cat} href={`/shop?category=${encodeURIComponent(cat)}`}
                style={{display:'flex',alignItems:'center',gap:5,padding:'11px 13px',whiteSpace:'nowrap',textDecoration:'none',color:'#777',fontSize:12,fontWeight:500,borderRight:'1px solid #1a1a28',transition:'color .15s'}}>
                {meta.emoji} {cat}
              </Link>
            )
          })}
        </div>
      </div>

      {/* ── CATEGORIES GRID ──────────────────────────────────────────────── */}
      {categories.length > 0 && (
        <div style={{maxWidth:1300,margin:'0 auto',padding:'36px 24px 0'}}>
          <SectionTitle color="#00c8d4">{tx.categories}</SectionTitle>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:10}}>
            {categories.slice(0,24).map(([cat,count]) => {
              const meta = getCatMeta(cat)
              return (
                <Link key={cat} href={`/shop?category=${encodeURIComponent(cat)}`}
                  style={{background:'#0f0f1c',border:'1px solid #1c1c30',borderRadius:8,padding:'14px 12px',textAlign:'center',textDecoration:'none',display:'block',position:'relative',overflow:'hidden'}}>
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

      {/* ── NEW ARRIVALS ─────────────────────────────────────────────────── */}
      {newArrivals.length > 0 && (
        <div style={{maxWidth:1300,margin:'0 auto',padding:'36px 24px 0'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
            <SectionTitle color="#7c22e8">{tx.newArrivals}</SectionTitle>
            <Link href="/shop?sort=new" style={{fontSize:13,color:'#7c22e8',textDecoration:'none',fontWeight:600}}>{tx.seeAll}</Link>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(185px,1fr))',gap:12}}>
            {newArrivals.map(p => <ProductCard key={p.id} p={p} tx={tx}/>)}
          </div>
        </div>
      )}

      {/* ── MOST POPULAR ─────────────────────────────────────────────────── */}
      {featured.length > 0 && (
        <div style={{maxWidth:1300,margin:'0 auto',padding:'36px 24px 60px'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
            <SectionTitle color="#cc1100">{tx.mostPopular}</SectionTitle>
            <Link href="/shop?sort=popular" style={{fontSize:13,color:'#cc1100',textDecoration:'none',fontWeight:600}}>{tx.seeAll}</Link>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(185px,1fr))',gap:12}}>
            {featured.slice(0,12).map(p => <ProductCard key={p.id} p={p} tx={tx}/>)}
          </div>
        </div>
      )}

      {!loaded && (
        <div style={{textAlign:'center',padding:'80px 24px',color:'#555'}}>
          <div style={{fontSize:48,marginBottom:12}}>🛍️</div>
          <div style={{fontFamily:'Bebas Neue',fontSize:24,letterSpacing:2,color:'#333'}}>Loading...</div>
        </div>
      )}
    </div>
  )
}

function SectionTitle({children, color='#d4a800'}) {
  return (
    <h2 style={{fontFamily:'Bebas Neue',fontSize:26,letterSpacing:2,color:'#fff',borderBottom:`2px solid ${color}`,paddingBottom:4,marginBottom:0,display:'inline-block',filter:`drop-shadow(0 0 8px ${color}55)`}}>
      {children}
    </h2>
  )
}

function ProductCard({p, tx}) {
  const sym = p.currency==='CAD'?'CA$':'$'
  const meta = getCatMeta(p.category)
  const isNew = p.condition==='New'||p.condition==='Brand New'
  return (
    <Link href={`/product/${p.id}`} style={{background:'#0f0f1c',border:'1px solid #1c1c30',borderRadius:8,overflow:'hidden',display:'flex',flexDirection:'column',textDecoration:'none',position:'relative',transition:'border-color .2s,transform .2s',}}>
      <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:meta.color,zIndex:1}}/>
      <div style={{position:'relative',aspectRatio:'1',background:'#07070f'}}>
        {p.photos?.[0]
          ? <img src={p.photos[0]} alt={p.title} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain',padding:10}} loading="lazy" onError={e=>{e.target.style.display='none'}}/>
          : <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:48}}>{meta.emoji}</div>}
        {isNew&&<span style={{position:'absolute',bottom:6,left:6,background:'#166534',color:'#86efac',fontSize:9,fontWeight:700,padding:'2px 6px',borderRadius:3}}>{tx.new}</span>}
        {p.watchers>10&&<span style={{position:'absolute',top:6,right:6,background:'rgba(204,17,0,.85)',color:'#fff',fontSize:9,fontWeight:700,padding:'2px 6px',borderRadius:3}}>🔥 {p.watchers}</span>}
      </div>
      <div style={{padding:'10px 11px',flex:1,display:'flex',flexDirection:'column'}}>
        <div style={{fontSize:9,color:meta.color,textTransform:'uppercase',letterSpacing:'0.06em',fontWeight:700,marginBottom:4}}>{p.category}</div>
        <div style={{fontSize:11.5,fontWeight:500,lineHeight:1.4,flex:1,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden',color:'#ccc',marginBottom:8}}>{p.title}</div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:4}}>
          <span style={{fontFamily:'Bebas Neue',fontSize:19,color:'#d4a800',letterSpacing:.5}}>{sym}{p.price.toFixed(2)}</span>
          {p.sold>0&&<span style={{fontSize:9,color:'#555'}}>{p.sold} {tx.sold}</span>}
        </div>
      </div>
    </Link>
  )
}
