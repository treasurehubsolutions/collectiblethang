import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Disney Pixar Cars Die-Cast Collecting Guide for Canadian Collectors'
const DESC = 'A practical guide to collecting Disney Pixar Cars die-cast in Canada: scale, packaging, multi-packs, condition checks, fakes, storage and where to find characters like Lightning McQueen and Mater.'
const SEO_TITLE = "Disney Pixar Cars Die-Cast Collecting Guide"
const SEO_DESC = "Collect Disney Pixar Cars die-cast in Canada: scale, packaging, multi-packs, condition checks, storage and what to check before you buy."
const SLUG = 'disney-pixar-cars-diecast-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why Cars die-cast has a loyal following', p: ['Disney Pixar Cars brought a whole cast of characters to the toy aisle, and die-cast cars have stayed popular with kids, parents and adult collectors. Each character has a distinct look, so a small shelf of Lightning McQueen, Mater and friends tells a story. That is a big part of the appeal.'] },
  { h: '2. Know the scale', p: ['Most Cars die-cast sold today is made in a small scale similar to Hot Wheels and Matchbox cars, which makes cars easy to display together. Larger scales exist too. Check the scale in the listing so a car arrives at the size you expect. If a seller does not say, ask before you buy.'] },
  { h: '3. Characters, versions and variations', p: ['The same character can appear several times: a different paint scheme, a racing livery, a movie-specific outfit or a special edition. Compare the exact name on the card with the photos. A small change in paint or wheels can mean a different version, so do not assume two cars are identical.'] },
  { h: '4. Carded, boxed or loose', p: ['Carded cars keep their value best when the card is flat and the blister is clear. Loose cars are cheaper and perfect for kids or for display without packaging. Our guide on keeping collectibles in the box or opening them helps you decide, and our condition terms guide explains MOC and similar abbreviations.'] },
  { h: '5. Multi-packs and gift sets', p: ['Multi-packs group several characters in one box and can be good value, especially for a gift. Read the list of included cars and confirm that each one is the version you want. Check that the box is sealed and that no cars have been swapped.'] },
  { h: '6. Check the condition closely', p: ['On a carded car, look at the corners, the creases, the blister and any price sticker marks. On a loose car, look at paint chips, axle wear, loose parts and missing accessories. Ask for photos of the front, back and wheels. Our arrival checklist shows what to inspect when the parcel arrives.'] },
  { h: '7. Watch for fakes and repacks', p: ['Prices far below the market, blurry photos and mismatched packaging are warning signs. Look for sharp printing, correct logos and a card that matches the car. Our guide on spotting fake and bootleg collectibles has a full checklist.'] },
  { h: '8. Check sold prices before you pay', p: ['Asking prices can be much higher than what a car really sells for. Search the exact character and version, filter to sold listings and compare several recent sales. Our sold-listings guide shows how to read them.'] },
  { h: '9. Shipping and protection', p: ['Die-cast is heavy for its size, and a carded car can be damaged by a rough parcel. Choose a seller who packs cards in a rigid protector and uses tracking. We ship across Canada and the USA.'] },
  { h: '10. Store and display your Cars', p: ['Keep cards out of direct sun, which fades printing, and away from humidity. Protector cases keep cards flat and clean. Loose cars look great in a shelf or case with a simple background. Our storage and display guide has more ideas.'] },
  { h: '11. Hot Wheels, Matchbox and Cars side by side', p: ['Many collectors mix lines: a Cars character beside a Hot Wheels casting or a Matchbox classic. Check each line’s scale and packaging so the shelf looks consistent. Our guides on Hot Wheels Premium versus mainline and on Matchbox can help you compare.'] },
  { h: '12. Questions collectors ask', p: ['Is Cars die-cast a good gift? Yes, characters are easy to recognize and multi-packs make a ready-to-give set. Should I keep it carded? If you want to display or resell, carded is usually safer, but opening is fine if you just enjoy it. How do I find a missing character? Search the exact name, check sold listings and set a maximum delivered price.'] }
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    datePublished: '2026-11-20',
    dateModified: '2026-11-20',
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
      <p style={p}>Disney Pixar Cars die-cast is a fun and affordable corner of the hobby. This guide covers scale, versions, packaging, condition, fakes and storage so you can build a Cars collection in Canada with confidence.</p>
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
      <p style={p}>Browse <Link href="/shop?category=Hot%20Wheels" style={a}>Hot Wheels</Link>, <Link href="/shop?category=Funko%20Pop" style={a}>Funko Pop</Link> and more die-cast at The Shelf Cartel, with honest condition and shipping across Canada and the USA. See the <Link href="/shop" style={a}>full shop</Link> for the current selection.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: write down the exact characters you want, set a maximum delivered price and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-premium-vs-mainline" style={a}>Hot Wheels Premium vs Mainline: How to Tell the Difference</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/matchbox-collecting-guide-vintage-collectors" style={a}>Matchbox Collecting Guide for Vintage Collectors</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={a}>Die-Cast and Funko Pop Storage and Display Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={a}>Keep Collectibles in the Box or Open Them?</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={a}>Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={a}>How to Spot Fake and Bootleg Collectibles</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={a}>How to Check What a Collectible Is Really Worth</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={a}>Your Collectible Just Arrived: A 10-Minute Inspection Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={a}>Holiday Gift Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/cyber-monday-collectibles-online-shopping-guide-canada" style={a}>Cyber Monday 2026 for Collectors in Canada</Link></li>
      </ul></nav>
    </article>
  )
}
