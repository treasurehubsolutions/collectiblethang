import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Hot Wheels RLC and Elite 64 Collecting Guide for Canadian Collectors'
const DESC = 'A practical guide to higher-end Hot Wheels in Canada: RLC and Elite 64 style releases, packaging, condition, fakes, sold prices, storage and shipping tips.'
const SEO_TITLE = "Hot Wheels RLC and Elite 64 Guide for Canada"
const SEO_DESC = "Collect premium Hot Wheels in Canada: RLC and Elite 64 style releases, packaging, condition, fakes, storage and what to check before you buy."
const SLUG = 'hot-wheels-rlc-elite-64-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. What collectors mean by RLC and Elite 64', p: ['Beyond the regular pegs, Hot Wheels has higher-end lines aimed at adult collectors. Red Line Club (RLC) cars are made for members and tend to be sold in limited runs, while Elite 64 is a premium line with extra detail. Names and rules for each line change over time, so always read the exact line name in the listing and check the maker for current details.'] },
  { h: '2. How they differ from mainline and Premium', p: ['Higher-end releases usually mean more paint detail, metal parts, real-rider style wheels and special packaging. If you are new to the difference, start with our guide to Hot Wheels Premium versus mainline, then come back here.'] },
  { h: '3. Pick a focus before you buy', p: ['Choose a theme such as one car make, one decade, one colour or one line. A short written list stops impulse buys and makes it easier to spot a fair price when a car you want appears.'] },
  { h: '4. Check the exact model and version', p: ['Similar cars can come in several colours, wheel types and release years. Copy the exact casting name, colour and line from the listing and compare it with sold listings for the same version only.'] },
  { h: '5. Packaging matters', p: ['For carded and boxed cars, the package is part of the collectible. Look for corner dents, soft edges, crushed or yellowed blisters, price stickers and creases. Ask for photos of every side. Our condition terms guide explains common wording.'] },
  { h: '6. Mint in package or loose', p: ['A sealed car in clean packaging usually costs more and is the safer choice for resale. A loose car can be a good deal if the paint and wheels are clean and the seller shows it honestly. Our guide on keeping collectibles in the box or opening them covers the trade-off.'] },
  { h: '7. Watch for fakes and relabeled cars', p: ['Warning signs include a price far below normal, blurry photos, odd paint, mismatched wheels, a resealed package or a casting that does not match the stated line. Our guide on spotting fake and bootleg collectibles has a full checklist.'] },
  { h: '8. Check sold prices first', p: ['Asking prices can be far from what a car really sells for. Search the exact name and line, filter to sold listings and compare several recent sales in the same condition. Our sold-listings guide shows how to read them.'] },
  { h: '9. Timing and patience', p: ['Prices for limited cars can move quickly after a release and settle later. Set a maximum delivered price, watch a few listings and avoid paying a rush premium for something that is likely to be listed again.'] },
  { h: '10. Shipping and packing', p: ['Carded cars bend easily. Choose a seller who uses a stiff outer package, protects the card, ships with tracking and describes the packaging honestly. We ship across Canada and the USA.'] },
  { h: '11. Store and display your cars', p: ['Keep cars out of direct sunlight, away from damp and heat, and use protective cases or sleeves for carded and boxed pieces. Our die-cast and Funko storage and display guide has more ideas.'] },
  { h: '12. Questions collectors ask', p: ['Are premium Hot Wheels worth it? Many collectors enjoy the detail, but check sold prices and condition first. Should I keep the card? If you plan to resell or care about value, yes. How do I find a specific car? Search the exact name and line, check sold listings and set a maximum price.'] }
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    datePublished: '2026-11-21',
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
      <p style={p}>Higher-end Hot Wheels such as RLC and Elite 64 style releases reward careful buyers. This guide covers lines, packaging, condition, fakes, sold prices and storage so you can collect in Canada with confidence.</p>
      {sections.slice(0, 6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      {sections.slice(6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <h2 style={h2}>Shop collectibles in Canada</h2>
      <p style={p}>Browse toys and collectibles at The Shelf Cartel, with honest condition and shipping across Canada and the USA. See the <Link href="/shop" style={a}>full shop</Link> for the current selection.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: write down the exact cars and lines you want, set a maximum delivered price and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-premium-vs-mainline" style={a}>Hot Wheels Premium vs Mainline</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-treasure-hunt-guide" style={a}>Hot Wheels Treasure Hunt Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={a}>Keep Collectibles in the Box or Open Them?</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={a}>Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={a}>How to Spot Fake and Bootleg Collectibles</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={a}>How to Check What a Collectible Is Really Worth</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={a}>Your Collectible Just Arrived: A 10-Minute Inspection Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={a}>Die-Cast and Funko Pop Storage and Display Guide</Link></li>
                <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={a}>Holiday Gift Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/cyber-monday-collectibles-online-shopping-guide-canada" style={a}>Cyber Monday 2026 for Collectors in Canada</Link></li>
      <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-car-culture-series-a-collectionner" style={{ color: '#e8b820' }}>Hot Wheels Car Culture: Series Worth Collecting</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-formula-1-collecting-guide-canada" style={{ color: '#e8b820' }}>Hot Wheels Formula 1 Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/guide-debuter-collection-hot-wheels" style={{ color: '#e8b820' }}>How to Start a Hot Wheels Collection</Link></li></ul></nav>
    </article>
  )
}
