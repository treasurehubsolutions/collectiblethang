export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { getProducts, getCategories, getCatMeta } from '../../lib/products'
import AddToCartBtn from '../../components/AddToCartBtn'

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
