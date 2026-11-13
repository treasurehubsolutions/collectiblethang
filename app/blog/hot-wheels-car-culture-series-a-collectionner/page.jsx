import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Hot Wheels Car Culture: Series Worth Collecting'
const DESC = 'A collector guide to Hot Wheels Car Culture: what the line is, how the themed series work, how to read the card and how to pick sets worth adding to your collection in Canada.'

const IMG1 = 'https://i.ebayimg.com/images/g/fKgAAeSwHjBqGEsv/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/4CYAAeSwL8lqgJbV/s-l1600.jpg'
const ALT1 = 'Hot Wheels Japan Historics 77 Toyota Celica Premium Car Culture diecast car, photographed by The Shelf Cartel'
const ALT2 = 'Hot Wheels Premium Car Culture Vintage Racing 76 Greenwood Corvette in red, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/hot-wheels-car-culture-series-a-collectionner` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/hot-wheels-car-culture-series-a-collectionner`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. What Car Culture actually is', p: ['Car Culture is a Hot Wheels Premium line built around real automotive themes instead of random assortments. Each release is a small set of cars that share a story, such as a country, a racing style or a type of build. That theme is what makes the line popular with collectors: you are not just buying one car, you are completing a mini collection.'] },
  { h: '2. How the themed series work', p: ['Cars are usually sold in sets of five that share one theme, and the theme name is printed on the card. Collectors often try to get the full set rather than a single car, which is why individual castings from a popular series can disappear from shelves quickly. Look at the series name and the numbering on the card to see which cars belong together.'] },
  { h: '3. Read the card before you buy', p: ['The card tells you the series, the casting name and the position of the car in the set. Check that the card is sharp, flat and not re-sealed, and that the car matches the picture. A clean, undamaged card matters a lot to carded collectors.'], list: [
    'Series name: tells you which set the car belongs to.',
    'Casting name and number: helps you compare prices for the exact car.',
    'Card and blister condition: soft corners and dents lower the value.'] },
  { h: '4. What to look for in a series worth collecting', p: ['A good Car Culture series has a clear theme, real-car castings you recognize, and metal bodies with rubber tires and detailed paint. Pick the themes you actually like, whether that is Japanese classics, American muscle or race-day transport, because a collection built around your taste is easier to finish and more fun to display.'] },
  { h: '5. Buy smart and protect your cars', p: ['Compare recent sold listings for the exact casting before you pay, and ask for real photos of the item you will receive. Keep carded cars in protective cases and store loose cars away from heat and direct sun. If you are just starting out, our guide on how to tell Premium from mainline will help you spot what you are holding.'] },
  { h: '6. Loose cars versus complete sets', p: ['Carded sets keep the card art and the series name intact, which is why many collectors prefer them when they want to finish a theme or resell later. Loose cars cost less and are perfect for display if you only love one casting. If you buy loose, check that the rubber tires are clean and the paint and tampos are sharp, since these wear first.'] },
  { h: '7. Store and display your collection', p: ['Keep Car Culture cars out of direct sun and away from humidity, which fade paint and can yellow plastic. Carded cars stay crisp in clear protective cases, and the full five-car set looks best displayed together so the theme reads at a glance. Loose cars fit well in a shallow case with one space per car.'] },
  { h: '8. Build a wish list and track what you own', p: ['Write down the series name, the casting, the year and whether you own it loose or carded. A simple list shows you which themes are still missing a car, helps you spot a good deal quickly and stops you from buying the same casting twice.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2],
    datePublished: '2026-11-10',
    dateModified: '2026-11-13',
    mainEntityOfPage: `${BASE}/blog/hot-wheels-car-culture-series-a-collectionner`,
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
      <p style={p}>Car Culture is one of the most collector-friendly Hot Wheels lines because every release tells a story. If you want a collection that looks organized on the shelf and holds its interest over time, this line is a great place to focus. Here is how to approach it.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A Japan Historics Car Culture release from our shop: read the series name on the card.</figcaption>
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
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A Vintage Racing Car Culture Corvette: check the card and the paint.</figcaption>
      </figure>
      <h2 style={h2}>Shop Hot Wheels Premium in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop?category=Hot%20Wheels%20Premium" style={{ color: '#e8b820' }}>Hot Wheels Premium</Link> and <Link href="/shop?category=Hot%20Wheels" style={{ color: '#e8b820' }}>Hot Wheels</Link> selection, with honest condition and shipping across Canada and the USA. You can also read <Link href="/blog/hot-wheels-premium-vs-mainline" style={{ color: '#e8b820' }}>Hot Wheels Premium vs Mainline</Link> the <Link href="/blog/guide-debuter-collection-hot-wheels" style={{ color: '#e8b820' }}>beginner’s guide</Link> and our <Link href="/blog/hot-wheels-treasure-hunt-guide" style={{ color: '#e8b820' }}>Treasure Hunt guide</Link>.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one theme you love, read the series name on the card, and compare recent sold prices before you buy.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-treasure-hunt-guide" style={{ color: '#e8b820' }}>Hot Wheels Treasure Hunts: How to Spot a Regular or Super Treasure Hunt</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li></ul>
    </article>
  )
}
