import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Hallmark Keepsake Ornaments: A Collecting Guide for the Holiday Season'
const DESC = 'How to collect Hallmark Keepsake Ornaments in Canada: series and year, box condition, exclusives and limited releases, and how to buy with confidence before the holidays.'
const SLUG = 'hallmark-keepsake-ornaments-collecting-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/ekEAAeSwcyxpO42-/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/XeUAAeSwlw1pEApo/s-l1600.jpg'
const ALT1 = 'Hallmark Keepsake Ornament Star Wars A-Wing Fighter from the Return of the Jedi collection, photographed by The Shelf Cartel'
const ALT2 = 'Hallmark Eight Tiny Reindeer Dasher ornament, first in series, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Understand series and year', p: ['Hallmark releases Keepsake Ornaments every year, and many belong to a numbered series, for example a first-in-series piece that starts a set. The year and the series position are printed on the box, and they are the first things to check. Knowing which year and which number you are buying makes it easy to track what you own and what is still missing.'] },
  { h: '2. Pick a theme you love', p: ['Collectors usually follow a theme: a franchise such as Star Wars, Marvel or Jurassic World, a series like a yearly reindeer or a character line, or a single holiday tradition. A theme keeps the collection focused and makes it easier to say no to pieces that do not fit.'] },
  { h: '3. Check the box and the ornament', p: ['For many collectors the box is part of the value, so look closely before you buy and ask for photos of the real item.'], list: [
    'Box: crushed corners, tears, fading, stickers and price tags.',
    'Ornament: paint wear, loose parts, cracks and tangled or missing hangers.',
    'Extras: batteries, light or sound features and inserts should be present and working when the piece has them.'] },
  { h: '4. Know exclusives and limited releases', p: ['Some ornaments are tied to events, retailers or limited runs, and they can be harder to find later. A piece marked as limited or exclusive usually says so on the box. Read the listing carefully, compare it with the official description when you can, and be careful with sellers who only show stock photos.'] },
  { h: '5. Buy early and ship safely', p: ['Holiday demand rises every year, so popular ornaments are easier to find before December than during the last week. Ornaments are fragile: choose sellers who pack with care and ship with tracking. We ship across Canada and the USA, and we pack boxed ornaments to protect the corners.'] },
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
  const fig = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" style={{ color: '#888', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Hallmark Keepsake Ornaments are one of the most popular holiday collectibles, from pop culture pieces to yearly series. With the season starting, here are five quick tips to collect them with confidence.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A Star Wars Keepsake Ornament from our shop: the year and collection are on the box.</figcaption>
      </figure>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A first-in-series ornament: the series number helps you track your set.</figcaption>
      </figure>
      <h2 style={h2}>Shop Hallmark Ornaments in Canada</h2>
      <p style={p}>You can browse our current selection of <Link href="/shop?category=Hallmark%20Ornaments" style={{ color: '#e8b820' }}>Hallmark Ornaments</Link> at The Shelf Cartel, with honest condition and shipping across Canada and the USA. Check back often: new items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose a theme, check the year and the box, and order early so your ornaments arrive before the holidays.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/star-wars-marvel-legends-collecting-guide-canada" style={{ color: '#e8b820' }}>Star Wars and Marvel Legends Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/lego-buying-guide-collectors-canada" style={{ color: '#e8b820' }}>LEGO Buying Guide for Collectors</Link></li></ul>
    </article>
  )
}
