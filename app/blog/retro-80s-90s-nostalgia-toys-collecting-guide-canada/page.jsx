import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Retro 80s and 90s Nostalgia Toys Collecting Guide for Canadian Collectors'
const DESC = 'A practical guide to collecting retro 80s and 90s toys in Canada: completeness, condition, packaging, reproductions, sold prices, storage and shipping.'
const SEO_TITLE = "Retro 80s and 90s Toys Collecting Guide for Canada"
const SEO_DESC = "Collect retro 80s and 90s toys in Canada: completeness, condition, packaging, reproductions, sold prices and storage tips."
const SLUG = 'retro-80s-90s-nostalgia-toys-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why nostalgia toys are so popular', p: ['Many collectors want the toys they remembered from childhood: action figures, dolls, plush, die-cast cars, board games and playsets. Buying them back is part memory and part hobby. Decide whether you want a display shelf of favourites or a focused set from one brand, and the search becomes much easier.'] },
  { h: '2. Choose a theme and a decade', p: ['Retro is a wide field. Pick one line, one character family or one decade, and write down the exact names you want. A tight list keeps the budget under control and helps you spot a fair price quickly.'] },
  { h: '3. Complete, loose or still sealed', p: ['Older toys often come loose, with missing parts. Check the listing for accessories, stickers, weapons, clothes and small pieces, and compare it to photos of a complete example. A complete loose toy can be a better buy than an incomplete boxed one. Our guide on keeping collectibles in the box or opening them covers the trade-off.'] },
  { h: '4. Read the condition carefully', p: ['Look for yellowing plastic, sun fading, loose joints, paint wear, sticker peeling, cracked parts and smells from smoke or storage. Ask for clear daylight photos from every side. Our condition terms guide explains words such as mint, near mint and played with.'] },
  { h: '5. Packaging matters more with age', p: ['Old boxes and cards are fragile. Check corners, creases, price stickers, tape, sun fading and shelf wear, and look for any sign the package was opened and resealed. A clean box can add to the value, but only when the toy inside is honestly described.'] },
  { h: '6. Beware of reproductions and fakes', p: ['Popular retro toys attract reproductions, swapped parts and fake packaging. Warning signs include a price far below normal, blurry photos, odd plastic colour, wrong markings and parts that do not match the original line. Our guide on spotting fake and bootleg collectibles has a full checklist.'] },
  { h: '7. Check sold prices before you pay', p: ['Asking prices on retro toys can be very high or very low. Search the exact name, filter to sold listings and compare several recent sales in the same condition and completeness. Our sold-listings guide shows how to read them.'] },
  { h: '8. Cleaning and gentle repair', p: ['Start with the mildest method, such as a soft dry cloth, and test a small hidden spot first. Harsh cleaners can remove paint and stickers. If an item is rare or sentimental, think twice before restoring it, because changes can affect value.'] },
  { h: '9. Shipping and packing older toys', p: ['Vintage plastic can be brittle. Choose a seller who wraps the item well, uses a sturdy box and ships with tracking, and who is clear about flaws. We ship across Canada and the USA.'] },
  { h: '10. Store and display with care', p: ['Keep toys out of direct sunlight, heat and damp, which can fade colours and warp plastic. Closed cabinets and shelves with some space between items keep dust and bumps away. Our storage and display guide has more ideas.'] },
  { h: '11. Build your collection step by step', p: ['Start with a short wish list, set a maximum delivered price for each item and add a few pieces at a time. Patience usually beats paying a premium on the first listing you see.'] },
  { h: '12. Questions collectors ask', p: ['Is loose or boxed better? Boxed usually costs more, but loose and complete suits display. How do I know a part is original? Compare with clear photos of a complete example. Where do I start? Pick one line you loved as a kid and learn its exact names first.'] }
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
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
      <p style={p}>Retro toys from the 80s and 90s are back on collectors' shelves. This guide covers completeness, condition, packaging, reproductions, sold prices and storage so you can build a collection in Canada with confidence.</p>
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
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: write down the exact toy names and the parts that should come with them, set a maximum delivered price and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/barbie-doll-collecting-guide-canada" style={a}>Barbie Doll Collecting Guide for Canadian Collectors</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/vhs-tapes-collecting-guide-canada" style={a}>VHS Tapes Collecting Guide for Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={a}>Keep Collectibles in the Box or Open Them?</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={a}>Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={a}>How to Spot Fake and Bootleg Collectibles</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={a}>How to Check What a Collectible Is Really Worth</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={a}>Your Collectible Just Arrived: A 10-Minute Inspection Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={a}>Die-Cast and Funko Pop Storage and Display Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/lego-buying-guide-collectors-canada" style={a}>LEGO Buying Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={a}>Holiday Gift Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/cyber-monday-collectibles-online-shopping-guide-canada" style={a}>Cyber Monday 2026 for Collectors in Canada</Link></li>
      </ul></nav>
    </article>
  )
}
