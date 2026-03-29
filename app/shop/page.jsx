export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { getProducts, getCategories, getCatMeta } from '../../lib/products'
import AddToCartBtn from '../../components/AddToCartBtn'

export default async function ShopPage({ searchParams }) {
  const category = searchParams?.category || ''
  const search = searchParams?.search || ''
  const sort = searchParams?.sort || ''
  const page = parseInt(searchParams?.page || '1') || 1

  let items = [], total = 0, totalPages = 1, categories = []
  try {
    const [prods, cats] = await Promise.all([
      getProducts({ category, search, sort, page }),
      getCategories()
    ])
    items = prods.items || []
    total = prods.total || 0
    totalPages = prods.totalPages || 1
    categories = cats || []
  } catch(e) {
    console.error('ShopPage error:', e.message)
  }

  const meta = category ? getCatMeta(category) : null

  // Build URL without empty params
  function href(overrides) {
    const params = {}
    if (category) params.category = category
    if (sort) params.sort = sort
    if (search) params.search = search
    Object.assign(params, overrides)
    // Remove empty values
    Object.keys(params).forEach(k => { if (!params[k] || params[k]==='0') delete params[k] })
    const qs = new URLSearchParams(params).toString()
    return qs ? `/shop?${qs}` : '/shop'
  }

  return (
    <div style={{maxWidth:1300,margin:'0 auto',padding:'16px'}}>

      {/* Search bar */}
      <form action="/shop" style={{marginBottom:12,display:'flex'}}>
        <input name="search" defaultValue={search} placeholder="Search products..."
          style={{flex:1,padding:'10px 14px',background:'#0f0f1c',border:'1px solid #1c1c30',borderRight:'none',borderRadius:'6px 0 0 6px',color:'#eee',fontSize:14,outline:'none'}}/>
        <button type="submit" style={{padding:'10px 18px',background:'#cc1100',color:'#fff',border:'none',borderRadius:'0 6px 6px 0',fontWeight:700,fontSize:13,cursor:'pointer'}}>
          Search
        </button>
      </form>

      {/* Category pills */}
      <div style={{display:'flex',gap:6,overflowX:'auto',paddingBottom:8,marginBottom:10,scrollbarWidth:'none'}}>
        <CatPill href="/shop" on={!category}>🏠 All</CatPill>
        {categories.map(([cat,n]) => {
          const m = getCatMeta(cat)
          return (
            <CatPill key={cat} href={href({category:cat,page:'1'})} on={category===cat} color={m.color}>
              {m.emoji} {cat}
            </CatPill>
          )
        })}
      </div>

      {/* Sort pills */}
      <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:14,alignItems:'center'}}>
        {[['','Default'],['new','New'],['popular','Popular'],['sold','Best sellers'],['price_asc','Price ↑'],['price_desc','Price ↓']].map(([v,l])=>(
          <SortPill key={v} href={href({sort:v,page:'1'})} on={sort===v}>{l}</SortPill>
        ))}
        <span style={{marginLeft:'auto',fontSize:12,color:'#555'}}>
          <strong style={{color:'#aaa'}}>{total.toLocaleString()}</strong> items
        </span>
      </div>

      {/* Category title */}
      {meta && (
        <h1 style={{fontFamily:'Bebas Neue',fontSize:22,letterSpacing:2,color:'#fff',marginBottom:14}}>
          {meta.emoji} {category}
        </h1>
      )}

      {/* Product grid */}
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
                    ? <img src={p.photos[0]} alt={p.title} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain',padding:8}} loading="lazy" onError={e=>{e.target.style.display='none'}}/>
                    : <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:40}}>{m.emoji}</div>}
                  {isNew && <span style={{position:'absolute',bottom:4,left:4,background:'#166534',color:'#86efac',fontSize:9,fontWeight:700,padding:'2px 5px',borderRadius:3}}>NEW</span>}
                  {p.condition==='Open box' && <span style={{position:'absolute',bottom:4,left:4,background:'#713f12',color:'#fde68a',fontSize:9,fontWeight:700,padding:'2px 5px',borderRadius:3}}>OPEN BOX</span>}
                  {p.watchers>10 && <span style={{position:'absolute',top:4,right:4,background:'rgba(204,17,0,.9)',color:'#fff',fontSize:9,fontWeight:700,padding:'2px 5px',borderRadius:3}}>🔥{p.watchers}</span>}
                </div>
              </Link>
              <div style={{padding:'8px 9px',flex:1,display:'flex',flexDirection:'column'}}>
                <div style={{fontSize:8,color:m.color,textTransform:'uppercase',letterSpacing:'0.06em',fontWeight:700,marginBottom:3}}>{p.category}</div>
                <Link href={`/product/${p.id}`} style={{textDecoration:'none'}}>
                  <div style={{fontSize:11,fontWeight:500,lineHeight:1.35,flex:1,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden',color:'#bbb',marginBottom:7}}>{p.title}</div>
                </Link>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:4,marginTop:'auto'}}>
                  <span style={{fontFamily:'Bebas Neue',fontSize:16,color:'#d4a800'}}>{p.currency==='CAD'?'CA$':'$'}{p.price.toFixed(2)}</span>
                  <AddToCartBtn product={p}/>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Empty state */}
      {items.length===0 && (
        <div style={{textAlign:'center',padding:'60px 24px',color:'#555'}}>
          <div style={{fontSize:48,marginBottom:12}}>🔍</div>
          <div style={{fontFamily:'Bebas Neue',fontSize:22,letterSpacing:2,color:'#333'}}>No products found</div>
        </div>
      )}

      {/* Pagination */}
      {totalPages>1 && (
        <div style={{display:'flex',gap:4,justifyContent:'center',marginTop:32,flexWrap:'wrap'}}>
          {page>1 && <PG href={href({page:String(page-1)})}>&#8249;</PG>}
          {Array.from({length:totalPages},(_,i)=>i+1)
            .filter(n=>n===1||n===totalPages||Math.abs(n-page)<=2)
            .map((n,i,arr)=>[
              arr[i-1]&&n-arr[i-1]>1 ? <span key={`e${n}`} style={{padding:'6px 8px',color:'#555'}}>&#8230;</span> : null,
              <PG key={n} href={href({page:String(n)})} on={n===page}>{n}</PG>
            ])}
          {page<totalPages && <PG href={href({page:String(page+1)})}>&#8250;</PG>}
        </div>
      )}
    </div>
  )
}

