import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'NECA Action Figures in Canada: A Collector\'s Guide to Horror, Movie and Retro Figures'
const DESC = 'A practical guide for Canadian collectors of NECA figures: how to read scale and edition labels, check articulation and accessories, compare sold prices and ship safely.'
const SLUG = 'neca-action-figures-collecting-guide-canada'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

const sections = [
  { h: '1. What NECA makes', p: ['NECA produces licensed action figures based on movies, TV, video games and retro properties, with a strong following among horror and sci-fi fans. Figures are aimed at adult collectors, which means detailed sculpts, painted accessories and display-focused packaging.'] },
  { h: '2. Read the edition label', p: ['NECA uses edition names on the box, such as Ultimate, Deluxe or Retro, and these tell you what to expect. An Ultimate figure usually comes with extra hands, heads or weapons, while a simpler release has fewer parts. Always compare the label to the listing so you know exactly what is included.'] },
  { h: '3. Check the figure before you buy', p: ['Accessories are small and easy to lose, so a complete figure is worth more than one with missing parts. Ask for photos of the actual item and check each point below.'], list: [
    'Accessories: weapons, spare hands and swap heads match the box or the official product photos.',
    'Joints: no loose or cracked joints, and no stuck elbows or knees.',
    'Paint: look for scuffs, rubs and yellowing on light plastic.',
    'Box: window boxes keep their value when the corners, the window and the card are clean.'] },
  { h: '4. Open or sealed?', p: ['Sealed figures are best for display and resale, while open figures are cheaper and let you pose them. If you buy open, make sure the seller shows every accessory in the photos. Keep the box if you plan to resell later.'] },
  { h: '5. Beware of bootlegs', p: ['Popular characters attract copies. Compare packaging, logos and paint quality with official images, and be careful with prices that are far below normal. Our checklist on buying collectibles on eBay Canada lists the checks to make before you pay.'] },
  { h: '6. Compare sold prices', p: ['Search the exact figure name and edition, filter to sold items and read several recent sales. Add shipping to each price and compare Canadian and US sellers. Retailer exclusives and discontinued figures can sell for more than a standard release, so one price is never enough.'] },
  { h: '7. Shipping and customs', p: ['Boxed figures are bulky for their weight, so shipping is a large part of the cost. A Canadian seller avoids customs surprises, and combined shipping helps when you buy several figures. Good protection matters: window boxes dent easily.'] },
  { h: '8. Display and storage', p: ['Keep figures out of direct sunlight, which fades paint and yellows plastic. Use a closed display case or shelf, avoid stacking boxes, and keep spare accessories in a labelled bag. Our storage and display guide has more ideas.'] },
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
      <p style={p}>NECA figures reward careful buyers. Here is how to read the labels, check a figure and buy with confidence, whether you are starting a shelf or adding to a large collection.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: check the edition, confirm every accessory, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/buying-collectibles-on-ebay-canada-checklist" style={{ color: '#e8b820' }}>Buying Collectibles on eBay Canada: An 8-Step Buyer's Checklist</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Collector's Holiday Gift Guide for Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-stocking-stuffers-under-20-canada" style={{ color: '#e8b820' }}>Collector Stocking Stuffers Under $20 in Canada</Link></li></ul></nav>
    </article>
  )
}
