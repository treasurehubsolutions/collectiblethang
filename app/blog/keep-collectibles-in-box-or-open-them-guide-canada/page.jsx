import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const SLUG = 'keep-collectibles-in-box-or-open-them-guide-canada'
const TITLE = 'Keep It in the Box or Open It? A Canadian Collector’s Guide to Sealed vs Opened Collectibles'
const IMG1 = 'https://i.ebayimg.com/images/g/HvsAAeSwVZ5qmAgv/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/81AAAeSwieZqmBkR/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/19oAAeSw9ERoq3O7/s-l1600.jpg'
const IMG4 = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const ALT1 = 'Funko Pop Star Wars Cobb Vanth #484 Chase Limited Edition from The Mandalorian, new in box, photographed by The Shelf Cartel'
const ALT2 = 'Funko Pop Disney Frozen II Elsa #594 Amazon Exclusive vinyl figure with protector case, photographed by The Shelf Cartel'
const ALT3 = 'Star Wars The Vintage Collection Lando Calrissian 3.75-inch action figure, photographed by The Shelf Cartel'
const ALT4 = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, photographed by The Shelf Cartel'
const DESC = 'Sealed or opened? Learn how packaging affects condition and price, when to open a collectible, and how to display it safely. A practical guide for collectors in Canada.'
const SEO_TITLE = 'Keep Collectibles in the Box or Open Them?'
const SEO_DESC = 'Should you open your collectibles or keep them sealed? How packaging, condition and display affect your collection, with tips for collectors in Canada.'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why this question matters more every year', p: [
    'Toy and collectible sales have been pushed up by adult fans, and more people are building shelves instead of toy boxes. When a hobby grows, the same question keeps coming back: do you open the package and enjoy the item, or keep it sealed? There is no single right answer. The best choice depends on what you collect, why you collect it and how you plan to display it.'] },
  { h: '2. The case for keeping it sealed', p: [
    'Packaging is part of the item. For carded Hot Wheels, boxed Funko Pop figures and action figures on their original card, the box or blister shows the series, the number, the year and any special marking. Many collectors prefer a sealed piece because nothing has been touched, the accessories are all there and the condition is easy to judge.'], list: [
    'Sealed items are easier to describe and to compare: the condition of the box or card tells the story.',
    'Accessories, stands, stickers and small parts stay together and cannot get lost.',
    'If you ever sell or trade, a clean original package is what most buyers look for first.'],
    after: 'The trade-off is that you cannot hold the item, pose it or admire the details up close.' },
  { h: '3. The case for opening it', p: [
    'Collectibles were made to be enjoyed. A loose Hot Wheels car looks great on a shelf, an action figure is more fun when you can pose it, and a vinyl figure can sit proudly on a desk. Opened items usually cost less, take less space and let you appreciate the paint, the sculpt and the small details.',
    'If you collect for the love of the casting or the character, and you do not plan to sell, opening is a perfectly good choice. Many collectors also keep the package flat or in a box so they still have it later.'] },
  { h: '4. Questions to ask before you decide', p: ['Before you tear open a package, take a minute with these questions:'], list: [
    'Why do I collect? For display and fun, for a complete set or as a long-term hold?',
    'Is this a special piece? A chase variant, a limited edition, an exclusive or a vintage item deserves extra thought before you open it.',
    'Can I buy a second one? Many collectors keep one sealed and open one to enjoy.',
    'Where will it live? A sunny shelf is hard on cards, boxes and paint, whether sealed or not.'] },
  { h: '5. Special pieces: chase, exclusives and limited editions', p: [
    'Chase figures, store exclusives and limited editions are the pieces most collectors hesitate to open, because the sticker, the box and the number are part of what makes them special. If you are unsure, keep it sealed until you decide. You can always open it later, but you cannot close it again.'] },
  { h: '6. Protect what you keep: cases and display', p: [
    'Sealed does not mean safe. Cards bend, boxes crush and sunlight fades the artwork over time. Clear protector cases for Funko Pop boxes and carded cars keep corners sharp and dust out. Store items upright, away from windows, heaters and damp basements. Our storage and display guide covers shelves, cases and simple setups in more detail.'] },
  { h: '7. If you open it: how to do it right', p: ['If you decide to open a collectible, a few simple habits keep it in great shape:'], list: [
    'Cut or peel slowly and avoid tearing the card, so you can keep the package flat if you wish.',
    'Keep every accessory, insert and small part in a labelled bag or box.',
    'Handle painted parts by the body, not by thin antennas, weapons or wheels.',
    'Take a photo of the item in its package before you open it, to remember the series and number.'] },
  { h: '8. Buying sealed or opened: read the listing carefully', p: [
    'Whether you buy sealed or opened, check the photos of the actual item, not stock images. For sealed items, look at the corners, the window and the seal. For opened items, look for paint chips, loose joints and missing accessories. A good seller describes the condition honestly and answers questions. Compare prices with recent sold listings, and remember that an opened item should normally cost less than a sealed one.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1],
    datePublished: '2026-11-18',
    dateModified: '2026-11-18',
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
      <p style={p}>You just got a new piece for your shelf, and the package is still closed. Do you open it or keep it sealed? It is one of the most common questions in collecting, and with the holiday season and Black Friday coming, many Canadian collectors are about to face it. Here is a simple way to decide.</p>
      <Fig src={IMG1} alt={ALT1} c="A boxed chase figure from our shop: the sticker and the number on the box are part of the item." eager />
      {sections.slice(0, 3).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG3} alt={ALT3} c="An action figure is made to be posed, but the card shows the line and the character name." />
      {sections.slice(3, 6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG2} alt={ALT2} c="A protector case keeps the box corners sharp and the dust out." />
      {sections.slice(6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG4} alt={ALT4} c="A loose Hot Wheels car: easy to display, lower in price and full of detail." />
      <h2 style={h2}>Where to shop</h2>
      <p style={p}>Browse our <Link href="/shop?category=Funko%20Pop" style={lk}>Funko Pop</Link>, <Link href="/shop?category=Hot%20Wheels" style={lk}>Hot Wheels</Link> and <Link href="/shop?category=Star%20Wars" style={lk}>Star Wars</Link> collections, or see everything new in the <Link href="/shop" style={lk}>shop</Link>. We use real photos of the actual item, describe the condition honestly and ship across Canada and the USA.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Our rule of thumb: keep the special pieces sealed, open the ones you love to look at, and take a photo before you decide.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={lk}>Diecast and Funko Storage and Display Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/funko-pop-chase-exclusives-holiday-guide-canada" style={lk}>Funko Pop Chase and Exclusives: Holiday Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/buying-collectibles-on-ebay-canada-checklist" style={lk}>Buying Collectibles on eBay in Canada: A Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/guide-debuter-collection-hot-wheels" style={lk}>How to Start a Hot Wheels Collection</Link></li>
      </ul></nav>
    </article>
  )
}
