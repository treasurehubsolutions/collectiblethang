import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Funko Pop Chase and Exclusives: How to Read the Box Before You Buy This Holiday Season'
const DESC = 'Chase variants, glow editions, store exclusives and box condition: a simple guide to buying Funko Pop figures with confidence in Canada this holiday season.'
const SEO_TITLE = 'Funko Pop Chase & Exclusives Guide'
const SEO_DESC = 'Chase variants, glow editions and store exclusives: how to read the box and buy Funko Pop figures with confidence in Canada this holiday season.'
const SLUG = 'funko-pop-chase-exclusives-holiday-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/HvsAAeSwVZ5qmAgv/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/wikAAeSwI6FppOuz/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/thumbs/images/g/MfEAAeSwGhFqwXZ7/s-l1600.jpg'
const IMG4 = 'https://i.ebayimg.com/images/g/81AAAeSwieZqmBkR/s-l1600.jpg'
const ALT1 = 'Funko Pop Star Wars Cobb Vanth #484 Chase Limited Edition from The Mandalorian, new in box, photographed by The Shelf Cartel'
const ALT2 = 'Funko Pop Bleach Fully-Hollowfied Ichigo #1104 Glow Chase Edition, photographed by The Shelf Cartel'
const ALT3 = 'Funko Pop Star Wars Darth Vader #757 Target Exclusive in box, photographed by The Shelf Cartel'
const ALT4 = 'Funko Pop Disney Frozen II Elsa #594 Amazon Exclusive vinyl figure with protector case, photographed by The Shelf Cartel'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why chase and exclusive Funko Pop figures get so much attention', p: ['Every holiday season, Funko Pop shelves empty fast and collectors start hunting for the special versions. A regular Pop is easy to find. A chase, a glow edition or a store exclusive is made in smaller numbers or sold in one place only, and that is what makes shelf-worthy pieces for fans. Knowing what you are looking at keeps you from overpaying and helps you pick the right gift.'] },
  { h: '2. What is a chase?', p: ['A chase is a variant of a regular figure that is mixed into the shipment in small numbers. It often has a different color, a flocked finish or a glow-in-the-dark look, and the box usually carries a sticker or a note saying “Chase”. The figure number is the same as the regular version, so the title, the sticker and the photos are how you tell them apart.'] },
  { h: '3. Glow editions and special finishes', p: ['Glow-in-the-dark, metallic, flocked and diamond finishes are popular with fans of a character. A glow chase looks very different in the box, so ask for a photo that shows the figure from the front and the sticker clearly. A real listing shows the actual item, not a stock image.'] },
  { h: '4. Store exclusives and stickers', p: ['Many Pop figures are exclusive to one retailer or event, such as Target, Amazon or a convention. The exclusive sticker on the box is part of the item: if it is missing, peeled or torn, the figure is worth less to many collectors. Always check that the title and the photos mention the exclusive and show the sticker.'] },
  { h: '5. Check the box like a collector', p: ['The box is half of the value of a Funko Pop. Look for:'], list: [
    'Corners and edges: dents, creases and soft corners lower the price.',
    'The window: scratches, yellowing or crushed plastic.',
    'Stickers and tags: are they original, straight and clean?',
    'Shelf wear and sun fading on the front of the box.'],
    after: 'If the photos do not show every side, ask the seller before you buy.' },
  { h: '6. Match the number, the title and the photos', p: ['Funko numbers are printed on the box. Check that the number in the title matches the box in the photo, and that the character, the line (Star Wars, Disney, Anime, Movies) and the edition all agree. A mismatch is a red flag, and a good seller will answer questions quickly.'] },
  { h: '7. Use a protector', p: ['A hard protector case keeps corners sharp and stops dust and scuffs. If a Pop is already in a protector, make sure the protector is clean and not hiding damage. For gifts, a protected figure arrives in the same condition it left.'] },
  { h: '8. Compare prices with recent sold listings', p: ['A listing price is only what the seller hopes to get. Search for the same figure and number and look at recently sold prices, then decide what is fair for the condition of the box. Do not pay more because of a hype post: a calm check takes a minute and saves money.'] },
  { h: '9. Plan your holiday shopping early', p: ['Special figures sell out, and December shipping can be slow. Order early, choose tracked shipping and keep a short wish list so you buy the figure you actually want. Hunting for a gift? A figure of a favourite character in a protector is an easy, safe pick.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2, IMG3, IMG4],
    datePublished: '2026-11-14',
    dateModified: '2026-11-14',
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
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: TITLE, item: `${BASE}/blog/funko-pop-chase-exclusives-holiday-guide-canada` }] }) }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>The holiday rush is here, and Funko Pop fans are hunting for chase variants, glow editions and store exclusives. Here is how to read the box, check the sticker and buy with confidence in Canada.</p>
      <figure style={fig}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={img} />
        <figcaption style={cap}>A chase figure from our shop: the sticker and the number on the box tell you what you are getting.</figcaption>
      </figure>
      {sections.slice(0, 3).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <figure style={fig}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="lazy" style={img} />
        <figcaption style={cap}>Glow chase editions look different in the box: ask for a clear photo of the sticker.</figcaption>
      </figure>
      {sections.slice(3, 5).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <figure style={fig}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="lazy" style={img} />
        <figcaption style={cap}>Store exclusives carry a sticker on the box: it is part of the item.</figcaption>
      </figure>
      {sections.slice(5).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={fig}>
        <img src={IMG4} alt={ALT4} width={1600} height={1600} loading="lazy" style={img} />
        <figcaption style={cap}>A protector case keeps the box corners sharp and makes a safe gift.</figcaption>
      </figure>
      <h2 style={h2}>Where to find Funko Pop in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop?category=Funko%20Pop" style={lk}>Funko Pop</Link> selection and the full <Link href="/shop" style={lk}>shop</Link> at The Shelf Cartel, with honest condition notes and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one character, check the number and the sticker, and add one great figure to your shelf.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/ou-acheter-funko-pop-rares-canada" style={lk}>Where to Buy Rare Funko Pop Figures in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={lk}>How to Store and Display Die-Cast Cars and Funko Pop Figures</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={lk}>Holiday Gift Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/black-friday-collectibles-guide-canada" style={lk}>Black Friday 2026 for Collectors in Canada</Link></li>
      </ul></nav>
    </article>
  )
}
