import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "Vintage Tin Toys and Wind-Up Toys in Canada: A Collector Buying Guide"
const DESC = "How to buy and collect vintage tin toys and wind-up toys in Canada: check rust, lithography and working mechanisms, original boxes, spot reproductions, compare sold prices and ship safely."
const SEO_TITLE = "Vintage Tin Toy Collecting Guide"
const SEO_DESC = "Collecting vintage tin and wind-up toys in Canada: check rust, mechanisms and boxes, spot reproductions and compare sold prices."
const SLUG = 'vintage-tin-toys-wind-up-toys-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why vintage tin and wind-up toys are collectible', p: ['Tin toys and wind-up toys have bold lithographed artwork, simple mechanisms and a charm that modern plastic rarely matches. Cars, robots, animals, trains and walking figures are all popular. The catch is that thin metal dents, fades and rusts easily, so condition and honesty from the seller matter a great deal.'] },
  { h: '2. Choose a focus before you buy', p: ['A clear focus keeps prices easier to compare and your display consistent.'], list: [
    'Type: wind-up walkers, friction cars, robots, trains or novelty animals.',
    'Era: older tin lithograph pieces or later mixed tin and plastic toys.',
    'Completeness: toy only, or toy with key, box and paperwork.']  },
  { h: '3. Rust, dents and lithography wear', p: ['Look closely at seams, corners, the base and the underside, since rust often starts where paint is thin. Check printed details for scratches, flaking and fading. Ask for sharp photos of every side, the bottom and any maker marks, not only one flattering front view.'] },
  { h: '4. Does the mechanism work?', p: ['Ask the seller to confirm that the wind-up key turns, that the spring winds and releases smoothly and that the toy actually moves. A seized or over-wound spring can be costly to repair. A short video from the seller is the best proof, and a clear note when a toy is untested or not working protects both sides.'] },
  { h: '5. Keys, boxes and paperwork', p: ['Many wind-up toys came with a small key, and a missing key is common. Original boxes and instruction sheets can add interest, but boxes are fragile, so ask about tears, crushed corners and stains. Compare like with like: a boxed toy and a loose toy are not the same item.'] },
  { h: '6. Repairs, repaints and replaced parts', p: ['Touched-up paint, replaced wheels or swapped keys are common on older toys. These are not always a problem, but they should be disclosed because they change value. Ask whether any part has been repainted or replaced, and look for colour that does not match the rest of the toy.'] },
  { h: '7. Spotting reproductions and modern copies', p: ['Reissues and reproductions exist, and some are clearly marked while others are not. Warning signs include very low prices, crisp new-looking printing on an old toy and missing or unusual maker marks. Ask for photos of the base and any markings. Our fake and bootleg guide lists more warning signs.'] },
  { h: '8. Compare sold prices, not asking prices', p: ['Search the exact toy name and maker, filter to sold listings and compare several recent sales in the same condition and with or without the box. Asking prices only show what sellers hope for. Add shipping to every price, because fragile toys need careful packing.'] },
  { h: '9. Shipping, customs, cleaning and storage', p: ['Thin metal can bend in transit, so ask how the seller packs the toy and prefer tracked shipping with padding on all sides. If you buy from the USA, confirm duties, taxes and delivery time first. At home, dust gently with a soft dry brush and avoid water and harsh cleaners on the artwork. Store the toy away from sunlight and damp rooms, and release the spring tension if the seller advises it.'] },
  { h: '10. Questions collectors ask', p: ['Should I wind a vintage toy fully? Wind it gently and stop when you feel resistance, because forcing a spring can break it. Are tin toys a good investment? Prices move with demand and condition, so collect what you enjoy and treat any resale value as a bonus.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    datePublished: '2026-11-23',
    dateModified: '2026-11-23',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const fig = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: TITLE, item: `${BASE}/blog/${SLUG}` }] }) }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Rust, working mechanisms, keys, boxes and artwork wear: here is how to check condition, avoid reproductions and compare real sold prices before you buy vintage tin and wind-up toys in Canada.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one type of toy, check rust and the mechanism, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
<ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/barbie-doll-collecting-guide-canada" style={{ color: '#e8b820' }}>Barbie Doll Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/retro-80s-90s-nostalgia-toys-collecting-guide-canada" style={{ color: '#e8b820' }}>Retro 80s and 90s Nostalgia Toys Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/mystery-blind-box-collectibles-buying-guide-canada" style={{ color: '#e8b820' }}>Mystery Blind Box Buying Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={{ color: '#e8b820' }}>Collectible Condition Terms Explained</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible Value With Sold Listings</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={{ color: '#e8b820' }}>Keep Collectibles in the Box or Open Them?</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={{ color: '#e8b820' }}>What to Check When Your Collectible Arrives</Link></li></ul></nav>
    </article>
  )
}
