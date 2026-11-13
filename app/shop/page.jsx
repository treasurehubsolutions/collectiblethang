export const dynamic = 'force-dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { getProducts, getCategories, getCatMeta } from '../../lib/products'
import AddToCartBtn from '../../components/AddToCartBtn'

export async function generateMetadata({ searchParams }) {
  const category = searchParams?.category || ''
  const BASE = 'https://theshelfcartel.com'
  if (!category) {
    return {
      title: 'Shop Toys & Collectibles in Canada | The Shelf Cartel',
      description: 'Shop Hot Wheels, Star Wars, Marvel, Funko Pop, LEGO and more. Carefully inspected collectibles shipped from Quebec to Canada and the USA.',
      alternates: { canonical: `${BASE}/shop` },
    }
  }
  return {
    title: `${category} for Sale in Canada | The Shelf Cartel`,
    description: metaDesc(category),
    alternates: { canonical: `${BASE}/shop?category=${encodeURIComponent(category)}` },
  }
}

const CAT_TEXT = {
  'Hot Wheels': 'Looking for Hot Wheels in Canada? Browse mainline cars, treasure hunts and loose and carded finds, each listed with an honest condition grade. Perfect for starting a collection or filling the gaps in one.',
  'Hot Wheels Premium': 'Hot Wheels Premium cars (Car Culture, Boulevard, Pop Culture and more) feature metal bases and rubber tires for a more detailed, collector-grade display piece. Check the card and the series name in each listing before you buy.',
  'Funko Pop': 'Shop Funko Pop vinyl figures in Canada, from popular franchises to hard-to-find pieces. Box condition matters to collectors, so every listing shows the real box in the photos and notes any wear.',
  'Star Wars': 'Star Wars figures, vehicles and collectibles from vintage to modern lines. Each listing notes the condition, packaging and completeness so you know exactly what is coming to your door.',
  'Marvel': 'Marvel collectibles for fans and collectors: action figures, vinyl figures and more featuring heroes and villains from the comics and films. Honest condition on every item.',
  'LEGO': 'Shop LEGO sets and pieces in Canada. Listings state whether a set is sealed, open box or used, so you can buy with confidence for building, gifting or collecting.',
  'Matchbox': 'Matchbox die-cast vehicles for collectors of all ages, from everyday models to special series. Carefully inspected, photographed and shipped with care.',
  'Transformers': 'Transformers figures from classic Generation 1 styles to modern lines. Check each listing for condition, accessories and completeness before you add it to your collection.',
  'Pokémon': 'Pokémon collectibles and merchandise for trainers and collectors. Each item is described with its real condition and photographed so you see exactly what you are buying.',
  'DC Comics': 'DC Comics collectibles: Batman, Superman and Justice League figures and more. Each listing notes the condition and packaging so you know what you are getting.',
  'WWE & Wrestling': 'WWE and wrestling figures for fans and collectors, from ring-ready action figures to rarer pieces. Condition, packaging and accessories are described on every listing.',
  'McFarlane Figures': 'McFarlane Toys figures with detailed sculpts and posable bodies, from DC Multiverse to other licensed lines. Check each listing for condition, accessories and packaging.',
  'Hallmark Ornaments': 'Hallmark Keepsake ornaments for collectors and gift givers. Listings show the box condition and any wear so you can buy with confidence, especially around the holidays.',
  'TMNT': 'Teenage Mutant Ninja Turtles figures and collectibles, from vintage-style pieces to modern lines. Honest condition and clear photos on every item.',
  'GI Joe': 'G.I. Joe action figures and vehicles for collectors, from classic favourites to newer lines. Each listing notes completeness, condition and packaging.',
  'VHS Tapes': 'VHS tapes for collectors and movie fans: horror, action, family films and more. Listings describe the tape and case condition so you know what to expect.',
  'DVD & Blu-ray': 'DVDs and Blu-rays for movie lovers and collectors, including harder-to-find titles. Disc and case condition are noted on every listing.',
  'Hockey': 'Hockey collectibles for fans, from memorabilia to figures and keepsakes. Condition is described clearly and every item is photographed.',
  'Diecast & Scale Models': 'Diecast and scale model vehicles for display and collecting. Each listing notes the scale, condition and packaging so you can choose with confidence.',
  'Video Games': 'Retro and modern video games for collectors and players. Listings state the platform and condition, and show the real item in the photos.',
  'Jurassic Park / World': 'Jurassic Park and Jurassic World figures and collectibles for dinosaur fans and collectors, with condition and completeness noted on every listing.',
  'Collectibles': 'A mix of collectibles from many lines and eras. Each item is inspected, photographed and described with its real condition.',
  'DEALS': 'Deals on toys and collectibles: bundles, lots and discounted pieces for budget-minded collectors. Quantities are limited, so check back often for new additions.',
}

function metaDesc(category) {
  const txt = CAT_TEXT[category]
  const base = txt ? txt.split('. ')[0].replace(/\.$/, '') + '. ' : `Shop ${category} collectibles. `
  return `${base}Shipped from Quebec to Canada and the USA. 30-day returns.`.slice(0, 200)
}

