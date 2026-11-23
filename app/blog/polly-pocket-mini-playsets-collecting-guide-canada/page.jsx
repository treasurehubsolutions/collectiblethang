import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "Polly Pocket Collecting in Canada: A Mini Playset Collector Buying Guide"
const DESC = "How to buy and collect Polly Pocket compacts and playsets in Canada: choose an era, check completeness and hinges, spot unofficial copies, compare sold prices and store tiny pieces safely."
const SEO_TITLE = "Polly Pocket Collecting Guide"
const SEO_DESC = "Collecting Polly Pocket sets in Canada: choose an era, check completeness and hinges, spot copies and compare sold prices."
const SLUG = 'polly-pocket-mini-playsets-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why tiny playsets are a big hobby', p: ['Polly Pocket compacts and playsets are small, colourful and full of detail, which is why many adults collect them. Vintage sets, newer reissues and modern collector releases all share the same challenge: tiny pieces that are easy to lose. A clear plan helps you buy complete sets and avoid disappointment.'] },
  { h: '2. Choose a focus before you buy', p: ['Pick a simple way to narrow your search so prices are easier to compare.'], list: [
    'Era: vintage compacts, 2000s sets, or current releases.',
    'Format: compacts, large playsets, vehicles or single dolls.',
    'Theme: one favourite setting, such as a house, a castle or a travel set.']  },
  { h: '3. Completeness is the main price driver', p: ['A compact with every doll, outfit and accessory is worth much more than one with missing pieces. Ask the seller for photos of all the pieces laid out together, and compare them with a complete example of the same set. Sellers who say \'as pictured\' only are worth questioning.'] },
  { h: '4. Check hinges, clasps and moving parts', p: ['Compacts open and close hundreds of times. Ask about cracked hinges, loose clasps, broken clips and stuck moving features. Close photos of the edges and the latch help. A set that closes properly keeps its look and is easier to store.'] },
  { h: '5. Dolls, clothing and tiny accessories', p: ['Dolls are very small and can have worn paint, rubbed faces or stained rubber outfits. Rubber clothing can also feel sticky or discoloured with age. Ask about odours, stains and any replaced pieces, since mixed accessories from other sets are common in loose lots.'] },
  { h: '6. Loose lots versus boxed or carded sets', p: ['Loose lots can be a fair way to start on a small budget, but check the piece list carefully. Boxed or carded sets usually cost more and should show clear photos of the corners and the packaging. Our guide on keeping collectibles in the box or opening them can help you decide.'] },
  { h: '7. Spotting unofficial copies', p: ['Small toys attract unofficial copies. Warning signs include prices far below the usual range, stock photos only, blurry printing, strange scents and sloppy moulding. Ask for photos of the real item and the markings. Our fake and bootleg guide lists more warning signs.'] },
  { h: '8. Compare sold prices, not asking prices', p: ['Search the exact set name and year, filter to sold listings and look at several recent sales in the same condition and completeness. Asking prices only show what sellers hope for. Add shipping to every price you compare.'] },
  { h: '9. Shipping, customs, cleaning and storage', p: ['Tiny pieces can slip out of a loose parcel, so ask how the seller packs lots and prefer tracked shipping. If you buy from the USA, confirm duties, taxes and delivery time first. At home, wash plastic gently with mild soap and let it dry fully; keep sets away from sunlight and heat, and store small pieces in labelled bags or a divided case.'] },
  { h: '10. Questions collectors ask', p: ['Should I keep the box? A good box usually helps value and protects the set. Are mini playsets a good investment? Prices move with demand, so collect what you enjoy and treat any resale value as a bonus.'] },
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
      <p style={p}>Compacts, dolls and tiny accessories: here is how to choose an era, check completeness and hinges, avoid unofficial copies and compare real sold prices before you buy Polly Pocket sets in Canada.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one set or era, check that every piece is there, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
<ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/barbie-doll-collecting-guide-canada" style={{ color: '#e8b820' }}>Barbie Doll Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/retro-80s-90s-nostalgia-toys-collecting-guide-canada" style={{ color: '#e8b820' }}>Retro 80s and 90s Nostalgia Toys Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/mystery-blind-box-collectibles-buying-guide-canada" style={{ color: '#e8b820' }}>Mystery Blind Box Buying Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={{ color: '#e8b820' }}>Collectible Condition Terms Explained</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible Value With Sold Listings</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={{ color: '#e8b820' }}>Keep Collectibles in the Box or Open Them?</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={{ color: '#e8b820' }}>What to Check When Your Collectible Arrives</Link></li></ul></nav>
    </article>
  )
}
