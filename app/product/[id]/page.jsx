export const dynamic = 'force-dynamic'
import { getProduct, getProducts, getCatMeta } from '../../../lib/products'
import { notFound } from 'next/navigation'
import ProductClient from '../../../components/ProductClient'
import Link from 'next/link'

export default async function ProductPage({ params }) {
  let p = null
  try { p = await getProduct(params.id) } catch(e) {}
  if (!p) notFound()

  const meta = getCatMeta(p.category)
  let related = []
  try {
    const { items } = await getProducts({ category: p.category, perPage: 8 })
    related = (items||[]).filter(r=>r.id!==p.id).slice(0,5)
  } catch(e) {}

  return (
    <div style={{maxWidth:1300,margin:'0 auto',padding:'24px'}}>
      <div style={{fontSize:12,color:'#555',marginBottom:20,display:'flex',alignItems:'center',gap:6,flexWrap:'wrap'}}>
        <Link href="/" style={{color:'#666',textDecoration:'none'}}>Home</Link>
        <span>&#8250;</span>
        <Link href="/shop" style={{color:'#666',textDecoration:'none'}}>Shop</Link>
        <span>&#8250;</span>
        <Link href={`/shop?category=${encodeURIComponent(p.category)}`} style={{color:meta.color,textDecoration:'none'}}>{p.category}</Link>
      </div>
      <ProductClient product={p}/>
      {related.length>0 && (
        <div style={{marginTop:48}}>
          <h2 style={{fontFamily:'Bebas Neue',fontSize:22,letterSpacing:2,color:'#fff',borderBottom:`2px solid ${meta.color}`,paddingBottom:6,marginBottom:16,display:'inline-block'}}>
            {meta.emoji} More in {p.category}
          </h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(170px,1fr))',gap:12}}>
            {related.map(r=>(
              <Link key={r.id} href={`/product/${r.id}`} style={{background:'#0f0f1c',border:'1px solid #1c1c30',borderRadius:8,overflow:'hidden',textDecoration:'none'}}>
                <div style={{position:'relative',aspectRatio:'1',background:'#07070f'}}>
                  {r.photos?.[0]
                    ? <img src={r.photos[0]} alt={r.title} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain',padding:8}} loading="lazy"/>
                    : <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:40}}>{meta.emoji}</div>}
                </div>
                <div style={{padding:'8px 10px'}}>
                  <div style={{fontSize:11,color:'#aaa',lineHeight:1.35,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden',marginBottom:5}}>{r.title}</div>
                  <div style={{fontFamily:'Bebas Neue',fontSize:16,color:'#d4a800'}}>{r.currency==='CAD'?'CA$':'$'}{r.price.toFixed(2)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
