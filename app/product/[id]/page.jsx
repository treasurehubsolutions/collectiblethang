export const dynamic = 'force-dynamic'
import { getProduct, getProducts, getCatMeta } from '../../../lib/products'
import { notFound } from 'next/navigation'
import ProductClient from '../../../components/ProductClient'
import Link from 'next/link'
import { guessBrand, feedCondition, fallbackDescription, cleanTitle } from '../../../lib/seo'
import { BLOG_GUIDES } from '../../../lib/blog-guides'

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
    const ct = cleanTitle(p.title, 150)
    const plain = p.description ? String(p.description).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() : ''
    const tail = plain ? plain.slice(0, 120) : `${feedCondition(p) === 'used' ? 'Pre-owned' : 'New'} ${p.category || 'collectible'} shipped from Quebec to Canada and the USA.`
    const desc = `Buy ${ct} for ${price}. ${tail} Shop at The Shelf Cartel.`.replace(/\s+/g, ' ').slice(0, 300)
    return {
      title: `${shortTitle(ct)} | The Shelf Cartel`,
      description: desc,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title: `${ct} – ${price}`,
        description: `${ct} available at The Shelf Cartel. Ships Canada & USA.`,
        url,
        siteName: 'The Shelf Cartel',
        locale: 'en_CA',
        images: p.photos?.[0] ? [{ url: p.photos[0], alt: ct }] : [],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${shortTitle(ct, 70)} – ${price}`,
        description: `${ct} at The Shelf Cartel. Ships Canada & USA.`,
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
  const desc = p.description && String(p.description).trim() ? p.description : fallbackDescription(p)
  const brandName = guessBrand(p.title, p.category)
  let related = []
  try {
    const { items } = await getProducts({ category: p.category, perPage: 8 })
    related = (items||[]).filter(r=>r.id!==p.id).slice(0,5)
  } catch(e) {}

  const availability = p.out_of_stock ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock'
  const cond = String(p.condition || '')
  const itemCondition = /new|sealed|mint/i.test(cond) ? 'https://schema.org/NewCondition'
    : /used|pre-owned|loose|good|fair/i.test(cond) ? 'https://schema.org/UsedCondition'
    : feedCondition(p) === 'used' ? 'https://schema.org/UsedCondition' : 'https://schema.org/NewCondition'
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
    name: cleanTitle(p.title, 150),
    description: desc,
    image: (p.photos && p.photos.length) ? p.photos.slice(0, 6) : undefined,
    category: p.category || undefined,
    sku: p.id,
    ...(brandName ? { brand: { '@type': 'Brand', name: brandName } } : {}),
    offers: {
      '@type': 'Offer',
      url: `${BASE}/product/${p.id}`,
      priceCurrency: 'CAD',
      price: p.price.toFixed(2),
      availability,
      ...(itemCondition ? { itemCondition } : {}),
      seller: { '@type': 'Organization', name: 'The Shelf Cartel' },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: ['CA', 'US'],
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/ReturnShippingFees',
        refundType: 'https://schema.org/FullRefund',
      },
    },
  }

  return (
    <div style={{maxWidth:1300,margin:'0 auto',padding:'24px'}}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <nav aria-label="Breadcrumb" style={{fontSize:12,color:'#9a9aa8',marginBottom:20,display:'flex',alignItems:'center',gap:6,flexWrap:'wrap'}}>
        <Link href="/" style={{color:'#9a9aa8',textDecoration:'none'}}>Home</Link>
        <span aria-hidden="true">&#8250;</span>
        <Link href="/shop" style={{color:'#9a9aa8',textDecoration:'none'}}>Shop</Link>
        <span aria-hidden="true">&#8250;</span>
        <Link href={`/shop?category=${encodeURIComponent(p.category)}`} style={{color:meta.color,textDecoration:'none'}}>{p.category}</Link>
      </nav>
      {p.release_date && new Date(p.release_date + 'T23:59:59') > new Date() && (
        <div style={{background:'#1a1500',border:'1px solid #e8b820',color:'#e8b820',borderRadius:8,padding:'10px 16px',marginBottom:16,fontFamily:'Bebas Neue',fontSize:20,letterSpacing:2}}>
          PRE-SALE &middot; Releases {new Date(p.release_date + 'T12:00:00').toLocaleDateString('en-CA',{year:'numeric',month:'long',day:'numeric'})}
        </div>
      )}
      <ProductClient product={{...p, description: desc}}/>
      {related.length>0 && (
        <section aria-labelledby="related-heading" style={{marginTop:48}}>
          <h2 id="related-heading" style={{fontFamily:'Bebas Neue',fontSize:22,letterSpacing:2,color:'#fff',borderBottom:`2px solid ${meta.color}`,paddingBottom:6,marginBottom:16,display:'inline-block'}}>
            {meta.emoji} More in {p.category}
          </h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(170px,1fr))',gap:12}}>
            {related.map(r=>(
              <Link key={r.id} href={`/product/${r.id}`} style={{background:'#0f0f1c',border:'1px solid #1c1c30',borderRadius:8,overflow:'hidden',textDecoration:'none'}}>
                <div style={{position:'relative',aspectRatio:'1',background:'#07070f'}}>
                  {r.photos?.[0]
                    ? <img src={r.photos[0]} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain',padding:8}} loading="lazy"/>
                    : <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:40}}>{meta.emoji}</div>}
                </div>
                <div style={{padding:'8px 10px'}}>
                  <div style={{fontSize:11,color:'#aaa',lineHeight:1.35,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden',marginBottom:5}}>{r.title}</div>
                  <div style={{fontFamily:'Bebas Neue',fontSize:16,color:'#d4a800'}}>{r.currency==='CAD'?'CA$':'$'}{r.price.toFixed(2)}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      {BLOG_GUIDES[p.category] && (
        <nav aria-label="Related guides" style={{marginTop:32,fontSize:13,color:'#9a9aa8',lineHeight:1.8}}>
          <span style={{fontWeight:700,color:'#c4c4d0'}}>Collector guides: </span>
          {BLOG_GUIDES[p.category].map(([slug,label],i)=>(
            <span key={slug}>{i>0&&' \u00b7 '}<Link href={`/blog/${slug}`} style={{color:'#e8b820'}}>{label}</Link></span>
          ))}
        </nav>
      )}
    </div>
  )
}
