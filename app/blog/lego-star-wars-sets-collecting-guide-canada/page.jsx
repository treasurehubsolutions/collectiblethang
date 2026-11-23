import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "LEGO Star Wars Sets in Canada: A Collector Buying Guide"
const DESC = "How to buy and collect LEGO Star Wars sets in Canada: choose a theme, check sealed and used condition, count minifigures, spot fakes, compare sold prices and store sets safely."
const SEO_TITLE = "LEGO Star Wars Sets Collector Guide for Canada"
const SEO_DESC = "Collecting LEGO Star Wars sets in Canada: choose a theme, check box and minifigure condition, spot fakes and compare sold prices."
const SLUG = 'lego-star-wars-sets-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why LEGO Star Wars is a favourite with collectors', p: ['LEGO Star Wars brings two large fan communities together: building fans and Star Wars fans. Sets range from small polybags to large display ships, so there is room for every budget. Without a plan, though, a collection can grow faster than your shelf space and your budget.'] },
  { h: '2. Choose a theme, an era or a scale', p: ['Pick a way to narrow your search before you buy. A clear focus makes prices easier to compare and keeps impulse buys in check.'], list: [
    'Era or trilogy: original, prequel, sequel, or animated and series-based sets.',
    'Type: starships and vehicles, buildable figures, helmets, playsets or minifigure-only items.',
    'Size: small sets, mid-size sets or large display pieces that need a dedicated shelf.'] },
  { h: '3. Sealed, open box and used sets', p: ['A sealed set has a closed box and intact seals. Check for dents, crushed corners, price stickers and torn flaps, because collectors pay for box condition. Used sets are often cheaper and are great for building, but ask whether the instructions, box and all bags are included. Our condition terms guide explains how sellers describe new, sealed and open box.'] },
  { h: '4. Minifigures and parts: count before you pay', p: ['In a used set, the minifigures are often the main value. Ask for photos of every figure, with its printing, accessories and headgear. Check for scratches, faded printing and loose limbs. For a set with no box, compare the parts list in the instructions with what the seller shows, since missing small pieces are common.'] },
  { h: '5. Retired sets and new releases', p: ['Sets are sold for a limited time, and retired sets can be harder to find. That does not mean every retired set is valuable. Check recent sold listings for the exact set number before paying a premium, and keep in mind that new releases can drop or rise in price over time.'] },
  { h: '6. Spotting fakes and unofficial copies', p: ['Unofficial copies exist for popular Star Wars sets. Warning signs include prices far below the usual range, stock photos only, missing set numbers, blurry box printing and parts that feel thin or do not clip together firmly. Ask for photos of the real box and the set number. Our fake and bootleg guide lists more warning signs.'] },
  { h: '7. Compare sold prices, not asking prices', p: ['Search the exact set number, filter to sold listings and look at several recent sales in the same condition. Asking prices only show what sellers hope for. Add shipping to every price you compare, because large boxes can cost more to send.'] },
  { h: '8. Shipping and customs to Canada', p: ['Large LEGO boxes are heavy and easy to dent, so ask how the seller packs them. Buying from a Canadian seller keeps shipping simple. If you buy from the USA, confirm duties, taxes and the delivery estimate first, and choose tracked shipping. Check the box the day it arrives and photograph any damage right away.'] },
  { h: '9. Building, display and storage', p: ['Keep sealed boxes out of direct sunlight, which fades cardboard and can yellow some plastic over time. If you build a set, keep the bags and instructions so you can rebuild or sell later. Dust built models gently with a soft brush and keep them away from heat and humidity. Our storage and display guide covers shelves, cases and humidity in more detail.'] },
  { h: '10. Questions collectors ask', p: ['Should I build the set or keep it sealed? Sealed sets usually sell better, but built models are what many collectors enjoy most. Is LEGO a good investment? Prices move with demand, so collect what you enjoy and treat any resale value as a bonus. Where do I start with LEGO in general? See our LEGO buying guide linked below.'] },
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
      <p style={p}>Starships, minifigures and display sets: here is how to choose a theme, check box and minifigure condition, avoid fakes and compare real sold prices before you buy LEGO Star Wars in Canada.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one theme or scale, check the box and minifigure condition, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
<ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/lego-buying-guide-collectors-canada" style={{ color: '#e8b820' }}>LEGO Buying Guide for Collectors in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/lego-technic-sets-collecting-guide-canada" style={{ color: '#e8b820' }}>LEGO Technic Sets Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/star-wars-marvel-legends-collecting-guide-canada" style={{ color: '#e8b820' }}>Star Wars and Marvel Legends Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={{ color: '#e8b820' }}>Collectible Condition Terms Explained</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible Value With Sold Listings</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={{ color: '#e8b820' }}>Keep Collectibles in the Box or Open Them?</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={{ color: '#e8b820' }}>What to Check When Your Collectible Arrives</Link></li></ul></nav>
    </article>
  )
}
