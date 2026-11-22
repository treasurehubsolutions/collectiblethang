import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "Anime Figures Collecting Guide for Canadian Collectors"
const DESC = "A practical guide to buying anime figures in Canada: prize, scale and action figures, official packaging, bootleg warning signs, condition, sold prices, storage and shipping."
const SEO_TITLE = "Anime Figures Collecting Guide for Canada"
const SEO_DESC = "Buy anime figures in Canada: figure types, official packaging, bootlegs, condition, sold prices and storage."
const SLUG = "anime-figures-collecting-guide-canada"

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why anime figures attract collectors', p: ['Anime figures let fans display favourite characters from series, films and games. They come in several styles and sizes, so the first step is deciding what you want on your shelf and how much room and budget you have.'] },
  { h: '2. Know the main figure types', p: ['Prize figures, scale figures and articulated action figures are different products. Prize figures are usually simpler, scale figures are sculpted for display, and action figures are made to pose. Read the listing carefully so you know which type you are buying.'] },
  { h: '3. Identify the exact figure', p: ['Many characters have several releases with different poses, sizes and paint. Note the character, the series, the manufacturer and the product name on the box, and compare the listing photos with the manufacturer\'s own product page.'] },
  { h: '4. Read the packaging', p: ['Official boxes usually have sharp printing, correct logos, manufacturer details and consistent labels. Blurry artwork, spelling mistakes, missing labels or a box that looks different from the official one are reasons to ask more questions.'] },
  { h: '5. Beware of bootlegs', p: ['Popular characters are widely copied. Warning signs include a price far below normal, cheap-looking paint, odd proportions, a missing manufacturer mark and sellers who will not show clear photos. Our guide on spotting fake and bootleg collectibles has a full checklist.'] },
  { h: '6. Check the paint, joints and fragile parts', p: ['Look for scuffs, loose paint, yellowed plastic, bent parts and cracks, especially on thin pieces such as hair, weapons, hands and stands. Ask for photos from the front, back, sides and top in natural light.'] },
  { h: '7. Complete with all pieces', p: ['Many figures include stands, extra hands, effects or accessories. A missing piece changes the value. Ask the seller to list what is included and compare it with the official product page.'] },
  { h: '8. Sealed, opened or loose', p: ['A sealed box lets you judge the packaging, but you cannot inspect the figure. An opened or loose figure can be a good buy at the right price. Our guide on keeping collectibles in the box or opening them explains the trade-off.'] },
  { h: '9. Check sold prices before you pay', p: ['Prices vary with the character, the release and the condition. Search the exact product name, filter to sold listings and compare several recent sales instead of one asking price. Our sold-listings guide shows how to read them.'] },
  { h: '10. Shipping and packing', p: ['Figures have fragile parts and boxes crush easily. Choose a seller who wraps the item well, uses a sturdy outer carton and ships with tracking. We ship across Canada and the USA.'] },
  { h: '11. Store and display with care', p: ['Keep figures out of direct sunlight, heat and damp, which can fade paint and plastic. A closed cabinet keeps dust away, and boxes should be stored upright with nothing pressing on them. Our storage and display guide has more ideas.'] },
  { h: '12. Questions collectors ask', p: ['Should I buy boxed or loose? Buy boxed for preservation and loose for display, based on your budget. How do I avoid a bootleg? Compare the box and figure with the official product page. Where do I start? Pick one character you love and learn its exact releases.'] }
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
      <p style={p}>Anime figures are a popular way to display favourite characters. This guide covers figure types, packaging, bootlegs, condition, sold prices and storage so you can buy with confidence in Canada.</p>
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
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: write down the exact character, manufacturer and product name and the pieces that should be included, set a maximum delivered price and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/gundam-gunpla-model-kits-collecting-guide-canada" style={a}>Gundam and Gunpla Model Kits Collecting Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/tmnt-collectibles-guide-canada" style={a}>TMNT Collectibles Guide for Canada</Link></li>
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
