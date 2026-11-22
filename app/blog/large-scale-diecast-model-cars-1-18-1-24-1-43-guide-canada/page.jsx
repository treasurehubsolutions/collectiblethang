import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Large-Scale Die-Cast Model Cars: A 1:18, 1:24 and 1:43 Buying Guide for Canadians'
const DESC = 'What 1:18, 1:24 and 1:43 mean on a die-cast model car, how to choose a scale, check boxes, paint and moving parts, compare brands such as Bburago and Maisto, and display models safely in Canada.'
const SEO_TITLE = 'Large-Scale Die-Cast Car Guide for Canada'
const SEO_DESC = 'Understand 1:18, 1:24 and 1:43 scales, check boxes, paint and parts, and compare prices before buying model cars in Canada.'
const SLUG = 'large-scale-diecast-model-cars-1-18-1-24-1-43-guide-canada'
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
  { h: '1. What the scale number means', p: ['A scale such as 1:18, 1:24 or 1:43 compares the model with the real car. At 1:18 the car is one eighteenth of the real size, so a smaller second number means a bigger model. Knowing this before you buy helps you picture how much shelf space a model will need.'] },
  { h: '2. Choosing a scale for your space', p: ['Larger scales such as 1:18 show more detail but take more room, while 1:43 models are compact and easy to line up on a shelf. Measure your shelf or case first, and stay with one scale if you like a tidy, matching display.'] },
  { h: '3. Brands you will see', p: ['Names such as Bburago and Maisto appear often in listings for large-scale model cars. Read the title and photos carefully, because the brand, the scale and the exact car version should all match what you want before you order.'] },
  { h: '4. Check the box and the packaging', p: ['Look for crushed corners, tears, sun fading and missing inner trays or inserts. Many collectors care about the box as much as the car, so ask for clear photos of every side before you pay.'] },
  { h: '5. Inspect paint, glass and wheels', p: ['Check the paint for chips and scratches, the windows for cracks or cloudiness, and the wheels for straight, smooth rolling. Small flaws are easier to spot in photos taken in bright, even light.'] },
  { h: '6. Test doors, hood and steering', p: ['Many larger models have parts that open or move. Ask whether the doors, hood, trunk and steering work smoothly, and look for loose hinges or broken mirrors, which are fragile on any model.'] },
  { h: '7. Sealed or displayed', p: ['A boxed model suits collectors who value the package, while an unboxed one lets you enjoy the details up close. Our guide on keeping collectibles in the box or opening them helps you choose before you buy.'] },
  { h: '8. Lots and sets', p: ['Lots can be good value, but check each model separately. Confirm the scale of every car, count the pieces, and see whether each one has its box. A single mixed-scale lot may not display well together.'] },
  { h: '9. Watch for fakes and mismatches', p: ['Blurry box printing, odd colours, poor-fitting parts and prices far below normal are warning signs. Compare photos with a genuine example and buy from sellers who show clear pictures. Our guide to spotting fake and bootleg collectibles covers the checks.'] },
  { h: '10. Compare prices using sold listings', p: ['An asking price shows what a seller hopes for, not what buyers pay. Check sold listings for the same brand, scale, car and condition, then add shipping and taxes. Heavier boxes can cost more to ship, so include that in your total.'] },
  { h: '11. Display and protect your models', p: ['Keep models out of direct sunlight, which fades paint and warps plastic, and away from damp areas. A closed case reduces dust, and risers let you show several cars at once. Our guides on storage and on cleaning loose cars safely give practical steps.'] },
  { h: '12. Questions model car collectors ask', p: ['Which scale should I start with? Pick the one that fits your shelf and your budget. Is the box important? For many collectors it is. How do I know a price is fair? Compare sold listings for the exact brand, scale and condition.'] }
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG3],
    datePublished: '2026-11-22',
    dateModified: '2026-11-22',
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
      <p style={p}>Large-scale die-cast model cars come in sizes such as 1:18, 1:24 and 1:43. This guide helps Canadian collectors understand scale, check boxes, paint and moving parts, avoid fakes, compare prices fairly and display models safely.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A collectible from our shop: check packaging and condition before you buy.</figcaption>
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
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A die-cast car from our shop: check paint and small parts before you buy.</figcaption>
      </figure>
      <h2 style={h2}>Shop collectibles in Canada</h2>
      <p style={p}>Browse <Link href="/shop?category=Hot%20Wheels" style={a}>Hot Wheels</Link>, <Link href="/shop?category=Funko%20Pop" style={a}>Funko Pop</Link> and <Link href="/shop?category=Action%20Figures" style={a}>action figures</Link> at The Shelf Cartel, with honest condition and shipping across Canada and the USA. See the <Link href="/shop" style={a}>full shop</Link> for the current selection.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one scale for your shelf and write down the three checks that matter most before you buy your next model.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={a}>Keep Collectibles in the Box or Open Them?</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={a}>Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={a}>How to Spot Fake and Bootleg Collectibles</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={a}>How to Check a Collectible's Value Using Sold Listings</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={a}>Die-Cast and Funko Storage and Display Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/disney-pixar-cars-diecast-collecting-guide-canada" style={a}>Disney Pixar Cars Die-Cast Collecting Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/clean-loose-action-figures-diecast-cars-safely-guide-canada" style={a}>How to Clean Loose Action Figures and Die-Cast Cars Safely</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/catalogue-and-insure-your-collection-canada-guide" style={a}>How to Catalogue and Insure Your Collection</Link></li>
      </ul></nav>
    </article>
  )
}
