import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "Vintage Lunch Boxes and Thermoses in Canada: A Collector Buying Guide"
const DESC = "How to buy and collect vintage metal and vinyl lunch boxes and thermoses in Canada: check rust and lithography, matching bottles, hinges and latches, spot reproductions, compare sold prices and ship safely."
const SEO_TITLE = "Vintage Lunch Box Collecting Guide"
const SEO_DESC = "Collecting vintage lunch boxes and thermoses in Canada: check rust, lithography and latches, spot reproductions and compare sold prices."
const SLUG = 'vintage-lunch-boxes-thermos-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why vintage lunch boxes are collectible', p: ['Metal and vinyl lunch boxes carry bright artwork from favourite cartoons, shows and bands, which is why many adults collect them. They are also easy to display. The challenge is that years of daily school use left many of them dented, scratched or rusty, so condition matters a great deal.'] },
  { h: '2. Choose a focus before you buy', p: ['A simple focus makes prices easier to compare and keeps your shelf looking organised.'], list: [
    'Material: tin lithograph boxes, vinyl boxes or later plastic ones.',
    'Theme: one favourite show, character, sport or decade.',
    'Completeness: box only, or box with the matching thermos.']  },
  { h: '3. Rust, dents and artwork wear', p: ['Check the lid, the corners and the bottom for rust spots, because rust can spread and is hard to reverse. Look at the printed artwork for scratches, fading and worn corners. Ask the seller for close photos of every side, the inside and the base, not just the front picture.'] },
  { h: '4. Hinges, latches and handles', p: ['Make sure the lid opens and closes properly and that the latch still catches. Handles and handle brackets often loosen or break. A box that works well is easier to store and display, and seller photos of the closed latch are a good sign.'] },
  { h: '5. The matching thermos matters', p: ['Many boxes were sold with a matching bottle. Ask whether the thermos has the same artwork, whether the cap is present and whether the inside is clean. Mismatched bottles are common in lots, so compare the pair carefully before paying a complete-set price.'] },
  { h: '6. Smells, interior and cleanliness', p: ['Old lunch boxes can hold stale odours and stains. Ask about smells, mould spots and the condition of the interior. Avoid pushing a damp, musty box into a closed cabinet, since moisture speeds up rust.'] },
  { h: '7. Spotting reproductions and modern copies', p: ['Reissues and reproductions exist, and some are marked clearly while others are not. Warning signs include very low prices, crisp new-looking printing on an \'old\' box and missing maker marks. Ask for photos of the base and any markings. Our fake and bootleg guide lists more warning signs.'] },
  { h: '8. Compare sold prices, not asking prices', p: ['Search the exact theme and year, filter to sold listings and compare several recent sales in the same condition, with or without the thermos. Asking prices only show what sellers hope for. Add shipping to every price, because these boxes are bulky.'] },
  { h: '9. Shipping, customs, cleaning and storage', p: ['A metal box can dent in transit, so ask how the seller packs it and prefer tracked shipping with padding inside and out. If you buy from the USA, confirm duties, taxes and delivery time first. At home, wipe the surface gently with a slightly damp soft cloth, dry it fully and avoid harsh cleaners on the artwork. Keep it away from sunlight and damp rooms.'] },
  { h: '10. Questions collectors ask', p: ['Should I use a vintage box for lunch? It is better to display it, since wear and food residue lower its value. Are lunch boxes a good investment? Prices move with demand, so collect what you enjoy and treat any resale value as a bonus.'] },
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
      <p style={p}>Rust, latches, matching thermoses and artwork wear: here is how to check condition, avoid reproductions and compare real sold prices before you buy vintage lunch boxes in Canada.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one theme, check rust, latch and thermos, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
<ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/barbie-doll-collecting-guide-canada" style={{ color: '#e8b820' }}>Barbie Doll Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/retro-80s-90s-nostalgia-toys-collecting-guide-canada" style={{ color: '#e8b820' }}>Retro 80s and 90s Nostalgia Toys Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/mystery-blind-box-collectibles-buying-guide-canada" style={{ color: '#e8b820' }}>Mystery Blind Box Buying Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={{ color: '#e8b820' }}>Collectible Condition Terms Explained</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible Value With Sold Listings</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={{ color: '#e8b820' }}>Keep Collectibles in the Box or Open Them?</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={{ color: '#e8b820' }}>What to Check When Your Collectible Arrives</Link></li></ul></nav>
    </article>
  )
}
