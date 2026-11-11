import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Hot Wheels Treasure Hunts: How to Spot a Regular or Super Treasure Hunt'
const DESC = 'Learn how to recognize Hot Wheels Treasure Hunts and Super Treasure Hunts: the card, the flame logo, the paint and the wheels. A quick collector guide for buyers in Canada.'
const SLUG = 'hot-wheels-treasure-hunt-guide'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: 'https://i.ebayimg.com/images/g/vigAAeSw8cpoM3n0/s-l1600.jpg', width: 1600, height: 1600, alt: 'Hot Wheels Treasure Hunt 1978 Dodge Li’L Red Express Truck in green, photographed by The Shelf Cartel' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['https://i.ebayimg.com/images/g/vigAAeSw8cpoM3n0/s-l1600.jpg'] },
}

const sections = [
  { h: '1. What is a Treasure Hunt?', p: ['Treasure Hunts are special, lower-production cars that Hot Wheels mixes into regular mainline cases. There are two kinds: the regular Treasure Hunt, which looks close to a normal mainline car, and the Super Treasure Hunt, which gets a premium finish. Collectors enjoy them because finding one in a store or in a lot feels like a small jackpot.'] },
  { h: '2. How to spot a regular Treasure Hunt', p: ['A regular Treasure Hunt is the easier one to miss. Look for these signs:'], list: [
    'A small flame-in-circle logo printed on the car itself.',
    'The same logo (or a silver flame) on the card behind the car.',
    'Usually the same plastic parts as a mainline car, so the card is your best clue.'],
    after: 'Because it looks so close to a mainline car, many regular Treasure Hunts are only noticed when someone checks the card.' },
  { h: '3. How to spot a Super Treasure Hunt', p: ['The Super Treasure Hunt is the one most collectors hope for. It is normally easy to recognize once you know what to look for:'], list: [
    'Special paint, often a shiny, metallic finish.',
    'Rubber “Real Riders” tires instead of plastic wheels.',
    'A small TH logo on the car, and a gold or flame-style mark on the card.'],
    after: 'If a car in a mainline pack has rubber tires and a deep metallic finish, check the card and the logo carefully.' },
  { h: '4. Check the card and the condition', p: ['For carded cars, the card matters as much as the car. Look for bent corners, creases, dents in the blister and signs that the pack has been opened and re-sealed. Condition changes what collectors are willing to pay, so ask for clear photos of the real item.'] },
  { h: '5. Buy smart and avoid fakes', p: ['Because Treasure Hunts are popular, some sellers try to pass off regular cars as special ones. Always compare the car with photos of the real casting and series, check that the paint and the logo look clean and sharp, and compare the price with recent sold listings. If a deal looks too good to be true, ask for more pictures before you buy.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: ['https://i.ebayimg.com/images/g/vigAAeSw8cpoM3n0/s-l1600.jpg'],
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
      <p style={p}>Treasure Hunts are among the most exciting finds in Hot Wheels collecting, and they can hide in plain sight on a store peg or inside a lot. Here are five quick checks to help you tell a regular Treasure Hunt, a Super Treasure Hunt and a normal mainline car apart.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src="https://i.ebayimg.com/images/g/vigAAeSw8cpoM3n0/s-l1600.jpg" alt="Hot Wheels Treasure Hunt 1978 Dodge Li’L Red Express Truck in green, photographed by The Shelf Cartel" width={1600} height={1600} loading="eager" style={{ width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A Treasure Hunt casting from our shop: check the logo, the paint and the wheels.</figcaption>
      </figure>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <h2 style={h2}>Shop Hot Wheels in Canada</h2>
      <p style={p}>You can browse our current selection of <Link href="/shop?category=Hot%20Wheels" style={{ color: '#e8b820' }}>Hot Wheels</Link> and <Link href="/shop?category=Hot%20Wheels%20Premium" style={{ color: '#e8b820' }}>Hot Wheels Premium</Link> at The Shelf Cartel, with real photos, honest condition and shipping across Canada and the USA. Check back often: new items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: check the card for the flame or TH logo, look at the tires and the paint, then compare with recent sold prices before you buy.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-premium-vs-mainline" style={{ color: '#e8b820' }}>Hot Wheels Premium vs Mainline: How to Tell the Difference</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/guide-debuter-collection-hot-wheels" style={{ color: '#e8b820' }}>How to Start a Hot Wheels Collection</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-car-culture-series-a-collectionner" style={{ color: '#e8b820' }}>Hot Wheels Car Culture: Series Worth Collecting</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/pokemon-tcg-new-set-launch-buying-guide" style={{ color: '#e8b820' }}>New Pokémon TCG Set: How to Buy Smart on Launch Season</Link></li></ul>
    </article>
  )
}
