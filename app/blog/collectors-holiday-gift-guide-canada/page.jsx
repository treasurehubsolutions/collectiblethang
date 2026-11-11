import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Holiday Gift Guide for Collectors in Canada'
const DESC = 'Gift ideas for collectors in Canada: Hot Wheels, Funko Pop, LEGO, Star Wars and Marvel. What to look for in condition and boxes, and how to order in time for the holidays.'
const SLUG = 'collectors-holiday-gift-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/IekAAeSwPIZp5~Y-/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/RAsAAeSwWIxqje3T/s-l1600.jpg'
const ALT1 = 'Hot Wheels Premium Back to the Future DeLorean Time Machine 1955 Pop Culture diecast car, photographed by The Shelf Cartel'
const ALT2 = 'Funko Pop Television He-Man #991 Masters of the Universe vinyl figure, new and sealed, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Start with what they already collect', p: ['The best collector gift is one that fits a shelf that already exists. Look at what the person displays: a row of Hot Wheels, a wall of Funko Pop boxes, a LEGO set in progress. Adding to a theme they love beats guessing a new one. If you are not sure, ask a friend or family member which series, character or casting is still missing.'] },
  { h: '2. Hot Wheels: easy, affordable and collectible', p: ['Hot Wheels is a great pick for every budget. A single Premium car, a themed Car Culture set or a small lot of mainline cars all make a fun gift. For a more special present, look at Treasure Hunts or a car from a series the collector follows. Check our guides on Premium vs mainline and Treasure Hunts if you want to be sure what you are buying.'] },
  { h: '3. Funko Pop: the box matters', p: ['For Funko Pop, the condition of the box is part of the gift. Look for sharp corners, a clean window and no creases. Choose characters from a franchise the person loves, and ask for photos of the actual box before you order. A protective case makes a nice add-on.'] },
  { h: '4. LEGO, Star Wars and Marvel', p: ['LEGO sets are ideal for people who like to build, while Star Wars and Marvel figures suit fans who like to display characters. Pick a character, ship or team from a movie or series they enjoy. For older or discontinued pieces, compare the price with recent sold listings so you know it is fair.'] },
  { h: '5. Think about condition and gift presentation', p: ['Decide first if the gift is meant to be opened or kept sealed. A carded or boxed item should arrive in the same shape you saw in the photos, so check the description for any wear. A short note with the gift explaining why you picked it often means as much as the item itself.'] },
  { h: '6. Order early and keep it simple', p: ['Holiday shipping can be slow, so order a few weeks ahead. If you are buying for several people, a few small items, such as a Hot Wheels car, a Funko Pop and a small lot, can make a more fun package than a single big purchase. Keep a budget per person and write down who gets what.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2],
    datePublished: '2026-11-05',
    dateModified: '2026-11-11',
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
      <p style={p}>Buying for a collector can feel tricky, but a few simple rules make it easy. Here is a quick guide to picking toys and collectibles that will actually be loved, whether you are shopping for a Hot Wheels fan, a Funko Pop collector or a LEGO builder.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A pop culture Hot Wheels Premium from our shop: an easy gift for movie fans.</figcaption>
      </figure>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A sealed Funko Pop: check the box before you order.</figcaption>
      </figure>
      <h2 style={h2}>Shop collectibles in Canada</h2>
      <p style={p}>Browse our current selection of <Link href="/shop?category=Hot%20Wheels" style={a}>Hot Wheels</Link>, <Link href="/shop?category=Funko%20Pop" style={a}>Funko Pop</Link>, <Link href="/shop?category=LEGO" style={a}>LEGO</Link>, <Link href="/shop?category=Star%20Wars" style={a}>Star Wars</Link> and <Link href="/shop?category=Marvel" style={a}>Marvel</Link> at The Shelf Cartel, with honest condition and shipping across Canada and the USA. You can also check the <Link href="/shop" style={a}>full shop</Link> for deals.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one theme per person, check the condition in the photos and order a few weeks before the holidays.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/ou-acheter-funko-pop-rares-canada" style={a}>Where to Buy Rare Funko Pop Figures in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-premium-vs-mainline" style={a}>Hot Wheels Premium vs Mainline: How to Tell the Difference</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-treasure-hunt-guide" style={a}>Hot Wheels Treasure Hunts: How to Spot One</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/transformers-dc-multiverse-collecting-guide-canada" style={a}>Transformers and DC Multiverse Collecting Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hallmark-keepsake-ornaments-collecting-guide-canada" style={a}>Hallmark Keepsake Ornaments Guide</Link></li>
      </ul>
    </article>
  )
}
