import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Where to Buy Rare Funko Pop Figures in Canada'
const IMG1 = 'https://i.ebayimg.com/images/g/HvsAAeSwVZ5qmAgv/s-l1600.jpg'
const ALT1 = 'Funko Pop Star Wars Cobb Vanth #484 chase limited edition in box, photographed by The Shelf Cartel'
const DESC = 'A practical guide for Canadian collectors: how to spot a rare Funko Pop, where to look, how to check condition and price, and how to avoid fakes.'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/ou-acheter-funko-pop-rares-canada` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/ou-acheter-funko-pop-rares-canada`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Know what makes a Funko Pop rare', p: ['Rarity usually comes from a few things: limited production runs, convention or store exclusives, chase variants, and figures that have been retired (often called “vaulted”). A figure from a popular franchise that is no longer in production tends to attract the most attention from collectors.'] },
  { h: '2. Where to look in Canada', p: ['Specialty toy shops, comic stores and collector events are good places to find older pieces. Online, marketplaces and independent stores let you search for an exact character and edition. Whatever you choose, look for sellers who show photos of the actual box rather than stock images.'] },
  { h: '3. Check the box condition', p: ['For most collectors the box is part of the value. Look for sharp corners, no creasing, a clean window and intact stickers. If you plan to display the figure in a protective case, small flaws matter less; if you plan to resell later, a clean box matters more.'], list: [
    'Ask for photos of all sides of the box.',
    'Check the exclusive sticker if the listing says it is an exclusive.',
    'Use a protective case to keep the box in the same condition.'] },
  { h: '4. Compare prices before you buy', p: ['Prices for rare figures can move quickly. Compare several recent sold listings for the exact character and edition, then decide on a fair price for the condition you are buying. Remember to add shipping and any customs fees if the seller is outside Canada.'] },
  { h: '5. Avoid fakes', p: ['Counterfeit figures exist, especially for popular and expensive pieces. Warning signs include blurry box printing, wrong colors, a missing or oddly placed copyright stamp, and prices far below the market. When in doubt, ask the seller for extra photos or choose a seller with a clear return policy.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1],
    dateModified: '2026-11-10',
    mainEntityOfPage: `${BASE}/blog/ou-acheter-funko-pop-rares-canada`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const a = { color: '#e8b820' }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" style={{ color: '#888', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Finding a rare Funko Pop is part research and part patience. Here are five practical steps to help Canadian collectors buy with confidence and avoid overpaying.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={{ width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A chase Funko Pop from our shop: check the box corners, the window and the sticker.</figcaption>
      </figure>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Funko Pop in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop?category=Funko%20Pop" style={{ color: '#e8b820' }}>Funko Pop</Link> selection at The Shelf Cartel, with real photos, honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick the exact character you want, check the box in the photos, and compare recent sold prices before you buy.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/star-wars-marvel-legends-collecting-guide-canada" style={a}>Star Wars and Marvel Legends Collecting Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={a}>Holiday Gift Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/pokemon-cards-collecting-canada-beginners" style={a}>Pokémon Cards for Beginners: Condition, Sets and Smart Buying</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-premium-vs-mainline" style={a}>Hot Wheels Premium vs Mainline: How to Tell the Difference</Link></li>
      </ul>
    </article>
  )
}
