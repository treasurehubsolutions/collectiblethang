import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "Gundam and Gunpla Model Kits Collecting Guide for Canadian Collectors"
const DESC = "A practical guide to buying Gundam and Gunpla model kits in Canada: grades, sealed or built, missing parts, decals, tools, fakes, sold prices, storage and shipping."
const SEO_TITLE = "Gundam and Gunpla Model Kits Guide for Canada"
const SEO_DESC = "Buy Gundam and Gunpla model kits in Canada: grades, sealed or built, missing parts, fakes, sold prices and storage tips."
const SLUG = "gundam-gunpla-model-kits-collecting-guide-canada"

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why Gundam and Gunpla kits attract collectors', p: ['Gunpla are plastic model kits of robots from the Gundam franchise. Some people build and display them, others keep boxes sealed. Decide which you are before you buy, because it changes what a good listing looks like.'] },
  { h: '2. Learn the grades and scales', p: ['Kits come in different grades and scales, which affect size, detail, number of parts and difficulty. Read the box name and scale carefully and compare it to the manufacturer\'s own product page so you know exactly what you are getting.'] },
  { h: '3. Sealed, opened or already built', p: ['A sealed box is the simplest to judge. An opened kit may have loose sprues, missing pieces or cut parts. A built kit can look great, but check for glue marks, paint, scratched joints and missing weapons or stands. Our guide on keeping collectibles in the box or opening them covers the trade-off.'] },
  { h: '4. Check the box and the contents', p: ['Look at corners, creases, sun fading, tape, stickers and any sign the box was opened. For an opened kit, ask the seller to confirm that all sprues, the instruction manual, decal sheets and stickers are present and to show photos of each.'] },
  { h: '5. Decals, stickers and small parts', p: ['Decals and stickers are easy to lose or damage and hard to replace. Small parts such as hands, weapons and joints are often what is missing. Compare the listing photos with the parts list in the manual before you pay.'] },
  { h: '6. Tools and paint basics', p: ['Beginners usually need a good pair of hobby nippers, a hobby knife, fine sandpaper and a safe workspace. Read the manual first, and test any paint or top coat on a spare part. Always follow the safety instructions on the products you use.'] },
  { h: '7. Beware of fakes and reproductions', p: ['Popular kits can be copied. Warning signs include a price far below normal, blurry box printing, odd plastic colour, wrong logos, poor fit and sellers who will not show clear photos. Our guide on spotting fake and bootleg collectibles has a full checklist.'] },
  { h: '8. Check sold prices before you pay', p: ['Prices change with kit, condition and completeness. Search the exact kit name and grade, filter to sold listings and compare several recent sales. Our sold-listings guide shows how to read them.'] },
  { h: '9. Shipping and packing model kits', p: ['Boxes dent easily and built models can break in transit. Choose a seller who protects the box, uses a sturdy outer carton and ships with tracking. We ship across Canada and the USA.'] },
  { h: '10. Store and display with care', p: ['Keep kits and built models out of direct sunlight, heat and damp, which can fade plastic and boxes. A closed cabinet keeps dust away, and sealed boxes should be stored flat or upright without heavy weight on top. Our storage and display guide has more ideas.'] },
  { h: '11. Build your collection step by step', p: ['Start with one series or one favourite suit, set a maximum delivered price and add a kit at a time. A short wish list helps you ignore listings that do not fit.'] },
  { h: '12. Questions collectors ask', p: ['Should I build or keep it sealed? Build what you want to enjoy and keep sealed what you want to preserve. How do I know a kit is complete? Ask for photos of every sprue and the manual. Where do I start? Pick one kit you love and learn its exact name and grade.'] }
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
      <p style={p}>Gundam and Gunpla model kits are a popular hobby for builders and collectors. This guide covers grades, completeness, packaging, fakes, sold prices and storage so you can buy with confidence in Canada.</p>
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
      <p style={p}>Browse collectibles at The Shelf Cartel, with honest condition and shipping across Canada and the USA. See the <Link href="/shop" style={a}>full shop</Link> for the current selection.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: write down the exact kit name, grade and the parts that should come with it, set a maximum delivered price and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/video-game-collectibles-guide-canada" style={a}>Video Game Collectibles Guide for Canada</Link></li>
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
