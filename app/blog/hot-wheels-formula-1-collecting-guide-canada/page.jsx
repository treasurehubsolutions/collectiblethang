import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Hot Wheels Formula 1 Collecting Guide for Canadian Fans: Teams, Premium Cars and Smart Buying'
const DESC = 'Hot Wheels and Formula 1 are now official partners. A practical guide for collectors in Canada: pick a team or era, tell Premium from basic cars, check the card and compare sold prices.'
const SEO_TITLE = 'Hot Wheels Formula 1 Collecting Guide'
const SEO_DESC = 'Hot Wheels x Formula 1 for Canadian collectors: pick a team or era, tell Premium from basic cars, check the card and compare sold prices.'
const SLUG = 'hot-wheels-formula-1-collecting-guide-canada'
const IMG2 = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/vigAAeSw8cpoM3n0/s-l1600.jpg'
const ALT2 = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, photographed by The Shelf Cartel'
const ALT3 = 'Hot Wheels Treasure Hunt 1978 Dodge Li’L Red Express Truck in green, photographed by The Shelf Cartel'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG2, width: 1600, height: 1600, alt: ALT2 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG2] },
}

const sections = [
  { h: '1. Why Formula 1 die-cast is having a moment', p: ['Mattel and Formula 1 announced a multi-year partnership, and Hot Wheels has been expanding its 1:64 Formula 1 range with more teams and new releases. With the season finale approaching, race fans are looking for small, affordable ways to bring the sport to their shelf. A 1:64 car costs a fraction of a large model, takes almost no space and fits any budget.'] },
  { h: '2. Pick a lane: one team, one era or one driver', p: ['The easiest way to avoid a messy shelf is to choose a rule. You can collect one team, one season, a favourite driver, or only the cars that appeared in a specific series. A rule also makes it simple to know when you are missing something, and it keeps you from buying every car you see just because it is red or has a famous logo on the nose.'] },
  { h: '3. Basic cars versus Premium cars', p: ['Hot Wheels sells race cars both as basic cars and in Premium form. Premium cars usually come with metal bodies, rubber tires and more detailed paint and decals, and they cost more. Basic cars are a great start if you want several teams for a small budget. Our guide on Hot Wheels Premium vs mainline explains how to tell them apart before you pay.'] },
  { h: '4. Read the card before you buy', p: ['Check the car name, the series name and the year on the card. Look at the blister for cracks and at the corners for soft or bent edges. If the car will stay on its card, the card is part of the value, so ask for clear photos of the front and back. If you plan to open it, make sure the car is complete, with no missing wing or broken part.'] },
  { h: '5. Compare sold prices, not asking prices', p: ['New releases often show high asking prices in the first weeks, and some listings never sell. Search for the exact car and look at recently sold listings to see what buyers really paid. If asking prices are far above that, wait a little. Our eBay buyer checklist walks through exact searches, sold prices and shipping costs step by step.'] },
  { h: '6. Watch out for lookalikes and mixed lots', p: ['Many Formula 1 cars look similar at a glance, especially from the same team in different seasons. Compare the card title, the paint and the number with a clear photo before you buy. In mixed lots, make sure the listing shows every car, not only the best one on top.'] },
  { h: '7. Plan shipping and keep the cars safe', p: ['Small cars can be shipped inexpensively, and combining several cars in one order saves money. Use protectors or a display case to avoid dents and fading, and keep cards away from direct sun. If you are buying for a fan, order early because the holiday season slows down delivery.'] },
  { h: '8. A simple starter plan', p: ['Start small: choose three cars that match your rule, buy them in good condition and see how you enjoy the hunt. Keep a short list on your phone with the car name, the series and the maximum price you are willing to pay. When a sale or a new release appears, you will know right away whether it fits. Over time, you can add a second team, a Premium car for the centre of the shelf, or a few basic cars for fun. The goal is a shelf that tells a story, not a pile of boxes.', 'If you collect more than race cars, the same method works for any line. Pick a theme, check the details, compare sold prices and enjoy the process.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG2, IMG3],
    datePublished: '2026-11-16',
    dateModified: '2026-11-16',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const a = { color: '#e8b820' }
  const fig = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: TITLE, item: `${BASE}/blog/${SLUG}` }] }) }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Formula 1 is heading toward the end of its season, and Hot Wheels is bringing the sport to 1:64 scale with an official partnership. Whether you follow one team or just love race cars, here is a simple plan to start a Formula 1 shelf in Canada without overpaying.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A Hot Wheels car from our shop: the same checks apply to race cars, from the series name to the paint.</figcaption>
      </figure>
      {sections.slice(0, 3).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>Check the card, the blister and the details before you pay.</figcaption>
      </figure>
      {sections.slice(3).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <h2 style={h2}>Shop Hot Wheels in Canada</h2>
      <p style={p}>Browse <Link href="/shop?category=Hot%20Wheels" style={a}>Hot Wheels</Link> and <Link href="/shop?category=Hot%20Wheels%20Premium" style={a}>Hot Wheels Premium</Link> at The Shelf Cartel, with honest condition and shipping across Canada and the USA. See the <Link href="/shop" style={a}>full shop</Link> for the current selection, and check our delivery page for shipping details.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose your team or era, set a maximum price per car and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-premium-vs-mainline" style={a}>Hot Wheels Premium vs Mainline: How to Tell the Difference</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/guide-debuter-collection-hot-wheels" style={a}>How to Start a Hot Wheels Collection</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/buying-collectibles-on-ebay-canada-checklist" style={a}>Buying Collectibles on eBay Canada: An 8-Step Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={a}>How to Store and Display Die-Cast Cars and Funko Pop Figures</Link></li>
      </ul></nav>
    </article>
  )
}
