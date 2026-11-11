import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Pokémon Cards for Beginners: Condition, Sets and Smart Buying'
const DESC = 'A beginner guide for Canadian collectors: how to read a Pokémon card, judge condition, choose sets and avoid fakes before you buy singles, lots or sealed product.'
const IMG1 = 'https://i.ebayimg.com/images/g/zOoAAeSwVvNpe9WD/s-l1600.jpg'
const ALT1 = 'Tinkatuff 084/182 Reverse Holo Paradox Rift Pokémon card, near mint, photographed by The Shelf Cartel'
const SLUG = 'pokemon-cards-collecting-canada-beginners'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Decide what kind of collector you are', p: ['Some people chase every card of one character, others complete a full set, and others buy sealed product to keep. Choosing a goal first keeps your budget under control and makes every purchase easier to judge. A single favourite character is a great starting point because the list of cards is clear and finite.'] },
  { h: '2. Learn to read the card', p: ['Every card shows a set symbol, a card number and a rarity mark near the bottom. Together they identify exactly which card you are holding, which matters because the same artwork can appear in several sets with very different demand. Write down the set and number of the cards you want so you can compare listings accurately.'] },
  { h: '3. Judge the condition honestly', p: ['Condition is the biggest factor in how collectors view a card. Look at the corners, the edges, the surface and the centering of the print. Whitening on the edges, scratches on the holo, creases and bends all lower the condition. Ask for clear photos of the front and the back, in good light, before you buy.'], list: [
    'Corners: sharp is better than rounded or frayed.',
    'Edges: look for white chips along the border.',
    'Surface: tilt the card to spot scratches, dents or print lines.',
    'Sleeve and toploader: protect cards from the moment they arrive.'] },
  { h: '4. Singles, lots or sealed: pick the right format', p: ['Singles let you target exactly what you want. Lots can be a fun way to find surprises and fill gaps, but you should check that the photos show the cards that matter. Sealed product is for people who enjoy opening packs or storing them untouched. Each format has a different risk, so match it to your goal.'] },
  { h: '5. Compare recent sold prices', p: ['Prices change with new releases, tournaments and trends. Look at several recent sold listings for the exact card, set and condition, then decide what is fair. Remember to add shipping, and customs fees if you order from outside Canada.'] },
  { h: '6. Watch out for fakes', p: ['Counterfeit cards exist, especially for popular ones. Warning signs include blurry text, odd colours, a wrong or missing set symbol, a glossy feel that does not match real cards and a price far below the market. When in doubt, ask the seller for more photos or buy from a seller with a clear return policy.'] },
  { h: '7. Store your collection safely', p: ['Use sleeves for every card that matters, toploaders or binders for the better ones, and keep everything away from heat, humidity and direct sunlight. A good storage habit keeps the condition you paid for.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1],
    datePublished: '2026-11-09',
    dateModified: '2026-11-10',
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
      <Link href="/blog" style={{ color: '#888', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Pokémon cards are one of the most popular collectibles in Canada, and getting started is easier when you know what to look at. Here is a simple guide to buying with confidence, whether you want one favourite card or a whole set.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A reverse holo single from our shop: the set number is at the bottom of the card.</figcaption>
      </figure>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Pokémon in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop?category=Pok%C3%A9mon" style={a}>Pokémon</Link> selection at The Shelf Cartel, or check the <Link href="/shop" style={a}>full shop</Link> for more collectibles, with honest condition and shipping across Canada and the USA.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one character or set, check condition in the photos and compare recent sold prices before you buy.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={a}>Holiday Gift Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/ou-acheter-funko-pop-rares-canada" style={a}>Where to Buy Rare Funko Pop Figures in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/guide-debuter-collection-hot-wheels" style={a}>How to Start a Hot Wheels Collection</Link></li>
      </ul>
    </article>
  )
}
