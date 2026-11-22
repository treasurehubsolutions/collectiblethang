import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const SLUG = 'how-to-spot-fake-bootleg-collectibles-canada'
const TITLE = 'How to Spot Fake and Bootleg Collectibles Before You Buy: A Checklist for Canadian Collectors'
const IMG1 = 'https://i.ebayimg.com/images/g/HvsAAeSwVZ5qmAgv/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/81AAAeSwieZqmBkR/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/19oAAeSw9ERoq3O7/s-l1600.jpg'
const IMG4 = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const ALT1 = 'Funko Pop Star Wars Cobb Vanth #484 Chase Limited Edition from The Mandalorian, new in box, photographed by The Shelf Cartel'
const ALT2 = 'Funko Pop Disney Frozen II Elsa #594 Amazon Exclusive vinyl figure with protector case, photographed by The Shelf Cartel'
const ALT3 = 'Star Wars The Vintage Collection Lando Calrissian 3.75-inch action figure, photographed by The Shelf Cartel'
const ALT4 = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, photographed by The Shelf Cartel'
const DESC = 'How to spot fake, bootleg and counterfeit collectibles: price, photos, packaging, seller history and the questions to ask before you buy. A checklist for collectors in Canada.'
const SEO_TITLE = 'How to Spot Fake and Bootleg Collectibles'
const SEO_DESC = 'A practical checklist to spot fake and bootleg collectibles: price, photos, packaging, seller history and what to ask before you buy. For collectors in Canada.'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why fakes are a problem for collectors', p: [
    'Popular collectibles attract copies. A bootleg can look close to the real thing in a small photo, but the paint, the plastic, the packaging and the resale value are usually not the same. A few minutes of checking before you buy can save you a disappointing parcel and a return.'] },
  { h: '2. Start with the price and the story', p: ['A price far below what the same item usually sells for is the first warning sign. Compare with recent sold listings, not with active listings, and ask yourself why the seller can sell for so much less.'], list: [
    'A rare or sold-out item offered at a very low price.',
    'A large quantity of a hard-to-find item from a seller with little history.',
    'Vague wording such as "same as original", "factory style" or "inspired by".',
    'A seller who avoids direct questions about where the item came from.'] },
  { h: '3. Look closely at the photos', p: ['Real photos of the actual item are the best tool you have. Be careful when a listing uses only a stock image or a picture copied from another store.'], list: [
    'Ask for extra photos of the front, back, bottom and any labels or stickers.',
    'Compare the paint, colours and proportions with a photo of a known genuine piece from the brand or a trusted store.',
    'Look for blurry printing, misspelled words, uneven logos and rough edges on the packaging.',
    'Check that the barcode, copyright line and manufacturer details are present and readable.'] },
  { h: '4. Packaging tells a story', p: [
    'Genuine packaging usually has clean printing, consistent colours, tight seams and a card or box that feels solid. Thin cardboard, strong chemical smell, off colours or a window that does not fit well are reasons to ask more questions. Remember that a damaged but genuine box is still genuine: condition and authenticity are two different questions.'] },
  { h: '5. Weight, materials and details on loose items', p: [
    'If the item is loose, ask about the weight, the feel of the plastic or metal, the paint application and the small details such as wheels, joints and printed faces. Seller descriptions that mention these details, together with sharp close-up photos, are a good sign.'] },
  { h: '6. Check the seller, not only the listing', p: ['A trustworthy seller is easy to evaluate if you know where to look.'], list: [
    'Read recent feedback, especially comments about authenticity and about how items matched the photos.',
    'Look at the rest of the store: does it sell a coherent range of items, or a random mix?',
    'Check the return policy and the shipping origin.',
    'Send a short question before buying and see how clearly and quickly the seller replies.'] },
  { h: '7. Use the platform protections', p: [
    'On eBay, buying through the platform keeps the purchase covered by its buyer protection programs, which can include items that are not as described. Keep your messages and photos in the platform, avoid paying outside it, and report a listing that you believe is a counterfeit.'] },
  { h: '8. When in doubt, buy from a seller who shows the real item', p: [
    'The simplest protection is to buy from sellers who show real photos of the actual piece, describe condition honestly and accept questions. At The Shelf Cartel we photograph the items we list and ship across Canada and the USA, and we are happy to answer questions about any piece before you order.'] },
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
      <p style={p}>Fake and bootleg collectibles exist in almost every category, from vinyl figures and diecast cars to trading cards and action figures. You do not need to be an expert to protect yourself. This checklist shows what to look at before you buy, whether you shop on eBay, in a collector group or in a store. Written for collectors in Canada.</p>
      <Fig src={IMG1} alt={ALT1} c="A real photo of the actual item: check the box, the labels and the stickers, not only the figure." eager />
      {sections.slice(0, 3).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG3} alt={ALT3} c="Ask for photos of the back and the barcode area as well as the front." />
      {sections.slice(3, 6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG2} alt={ALT2} c="Compare printing, colours and details with a known genuine piece." />
      {sections.slice(6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG4} alt={ALT4} c="For loose items, ask for close-ups of the paint, wheels and small details." />
      <h2 style={h2}>Where to shop</h2>
      <p style={p}>Browse our <Link href="/shop?category=Funko%20Pop" style={lk}>Funko Pop</Link>, <Link href="/shop?category=Hot%20Wheels" style={lk}>Hot Wheels</Link> and <Link href="/shop?category=Star%20Wars" style={lk}>Star Wars</Link> collections, or see everything new in the <Link href="/shop" style={lk}>shop</Link>. We use real photos of the actual item, describe the condition honestly and ship across Canada and the USA.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Our rule of thumb: if the price looks too good and the photos are not of the actual item, ask questions before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={lk}>MIB, MOC, NRFB and Loose: Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/buying-collectibles-on-ebay-canada-checklist" style={lk}>Buying Collectibles on eBay in Canada: A Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/ou-acheter-funko-pop-rares-canada" style={lk}>Where to Buy Rare Funko Pops in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/kidult-collectors-starter-guide-canada" style={lk}>Kidult Collecting in Canada: Start a Toy Collection on a Budget</Link></li>
      </ul></nav>
    </article>
  )
}
