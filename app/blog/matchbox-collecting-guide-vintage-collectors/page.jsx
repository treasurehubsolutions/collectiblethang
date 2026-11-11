import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Matchbox Collecting Guide: Vintage, Collectors Series and Smart Buying'
const DESC = 'How to collect Matchbox die-cast cars: vintage vs modern, the Collectors line, what to check on the base and the card, and how to buy with confidence in Canada.'
const SLUG = 'matchbox-collecting-guide-vintage-collectors'
const IMG1 = 'https://i.ebayimg.com/images/g/tBgAAeSwXA1pYC2c/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/URsAAeSwPXZpWGiU/s-l1600.jpg'
const ALT1 = 'Vintage Matchbox 1981 4x4 Chevy Van in lime green, photographed by The Shelf Cartel'
const ALT2 = '2025 Matchbox Collectors 1990 Volkswagen Golf Country, new on card, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Vintage or modern: pick your lane', p: ['Matchbox has been making small die-cast vehicles for decades, so a shelf can mean very different things. Vintage pieces, often sold loose, are about age, wear and the charm of older castings. Modern pieces, usually sold carded, are about clean packaging, series numbers and completing a set. Neither is better: decide which one you enjoy, then stick to it so your collection feels focused.'] },
  { h: '2. Know the Collectors and themed lines', p: ['Besides the regular line, Matchbox releases numbered and themed series, for example Collectors cars with a number such as 02/20, and country or anniversary series. The number and the series name on the card tell you exactly what the piece belongs to, which makes it much easier to track what you already own and what is missing.'] },
  { h: '3. Check condition on loose and carded cars', p: ['For loose vintage cars, look at the paint, the wheels, the axles, the windows and any missing parts, and ask for photos of the base. For carded cars, check the corners, the creases, the blister and whether the pack looks opened or re-sealed. Condition changes what collectors are willing to pay, so clear photos of the real item matter.'], list: [
    'Loose: paint chips, bent axles, cracked windows, missing parts.',
    'Carded: bent corners, creased card, dented or yellowed blister.',
    'Base: casting name, year and country of manufacture should be sharp and readable.'] },
  { h: '4. Build a collection with a theme', p: ['A theme turns random cars into a collection. Popular ideas include a single brand (Porsche, Toyota), a type of vehicle (delivery trucks, 4x4s, emergency vehicles), a country series or one complete numbered set. A clear theme also helps you say no to cars that do not fit, which saves money.'] },
  { h: '5. Buy smart and combine shipping', p: ['Compare the price with recent sold listings for the exact casting and year, and be careful with listings that use only stock photos. Small cars are cheap to ship, so buying several together can save a lot on postage. We offer combined shipping across Canada and the USA on many Matchbox cars.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2],
    datePublished: '2026-11-10',
    dateModified: '2026-11-10',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" style={{ color: '#888', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Matchbox cars are small, affordable and full of variety, which makes them one of the easiest ways to start a die-cast collection. Whether you like worn vintage pieces or fresh carded cars from the Collectors line, here are five quick tips to collect with confidence.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={{ width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A vintage loose Matchbox from our shop: look at the paint, wheels and base.</figcaption>
      </figure>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="lazy" style={{ width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A carded Matchbox Collectors car: the series number is printed on the card.</figcaption>
      </figure>
      <h2 style={h2}>Shop Matchbox in Canada</h2>
      <p style={p}>You can browse our current selection of <Link href="/shop?category=Matchbox" style={{ color: '#e8b820' }}>Matchbox</Link> cars at The Shelf Cartel, with real photos, honest condition and shipping across Canada and the USA. Check back often: new items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick a theme, check the base and the card, then compare with recent sold prices before you buy.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/guide-debuter-collection-hot-wheels" style={{ color: '#e8b820' }}>How to Start a Hot Wheels Collection</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-premium-vs-mainline" style={{ color: '#e8b820' }}>Hot Wheels Premium vs Mainline: How to Tell the Difference</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li></ul>
    </article>
  )
}
