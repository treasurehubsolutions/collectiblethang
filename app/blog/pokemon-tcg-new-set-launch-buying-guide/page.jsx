import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'New Pokémon TCG Set in November: How to Buy Smart on Launch Season'
const DESC = 'A new Pokémon TCG expansion is landing this month. Learn how to choose between Elite Trainer Boxes, booster packs and singles, check sealed products and avoid overpaying during launch hype.'
const SLUG = 'pokemon-tcg-new-set-launch-buying-guide'
const OG_IMG = 'https://i.ebayimg.com/images/g/HgEAAeSwSwhqWSu3/s-l1600.jpg'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: OG_IMG, width: 1600, height: 1600, alt: 'Pokémon TCG Pitch Black Elite Trainer Box sold by The Shelf Cartel' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [OG_IMG] },
}

const images = [
  { src: 'https://i.ebayimg.com/images/g/HgEAAeSwSwhqWSu3/s-l1600.jpg', alt: 'Pokémon TCG Pitch Black Elite Trainer Box, sealed, photographed by The Shelf Cartel', caption: 'An Elite Trainer Box: a popular all-in-one starting point.' },
  { src: 'https://i.ebayimg.com/images/g/yTEAAeSwgglqJbK-/s-l1600.jpg', alt: 'Pokémon Mega Evolution Chaos Rising Elite Trainer Box in our shop', caption: 'Check the shrink wrap, the corners and the printed set name.' },
  { src: 'https://i.ebayimg.com/images/g/IqcAAeSwRvdqje5R/s-l1600.jpg', alt: 'Pokémon Select 4-Pack figure set with Bulbasaur, Squirtle, Pikachu and Charmander', caption: 'Not only cards: figures are a fun way to display your fandom.' },
]

const sections = [
  { h: '1. Why launch season is exciting (and risky)', p: ['Every time a new Pokémon TCG expansion is announced, the whole hobby wakes up. Reports this fall point to Mega Evolution: Delta Reign arriving in November, and collectors are already talking about the new cards, the special products and the chase pulls. For buyers this is the most fun time of the year, but also the time when prices swing the most.', 'Our advice: decide what you want before the hype decides for you. Do you want to open packs for the thrill, build a deck, or complete a collection? Your answer changes what you should buy.'] },
  { h: '2. Elite Trainer Box, booster packs or singles?', p: ['Each format has a job:'], list: [
    'Elite Trainer Box: packs, sleeves, dice, counters and a storage box in one purchase. Good for beginners and for gifts.',
    'Booster packs and bundles: the cheapest way to open product and enjoy the pull. Great for kids and for casual fun.',
    'Singles: the best way to get one specific card without gambling on pulls. Ideal if you only want a favourite Pokémon or a card for your deck.'],
    after: 'Opening packs is a game of chance. If you need one particular card, buying the single is usually the smarter move.' },
  { h: '3. Check sealed products carefully', p: ['Sealed Pokémon products are popular, so condition matters. Before you buy, look for clean, tight shrink wrap, undamaged corners, a clearly printed set name and no signs that the box was opened and re-wrapped. Ask for photos of the real item, not a stock picture. Our own listings use photos of the exact item we ship.'] },
  { h: '4. Do not buy on hype alone', p: ['Early launch days bring pre-order excitement, rumours about chase cards and sudden price jumps. Prices often settle after the first weeks as supply reaches shelves. If you are not in a hurry, compare recent sold listings and wait for the market to calm down. If you want the product for a holiday gift, order early so shipping to Canada or the USA does not become a stress.'] },
  { h: '5. Beware of fakes and too-good-to-be-true deals', p: ['Whenever a set becomes popular, counterfeit cards and resealed boxes appear. Be careful with prices far below the market, blurry photos, missing set symbols and sellers who will not show the back of the product. Buy from sellers who show real photos and describe condition honestly.'] },
  { h: '6. Protect what you pull', p: ['Once you open a box, protect the good cards right away: soft sleeves first, then a top loader or a binder page. Keep cards away from moisture and sunlight, and never store them loose in a drawer. A small investment in protection keeps your best pulls in great condition for years.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: images.map(i => i.src),
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    datePublished: '2026-11-10',
    dateModified: '2026-11-10',
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const fig = { margin: '20px 0', textAlign: 'center' }
  const img = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  const cap = { color: '#888', fontSize: 13, marginTop: 6 }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" style={{ color: '#888', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>New Pokémon TCG sets create a rush: pre-orders, rumours, sold-out shelves and fast-changing prices. Whether you are a parent buying a gift, a returning collector or a first-time pack opener, these six tips will help you spend wisely this launch season.</p>
      <figure style={fig}>
        <img src={images[0].src} alt={images[0].alt} width={1600} height={1600} loading="eager" style={img} />
        <figcaption style={cap}>{images[0].caption}</figcaption>
      </figure>
      {sections.map((s, idx) => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
          {idx === 2 && (
            <figure style={fig}>
              <img src={images[1].src} alt={images[1].alt} width={1600} height={1600} loading="lazy" style={img} />
              <figcaption style={cap}>{images[1].caption}</figcaption>
            </figure>
          )}
          {idx === 4 && (
            <figure style={fig}>
              <img src={images[2].src} alt={images[2].alt} width={1600} height={1600} loading="lazy" style={img} />
              <figcaption style={cap}>{images[2].caption}</figcaption>
            </figure>
          )}
        </section>
      ))}
      <h2 style={h2}>Shop Pokémon in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop?category=Pok%C3%A9mon" style={{ color: '#e8b820' }}>Pokémon</Link> selection, from Elite Trainer Boxes to figures, with real photos, honest condition and shipping across Canada and the USA. You can also explore the whole <Link href="/shop" style={{ color: '#e8b820' }}>shop</Link>, and new items arrive every week. For exact release dates and product contents, always check the official Pokémon announcements.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick your goal (packs, deck or collection), choose the matching format, and check the seal and the photos before you buy.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/pokemon-cards-collecting-canada-beginners" style={{ color: '#e8b820' }}>Pokémon Cards for Beginners: Condition, Sets and Smart Buying</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/lego-buying-guide-collectors-canada" style={{ color: '#e8b820' }}>LEGO Buying Guide for Collectors</Link></li>
      </ul>
    </article>
  )
}