export default async function ShopPage({ searchParams }) {
  const category = searchParams?.category || ''
  const search = searchParams?.search || ''
  const sort = searchParams?.sort || ''
  const page = parseInt(searchParams?.page || '1')
  const [{ items, total, totalPages }, categories] = await Promise.all([
    getProducts({ category, search, sort, page }),
    getCategories()
  ])
  const meta = category ? getCatMeta(category) : null

  function buildHref(params) {
    const q = new URLSearchParams({ ...(category&&{category}), ...(sort&&{sort}), ...(search&&{search}), ...params })
    return `/shop?${q}`
  }

  return (
    <div style={{maxWidth:1300,margin:'0 auto',padding:'16px 16px'}}>

      {/* Search bar - always visible */}
      <form action="/shop" style={{marginBottom:12,display:'flex',gap:0}}>
        <input name="search" defaultValue={search} placeholder="Search..."
          style={{flex:1,padding:'10px 14px',background:'#0f0f1c',border:'1px solid #1c1c30',borderRight:'none',borderRadius:'6px 0 0 6px',color:'#eee',fontSize:14,outline:'none'}}/>
        <button type="submit" style={{padding:'10px 18px',background:'#cc1100',color:'#fff',border:'none',borderRadius:'0 6px 6px 0',fontWeight:700,fontSize:13,cursor:'pointer'}}>Search</button>
      </form>

      {/* Mobile: horizontal category pills */}
      <div style={{overflowX:'auto',marginBottom:12,display:'flex',gap:6,paddingBottom:4}}>
        <CatPill href="/shop" on={!category}>All</CatPill>
        {categories.map(([cat,n])=>{
          const m = getCatMeta(cat)
          return <CatPill key={cat} href={buildHref({category:cat,page:1})} on={category===cat} color={m.color}>{m.emoji} {cat}</CatPill>
        })}
      </div>

      {/* Sort pills */}
      <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:14}}>
        {[['','Default'],['new','New'],['popular','Popular'],['sold','Best sellers'],['price_asc','Price ↑'],['price_desc','Price ↓']].map(([v,l])=>(
          <SortPill key={v} href={buildHref({sort:v,page:1})} on={sort===v}>{l}</SortPill>
        ))}
        <span style={{marginLeft:'auto',fontSize:12,color:'#555',alignSelf:'center'}}>
          <strong style={{color:'#aaa'}}>{total.toLocaleString()}</strong> items
        </span>
      </div>

      {/* Category header */}
      {meta && (
        <h1 style={{fontFamily:'Bebas Neue',fontSize:20,letterSpacing:1.5,color:'#fff',marginBottom:12}}>
          {meta.emoji} {category}
        </h1>
      )}
      {meta && (
        <p style={{color:'#9a9ab0',fontSize:14,lineHeight:1.6,marginBottom:16,maxWidth:820}}>
          {CAT_TEXT[category] || `Browse our ${category} collection: authentic collectibles, carefully inspected, photographed and packed with care.`} Every listing shows the real condition. Shipping from Quebec to Canada and the USA, with a 30-day return policy.
        </p>
      )}

      {/* Product grid — full width, no sidebar */}
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
                    ? <Image src={p.photos[0]} alt={p.title} fill style={{objectFit:'contain',padding:8}} unoptimized/>
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
                  <span style={{fontFamily:'Bebas Neue',fontSize:16,color:'#d4a800'}}>{p.currency==='CAD'?'CA$':'$'}{p.price.toFixed(2)}</span>
                  <AddToCartBtn product={p}/>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Pagination */}
      {totalPages>1&&(
        <div style={{display:'flex',gap:4,justifyContent:'center',marginTop:32,flexWrap:'wrap'}}>
          {page>1&&<PG href={buildHref({page:page-1})}>‹</PG>}
          {Array.from({length:totalPages},(_,i)=>i+1).filter(n=>n===1||n===totalPages||Math.abs(n-page)<=2).map((n,i,arr)=>[
            arr[i-1]&&n-arr[i-1]>1?<span key={`e${n}`} style={{padding:'6px 8px',color:'#555'}}>…</span>:null,
            <PG key={n} href={buildHref({page:n})} on={n===page}>{n}</PG>
          ])}
          {page<totalPages&&<PG href={buildHref({page:page+1})}>›</PG>}
        </div>
      )}
    </div>
  )
}

function CatPill({href, on, color, children}) {
  return (
    <Link href={href} style={{
      display:'inline-flex',alignItems:'center',gap:4,
      padding:'6px 12px',borderRadius:20,fontSize:12,
      whiteSpace:'nowrap',textDecoration:'none',flexShrink:0,
      background: on ? (color||'#cc1100') : '#0f0f1c',
      color: on ? '#fff' : '#888',
      border: `1px solid ${on ? (color||'#cc1100') : '#1c1c30'}`,
      fontWeight: on ? 700 : 400,
    }}>
      {children}
    </Link>
  )
}

function SortPill({href, on, children}) {
  return (
    <Link href={href} style={{
      padding:'5px 12px',borderRadius:5,fontSize:11,
      background: on ? '#cc1100' : '#0f0f1c',
      color: on ? '#fff' : '#777',
      border:`1px solid ${on?'#cc1100':'#1c1c30'}`,
      fontWeight: on ? 700 : 400,
      textDecoration:'none',whiteSpace:'nowrap',
    }}>
      {children}
    </Link>
  )
}

function PG({href, on, children}) {
  return (
    <Link href={href} style={{
      padding:'8px 13px',display:'flex',alignItems:'center',
      borderRadius:5,fontSize:13,
      background: on ? '#cc1100' : '#0f0f1c',
      color: on ? '#fff' : '#888',
      border:'1px solid #1c1c30',
      fontWeight: on ? 800 : 400,
      textDecoration:'none',minWidth:38,justifyContent:'center'
    }}>
      {children}
    </Link>
  )
}
