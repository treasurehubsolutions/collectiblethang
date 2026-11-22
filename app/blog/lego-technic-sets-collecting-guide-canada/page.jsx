import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Lego Technic Sets: A Buying and Collecting Guide for Canadian Builders'
const DESC = 'How to buy and collect Lego Technic sets in Canada: sealed or built, checking parts and instructions, avoiding fakes, storing and displaying models and comparing prices with sold listings.'
const SEO_TITLE = 'Lego Technic Buying Guide for Canadian Builders'
const SEO_DESC = 'Buy Lego Technic sets in Canada with confidence: sealed vs built, parts and instructions checks, fakes, storage, display and price tips.'
const SLUG = 'lego-technic-sets-collecting-guide-canada'
const IMG2 = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/afAAAeSwxgFoB~U8/s-l1600.jpg'
const ALT2 = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, photographed by The Shelf Cartel'
const ALT3 = 'NECA TMNT The Last Ronin Lost Years Nightwatcher Donatello action figure, photographed by The Shelf Cartel'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG3, width: 1600, height: 1600, alt: ALT3 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG3] },
}

const sections = [
  { h: '1. What makes Technic different', p: ['Lego Technic sets focus on mechanisms such as gears, axles, pistons and moving steering, so a built model is as much a working machine as a display piece. That changes what you check when you buy: function and completeness matter as much as looks.'] },
  { h: '2. Decide how you will enjoy your sets', p: ['Some collectors build every set and keep them on a shelf, others keep a few sealed and some do both. Decide before you buy, because a sealed box and a built model are priced and judged differently. Our guide on keeping collectibles in the box or opening them can help you choose.'] },
  { h: '3. Sealed sets: check the box', p: ['For a sealed set, look at the box corners, edges and seal tabs, and ask for photos of every side. Crushed corners, torn flaps and signs of reopening matter to collectors. Large Technic boxes are heavy and can be damaged in shipping, so ask how the seller packs them.'] },
  { h: '4. Built or used sets: count what is there', p: ['A used set should come with its instructions and a clear statement about missing pieces. Technic uses many look-alike pins, axles and connectors, so a few missing parts are easy to overlook. Ask whether the set was built, checked against the instructions and stored away from sunlight.'] },
  { h: '5. Test the moving parts', p: ['Gears should turn smoothly, steering should move without sticking and any pneumatic or motor parts should work as the set intends. If you cannot test in person, ask the seller to show a short video or describe what works.'] },
  { h: '6. Instructions and stickers', p: ['Instruction booklets are part of the value. Look for creases, tears and water damage. Many sets use stickers, and applied or peeling stickers can affect how collectors see a built model, so ask what condition they are in.'] },
  { h: '7. Watch for fakes and knock-offs', p: ['Poor box printing, loose fit between parts, off colours and prices that seem too good to be true are warning signs. Buy from sellers who show many clear photos and compare the box to a genuine one. Our guide to spotting fake and bootleg collectibles walks through the checks.'] },
  { h: '8. Compare prices using sold listings', p: ['An asking price is only a wish. Check sold listings for the exact set number and condition, and remember that shipping and taxes change the real cost of a large box. Our sold listings guide shows how to do this step by step.'] },
  { h: '9. Store and display built models', p: ['Keep built models out of direct sunlight, which can fade and yellow plastic, and away from damp areas. A closed case cuts dust, and a stable shelf matters for heavy models. Our storage and display guide has ideas for shelves and cases.'] },
  { h: '10. Clean without damage', p: ['Use a soft brush for dust and keep water away from stickers and moving parts. For deeper cleaning, see our guide to cleaning loose figures and die-cast cars safely, which covers the same gentle approach.'] },
  { h: '11. Build a collection without overspending', p: ['Set a budget, keep a list of the sets you own and want, and wait for the right price instead of buying every set you see. Photograph and catalogue your models as you go, which also helps with insurance. Our general Lego buying guide covers more on sets, minifigures and pieces.'] },
  { h: '12. Questions Technic collectors ask', p: ['Should I buy sealed or built? It depends on your goals and budget. How do I know a price is fair? Compare sold listings for the same set number and condition. Where do I start? Pick one vehicle or theme you love, learn what to check and buy a first set you will enjoy building.'] }
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG3],
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
      <p style={p}>Lego Technic sets combine building with working mechanisms, which makes them popular with both builders and collectors. This guide helps Canadian buyers choose between sealed and built sets, check parts and instructions, avoid fakes and display models safely.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A collectible from our shop: check small parts, moving pieces and condition before you buy.</figcaption>
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
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A die-cast collectible from our shop: check small parts and paint before you buy.</figcaption>
      </figure>
      <h2 style={h2}>Shop collectibles in Canada</h2>
      <p style={p}>Browse <Link href="/shop?category=Hot%20Wheels" style={a}>Hot Wheels</Link>, <Link href="/shop?category=Funko%20Pop" style={a}>Funko Pop</Link> and <Link href="/shop?category=Action%20Figures" style={a}>action figures</Link> at The Shelf Cartel, with honest condition and shipping across Canada and the USA. See the <Link href="/shop" style={a}>full shop</Link> for the current selection.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one Technic vehicle or theme and write down the three checks that matter most before you buy it.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={a}>Keep Collectibles in the Box or Open Them?</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={a}>Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={a}>How to Spot Fake and Bootleg Collectibles</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={a}>How to Check a Collectible's Value Using Sold Listings</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={a}>Die-Cast and Funko Storage and Display Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/lego-buying-guide-collectors-canada" style={a}>Lego Buying Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/clean-loose-action-figures-diecast-cars-safely-guide-canada" style={a}>How to Clean Loose Action Figures and Die-Cast Cars Safely</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/catalogue-and-insure-your-collection-canada-guide" style={a}>How to Catalogue and Insure Your Collection</Link></li>
      </ul></nav>
    </article>
  )
}
