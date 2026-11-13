import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Teenage Mutant Ninja Turtles Collectibles: Figures, Hot Wheels and Smart Buying'
const DESC = 'How to collect TMNT toys in Canada: NECA action figures, Hot Wheels and other diecast, Happy Meal toys and lots. Check the line, the scale, the accessories and the packaging before you buy.'
const SLUG = 'tmnt-collectibles-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/1hcAAeSwZDpqLwCK/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/thumbs/images/g/cQ4AAeSwwgpqvmEN/s-l1600.jpg'
const ALT1 = 'NECA TMNT The Last Ronin Lost Years Grammy April, Baby Yi and Moja action figure set, photographed by The Shelf Cartel'
const ALT2 = 'Hot Wheels 2026 TMNT Party Wagon diecast car in yellow, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Pick a lane: figures, vehicles or nostalgia', p: ['Teenage Mutant Ninja Turtles collecting spans decades: detailed action figures, comic-based lines, Hot Wheels and other diecast, fast-food toys and mixed lots. Choosing one lane, for example comic-accurate figures only, or vehicles only, keeps your shelf focused and your budget under control.'] },
  { h: '2. Know the line and the scale', p: ['Figures from different lines are not always the same size or style, so check the line name and the scale in the listing before you buy. Comic-based sets such as The Last Ronin pieces are aimed at adult collectors and often include extra heads, hands and accessories. A figure that looks small in a photo may be larger or smaller than you expect next to the rest of your display.'] },
  { h: '3. Count the accessories and check the joints', p: ['Many TMNT figures ship with weapons, alternate hands and small display pieces that are easy to lose. Ask the seller to confirm that everything listed is included.'], list: [
    'Box: crushed corners, torn window, price stickers and sun fading.',
    'Contents: weapons, extra hands, stands and inserts should all be there.',
    'Figure: loose or stiff joints, paint rubs, warped weapons and sticky plastic.'] },
  { h: '4. Vehicles and diecast: read the card and the series', p: ['TMNT cars from Hot Wheels are popular with both turtle fans and diecast collectors. Look for bends or soft corners on the card, paint chips on the car and the series marking on the packaging. Our guide on Premium and mainline releases explains how to tell them apart.'] },
  { h: '5. Happy Meal toys, lots and storage', p: ['Fast-food toys and mixed lots are a fun way to start, but check that pieces are complete and still sealed when the listing says so. Keep boxed and carded items out of direct sun and store them upright so packaging does not bend. When shipping, choose a seller who packs with care and ships with tracking, across Canada and the USA.'] },
  { h: '6. Vintage versus modern figures', p: ['Vintage turtles from the late 1980s and early 1990s carry strong nostalgia, but they are often played-with, with worn paint and missing weapons. Modern figures are sharper, more articulated and easier to find complete. Many collectors mix both: one vintage favorite for the heart, modern versions for the shelf.'] },
  { h: '7. Display and protect your turtles', p: ['Keep figures out of direct sunlight to protect the paint and plastic. A shallow shelf or a display case lets each turtle stand with its weapons nearby. For carded figures and diecast cars, clear protective cases keep the card flat and the corners sharp.'] },
  { h: '8. Build a wish list', p: ['Write down the characters, vehicles and lines you want, then track what you already own with its condition. A short list helps you spot a good deal fast and avoid buying the same figure twice.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2],
    datePublished: '2026-11-11',
    dateModified: '2026-11-12',
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
      <p style={p}>Cowabunga never goes out of style. Whether you grew up with the cartoon or you collect the newer comic-based lines, here are five quick tips to buy smart and build a shelf worth showing off.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A NECA Last Ronin figure set from our shop: check the accessories and the box.</figcaption>
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
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A Hot Wheels TMNT Party Wagon: check the card and the paint.</figcaption>
      </figure>
      <h2 style={h2}>Shop TMNT and Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop?category=TMNT" style={{ color: '#e8b820' }}>TMNT</Link> selection, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one lane, check the scale and the accessories, and buy from a seller who shows real photos.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-premium-vs-mainline" style={{ color: '#e8b820' }}>Hot Wheels Premium vs Mainline</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/jurassic-park-world-collectibles-guide-canada" style={{ color: '#e8b820' }}>Jurassic Park and Jurassic World Collectibles Guide</Link></li></ul>
    </article>
  )
}
