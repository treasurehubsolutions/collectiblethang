import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const SLUG = 'collectible-condition-terms-explained-canada'
const TITLE = 'MIB, MOC, NRFB and Loose: Collectible Condition Terms Explained for Canadian Buyers'
const IMG1 = 'https://i.ebayimg.com/images/g/HvsAAeSwVZ5qmAgv/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/81AAAeSwieZqmBkR/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/19oAAeSw9ERoq3O7/s-l1600.jpg'
const IMG4 = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const ALT1 = 'Funko Pop Star Wars Cobb Vanth #484 Chase Limited Edition from The Mandalorian, new in box, photographed by The Shelf Cartel'
const ALT2 = 'Funko Pop Disney Frozen II Elsa #594 Amazon Exclusive vinyl figure with protector case, photographed by The Shelf Cartel'
const ALT3 = 'Star Wars The Vintage Collection Lando Calrissian 3.75-inch action figure, photographed by The Shelf Cartel'
const ALT4 = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, photographed by The Shelf Cartel'
const DESC = 'MIB, MOC, NRFB, loose, complete: what common collectible condition terms mean, what to check in photos and how to read a listing before you buy. A guide for collectors in Canada.'
const SEO_TITLE = 'Collectible Condition Terms: MIB, MOC, NRFB'
const SEO_DESC = 'What MIB, MOC, NRFB, loose and complete mean in collectible listings, and how to check condition in photos before you buy. A guide for collectors in Canada.'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why condition words matter', p: [
    'Two listings for the same item can be priced very differently, and the difference is usually condition. Collectors use short abbreviations to describe the item and its package. Once you know them, you can compare listings quickly and avoid surprises when the parcel arrives.'] },
  { h: '2. The most common abbreviations', p: ['These terms appear again and again on eBay and in collector groups. Sellers do not always use them in exactly the same way, so treat them as a starting point and check the photos.'], list: [
    'MIB (mint in box): the item is in its original box, and the item and box are in excellent shape.',
    'MOC (mint on card): the item is on its original card and the card is in excellent shape. You will see this a lot with Hot Wheels, Matchbox and carded action figures.',
    'NRFB (never removed from box): the item has not been taken out of its box. The box may still have wear, so look at the corners.',
    'NIB and NIP (new in box, new in package): new and unopened. These are often used for current retail items.',
    'Loose: out of the package. Loose items can be a great way to enjoy a piece or to fill a gap in a set at a lower price.',
    'Complete: a loose item that comes with all of its accessories, parts and inserts.'] },
  { h: '3. Item condition and package condition are two different things', p: [
    'A listing can say sealed and still show a crushed corner, a dent in the card or a faded window. When you read a description, look for two statements: how the item is, and how the package is. If the seller only describes one, ask about the other.',
    'For carded cars and figures, the common checks are the corners, the edges, the blister and the card surface. For boxed items, look at the corners, the seams, the window and any shelf wear. For vinyl figures, a protector case helps keep the box in the same condition you buy it in.'] },
  { h: '4. Reading photos the way a collector does', p: ['Photos tell you more than adjectives. Before you buy, check that the listing uses pictures of the actual item and not a stock image, and look for the following:'], list: [
    'All four corners and edges of the card or box.',
    'The front and the back, including the barcode and any sticker.',
    'Any creases, dents, soft corners, price stickers or sun fading.',
    'For loose items, close-ups of paint, joints, wheels and small parts.'] },
  { h: '5. Words that call for a closer look', p: [
    'Some phrases are not a problem by themselves, but they are worth a question. Shelf wear, light wear, card has a crease, box has a dent, open box, box opened and resealed, no box, missing accessory and as is all describe something that affects what you receive. A good seller will explain them and add a photo on request.'] },
  { h: '6. Do not pay a sealed price for a loose item', p: [
    'As a general rule, an item with a clean original package is worth more to many collectors than the same item loose, and a loose item with all its parts is worth more than one with missing pieces. Compare the price with recent sold listings for the same condition, not with listings in a different condition.'] },
  { h: '7. Buying from Canada: the extra things to check', p: [
    'When you order across the border or from a seller who ships internationally, pack quality matters even more. Ask how the item will be protected, check the return policy and look at the shipping time. Buying in Canada from a seller who ships from within the country can make an issue with condition faster to sort out.'] },
  { h: '8. Describe your own items honestly', p: [
    'If you sell or trade, use the same words you would like to read: the item, the package, and any flaw, with real photos of the actual piece. Honest condition notes build trust and lead to fewer questions and fewer returns.'] },
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
      <p style={p}>MIB, MOC, NRFB, loose, complete: condition words can look like a secret code when you start collecting. They are simple once you know them, and they help you compare listings and choose the right piece for your shelf and your budget. Here is a plain-language guide for collectors in Canada.</p>
      <Fig src={IMG1} alt={ALT1} c="A boxed figure: look at the box corners and any sticker, not just the figure." eager />
      {sections.slice(0, 3).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG3} alt={ALT3} c="A carded figure: the card condition is described separately from the figure." />
      {sections.slice(3, 6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG2} alt={ALT2} c="A protector case helps a boxed figure stay in the condition you bought it in." />
      {sections.slice(6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG4} alt={ALT4} c="A loose Hot Wheels car: ask about paint chips and wheels when you buy loose." />
      <h2 style={h2}>Where to shop</h2>
      <p style={p}>Browse our <Link href="/shop?category=Funko%20Pop" style={lk}>Funko Pop</Link>, <Link href="/shop?category=Hot%20Wheels" style={lk}>Hot Wheels</Link> and <Link href="/shop?category=Star%20Wars" style={lk}>Star Wars</Link> collections, or see everything new in the <Link href="/shop" style={lk}>shop</Link>. We use real photos of the actual item, describe the condition honestly and ship across Canada and the USA.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Our rule of thumb: read the item condition and the package condition separately, and always check the photos of the actual piece.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={lk}>Keep It in the Box or Open It? Sealed vs Opened Collectibles</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/buying-collectibles-on-ebay-canada-checklist" style={lk}>Buying Collectibles on eBay in Canada: A Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={lk}>Diecast and Funko Storage and Display Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/kidult-collectors-starter-guide-canada" style={lk}>Kidult Collecting in Canada: Start a Toy Collection on a Budget</Link></li>
      </ul></nav>
    </article>
  )
}
