import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Hot Wheels Premium vs Mainline: How to Tell the Difference'
const IMGP = 'https://i.ebayimg.com/images/g/1ycAAeSwHOFpXE8G/s-l1600.jpg'
const ALTP = '2025 Hot Wheels Premium Car Culture Boulevard 16 Bugatti Chiron in black, photographed by The Shelf Cartel'
const DESC = 'Not sure if a Hot Wheels car is Premium or mainline? Check the base, wheels, paint details, packaging and price with this quick collector guide for buyers in Canada.'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/hot-wheels-premium-vs-mainline` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/hot-wheels-premium-vs-mainline`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMGP, width: 1600, height: 1600, alt: ALTP }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMGP] },
}

const sections = [
  { h: '1. Look at the base and the wheels', p: ['The quickest check is to flip the car over and look at the wheels. Mainline cars almost always use plastic wheels and a plastic or basic base. Premium lines such as Car Culture, Boulevard and Pop Culture usually use metal bases and rubber “Real Riders” tires on metal-looking wheels. If the tires feel soft and rubbery, you are most likely holding a Premium piece.'] },
  { h: '2. Compare the paint and the details', p: ['Premium cars tend to have more detailed paint, extra tampos (printed graphics) and finer parts such as separate mirrors or interior color. Mainline cars are simpler on purpose so they stay cheap and easy to find. Neither is better: it depends on whether you want detail or variety.'] },
  { h: '3. Read the packaging', p: ['Premium cars usually come in a card with a larger, more collector-oriented design, and the series name is printed clearly on the card, for example Car Culture or Boulevard. Mainline cars come in the classic blister pack with the familiar flame-style card. The series logo on the package is the easiest way to confirm what you have.'] },
  { h: '4. Check the price you are paying', p: ['As a rule, Premium cars cost noticeably more than mainline cars, so a “Premium” car priced like a mainline car deserves a second look. Before you buy, compare with recent sold listings for the exact casting and series, and ask for clear photos of the real item.'], list: [
    'Metal base and rubber tires: most likely Premium.',
    'Plastic base and plastic wheels: most likely mainline.',
    'Series name on the card: the final answer.'] },
  { h: '5. Watch out for fakes and swapped cars', p: ['Always buy from sellers who show real photos of the actual item. For carded cars, check that the card is not re-sealed, that the printing is sharp, and that the car inside matches the picture on the package. For loose cars, look at the base for the Hot Wheels name, the casting name and the production details.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMGP],
    dateModified: '2026-11-10',
    mainEntityOfPage: `${BASE}/blog/hot-wheels-premium-vs-mainline`,
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
      <p style={p}>Premium and mainline Hot Wheels can look similar in a photo, but they are built, packaged and priced differently. Knowing the difference helps you avoid overpaying and helps you pick the right cars for your collection. Here are five quick checks.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMGP} alt={ALTP} width={1600} height={1600} loading="eager" style={{ width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A Premium Car Culture Boulevard car from our shop: check the series name on the card.</figcaption>
      </figure>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <h2 style={h2}>Shop Premium and mainline Hot Wheels in Canada</h2>
      <p style={p}>You can browse our current selection of <Link href="/shop?category=Hot%20Wheels" style={{ color: '#e8b820' }}>Hot Wheels</Link> and <Link href="/shop?category=Hot%20Wheels%20Premium" style={{ color: '#e8b820' }}>Hot Wheels Premium</Link> at The Shelf Cartel, with real photos, honest condition and shipping across Canada and the USA. Check back often: new items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: flip the car over, check the wheels and the series name, then compare with recent sold prices before you buy.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/guide-debuter-collection-hot-wheels" style={{ color: '#e8b820' }}>How to Start a Hot Wheels Collection</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-car-culture-series-a-collectionner" style={{ color: '#e8b820' }}>Hot Wheels Car Culture: Series Worth Collecting</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-treasure-hunt-guide" style={{ color: '#e8b820' }}>Hot Wheels Treasure Hunts: How to Spot a Regular or Super</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/matchbox-collecting-guide-vintage-collectors" style={{ color: '#e8b820' }}>Matchbox Collecting Guide: Vintage, Collectors Series and Smart Buying</Link></li></ul>
    </article>
  )
}
