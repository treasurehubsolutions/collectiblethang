import Link from 'next/link'
import Image from 'next/image'
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
    <div style={{maxWidth:1300,margin:'0 auto',padding:'20px 24px',display:'grid',gridTemplateColumns:'195px 1fr',gap:24}}>
      <aside>
        <form action="/shop" style={{marginBottom:14}}>
          <input name="search" defaultValue={search} placeholder="Rechercher..."
            style={{width:'100%',padding:'8px 12px',background:'#12121e',border:'1px solid #1c1c28',borderRadius:6,color:'#eee',fontSize:12,outline:'none'}}/>
        </form>
        <div style={{fontSize:10,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',color:'#444',marginBottom:7}}>Catégories</div>
        <div style={{display:'flex',flexDirection:'column',gap:1,marginBottom:18}}>
          <SB href="/shop" on={!category}>🏠 Tous les articles</SB>
          {categories.map(([cat,n])=>{
            const m=getCatMeta(cat)
            return <SB key={cat} href={buildHref({category:cat,page:1})} on={category===cat} color={m.color}>{m.emoji} {cat} ({n})</SB>
          })}
        </div>
        <div style={{fontSize:10,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',color:'#444',marginBottom:7}}>Trier</div>
        {[['','Par défaut'],['new','Nouveautés'],['popular','Populaires'],['sold','Plus vendus'],['price_asc','Prix ↑'],['price_desc','Prix ↓']].map(([v,l])=>(
          <SB key={v} href={buildHref({sort:v,page:1})} on={sort===v}>{l}</SB>
        ))}
      </aside>
      <main>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16,flexWrap:'wrap',gap:10}}>
          <div>
            {meta && <h1 style={{fontFamily:'Bebas Neue',fontSize:20,letterSpacing:1.5,color:'#fff',marginBottom:2}}>{meta.emoji} {category}</h1>}
            <div style={{fontSize:12,color:'#555'}}><strong style={{color:'#aaa'}}>{total.toLocaleString()}</strong> articles</div>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(178px,1fr))',gap:12}}>
          {items.map(p => {
            const m = getCatMeta(p.category)
            const isNew = p.condition==='New'||p.condition==='Brand New'
            return (
              <div key={p.id} style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:8,overflow:'hidden',display:'flex',flexDirection:'column',position:'relative'}}>
                <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:m.color,zIndex:1}}/>
                <Link href={`/product/${p.id}`} style={{textDecoration:'none'}}>
                  <div style={{position:'relative',aspectRatio:'1',background:'#0d0d12'}}>
                    {p.photos?.[0]
                      ? <Image src={p.photos[0]} alt={p.title} fill style={{objectFit:'contain',padding:8}} unoptimized/>
                      : <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:44}}>{m.emoji}</div>}
                    {isNew&&<span style={{position:'absolute',bottom:5,left:5,background:'#166534',color:'#86efac',fontSize:9,fontWeight:700,padding:'2px 5px',borderRadius:3}}>NEUF</span>}
                    {p.condition==='Open box'&&<span style={{position:'absolute',bottom:5,left:5,background:'#713f12',color:'#fde68a',fontSize:9,fontWeight:700,padding:'2px 5px',borderRadius:3}}>OPEN BOX</span>}
                    {p.watchers>10&&<span style={{position:'absolute',top:5,right:5,background:'rgba(220,38,38,.9)',color:'#fff',fontSize:9,fontWeight:700,padding:'2px 5px',borderRadius:3}}>🔥{p.watchers}</span>}
                  </div>
                </Link>
                <div style={{padding:'9px 10px',flex:1,display:'flex',flexDirection:'column'}}>
                  <div style={{fontSize:9,color:m.color,textTransform:'uppercase',letterSpacing:'0.06em',fontWeight:700,marginBottom:3}}>{p.category}</div>
                  <Link href={`/product/${p.id}`} style={{textDecoration:'none'}}>
                    <div style={{fontSize:11.5,fontWeight:500,lineHeight:1.4,flex:1,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden',color:'#bbb',marginBottom:8}}>{p.title}</div>
                  </Link>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:6,marginTop:'auto',flexWrap:'wrap'}}>
                    <span style={{fontFamily:'Bebas Neue',fontSize:17,color:'#e8b820',letterSpacing:.5}}>{p.currency==='CAD'?'CA$':'$'}{p.price.toFixed(2)}</span>
                    <AddToCartBtn product={p}/>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {totalPages>1&&(
          <div style={{display:'flex',gap:4,justifyContent:'center',marginTop:36,flexWrap:'wrap'}}>
            {page>1&&<PG href={buildHref({page:page-1})}>‹</PG>}
            {Array.from({length:totalPages},(_,i)=>i+1).filter(n=>n===1||n===totalPages||Math.abs(n-page)<=2).map((n,i,arr)=>[
              arr[i-1]&&n-arr[i-1]>1?<span key={`e${n}`} style={{padding:'6px 8px',color:'#555'}}>…</span>:null,
              <PG key={n} href={buildHref({page:n})} on={n===page}>{n}</PG>
            ])}
            {page<totalPages&&<PG href={buildHref({page:page+1})}>›</PG>}
          </div>
        )}
      </main>
    </div>
  )
}
function SB({href,on,color,children}) {
  return <Link href={href} style={{display:'flex',alignItems:'center',padding:'6px 10px',borderRadius:5,fontSize:11.5,color:on?'#e8b820':'#777',fontWeight:on?700:400,background:on?'rgba(232,184,32,.08)':'none',textDecoration:'none',borderLeft:on?`2px solid ${color||'#e8b820'}`:'2px solid transparent'}}>{children}</Link>
}
function PG({href,on,children}) {
  return <Link href={href} style={{padding:'7px 12px',display:'flex',alignItems:'center',borderRadius:5,fontSize:12,background:on?'#e8b820':'#12121e',color:on?'#000':'#888',border:'1px solid #1c1c28',fontWeight:on?800:400,textDecoration:'none',minWidth:36,justifyContent:'center'}}>{children}</Link>
}
