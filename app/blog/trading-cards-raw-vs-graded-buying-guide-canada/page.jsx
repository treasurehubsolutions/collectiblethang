import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Trading Cards in Canada: Raw vs Graded, and How to Buy Without Getting Burned'
const DESC = 'Pokemon, hockey and other trading cards can be bought raw or graded. Learn how to judge centering, corners and surfaces, read a grading slab, spot fakes, compare sold prices and protect cards in the mail.'
const SEO_TITLE = 'Raw vs Graded Trading Cards: Buy Smart in Canada'
const SEO_DESC = 'Trading card buying tips for Canada: raw or graded, condition checks, slab details, fakes, sold prices and safe shipping for Pokemon and hockey cards.'
const SLUG = 'trading-cards-raw-vs-graded-buying-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/zOoAAeSwVvNpe9WD/s-l1600.jpg'
const ALT1 = 'Tinkatuff 084/182 Reverse Holo Paradox Rift Pokemon card, near mint, photographed by The Shelf Cartel'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Raw or graded: what the words mean', p: ['A raw card is a card that has not been sent to a grading company. It is sold as is, in a sleeve or a top loader, and its condition is the seller’s description and photos. A graded card has been inspected by a third-party company, given a grade and sealed in a hard plastic case, often called a slab. Neither is better for everyone: raw cards cost less and are great for playing and binders, while graded cards suit collectors who want a verified condition and a protective case.'] },
  { h: '2. Start with your goal', p: ['Ask yourself why you are buying. A deck to play, a binder of favourites, a gift or a long-term keepsake each call for a different approach. Players and binder collectors usually do well with raw cards in good condition. Collectors who want a sealed, labelled card for a shelf may prefer graded. Knowing your goal stops you from paying extra for something you do not need.'] },
  { h: '3. Judge a raw card like a collector', p: ['Look at four things: centering (are the borders even?), corners (sharp or rounded?), edges (any white chipping?) and surface (scratches, print lines, dents, haze). Ask for clear front and back photos in good light, and zoom in on the corners. A card described as near mint should look close to new. Our guide to condition terms explains the language sellers use.'] },
  { h: '4. Reading a graded slab', p: ['A slab shows the grading company, the card name, set, year and card number, a grade and a serial number. Check that the label matches the card inside and that the case looks intact, with no cracks, gaps or signs of reopening. Most grading companies let you verify a serial number on their own website, so do that before paying for a higher-priced card.'] },
  { h: '5. A grade is not a guarantee of price', p: ['A graded card can still sell for different amounts depending on the grade, the card and the demand. Do not assume a graded card is worth more than a clean raw one without checking. Search the exact card and grade and read recent sold listings, as shown in our guide on checking what a collectible is really worth.'] },
  { h: '6. Match the exact card, set and number', p: ['Many cards look alike. Check the set name, the card number, the language and the print type (regular, reverse holo, holo, promo). A reverse holo and a regular copy of the same card are different listings with different prices. Write the number and set down before you compare prices so you compare like with like.'] },
  { h: '7. Beware of fakes and re-labelled slabs', p: ['Popular cards attract counterfeits. Warning signs include blurry printing, odd colours, a wrong font, a card that feels too thin or too glossy, and a price far below the normal range. For graded cards, be careful with slabs that look tampered with or labels that do not match the card. Our checklist for spotting fake and bootleg collectibles covers the main checks.'] },
  { h: '8. Sealed boxes and packs', p: ['Sealed packs and boxes are fun, but you cannot see what is inside. Look at the wrapper and seams, and ask how the product has been stored. Treat claims that a sealed pack contains a particular card with caution. If you want one specific card, buying that card directly is usually cheaper than opening many packs.'] },
  { h: '9. Hockey cards and other sports cards', p: ['The same rules apply to hockey and other sports cards: identify the player, year, brand and card number, then check condition and compare sold prices. Vintage cards are often sold with older print quality and visible wear, so the grade or the photos matter even more. Our hockey collectibles guide has more on picking a lane.'] },
  { h: '10. Protect cards at home and in the mail', p: ['Use soft sleeves and a rigid top loader or a sleeve and card saver, and keep cards out of damp places and direct sunlight. When shipping, a card needs a stiff cover so it cannot bend, and a graded slab needs padding. When a card arrives, follow our 10-minute inspection checklist and take photos before you open anything.'] },
  { h: '11. Budget, shipping and duty', p: ['Add shipping to the card price, especially for small cards where shipping can be a large share of the total. Combine several cards in one order when you can. For orders from outside Canada, check the delivered price including any duty or fees before you buy. Keep a simple list of what you own so you do not buy duplicates, and see our guide to cataloguing and insuring a collection.'] },
  { h: '12. Questions collectors ask', p: ['Should I grade my cards? Only if the card is in excellent condition and worth more with a grade than the fee and shipping cost, so check sold prices first. Are raw cards a bad choice? No, they are a great way to enjoy the hobby if you inspect them well. Can I trust a seller’s “near mint” claim? Trust the photos and the return policy more than the label, and ask questions before you buy.'] }
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1],
    datePublished: '2026-11-21',
    dateModified: '2026-11-21',
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
      <p style={p}>Trading cards are a big part of the collectibles hobby, from Pokemon to hockey. You can buy them raw or graded, and each route has its own checks. Here is how collectors in Canada can pick the right one and avoid common mistakes.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A raw card from our shop: clear photos let you judge corners, edges and surface.</figcaption>
      </figure>
      {sections.slice(0, 6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      {sections.slice(6, 12).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <h2 style={h2}>Shop collectibles in Canada</h2>
      <p style={p}>Browse <Link href="/shop?category=Pokemon" style={a}>Pokemon</Link>, <Link href="/shop?category=Funko%20Pop" style={a}>Funko Pop</Link> and <Link href="/shop?category=Hot%20Wheels" style={a}>Hot Wheels</Link> at The Shelf Cartel, with honest condition and shipping across Canada and the USA. See the <Link href="/shop" style={a}>full shop</Link> for the current selection.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: decide whether you want raw or graded, note the exact set and card number, and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/pokemon-cards-collecting-canada-beginners" style={a}>Pokémon Cards for Beginners: Condition, Sets and Smart Buying</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/pokemon-tcg-new-set-launch-buying-guide" style={a}>New Pokémon TCG Set in November: How to Buy Smart on Launch Season</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hockey-collectibles-guide-canada" style={a}>Hockey Collectibles in Canada: Bobbleheads, NHL Figures and Cards for Fans</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={a}>How to Check What a Collectible Is Really Worth</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={a}>How to Spot Fake and Bootleg Collectibles</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={a}>Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={a}>Your Collectible Just Arrived: A 10-Minute Inspection Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/catalogue-and-insure-your-collection-canada-guide" style={a}>How to Catalogue and Insure Your Collection</Link></li>
      </ul></nav>
    </article>
  )
}
