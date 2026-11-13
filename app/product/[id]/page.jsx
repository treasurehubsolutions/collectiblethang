export const dynamic = 'force-dynamic'
import { getProduct, getProducts, getCatMeta } from '../../../lib/products'
import { notFound } from 'next/navigation'
import ProductClient from '../../../components/ProductClient'
import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'

function shortTitle(t, max = 60) {
  const s = String(t || '').replace(/\s+/g, ' ').trim()
  if (s.length <= max) return s
  const cut = s.slice(0, max)
  const i = cut.lastIndexOf(' ')
  return (i > 30 ? cut.slice(0, i) : cut).replace(/[\s,\-–|:]+$/, '')
}

export async function generateMetadata({ params }) {
  try {
    const p = await getProduct(params.id)
    if (!p) return { robots: { index: false, follow: false } }
    const price = `CA$${Number(p.price).toFixed(2)}`
    const url = `${BASE}/product/${params.id}`
    const desc = `Buy ${p.title} for ${price}. ${p.description ? String(p.description).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 120) : 'Toys & collectibles shipped across Canada and USA.'} Shop at The Shelf Cartel.`
    return {
      title: `${shortTitle(p.title)} | The Shelf Cartel`,
      description: desc,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title: `${p.title} – ${price}`,
        description: `${p.title} available at The Shelf Cartel. Ships Canada & USA.`,
        url,
        siteName: 'The Shelf Cartel',
        locale: 'en_CA',
        images: p.photos?.[0] ? [{ url: p.photos[0], alt: p.title }] : [],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${shortTitle(p.title, 70)} – ${price}`,
        description: `${p.title} at The Shelf Cartel. Ships Canada & USA.`,
        images: p.photos?.[0] ? [p.photos[0]] : [],
      },
    }
  } catch(e) {
    return {}
  }
}

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

  const availability = p.out_of_stock ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock'
  const cond = String(p.condition || '')
  const itemCondition = /new|sealed|mint/i.test(cond) ? 'https://schema.org/NewCondition'
    : /used|pre-owned|loose|good|fair/i.test(cond) ? 'https://schema.org/UsedCondition'
    : undefined
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `${BASE}/shop` },
      { '@type': 'ListItem', position: 3, name: p.category, item: `${BASE}/shop?category=${encodeURIComponent(p.category)}` },
      { '@type': 'ListItem', position: 4, name: p.title, item: `${BASE}/product/${p.id}` },
    ],
  }
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.title,
    description: p.description || p.title,
    image: (p.photos && p.photos.length) ? p.photos.slice(0, 6) : undefined,
    category: p.category || undefined,
    sku: p.id,
    brand: { '@type': 'Brand', name: 'The Shelf Cartel' },
    offers: {
      '@type': 'Offer',
      url: `${BASE}/product/${p.id}`,
      priceCurrency: 'CAD',
      price: p.price.toFixed(2),
      availability,
      ...(itemCondition ? { itemCondition } : {}),
      seller: { '@type': 'Organization', name: 'The Shelf Cartel' },
    },
  }

  return (
    <div style={{maxWidth:1300,margin:'0 auto',padding:'24px'}}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
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
