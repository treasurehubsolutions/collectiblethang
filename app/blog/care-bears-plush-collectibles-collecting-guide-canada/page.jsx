import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "Care Bears Collectibles in Canada: A Plush and Figure Buying Guide"
const DESC = "How to buy and collect Care Bears plush and figures in Canada: choose a focus, check tags and fur condition, spot unofficial copies, compare sold prices and store plush safely."
const SEO_TITLE = "Care Bears Collectibles Guide for Canada"
const SEO_DESC = "Collecting Care Bears plush and figures in Canada: choose a focus, check tags and condition, spot copies and compare sold prices."
const SLUG = 'care-bears-plush-collectibles-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why Care Bears collectibles stay popular', p: ['Care Bears appeal to nostalgic adults and to a new generation of kids, so you will find plush, small figures, ornaments, blankets and display pieces in many styles. With so many choices, a clear plan keeps your shelf and your budget under control.'] },
  { h: '2. Choose a focus before you buy', p: ['Pick a simple way to narrow your search. A focus makes prices easier to compare and avoids duplicate purchases.'], list: [
    'Character: one favourite bear, such as a single colour or theme.',
    'Format: plush, small figures, ornaments or keepsakes.',
    'Era: older plush from the 1980s or newer releases, so sizes and styles match on the shelf.'] },
  { h: '3. Check the tags and markings', p: ['Tags help you date and authenticate a plush. Look for a tush tag and a hang tag, and ask for a clear photo of both. A missing hang tag lowers the price for many buyers, but the item can still be a good find if the price reflects it. Our condition terms guide explains how sellers describe new, with tags and used.'] },
  { h: '4. Fur, stains and smell', p: ['For used plush, ask about matted fur, stains, loose stitching and smoke or pet odours. Photos of the face, the belly symbol and the back help you spot wear. The belly badge should be firmly attached and the face stitching should be intact.'] },
  { h: '5. Figures and small display pieces', p: ['Check that each figure has its paint intact and that any accessories, such as a cloud or a stand, are included. Look for scuffs and sun fading. For boxed items, ask for a photo of the box corners.'] },
  { h: '6. Spotting unofficial copies', p: ['Popular characters attract unofficial copies. Warning signs include prices far below the usual range, stock photos only, missing tags, odd stitching on the face and a belly badge that looks poorly printed. Ask for photos of the real item. Our fake and bootleg guide lists more warning signs.'] },
  { h: '7. Compare sold prices, not asking prices', p: ['Search the exact bear and size, filter to sold listings and look at several recent sales in the same condition. Asking prices only show what sellers hope for. Add shipping to every price you compare.'] },
  { h: '8. Shipping and customs to Canada', p: ['Plush ships easily but can arrive crushed, so ask how the seller packs it. Buying from a Canadian seller keeps shipping simple. If you buy from the USA, confirm duties, taxes and the delivery estimate first, and choose tracked shipping. Check the parcel the day it arrives and photograph any damage right away.'] },
  { h: '9. Cleaning, storage and display', p: ['Keep plush out of direct sunlight, which fades fur, and away from heat and humidity. Use a closed case or shelf to limit dust. For used items, surface cleaning with a soft cloth is safer than a machine wash, which can damage older plush. Our storage and display guide covers shelves, cases and humidity in more detail.'] },
  { h: '10. Questions collectors ask', p: ['Should I keep the tags on? Yes, tags usually help the value and the story of the item. Are Care Bears collectibles a good investment? Prices move with demand, so collect what you enjoy and treat any resale value as a bonus.'] },
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
      <p style={p}>Plush, figures and keepsakes: here is how to choose a focus, check tags and condition, avoid unofficial copies and compare real sold prices before you buy Care Bears collectibles in Canada.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one bear or format, check the tags and item condition, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
<ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/funko-pop-chase-exclusives-holiday-guide-canada" style={{ color: '#e8b820' }}>Funko Pop Chase and Exclusives Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/squishmallows-plush-collecting-guide-canada" style={{ color: '#e8b820' }}>Squishmallows and Plush Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/retro-80s-90s-nostalgia-toys-collecting-guide-canada" style={{ color: '#e8b820' }}>Retro 80s and 90s Nostalgia Toys Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={{ color: '#e8b820' }}>Collectible Condition Terms Explained</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible Value With Sold Listings</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={{ color: '#e8b820' }}>Keep Collectibles in the Box or Open Them?</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={{ color: '#e8b820' }}>What to Check When Your Collectible Arrives</Link></li></ul></nav>
    </article>
  )
}
