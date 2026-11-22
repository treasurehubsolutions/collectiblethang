import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Star Trek Collectibles: A Collecting Guide for Canadian Fans'
const DESC = 'How to start and grow a Star Trek collection in Canada: figures, ships, ornaments and models, how to judge condition, spot fakes, display your pieces and buy with confidence.'
const SEO_TITLE = 'Star Trek Collectibles Guide for Canadian Fans'
const SEO_DESC = 'Start a Star Trek collection in Canada: figures, ships, ornaments, condition checks, fakes, display tips and smart buying advice for fans.'
const SLUG = 'star-trek-collectibles-collecting-guide-canada'
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
  { h: '1. Pick your corner of the universe', p: ['Star Trek covers many series, films and eras, so a collection can quickly sprawl. Decide what you love most: a favourite crew, a specific ship, a series you grew up with or a type of item such as figures, models or ornaments. A clear focus keeps your budget under control and makes it easier to spot a good piece when you see one.'] },
  { h: '2. Know the main types of collectibles', p: ['Most Star Trek collectibles fall into a few groups: action figures, ships and vehicles, model kits, holiday ornaments, die-cast pieces, plush and toys, and display items. Each group has its own condition checks, so learn what matters for the type you are buying before you spend money.'] },
  { h: '3. Action figures: accessories and articulation', p: ['For loose figures, count the accessories and check that joints hold a pose. Small items such as communicators, phasers and tricorders are easy to lose, and a figure with its original pieces is easier to display and to resell. Look at paint on faces and uniforms for rubs and chips.'] },
  { h: '4. Ships and models: check the small parts', p: ['Ships and models have fragile details such as stands, nacelles, antennas and clear parts. Ask for photos of every side, check for glue marks or repairs and confirm that the stand or base is included if the piece came with one. For kits, find out whether the parts are sealed in bags or already built.'] },
  { h: '5. Ornaments and display pieces', p: ['Holiday ornaments are popular with Star Trek fans and are easy to display, but boxes matter. Look at the box corners, the window and the inner tray. Light packaging wear is common, so compare photos carefully if the box matters to you.'] },
  { h: '6. Sealed, boxed or loose?', p: ['A sealed piece appeals to buyers who want it untouched. A loose piece is cheaper and lets you enjoy it on the shelf. There is no right answer, only what suits your goals. Our guide on keeping collectibles in the box or opening them can help you decide.'] },
  { h: '7. Judge condition honestly', p: ['Check for yellowing, sun fading, cracked plastic, sticky surfaces, missing parts and repaired breaks. Ask sellers for clear photos in daylight. Our condition terms guide explains what words such as mint, near mint and open box usually mean, so you can compare listings fairly.'] },
  { h: '8. Watch for fakes and bootlegs', p: ['Poor paint, blurry packaging, odd logos and prices that seem too good to be true are warning signs. Compare the item to photos of known genuine pieces and buy from sellers who show many clear photos. Our guide to spotting fake and bootleg collectibles walks through the checks.'] },
  { h: '9. Compare prices using sold listings', p: ['An asking price is only a wish. Check sold listings for the exact piece and condition before you pay, and remember that shipping and taxes change the real cost. Our sold listings guide shows how to do this step by step.'] },
  { h: '10. Display and protect your collection', p: ['Keep pieces out of direct sunlight, away from damp areas and behind a case or cover to cut dust. Stands should be stable, and small accessories should be stored safely. Our storage and display guide has ideas for shelves and cases.'] },
  { h: '11. Build a collection without overspending', p: ['Set a budget, keep a simple list of what you own and what you want, and wait for the right piece rather than buying every item you see. Photograph and catalogue your collection as you go, which also helps with insurance.'] },
  { h: '12. Questions Star Trek collectors ask', p: ['Should I buy loose or boxed? It depends on your goals and budget. How do I know a price is fair? Compare sold listings for the same piece and condition. Where do I start? Choose one series or ship, learn what to check, and buy a first piece you truly like.'] }
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
      <p style={p}>Star Trek has fans of every generation, and collecting it can mean figures, ships, models or ornaments. This guide helps Canadian collectors choose a focus, judge condition, avoid fakes and display their pieces with pride.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A loose action figure from our shop: check accessories, joints and paint before you buy.</figcaption>
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
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one series or ship to focus on and write down the three condition checks that matter most for it.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={a}>Keep Collectibles in the Box or Open Them?</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={a}>Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={a}>How to Spot Fake and Bootleg Collectibles</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={a}>How to Check a Collectible's Value Using Sold Listings</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={a}>Die-Cast and Funko Storage and Display Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/catalogue-and-insure-your-collection-canada-guide" style={a}>How to Catalogue and Insure Your Collection</Link></li>
      </ul></nav>
    </article>
  )
}
