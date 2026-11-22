import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const SLUG = 'how-to-check-collectible-value-sold-listings-canada'
const TITLE = 'How to Check What a Collectible Is Really Worth: A Sold-Listings Guide for Canadian Collectors'
const IMG1 = 'https://i.ebayimg.com/images/g/HvsAAeSwVZ5qmAgv/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/81AAAeSwieZqmBkR/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/19oAAeSw9ERoq3O7/s-l1600.jpg'
const IMG4 = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const ALT1 = 'Funko Pop Star Wars Cobb Vanth #484 Chase Limited Edition from The Mandalorian, new in box, photographed by The Shelf Cartel'
const ALT2 = 'Funko Pop Disney Frozen II Elsa #594 Amazon Exclusive vinyl figure with protector case, photographed by The Shelf Cartel'
const ALT3 = 'Star Wars The Vintage Collection Lando Calrissian 3.75-inch action figure, photographed by The Shelf Cartel'
const ALT4 = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, photographed by The Shelf Cartel'
const DESC = 'How to check what a collectible is worth using sold listings: match the exact item, compare condition, include shipping and currency, and spot outliers. A guide for collectors in Canada.'
const SEO_TITLE = 'How to Check What a Collectible Is Worth'
const SEO_DESC = "Learn to check a collectible’s value with sold listings: match the exact item, compare condition, count shipping and currency. A guide for collectors in Canada."

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why asking prices are not enough', p: [
    'Anyone can type any price into a listing. An asking price tells you what a seller hopes to get, not what buyers actually paid. For a fair idea of value, look at items that really sold, then use the active listings only to see what the current competition looks like.'] },
  { h: '2. Use sold listings as your starting point', p: [
    'On eBay you can filter a search to show sold items only. Search the exact name of the piece, open several recent sales and note the final prices. A handful of sales from the last few weeks is more useful than a single result.'], list: [
    'Search the exact product name, number or set name, not only the brand.',
    'Look at several recent sales and ignore the single highest and lowest result.',
    'Check the dates: a sale from last year may not reflect today\u2019s demand.',
    'Note whether the sales were auctions or fixed-price listings.'] },
  { h: '3. Make sure it is the same item', p: [
    'Small differences can change the value of a collectible a lot. Before you compare, check that the listing matches your piece on each of these points.'], list: [
    'Exact version: chase, exclusive, regional, reissue or first release.',
    'Number or code on the box, card or item.',
    'Whether it includes accessories, protector case, inserts or paperwork.',
    'Whether it is a single item or a lot of several pieces.'] },
  { h: '4. Compare condition honestly', p: [
    'A sealed piece and a loose one are rarely worth the same. Compare like with like: new in box with new in box, loose with loose. Look at the photos for box dents, creases, yellowing, scratches and missing parts, and read the condition notes. If you are not sure what the abbreviations mean, see our guide to condition terms.'] },
  { h: '5. Count shipping and currency', p: [
    'Two listings with the same item price are not the same deal if the shipping is different. Add the shipping cost to the price, and check the currency. Many sold results are in US dollars, so convert to Canadian dollars before comparing. Remember that taxes, duties or brokerage fees can apply on imports, depending on the seller\u2019s location and the order.'] },
  { h: '6. Watch for outliers', p: [
    'A very low result can be a damaged item, a mislabelled listing or a rushed auction. A very high one can be a bidding war or a different version. Treat outliers as clues to investigate, not as the market price.'] },
  { h: '7. Keep simple notes', p: [
    'A small spreadsheet is enough: item name, version, condition, sale price, shipping, date and a link. Over time you will see which pieces are rising, which are stable and which are easy to find, and you will know when a listing is worth acting on.'] },
  { h: '8. Decide your own maximum price', p: [
    'Once you have a range of recent sales, decide the most you are willing to pay for a piece in the condition you want. Your limit depends on your budget and how much you want it, so decide before you start bidding. At The Shelf Cartel we photograph each item we list and ship across Canada and the USA, and we are happy to answer questions about any piece before you order.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1],
    datePublished: '2026-11-19',
    dateModified: '2026-11-19',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const fig = { margin: '20px 0', textAlign: 'center' }
  const img = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  const cap = { color: '#a0a0ae', fontSize: 13, marginTop: 6 }
  const lk = { color: '#e8b820' }
  const Fig = ({ src, alt, c, eager }) => (
    <figure style={fig}>
      <img src={src} alt={alt} width={1600} height={1600} loading={eager ? 'eager' : 'lazy'} style={img} />
      <figcaption style={cap}>{c}</figcaption>
    </figure>
  )
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: TITLE, item: `${BASE}/blog/${SLUG}` }] }).replace(/</g, '\\u003c') }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Not sure what a Funko Pop, a Hot Wheels car or an action figure is really worth? You do not need special tools: a few minutes with sold listings and a clear checklist will get you much closer than guessing. This guide is written for collectors in Canada.</p>
      <Fig src={IMG1} alt={ALT1} c="Match the exact version: chase, exclusive and regular releases can have very different values." eager />
      {sections.slice(0, 3).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG3} alt={ALT3} c="Compare like with like: same version, same condition, same accessories." />
      {sections.slice(3, 6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG2} alt={ALT2} c="Protector cases, inserts and box condition all matter when you compare." />
      {sections.slice(6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG4} alt={ALT4} c="Loose and carded pieces are not the same market: compare each with its own kind." />
      <h2 style={h2}>Where to shop</h2>
      <p style={p}>Browse our <Link href="/shop?category=Funko%20Pop" style={lk}>Funko Pop</Link>, <Link href="/shop?category=Hot%20Wheels" style={lk}>Hot Wheels</Link> and <Link href="/shop?category=Star%20Wars" style={lk}>Star Wars</Link> collections, or see everything new in the <Link href="/shop" style={lk}>shop</Link>. We use real photos of the actual item, describe the condition honestly and ship across Canada and the USA.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Our rule of thumb: compare sold prices, same version, same condition, shipping included.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={lk}>MIB, MOC, NRFB and Loose: Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={lk}>How to Spot Fake and Bootleg Collectibles Before You Buy</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/buying-collectibles-on-ebay-canada-checklist" style={lk}>Buying Collectibles on eBay in Canada: A Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/kidult-collectors-starter-guide-canada" style={lk}>Kidult Collecting in Canada: Start a Toy Collection on a Budget</Link></li>
      </ul></nav>
    </article>
  )
}
