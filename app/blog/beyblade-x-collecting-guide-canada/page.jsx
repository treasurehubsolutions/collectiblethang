import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Beyblade X Collecting in Canada: Blades, Ratchets, Bits and Smart Buying'
const DESC = 'A practical Beyblade X guide for Canadian parents and collectors: how the parts fit together, how to check a set, compare sold prices and avoid mismatched or fake parts.'
const SEO_TITLE = "Beyblade X Collecting Guide for Canada"
const SEO_DESC = "Beyblade X guide for Canadian parents and collectors: how parts fit, how to check a set, compare sold prices and avoid mismatched or fake parts."
const SLUG = 'beyblade-x-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. How a Beyblade X top is built', p: ['A Beyblade X top is assembled from separate parts: a blade on the outside, a ratchet in the middle and a bit at the bottom. Because the parts are modular, fans mix and match them to build their own combinations. Knowing the part names makes listings much easier to read.'] },
  { h: '2. Starter, booster or loose parts', p: ['Starters and boosters usually come with a complete top, and many include a launcher or a stadium in larger sets. Loose parts are cheaper if you only need a replacement piece, but you must be sure they fit the rest of your top. Start with a complete set, then add parts once you know what you want.'] },
  { h: '3. Check the set before you buy', p: ['Count the pieces against the product description or the photos. Missing small parts and worn bits are the most common problems on used items.'], list: [
    'Parts: blade, ratchet and bit all present and matching the listing.',
    'Wear: chips, scratches or rounded tips on the bit change how the top spins.',
    'Launcher: it should work smoothly and the grip should not be cracked.',
    'Packaging: sealed boxes keep the most value, so look for crushed corners and torn seals.'] },
  { h: '4. Watch out for mismatched or fake parts', p: ['Some listings mix parts from different releases, or sell copies of the real thing. Ask for photos of the actual item, check the markings on the parts and compare them to the official product images. If the price looks far below normal, be careful. Our checklist on buying collectibles on eBay Canada explains what to verify.'] },
  { h: '5. Compare sold prices, not asking prices', p: ['Search the exact product name, filter to sold items and look at several recent sales. Add shipping to every price, then compare Canadian and US listings. A rare release can sell for much more than a common starter, so do not rely on one number.'] },
  { h: '6. Shipping and customs', p: ['These sets are small and light, so shipping can be a large share of the price. Buying from a Canadian seller avoids customs surprises. Combined shipping is a good way to add a few extra parts to one order.'] },
  { h: '7. Store the parts safely', p: ['Small parts are easy to lose. Keep each combination in a small compartment box or a zip bag, and keep sealed boxes flat and away from sunlight and moisture. Collectors also keep a list of the combinations they have built.'] },
  { h: '8. Build a wish list', p: ['Write down the sets and parts you want, and what you already own. A short list helps you spot a good deal fast and avoid buying the same part twice.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    datePublished: '2026-11-16',
    dateModified: '2026-11-16',
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
      <p style={p}>Beyblade X is a build-your-own battle top line. Here is how to understand the parts, check a set and buy with confidence, whether you are shopping for a young fan or building a collection.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: start with a complete set, check every part, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/buying-collectibles-on-ebay-canada-checklist" style={{ color: '#e8b820' }}>Buying Collectibles on eBay Canada: An 8-Step Buyer's Checklist</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Collector's Holiday Gift Guide for Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-stocking-stuffers-under-20-canada" style={{ color: '#e8b820' }}>Collector Stocking Stuffers Under $20 in Canada</Link></li></ul></nav>
    </article>
  )
}
