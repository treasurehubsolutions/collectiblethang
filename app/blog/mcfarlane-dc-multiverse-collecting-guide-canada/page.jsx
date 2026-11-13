import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'McFarlane DC Multiverse Collecting Guide: Batman, Retro Super Friends and Absolute Figures'
const DESC = 'How to collect McFarlane Toys DC Multiverse figures in Canada: 7 inch and 6 inch lines, Batman Animated Series, Retro Super Friends, the new Absolute wave, and how to check packaging and buy smart.'
const SLUG = 'mcfarlane-dc-multiverse-collecting-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/54cAAeSwCctp39Zs/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/EsgAAeSwzo1o0Fn0/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/h7IAAeSwYXxqKE5B/s-l1600.jpg'
const IMG4 = 'https://i.ebayimg.com/images/g/GWUAAeSw8NRqiPdS/s-l1600.jpg'
const ALT1 = 'McFarlane DC Multiverse Supergirl and Krypto Deluxe Theatrical Edition 7 inch figure, photographed by The Shelf Cartel'
const ALT2 = 'McFarlane DC Multiverse Max Shreck Batman Returns 7 inch Deluxe Theatrical Edition figure, photographed by The Shelf Cartel'
const ALT3 = 'McFarlane Batman The Animated Series Ventriloquist and Scarface 6 inch figure, photographed by The Shelf Cartel'
const ALT4 = 'DC Multiverse The Penguin 7 inch action figure from The Batman movie by McFarlane Toys, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why McFarlane DC figures are a collector favourite', p: ['DC fans have a huge cast to choose from: heroes, villains, movie versions, animated versions and classic comic looks. McFarlane Toys covers all of them with detailed sculpts and lots of articulation, so a shelf can tell a story, whether you love one character or one era. Many figures also come in collector packaging, which adds to the display value.'] },
  { h: '2. Know the main lines', p: ['The DC Multiverse range is wide, so it helps to know the families before you buy:'], list: [
    '7 inch DC Multiverse: the main line, with comic, movie and game versions, plus Deluxe Theatrical sets.',
    '6 inch Batman The Animated Series and Retro Super Friends: smaller, nostalgic figures, often sold in waves with a Build-A-Figure or a chase.',
    'Collector Edition and Gold Label: special packaging and limited variants that collectors look for.',
    'Absolute and Elite pieces: bigger, premium releases that are often sold as presales.'],
    after: 'Pick one line first. A matching scale makes a shelf look clean, and it keeps your budget under control.' },
  { h: '3. Build-A-Figure waves and chase variants', p: ['Many 6 inch waves include a Build-A-Figure: you collect every figure in the wave to assemble a bigger character. That means a missing piece can stop you from finishing the set, so check which figures you already have before you buy. Some waves also include a chase variant, a rarer version of one figure. Read the title and the photos carefully so you know whether you are getting the regular figure or the chase.'] },
  { h: '4. Check the packaging closely', p: ['For carded or boxed figures, look at the corners, the plastic window and the card face. Collector Edition and Gold Label boxes are part of the value, so ask for photos of every side if you are not sure. For a loose figure, check that every accessory is present, such as extra hands, weapons or capes, and look for paint wear and loose joints.'] },
  { h: '5. Presales and release dates', p: ['A lot of new McFarlane figures are sold as presales before they ship. A presale means you pay now and receive the item on or after the release date shown in the listing. Read the date, check the item is the exact figure you want, and plan around shipping time if it is a gift. If you need something for the holidays, choose figures that are already in hand.'] },
  { h: '6. Display and protect your collection', p: ['Keep figures away from direct sun, which fades paint and plastic. Use a shelf or a display case, dust it regularly and keep the original box if you may resell one day. Capes and thin accessories are fragile, so handle them gently when you pose a figure.'] },
  { h: '7. Set a budget and a wish list', p: ['Write down the characters and versions you want and set a limit for each one. Add shipping to the total, compare clear photos and be patient. A wish list stops impulse buying and helps you spot a fair price when it shows up.'] },
  { h: '8. Gift ideas for DC fans', p: ['For a Batman fan, an animated series figure or a movie villain is a safe pick. For a younger fan, a Retro Super Friends figure has a classic look and a friendly size. For a collector who has everything, a Collector Edition piece or a Deluxe Theatrical set is a nice surprise. Order early in the season and keep the box in good shape.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2, IMG3, IMG4],
    datePublished: '2026-11-12',
    dateModified: '2026-11-12',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const img = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  const fig = { margin: '20px 0', textAlign: 'center' }
  const cap = { color: '#888', fontSize: 13, marginTop: 6 }
  const Sec = ({ s }) => (
    <section>
      <h2 style={h2}>{s.h}</h2>
      {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
      {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
      {s.after && <p style={p}>{s.after}</p>}
    </section>
  )
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" style={{ color: '#888', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>From Batman Returns villains to animated series classics and the new Absolute presales, McFarlane’s DC figures are everywhere this season. Here is how to choose a line, read the packaging and buy well in Canada.</p>
      <figure style={fig}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={img} />
        <figcaption style={cap}>Supergirl and Krypto, a Deluxe Theatrical set from our shop.</figcaption>
      </figure>
      {sections.slice(0, 2).map(s => <Sec key={s.h} s={s} />)}
      <figure style={fig}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="lazy" style={img} />
        <figcaption style={cap}>Max Shreck from Batman Returns, a 7 inch Deluxe Theatrical Edition.</figcaption>
      </figure>
      {sections.slice(2, 4).map(s => <Sec key={s.h} s={s} />)}
      <figure style={fig}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="lazy" style={img} />
        <figcaption style={cap}>Ventriloquist and Scarface from the 6 inch Batman The Animated Series wave.</figcaption>
      </figure>
      {sections.slice(4, 6).map(s => <Sec key={s.h} s={s} />)}
      <figure style={fig}>
        <img src={IMG4} alt={ALT4} width={1600} height={1600} loading="lazy" style={img} />
        <figcaption style={cap}>The Penguin from The Batman movie line, a great villain for any shelf.</figcaption>
      </figure>
      {sections.slice(6).map(s => <Sec key={s.h} s={s} />)}
      <h2 style={h2}>Where to find McFarlane DC figures in Canada</h2>
      <p style={p}>Browse <Link href="/shop" style={{ color: '#e8b820' }}>our shop</Link> for DC Multiverse, Batman and other McFarlane figures, with honest condition notes and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one line and one character, set a budget and add your first figure.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/transformers-dc-multiverse-collecting-guide-canada" style={{ color: '#e8b820' }}>Transformers and DC Multiverse Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/star-wars-marvel-legends-collecting-guide-canada" style={{ color: '#e8b820' }}>Star Wars and Marvel Legends Guide</Link></li></ul>
    </article>
  )
}