function CatPill({href,on,color,children}) {
  return (
    <Link href={href} style={{display:'inline-flex',alignItems:'center',gap:4,padding:'6px 12px',borderRadius:20,fontSize:12,whiteSpace:'nowrap',textDecoration:'none',flexShrink:0,background:on?(color||'#cc1100'):'#0f0f1c',color:on?'#fff':'#888',border:`1px solid ${on?(color||'#cc1100'):'#1c1c30'}`,fontWeight:on?700:400}}>
      {children}
    </Link>
  )
}
function SortPill({href,on,children}) {
  return (
    <Link href={href} style={{padding:'5px 12px',borderRadius:5,fontSize:11,background:on?'#cc1100':'#0f0f1c',color:on?'#fff':'#777',border:`1px solid ${on?'#cc1100':'#1c1c30'}`,fontWeight:on?700:400,textDecoration:'none',whiteSpace:'nowrap'}}>
      {children}
    </Link>
  )
}
function PG({href,on,children}) {
  return (
    <Link href={href} style={{padding:'8px 13px',display:'flex',alignItems:'center',borderRadius:5,fontSize:13,background:on?'#cc1100':'#0f0f1c',color:on?'#fff':'#888',border:'1px solid #1c1c30',fontWeight:on?800:400,textDecoration:'none',minWidth:38,justifyContent:'center'}}>
      {children}
    </Link>
  )
}
