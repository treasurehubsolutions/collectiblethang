import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const SLUG = 'what-to-check-when-your-collectible-arrives-canada'
const TITLE = 'Your Collectible Just Arrived: A 10-Minute Inspection Checklist for Canadian Buyers'
const IMG1 = 'https://i.ebayimg.com/images/g/HvsAAeSwVZ5qmAgv/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/81AAAeSwieZqmBkR/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/19oAAeSw9ERoq3O7/s-l1600.jpg'
const IMG4 = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const ALT1 = 'Funko Pop Star Wars Cobb Vanth #484 Chase Limited Edition from The Mandalorian, new in box, photographed by The Shelf Cartel'
const ALT2 = 'Funko Pop Disney Frozen II Elsa #594 Amazon Exclusive vinyl figure with protector case, photographed by The Shelf Cartel'
const ALT3 = 'Star Wars The Vintage Collection Lando Calrissian 3.75-inch action figure, photographed by The Shelf Cartel'
const ALT4 = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, photographed by The Shelf Cartel'
const DESC = 'What to check when a collectible arrives: the outer box, the packaging, the item, the box condition and your photos. A short inspection checklist for collectors in Canada.'
const SEO_TITLE = 'Inspect Your Collectible When It Arrives'
const SEO_DESC = "A 10-minute checklist for when your collectible arrives: check the outer box, packaging, item and box, and take photos early. For collectors in Canada."

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Open it the day it arrives', p: [
    'Collectibles are small, but they can be fragile: a corner crease, a cracked blister or a loose part is much easier to sort out when you notice it early. Set aside ten minutes on the day the parcel arrives and go through the steps below before you put the piece on a shelf.'] },
  { h: '2. Look at the outer box first', p: [
    'Before you open anything, look at the shipping box or mailer. Damage on the outside often explains damage on the inside, so it is worth recording while the parcel is still closed.'], list: [
    'Take a photo of the box with the shipping label visible.',
    'Note any crushed corners, punctures, tears or signs of water.',
    'Photograph any damage from two angles.',
    'Keep the outer box until you have checked everything.'] },
  { h: '3. Open it carefully and keep the packing', p: [
    'Use scissors or a box cutter away from the item and cut along the tape, not through the middle of the box. Keep the packing materials until you are done. If something turns out to be wrong, the way the item was packed can be useful information for the seller or the carrier.'] },
  { h: '4. Check the item against the listing', p: [
    'Place the listing photos and description next to the piece and compare them point by point.'], list: [
    'Exact name, number and version: chase, exclusive, regional or regular release.',
    'Included accessories, inserts, stands or protector case.',
    'Whether the box shows the same code, sticker or logo as the photos.',
    'Whether it is the number of pieces you ordered.'] },
  { h: '5. Check the condition of the box and the item', p: [
    'Look for dents, creases, shelf wear, yellowing, scratches, scuffs and paint rubs, and compare them with the condition described. Collectibles in boxes are often judged by the box as much as by the item, so look at the corners and the window carefully. If you are not sure what a condition term means, see our guide to condition terms.'] },
  { h: '6. Test what can be tested', p: [
    'For action figures, check that joints move and accessories fit. For die-cast cars, check that the wheels roll. For anything electronic, follow the manufacturer\u2019s instructions. Do not force parts, and do not open a sealed piece just to test it, since that changes its condition.'] },
  { h: '7. Take photos and write down what you see', p: [
    'Photograph the front, back, sides, and any flaw, with a note of the date. These photos help if you need to explain a problem to the seller, and they are useful later for your own records and insurance.'] },
  { h: '8. If something is wrong, contact the seller quickly', p: [
    'If the item is damaged, missing parts or not as described, send a polite message to the seller as soon as you can, with your photos and the order number. Most platforms have their own process and deadlines for reporting a problem, so check the rules on the platform you used. At The Shelf Cartel we photograph each item we list, ship across Canada and the USA, and are happy to answer questions about any piece before or after your order.'] },
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
      <p style={p}>The parcel is here: now what? A few minutes of careful checking on the day it arrives can save you a lot of trouble later, especially during the busy holiday parcel season. This short checklist is written for collectors in Canada who buy Funko Pops, Hot Wheels, action figures and other collectibles online.</p>
      <Fig src={IMG1} alt={ALT1} c="Check the exact version against the listing: chase, exclusive and regular releases can look alike." eager />
      {sections.slice(0, 3).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG3} alt={ALT3} c="Compare the piece with the listing photos, point by point." />
      {sections.slice(3, 6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG2} alt={ALT2} c="Protector cases, inserts and box condition all matter, so look at them closely." />
      {sections.slice(6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG4} alt={ALT4} c="Loose and carded pieces need different checks: test loose pieces, leave sealed ones sealed." />
      <h2 style={h2}>Where to shop</h2>
      <p style={p}>Browse our <Link href="/shop?category=Funko%20Pop" style={lk}>Funko Pop</Link>, <Link href="/shop?category=Hot%20Wheels" style={lk}>Hot Wheels</Link> and <Link href="/shop?category=Star%20Wars" style={lk}>Star Wars</Link> collections, or see everything new in the <Link href="/shop" style={lk}>shop</Link>. We use real photos of the actual item, describe the condition honestly and ship across Canada and the USA.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Our rule of thumb: photograph the box, check the item, and report any problem early.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={lk}>MIB, MOC, NRFB and Loose: Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={lk}>How to Spot Fake and Bootleg Collectibles Before You Buy</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/buying-collectibles-on-ebay-canada-checklist" style={lk}>Buying Collectibles on eBay in Canada: A Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={lk}>How to Check What a Collectible Is Really Worth: A Sold-Listings Guide for Canadian Collectors</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/order-collectibles-early-holiday-shipping-canada-guide" style={lk}>Order Collectibles Early: A Holiday Shipping Guide for Canadian Gift Buyers</Link></li>
      </ul></nav>
    </article>
  )
}
