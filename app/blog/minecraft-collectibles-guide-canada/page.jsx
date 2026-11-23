import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Minecraft Collectibles in Canada: A Buyer\'s Guide to Movie Figures, Hot Wheels and LEGO Sets'
const DESC = 'How to collect Minecraft figures, Hot Wheels and LEGO sets in Canada: pick a focus, check seals and completeness, spot fakes, compare sold prices and plan shipping for holiday gifts.'
const SEO_TITLE = "Minecraft Collectibles Buyer's Guide"
const SEO_DESC = "Collect Minecraft Movie figures, Hot Wheels and LEGO sets in Canada: pick a focus, check seals, spot fakes and compare sold prices."
const SLUG = 'minecraft-collectibles-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/2dMAAeSwrd5qmc7T/s-l1600.jpg'
const ALT1 = 'LEGO Minecraft Movie Woodland Mansion Fighting Ring set, new in box, from The Shelf Cartel'
const IMG2 = 'https://i.ebayimg.com/images/g/5WwAAeSwgdNpg9My/s-l1600.jpg'
const ALT2 = 'Mattel A Minecraft Movie Steve 4-inch action figure, new and sealed, from The Shelf Cartel'
const IMG3 = 'https://i.ebayimg.com/images/g/yQMAAeSwoipplNP9/s-l1600.jpg'
const ALT3 = 'Hot Wheels Minecraft Minecart 1:64 die-cast car from the HW Screen Time series, from The Shelf Cartel'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why Minecraft collectibles are everywhere this season', p: ['Minecraft has a huge audience of kids, teens and adult fans, and the movie brought new figures, sets and die-cast cars to the shelves. That makes it a popular gift for the holidays, and a good hobby for collectors who like a clear theme. Before you buy, decide what you want: figures, LEGO sets, die-cast cars, plush or a mix.'] },
  { h: '2. Pick a focus and a budget', p: ['A focused shelf looks better than a random pile. You could collect one character such as Steve, one format such as LEGO sets, or one series such as the Hot Wheels Screen Time cars. Set a budget per item and a monthly limit. For gifts, one fan, one favourite item and one budget keeps shopping simple.'] },
  { h: '3. Movie figures: check the seal and the card', p: ['Figures such as the 4-inch Steve from the movie line are usually sold sealed on a card or in a window box. A sealed item keeps its value better, so look closely at the photos before you pay.'], figure: 2, list: [
    'Seal and card: look for creases, soft corners, price stickers and yellowing of the plastic bubble.',
    'Contents: a 2-pack should show every figure and accessory in the photos.',
    'Condition words: read what the seller means by new, sealed or open box.'] },
  { h: '4. LEGO Minecraft sets: box and completeness', p: ['LEGO sets come sealed or used. For a new set, check that the box is clean and that the seals are intact. For a used set, ask for the piece count, the minifigures and the instructions. If a set says new in box, the box corners and the seal should look the part. Our LEGO buying guide explains how to compare condition and avoid missing pieces.'], figure: 1 },
  { h: '5. Hot Wheels Minecraft cars', p: ['The Minecart is part of the Hot Wheels Screen Time line, a 1:64 die-cast that fits right in with a Hot Wheels shelf. Check the blister, the card and the paint. If the car is loose, look closely at the paint and the wheels, and do not assume a loose car is the same as a carded one. Our Premium vs Mainline guide shows how to read a Hot Wheels card.'], figure: 3 },
  { h: '6. Spotting fakes and bootlegs', p: ['Popular games attract copies. Warning signs include blurry box printing, missing licence text, odd colours, flimsy packaging and a price far below the usual range. Compare the item with photos of an official one, and use our guide to spotting fake and bootleg collectibles before you buy. When in doubt, buy from a seller who shows real photos of the exact item.'] },
  { h: '7. Compare sold prices, not asking prices', p: ['Asking prices show what sellers hope for. Sold listings show what collectors actually pay. Search the exact item name, filter to sold items and look at several recent sales. Canadian and US prices can differ, so compare both, then add shipping to the total.'] },
  { h: '8. Shipping, customs and holiday timing', p: ['Boxed LEGO sets are bulky and fragile, so shipping can change the real price. Buying from a Canadian seller avoids customs surprises and long waits. Look for tracked shipping and combined shipping if you want more than one item, and order early for holiday gifts.'] },
  { h: '9. Display and storage', p: ['Keep sealed items out of direct sunlight, which fades boxes and cards. Store boxes upright or flat without squeezing the packaging. A small shelf or a clear case keeps dust off and makes the display easy to enjoy.'] },
  { h: '10. Buying Minecraft as a gift', p: ['Many buyers are shopping for a child or a teen, so keep it practical. Ask which part of Minecraft they enjoy: building, survival, the movie or the die-cast cars. Choose a sealed box if the gift will be wrapped, and check the age grading on the box, because small parts are not suitable for very young children. If you are unsure, a single clean LEGO set or a Hot Wheels car is an easy and affordable choice. Order early in the season so that tracked shipping arrives before the holidays, and ask the seller about returns if the gift turns out to be a duplicate.', 'For adult collectors, the same rules apply with a bit more patience: wait for a clean copy at a fair sold price rather than paying for the first listing you see. Save your favourite searches, compare two or three sellers and read the item description from top to bottom before you buy.'] },
  { h: '11. Questions collectors ask', p: ['Should I open a sealed figure? Only if you bought it to enjoy; a sealed item keeps its value better. Is a loose figure worth buying? Yes, if it is complete and in good shape, and if you plan to display it. How many pieces make a collection? There is no right number: one character or one LEGO set on a shelf is a collection too.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1],
    datePublished: '2026-11-22',
    dateModified: '2026-11-22',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const fig = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  const imgs = { 1: [IMG1, ALT1], 2: [IMG2, ALT2], 3: [IMG3, ALT3] }
  const a = (href, label) => <Link href={href} style={{ color: '#e8b820' }}>{label}</Link>
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: TITLE, item: `${BASE}/blog/${SLUG}` }] }) }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>From movie figures and LEGO sets to Hot Wheels cars, here is how to choose, check and buy Minecraft collectibles with confidence, whether you are building a shelf or shopping for a fan.</p>
      <p style={p}>Browse the {a('/shop', 'shop')} for current Minecraft items.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.figure && <img src={imgs[s.figure][0]} alt={imgs[s.figure][1]} width={1600} height={1600} loading={s.figure === 1 ? 'eager' : 'lazy'} style={fig} />}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one focus, check the seal and completeness, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/lego-buying-guide-collectors-canada" style={{ color: '#e8b820' }}>LEGO Buying Guide for Collectors</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-premium-vs-mainline" style={{ color: '#e8b820' }}>Hot Wheels Premium vs Mainline</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/video-game-collectibles-guide-canada" style={{ color: '#e8b820' }}>Video Game Collectibles Guide for Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible's Value With Sold Listings</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/order-collectibles-early-holiday-shipping-canada-guide" style={{ color: '#e8b820' }}>Order Collectibles Early for Holiday Shipping</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/sonic-the-hedgehog-collectibles-guide-canada" style={{ color: '#e8b820' }}>Sonic the Hedgehog Collectibles Guide</Link></li>
      </ul></nav>
    </article>
  )
}
