import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Batman Collectibles: A Collecting Guide for Canadian Fans'
const DESC = 'How to collect Batman figures, die-cast cars and toys in Canada: choosing a focus, judging condition and packaging, spotting fakes, comparing prices with sold listings and displaying your collection.'
const SEO_TITLE = 'Batman Collectibles Guide for Canadian Fans'
const SEO_DESC = 'Collect Batman figures, cars and toys in Canada: pick a focus, check condition and packaging, avoid fakes and compare prices.'
const SLUG = 'batman-collectibles-collecting-guide-canada'
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
  { h: '1. Why Batman is such a big collecting world', p: ['Batman appears in action figures, die-cast cars, building sets, statues, plush, trading cards and more, from many eras of comics, film and animation. That variety is great for fans, but it can feel overwhelming, so a clear plan helps you avoid scattered, unwanted purchases.'] },
  { h: '2. Choose a focus before you buy', p: ['Pick one angle that excites you: a favourite era, a favourite costume, a favourite vehicle such as the Batmobile, or one product line. A focused collection looks better on a shelf and makes it easier to know a fair price when you see one.'] },
  { h: '3. Action figures: read the packaging', p: ['Check the name of the line, the character version and any variant details printed on the box. Several Batman versions can look similar at a glance, so compare the box art and the text with the listing title before you pay.'] },
  { h: '4. Die-cast Batmobiles and vehicles', p: ['Look closely at paint chips, wheel condition, windows and any moving parts. For carded cars, check the card for creases, soft corners and cracked blisters. Our guides on Hot Wheels Premium versus Mainline and on die-cast storage explain what to look for.'] },
  { h: '5. Sealed or opened', p: ['Sealed items usually appeal to collectors who value the package, while opened figures suit people who want to pose and display them. Neither is wrong. Our guide on keeping collectibles in the box or opening them helps you decide, and it is easier to choose before you buy than after.'] },
  { h: '6. Judge condition honestly', p: ['Ask for photos of every side of the box, the card and the item. Look for shelf wear, dents, sticker residue and sun fading. Our condition terms guide explains words such as mint, near mint and used so you can compare listings fairly.'] },
  { h: '7. Check accessories and small parts', p: ['Loose figures often lose capes, weapons, gadgets or alternate hands. Ask the seller to list what is included and compare it with a photo of the complete figure. Missing pieces change both the display and the fair price.'] },
  { h: '8. Watch for fakes and knock-offs', p: ['Blurry box printing, odd colours, flimsy plastic and prices far below normal are warning signs. Compare photos with a genuine example and buy from sellers who show clear pictures. Our guide to spotting fake and bootleg collectibles covers the checks in detail.'] },
  { h: '9. Compare prices using sold listings', p: ['An asking price shows what a seller hopes for, not what buyers pay. Check sold listings for the same line, character version and condition, then add shipping and taxes to find the real cost. Our sold listings guide shows how step by step.'] },
  { h: '10. Display and protect your collection', p: ['Keep figures and boxes out of direct sunlight, which fades colours and yellows plastic, and away from damp areas. A closed case reduces dust, and risers or shelves let you show several pieces at once. Our storage and display guide has ideas for every budget.'] },
  { h: '11. Build a collection without overspending', p: ['Set a budget, keep a list of what you own and want, and wait for the right piece at the right price. Photograph and catalogue your items as you go, which also helps if you ever need to insure them. Our guide on cataloguing and insuring a collection shows how.'] },
  { h: '12. Questions Batman collectors ask', p: ['Where do I start? Choose one era or one vehicle you love and buy a single piece you will enjoy. Sealed or opened? It depends on whether you value the package or the display. How do I know a price is fair? Compare sold listings for the exact version and condition.'] }
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
      <p style={p}>Batman collectibles span figures, die-cast cars, building sets and more. This guide helps Canadian fans choose a focus, judge condition and packaging, avoid fakes, compare prices fairly and display their collection safely.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A collectible from our shop: check packaging, accessories and condition before you buy.</figcaption>
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
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one Batman era or vehicle and write down the three checks that matter most before you buy it.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={a}>Keep Collectibles in the Box or Open Them?</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={a}>Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={a}>How to Spot Fake and Bootleg Collectibles</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={a}>How to Check a Collectible's Value Using Sold Listings</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={a}>Die-Cast and Funko Storage and Display Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/mcfarlane-dc-multiverse-collecting-guide-canada" style={a}>McFarlane DC Multiverse Collecting Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/clean-loose-action-figures-diecast-cars-safely-guide-canada" style={a}>How to Clean Loose Action Figures and Die-Cast Cars Safely</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/catalogue-and-insure-your-collection-canada-guide" style={a}>How to Catalogue and Insure Your Collection</Link></li>
      </ul></nav>
    </article>
  )
}
