import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'LEGO Buying Guide for Collectors: Sets, Condition and Smart Deals'
const DESC = 'A practical LEGO guide for Canadian collectors and gift buyers: sealed vs used sets, box condition, missing pieces, minifigures and how to compare prices before you buy.'
const IMG1 = 'https://i.ebayimg.com/images/g/634AAeSwiSVpaEZK/s-l1600.jpg'
const ALT1 = 'LEGO DC The Batman Batmobile set 76332 box, photographed by The Shelf Cartel'
const SLUG = 'lego-buying-guide-collectors-canada'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Decide: build it, display it or keep it sealed', p: ['The right LEGO set depends on what you want to do with it. A set you plan to build and play with can be used or complete-in-bag. A set you want to display looks best with all pieces and a clean instruction booklet. A set you want to keep as a collectible is usually bought sealed, with a box in the best condition you can find. Knowing the goal first keeps you from overpaying for the wrong version.'] },
  { h: '2. Know the set number', p: ['Every LEGO set has a number printed on the box and on the instructions. Use it, not just the name, when you compare listings, because themes often reuse names across different years. The number also lets you check the piece count and the included minifigures.'] },
  { h: '3. Sealed sets: check the box', p: ['For sealed product, the box is part of the item. Ask for clear photos of every side and look for these details:'], list: [
    'Corners and edges: crushed or torn corners lower the condition.',
    'Seals and tape: look for factory seals that are intact and not re-taped.',
    'Shelf wear: fading, creases and dents are common on older boxes.',
    'Protection: a sealed set shipped without padding can arrive damaged, so check how the seller packs.'] },
  { h: '4. Used sets: check completeness', p: ['A used set is a great way to save money, but you want to know what is missing. Ask whether all pieces are included, whether the set was counted against the inventory, and whether the instructions and any stickers are present. Minifigures and small printed pieces are the parts most often missing or swapped.'] },
  { h: '5. Look at the minifigures', p: ['Minifigures are often what collectors want most from a set. Check the face print, the torso print and any accessories, and compare with photos of the official set. Scratches, faded prints and mismatched parts are worth noting before you buy.'] },
  { h: '6. Compare prices the smart way', p: ['Prices for the same set vary a lot depending on whether it is sealed, used, retired or still in stores. Compare recent sold listings for the exact set number and condition, and remember to add shipping and any taxes or fees if you order from outside Canada.'] },
  { h: '7. Watch out for fakes and mixed lots', p: ['Some listings mix genuine LEGO with other brands, or show a real set but ship something different. Warning signs include blurry photos, a price far below normal and vague descriptions. When in doubt, ask for more pictures and buy from a seller with a clear return policy.'] },
  { h: '8. Store and clean your collection', p: ['Keep sets away from direct sunlight, which can fade plastic, and avoid damp storage. Dust built models gently with a soft brush. Keep instructions flat in a sleeve so they stay in good shape.'] },
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
      <p style={p}>LEGO is a favourite for builders, collectors and gift buyers, and the holiday season makes it even more popular. Whether you want a sealed set for the shelf or a used set to build this weekend, a few simple checks will help you buy with confidence.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A LEGO set from our shop: the set number is printed on the box.</figcaption>
      </figure>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop LEGO in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop?category=LEGO" style={a}>LEGO</Link> selection at The Shelf Cartel, or check the <Link href="/shop" style={a}>full shop</Link> for more collectibles, with real photos, honest condition and shipping across Canada and the USA.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: find the set number, check the box or the completeness, and compare recent sold prices before you buy.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={a}>Holiday Gift Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/pokemon-cards-collecting-canada-beginners" style={a}>Pokémon Cards for Beginners</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/ou-acheter-funko-pop-rares-canada" style={a}>Where to Buy Rare Funko Pop Figures in Canada</Link></li>
      </ul>
    </article>
  )
}
