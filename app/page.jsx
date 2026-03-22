import Link from 'next/link'
import Image from 'next/image'
import { getFeatured, getCategories, getCatMeta, getNewArrivals } from '../lib/products'

const HERO_CATS = [
  'Hot Wheels','Hot Wheels Premium','Star Wars','Marvel','DC Comics',
  'Transformers','Jurassic Park / World','WWE & Wrestling','Hallmark Ornaments',
  'McFarlane Figures','G.I. Joe','Masters of the Universe'
]

export default function Home() {
  const featured = getFeatured()
  const newArrivals = getNewArrivals()
  const categories = getCategories()
  const heroCats = HERO_CATS.map(name => {
    const found = categories.find(([c]) => c === name)
    return [name, found?.[1] || 0]
  })

  return (
    <div>
      {/* HERO */}
      <div style={{background:'linear-gradient(180deg,#12121e 0%,#0d0d12 100%)',borderBottom:'2px solid #e8b820',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(ellipse at 20% 50%,rgba(232,184,32,.06) 0%,transparent 60%)',pointerEvents:'none'}}/>
        <div style={{maxWidth:1300,margin:'0 auto',padding:'48px 24px 42px',position:'relative',zIndex:1}}>
          <div style={{display:'flex',alignItems:'center',gap:40,flexWrap:'wrap',justifyContent:'space-between'}}>
            <div style={{maxWidth:560}}>
              <div style={{display:'inline-block',background:'rgba(232,184,32,.12)',border:'1px solid rgba(232,184,32,.3)',color:'#e8b820',fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',padding:'4px 14px',borderRadius:4,marginBottom:16}}>
                🔥 Nouveaux articles ajoutés chaque semaine
              </div>
              <h1 style={{fontFamily:'Bebas Neue',fontSize:'clamp(48px,6vw,80px)',letterSpacing:3,lineHeight:.95,marginBottom:14,color:'#fff'}}>
                LA BOUTIQUE DES<br/><span style={{color:'#e8b820'}}>VRAIS COLLECTIONNEURS</span>
              </h1>
              <p style={{fontSize:15,color:'#888',lineHeight:1.7,marginBottom:28}}>
                Hot Wheels · Action Figures · Star Wars · Marvel · DC · VHS · LEGO · Transformers — <strong style={{color:'#aaa'}}>1 974 articles</strong> avec photos réelles
              </p>
              <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
                <Link href="/shop" style={{display:'inline-block',background:'#e8b820',color:'#000',padding:'13px 28px',borderRadius:6,fontWeight:800,fontSize:15,textDecoration:'none'}}>
                  Explorer la boutique →
                </Link>
                <Link href="/shop?sort=popular" style={{display:'inline-block',background:'transparent',color:'#e8b820',padding:'13px 28px',borderRadius:6,fontWeight:700,fontSize:15,textDecoration:'none',border:'1px solid #e8b820'}}>
                  Articles populaires
                </Link>
              </div>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:'#1c1c28',borderRadius:10,overflow:'hidden',border:'1px solid #1c1c28'}}>
              {[['1 974','Articles en stock'],['9 000+','Photos réelles'],['100%','Feedback positif'],['🇨🇦','Canada & USA']].map(([n,l])=>(
                <div key={l} style={{background:'#12121e',padding:'18px 24px',textAlign:'center'}}>
                  <div style={{fontFamily:'Bebas Neue',fontSize:28,color:'#e8b820',letterSpacing:1}}>{n}</div>
                  <div style={{fontSize:11,color:'#666',marginTop:3,textTransform:'uppercase',letterSpacing:'0.05em'}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY NAV BAR */}
      <div style={{background:'#141420',borderBottom:'1px solid #1c1c28',overflowX:'auto'}}>
        <div style={{maxWidth:1300,margin:'0 auto',padding:'0 16px',display:'flex',gap:0}}>
          {heroCats.map(([cat]) => {
            const meta = getCatMeta(cat)
            return (
              <Link key={cat} href={`/shop?category=${encodeURIComponent(cat)}`}
                style={{display:'flex',alignItems:'center',gap:6,padding:'11px 14px',whiteSpace:'nowrap',textDecoration:'none',color:'#888',fontSize:12,fontWeight:500,borderRight:'1px solid #1c1c28'}}>
                <span>{meta.emoji}</span> {cat}
              </Link>
            )
          })}
        </div>
      </div>

      {/* CATEGORIES GRID */}
      <div style={{maxWidth:1300,margin:'0 auto',padding:'36px 24px 0'}}>
        <SectionTitle>Parcourir par catégorie</SectionTitle>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:10}}>
          {categories.slice(0,24).map(([cat,count]) => {
            const meta = getCatMeta(cat)
            return (
              <Link key={cat} href={`/shop?category=${encodeURIComponent(cat)}`}
                style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:8,padding:'14px 12px',textAlign:'center',textDecoration:'none',display:'block',position:'relative',overflow:'hidden',transition:'border-color .2s'}}>
                <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:meta.color}}/>
                <div style={{fontSize:26,marginBottom:6}}>{meta.emoji}</div>
                <div style={{fontWeight:700,fontSize:11,color:'#ddd',lineHeight:1.3}}>{cat}</div>
                <div style={{fontSize:10,color:'#555',marginTop:4}}>{count} articles</div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* NEW ARRIVALS */}
      <div style={{maxWidth:1300,margin:'0 auto',padding:'36px 24px 0'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
          <SectionTitle>🆕 Nouveaux Arrivages</SectionTitle>
          <Link href="/shop?sort=new" style={{fontSize:13,color:'#e8b820',textDecoration:'none',fontWeight:600}}>Voir tout →</Link>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(185px,1fr))',gap:12}}>
          {newArrivals.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>

      {/* MOST POPULAR */}
      <div style={{maxWidth:1300,margin:'0 auto',padding:'36px 24px 60px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
          <SectionTitle>🔥 Les Plus Populaires</SectionTitle>
          <Link href="/shop?sort=popular" style={{fontSize:13,color:'#e8b820',textDecoration:'none',fontWeight:600}}>Voir tout →</Link>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(185px,1fr))',gap:12}}>
          {featured.slice(0,12).map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </div>
  )
}

function SectionTitle({children}) {
  return (
    <h2 style={{fontFamily:'Bebas Neue',fontSize:26,letterSpacing:2,color:'#fff',borderBottom:'2px solid #e8b820',paddingBottom:4,marginBottom:16,display:'inline-block'}}>
      {children}
    </h2>
  )
}

function ProductCard({p}) {
  const sym = p.currency==='CAD'?'CA$':'$'
  const meta = getCatMeta(p.category)
  const isNew = p.condition==='New'||p.condition==='Brand New'
  return (
    <Link href={`/product/${p.id}`}
      style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:8,overflow:'hidden',display:'flex',flexDirection:'column',textDecoration:'none',position:'relative'}}>
      <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:meta.color,zIndex:1}}/>
      <div style={{position:'relative',aspectRatio:'1',background:'#0d0d12'}}>
        {p.photos[0]
          ? <Image src={p.photos[0]} alt={p.title} fill style={{objectFit:'contain',padding:10}} unoptimized/>
          : <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:48}}>{meta.emoji}</div>}
        {isNew && <span style={{position:'absolute',bottom:6,left:6,background:'#166534',color:'#86efac',fontSize:9,fontWeight:700,padding:'2px 6px',borderRadius:3,textTransform:'uppercase'}}>Neuf</span>}
        {p.watchers>10 && <span style={{position:'absolute',top:6,right:6,background:'rgba(220,38,38,.85)',color:'#fff',fontSize:9,fontWeight:700,padding:'2px 6px',borderRadius:3}}>🔥 {p.watchers}</span>}
      </div>
      <div style={{padding:'10px 11px',flex:1,display:'flex',flexDirection:'column'}}>
        <div style={{fontSize:9,color:meta.color,textTransform:'uppercase',letterSpacing:'0.06em',fontWeight:700,marginBottom:4}}>{p.category}</div>
        <div style={{fontSize:11.5,fontWeight:500,lineHeight:1.4,flex:1,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden',color:'#ccc',marginBottom:8}}>{p.title}</div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:4}}>
          <span style={{fontFamily:'Bebas Neue',fontSize:19,color:'#e8b820',letterSpacing:.5}}>{sym}{p.price.toFixed(2)}</span>
          {p.sold>0 && <span style={{fontSize:9,color:'#555'}}>{p.sold} vendus</span>}
        </div>
      </div>
    </Link>
  )
}
