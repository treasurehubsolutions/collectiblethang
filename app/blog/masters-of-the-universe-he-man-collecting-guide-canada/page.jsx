import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "Masters of the Universe and He-Man Collecting Guide for Canadian Collectors"
const DESC = "A practical guide to buying Masters of the Universe and He-Man figures in Canada: vintage or modern, completeness, accessories, condition, reproductions, sold prices, storage and shipping."
const SEO_TITLE = "Masters of the Universe and He-Man Guide for Canada"
const SEO_DESC = "Buy Masters of the Universe and He-Man figures in Canada: vintage or modern, accessories, condition, fakes, sold prices and storage."
const SLUG = "masters-of-the-universe-he-man-collecting-guide-canada"

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why Masters of the Universe figures attract collectors', p: ['Masters of the Universe is a long-running toy line built around He-Man, Skeletor and a big cast of heroes, villains and vehicles. Some collectors chase older figures from their childhood, others buy newer releases. Decide which you want first, because it changes what to check and how to budget.'] },
  { h: '2. Vintage, modern or both', p: ['Older figures can show wear from play, while newer figures are usually easier to find in good shape. Check the manufacturer\'s own product pages and the packaging so you know exactly which release you are looking at, and avoid assuming two figures with the same name are the same release.'] },
  { h: '3. Complete means more than the figure', p: ['Many figures came with weapons, armour, accessories or a mini comic. A loose figure with missing pieces is not the same as a complete one. Ask the seller to list every accessory that comes with it and compare the photos with a reference image of the complete figure.'] },
  { h: '4. Check the body, joints and paint', p: ['Look at the paint on the face and the chest, scuffs, discoloured plastic, loose or cracked joints and any stress marks. Ask for clear photos from the front, back and sides in natural light, and for a close-up of the face.'] },
  { h: '5. Sealed, opened or loose', p: ['A sealed package is easiest to judge: check the corners, bubble, card, creases and any sign it has been opened and resealed. An opened or loose figure can still be a great buy if it is priced for its condition. Our guide on keeping collectibles in the box or opening them covers the trade-off.'] },
  { h: '6. Packaging and card condition', p: ['If you want boxed or carded pieces, look at corners, edges, fading, tape, price stickers and shelf wear. Always ask what condition grade the seller is using, and see our guide to collectible condition terms so you understand each one.'] },
  { h: '7. Beware of reproductions and fakes', p: ['Popular figures and accessories can be copied. Warning signs include a price far below normal, blurry printing, odd plastic colour, wrong logos or sellers who will not show clear photos. Our guide on spotting fake and bootleg collectibles has a full checklist.'] },
  { h: '8. Vehicles and playsets', p: ['Larger pieces have more parts that can be missing, and bigger boxes can be damaged in transit. Check that all pieces, stickers and moving parts are present before you pay, and ask for photos of every part.'] },
  { h: '9. Check sold prices before you pay', p: ['Prices change with the figure, completeness and condition. Search the exact figure name and release, filter to sold listings and compare several recent sales rather than a single asking price. Our sold-listings guide shows how to read them.'] },
  { h: '10. Shipping and packing', p: ['Figures and cards bend and crush easily. Choose a seller who protects the item, uses a sturdy outer carton and ships with tracking. We ship across Canada and the USA.'] },
  { h: '11. Store and display with care', p: ['Keep figures out of direct sunlight, heat and damp, which can fade plastic and cards. A closed cabinet keeps dust away, and carded pieces should be stored upright with nothing pressing on them. Our storage and display guide has more ideas.'] },
  { h: '12. Questions collectors ask', p: ['Should I buy loose or carded? Buy carded for preservation and loose for display, based on your budget. How do I know a figure is complete? Ask for a list and photos of every accessory. Where do I start? Pick one character you love and learn its exact release.'] }
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
      <p style={p}>Masters of the Universe figures are a favourite for nostalgic and modern collectors alike. This guide covers vintage or modern, completeness, condition, reproductions, sold prices and storage so you can buy with confidence in Canada.</p>
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
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: write down the exact figure name, release and the accessories that should come with it, set a maximum delivered price and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/retro-80s-90s-nostalgia-toys-collecting-guide-canada" style={a}>Retro 80s and 90s Nostalgia Toys Collecting Guide</Link></li>
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
