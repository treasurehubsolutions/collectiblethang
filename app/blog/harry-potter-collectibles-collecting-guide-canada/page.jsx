import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "Harry Potter Collectibles in Canada: A Collector Buying Guide"
const DESC = "How to buy and collect Harry Potter collectibles in Canada: choose a focus, check box and wand condition, spot unofficial copies, compare sold prices and display pieces safely."
const SEO_TITLE = "Harry Potter Collectibles Guide for Canada"
const SEO_DESC = "Collecting Harry Potter figures, wands and replicas in Canada: choose a focus, check condition, spot copies and compare sold prices."
const SLUG = 'harry-potter-collectibles-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why Harry Potter collectibles stay popular', p: ['Harry Potter has a wide fan base that spans books, films and games, so collectibles cover many formats: figures, wand replicas, Funko-style vinyl figures, plush, ornaments, puzzles and display pieces. With so many choices, a clear plan keeps your shelf and your budget under control.'] },
  { h: '2. Choose a focus before you buy', p: ['Pick a simple way to narrow your search. A focus makes prices easier to compare and avoids duplicate purchases.'], list: [
    'Character: one favourite character or one house.',
    'Format: action figures, vinyl figures, wand replicas, plush or ornaments.',
    'Maker: stick to officially licensed lines so sizes and styles match on the shelf.'] },
  { h: '3. Boxed, open box and loose items', p: ['A boxed item should have an intact window, clean corners and no price stickers covering the artwork. Loose items are cheaper but need a closer look at paint, joints and accessories. Our condition terms guide explains how sellers describe new, sealed and open box.'] },
  { h: '4. Wands and replicas: check the details', p: ['Wand replicas often include a box, a stand or a card. Ask whether the wand is straight, whether the tip is intact and whether any lights or sounds still work. Photos from several angles help you spot scratches, warping and sun fading.'] },
  { h: '5. Figures, vinyl figures and accessories', p: ['Check that each figure comes with its accessories, such as a wand, a bag or a stand. Look for scuffs, loose limbs and faded printing. For vinyl figures, ask for a photo of the box corners and the number on the box.'] },
  { h: '6. Spotting unofficial copies', p: ['Popular franchises attract unofficial copies. Warning signs include prices far below the usual range, stock photos only, missing licence marks, blurry box printing and a poor paint finish. Ask for photos of the real box and the item. Our fake and bootleg guide lists more warning signs.'] },
  { h: '7. Compare sold prices, not asking prices', p: ['Search the exact item name, filter to sold listings and look at several recent sales in the same condition. Asking prices only show what sellers hope for. Add shipping to every price you compare, since boxed display pieces can cost more to send.'] },
  { h: '8. Shipping and customs to Canada', p: ['Fragile items need good padding, so ask how the seller packs them. Buying from a Canadian seller keeps shipping simple. If you buy from the USA, confirm duties, taxes and the delivery estimate first, and choose tracked shipping. Check the parcel the day it arrives and photograph any damage right away.'] },
  { h: '9. Display and storage', p: ['Keep boxes and replicas out of direct sunlight, which fades printing and can warp plastic. Use a closed case or shelf to limit dust, and keep items away from heat and humidity. Our storage and display guide covers shelves, cases and humidity in more detail.'] },
  { h: '10. Questions collectors ask', p: ['Should I open my items or keep them boxed? Boxed items usually sell better, but displayed pieces are what many collectors enjoy most. Are Harry Potter collectibles a good investment? Prices move with demand, so collect what you enjoy and treat any resale value as a bonus.'] },
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
      <p style={p}>Figures, wands and display pieces: here is how to choose a focus, check box and item condition, avoid unofficial copies and compare real sold prices before you buy Harry Potter collectibles in Canada.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one character or format, check the box and item condition, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
<ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/funko-pop-chase-exclusives-holiday-guide-canada" style={{ color: '#e8b820' }}>Funko Pop Chase and Exclusives Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/disney-collectibles-collecting-guide-canada" style={{ color: '#e8b820' }}>Disney Collectibles Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/star-wars-marvel-legends-collecting-guide-canada" style={{ color: '#e8b820' }}>Star Wars and Marvel Legends Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={{ color: '#e8b820' }}>Collectible Condition Terms Explained</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible Value With Sold Listings</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={{ color: '#e8b820' }}>Keep Collectibles in the Box or Open Them?</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={{ color: '#e8b820' }}>What to Check When Your Collectible Arrives</Link></li></ul></nav>
    </article>
  )
}
