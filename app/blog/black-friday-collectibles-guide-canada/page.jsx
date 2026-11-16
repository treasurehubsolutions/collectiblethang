import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Black Friday 2026 for Collectors in Canada: How to Shop Smart'
const DESC = 'Black Friday is November 27, 2026. A practical guide for collectors in Canada: make a wishlist, check condition, compare sold prices, avoid fake deals and plan your shipping.'
const SLUG = 'black-friday-collectibles-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/vigAAeSw8cpoM3n0/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/RAsAAeSwWIxqje3T/s-l1600.jpg'
const ALT1 = 'Hot Wheels Treasure Hunt 1978 Dodge Li’L Red Express Truck in green, photographed by The Shelf Cartel'
const ALT2 = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, photographed by The Shelf Cartel'
const ALT3 = 'Funko Pop Television He-Man #991 Masters of the Universe vinyl figure, new and sealed, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Build a wishlist before the sales start', p: ['Black Friday falls on November 27 this year, and the best way to avoid impulse buys is to decide what you want before the emails start. Write down the series, characters or castings you are still missing, with a maximum price for each. A short, specific list keeps you focused on pieces that really complete your shelf instead of whatever is on a banner.'] },
  { h: '2. Know the real price first', p: ['A big percentage off means little if the starting price was inflated. Take a few minutes to check recent sold listings for the exact item: same series, same condition, same packaging. If a deal is at or below what similar items actually sold for, it is a good deal. If not, you can wait. Collectibles that are hard to find rarely go to zero, so patience is often cheaper than panic.'] },
  { h: '3. Condition decides the value', p: ['For carded and boxed collectibles, a sharp card or a clean box can matter as much as the item itself. Ask for clear photos of the corners, the blister and the window, and read the description for any wear. Our guides on Hot Wheels Premium vs mainline and on Treasure Hunts explain what to look for before you pay.'] },
  { h: '4. Hot Wheels, Funko Pop and figures: what to look for', p: ['For Hot Wheels, check the series name, the casting and whether the card is flat and unbent. For Funko Pop, look at the box corners and the window. For action figures, confirm that accessories are included and that the packaging matches the line. Pick a theme and stay with it: a small complete set looks better than a pile of unrelated pieces.'] },
  { h: '5. Beware of fake urgency and fake listings', p: ['Countdown timers, “only a few left” banners and unknown sellers with prices far below the market are classic warning signs. Buy from sellers with real photos of the actual item, a clear return policy and a history you can check. If a price looks too good to be true for a sought-after item, it usually is.'] },
  { h: '6. Plan shipping and the holiday calendar', p: ['Some big retailers start their Black Friday week early, so prices can move before November 27. Check your wishlist every few days and compare against recent sold prices before you buy. Holiday shipping slows down from late November. If the items are gifts, order early, ask for a delivery estimate and keep room for delays. Combining several items in one order can save on shipping. We ship across Canada and the USA, and our delivery page explains the details.'] },
  { h: '7. Keep gifts and your own shelf separate', p: ['It is easy to buy for yourself while shopping for others. Set a budget for each person, including you, and note it before you start. If you are buying for a collector, our holiday gift guide has ideas for every budget and every kind of fan.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2, IMG3],
    datePublished: '2026-11-13',
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
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Black Friday is two weeks away, and collectors are already hunting for deals. The goal is not to buy the most, it is to buy the right pieces at a fair price. Here is a simple plan for Hot Wheels, Funko Pop and figure collectors in Canada.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A Hot Wheels Treasure Hunt from our shop: know what you are looking at before you buy.</figcaption>
      </figure>
      {sections.slice(0, 3).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>Check the series and the condition of the car and card.</figcaption>
      </figure>
      {sections.slice(3).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A sealed Funko Pop: the box is part of the value.</figcaption>
      </figure>
      <h2 style={h2}>Shop collectibles in Canada</h2>
      <p style={p}>Browse <Link href="/shop?category=Hot%20Wheels" style={a}>Hot Wheels</Link>, <Link href="/shop?category=Funko%20Pop" style={a}>Funko Pop</Link>, <Link href="/shop?category=Star%20Wars" style={a}>Star Wars</Link> and <Link href="/shop?category=Marvel" style={a}>Marvel</Link> at The Shelf Cartel, with honest condition and shipping across Canada and the USA. See the <Link href="/shop" style={a}>full shop</Link> for the current selection.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: write your wishlist, set a maximum price per item and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={a}>Holiday Gift Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-premium-vs-mainline" style={a}>Hot Wheels Premium vs Mainline: How to Tell the Difference</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-treasure-hunt-guide" style={a}>Hot Wheels Treasure Hunts: How to Spot One</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/ou-acheter-funko-pop-rares-canada" style={a}>Where to Buy Rare Funko Pop Figures in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/buying-collectibles-on-ebay-canada-checklist" style={a}>Buying Collectibles on eBay Canada: An 8-Step Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-formula-1-collecting-guide-canada" style={a}>Hot Wheels Formula 1 Collecting Guide for Canadian Fans</Link></li>
      </ul></nav>
    </article>
  )
}
