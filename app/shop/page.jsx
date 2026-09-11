export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { getProducts, getCategories, getCatMeta } from '../../lib/products'
import ShopGrid from '../../components/ShopGrid'

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

      <form action="/shop" style={{marginBottom:12,display:'flex',gap:0}}>
        <input name="search" defaultValue={search} placeholder="Search..."
          style={{flex:1,padding:'10px 14px',background:'#0f0f1c',border:'1px solid #1c1c30',borderRight:'none',borderRadius:'6px 0 0 6px',color:'#eee',fontSize:14,outline:'none'}}/>
        <button type="submit" style={{padding:'10px 18px',background:'#c9a227',color:'#000',border:'none',borderRadius:'0 6px 6px 0',fontWeight:700,fontSize:13,cursor:'pointer'}}>Search</button>
      </form>

      <div style={{overflowX:'auto',marginBottom:12,display:'flex',gap:6,paddingBottom:4}}>
        <CatPill href="/shop" on={!category}>All</CatPill>
        {categories.map(([cat,n])=>{
          const m = getCatMeta(cat)
          return <CatPill key={cat} href={buildHref({category:cat,page:1})} on={category===cat} color={m.color}>{m.emoji} {cat}</CatPill>
        })}
      </div>

      <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:14}}>
        {[['','Default'],['new','New'],['popular','Popular'],['sold','Best sellers'],['price_asc','Price ↑'],['price_desc','Price ↓']].map(([v,l])=>(
          <SortPill key={v} href={buildHref({sort:v,page:1})} on={sort===v}>{l}</SortPill>
        ))}
        <span style={{marginLeft:'auto',fontSize:12,color:'#555',alignSelf:'center'}}>
          <strong style={{color:'#aaa'}}>{total.toLocaleString()}</strong> items
        </span>
      </div>

      {meta && (
        <h1 style={{fontFamily:'Bebas Neue',fontSize:20,letterSpacing:1.5,color:'#fff',marginBottom:12}}>
          {meta.emoji} {category}
        </h1>
      )}

      <ShopGrid items={items} />

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
      background: on ? (color||'#c9a227') : '#0f0f1c',
      color: on ? '#fff' : '#888',
      border: `1px solid ${on ? (color||'#c9a227') : '#1c1c30'}`,
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
      background: on ? '#c9a227' : '#0f0f1c',
      color: on ? '#000' : '#777',
      border:`1px solid ${on?'#c9a227':'#1c1c30'}`,
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
      background: on ? '#c9a227' : '#0f0f1c',
      color: on ? '#000' : '#888',
      border:'1px solid #1c1c30',
      fontWeight: on ? 800 : 400,
      textDecoration:'none',minWidth:38,justifyContent:'center'
    }}>
      {children}
    </Link>
  )
}
