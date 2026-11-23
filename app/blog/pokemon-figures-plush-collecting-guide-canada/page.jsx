import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "Pokemon Figures and Plush in Canada: A Collector's Guide (Not Cards)"
const DESC = "How to collect Pokemon figures, plush and other non-card items in Canada: choose a focus, check condition and official marks, spot fakes, compare sold prices and display pieces safely."
const SEO_TITLE = "Pokemon Figures and Plush Guide for Canadian Collectors"
const SEO_DESC = "Collecting Pokemon figures and plush in Canada: choose a focus, check official marks and condition, spot fakes and compare sold prices."
const SLUG = 'pokemon-figures-plush-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why collect Pokemon beyond the cards', p: ['Pokemon is one of the widest collecting worlds around, and it is not only trading cards. Figures, plush, key chains, die-cast and building sets all have loyal fans. Without a focus, a collection grows quickly and becomes hard to display, store or value.'] },
  { h: '2. Choose a Pokemon, a generation or a format', p: ['Start with one favourite Pokemon, one region or one format. A collector of a single Pokemon might buy figures and plush only, while another follows a favourite generation across several formats. A clear focus makes prices easier to compare and impulse buys easier to skip.'], list: [
    'Pokemon or theme: a single favourite, a starter trio or a region.',
    'Format: articulated or small figures, plush, key chains, die-cast or sets.',
    'Budget: set a monthly limit so a long wish list stays fun.'] },
  { h: '3. Check the official marks', p: ['Official items carry licence and manufacturer text on the box, tag or base. Look for the maker name, the copyright line and the year. Compare those details with the maker\'s own product pages so you know the item is what the listing says.'] },
  { h: '4. Condition: sealed, boxed, loose or tagged', p: ['For boxed figures, check corners, window plastic and price stickers. For plush, ask about tags, stuffing, smoke and pet exposure. Loose figures should include the accessories they came with. Our condition terms guide explains what sellers usually mean by new, sealed and open box.'] },
  { h: '5. Spotting fakes and unlicensed copies', p: ['Popular Pokemon attract unlicensed copies. Be careful with prices far below the usual range, blurry or stock photos, missing licence text, odd colours or stitching and sellers with no history. Ask for photos of the real item and its markings before you pay. Our guide to fake and bootleg collectibles lists more warning signs.'] },
  { h: '6. Compare sold prices, not asking prices', p: ['Search the exact name and size, filter to sold listings and look at several recent sales. Asking prices only show what sellers hope for. Compare the same condition each time and add shipping to every price. Demand can rise around the holidays and new releases.'] },
  { h: '7. Variants, exclusives and sizes', p: ['Pokemon lines often include store exclusives, event items and different sizes of the same character. These can be worth more, but only when you can confirm the exact version. Check the box text, the size and the description against a reliable reference before paying a premium.'] },
  { h: '8. Shipping and customs to Canada', p: ['Buying from a Canadian seller keeps shipping simple and avoids customs surprises. If you buy from the USA, confirm duties, taxes and the delivery estimate first, and choose tracked shipping for anything fragile. Check the item the day it arrives and photograph any damage right away.'] },
  { h: '9. Display and storage', p: ['Keep boxed pieces out of direct sunlight, which fades cardboard and plastic. Store plush in a dry, smoke-free space and dust loose figures gently with a soft brush. Our storage and display guide covers shelves, cases and humidity in more detail.'] },
  { h: '10. Questions collectors ask', p: ['Is Pokemon collecting a good investment? Prices move with demand, so collect what you enjoy and treat any resale value as a bonus. Should I keep items in the box? Boxed and sealed pieces usually sell better, while loose ones are easier to display. Where do I start with cards? See our Pokemon cards guide for beginners linked below.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    datePublished: '2026-11-22',
    dateModified: '2026-11-22',
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
      <p style={p}>Figures, plush and more: here is how to choose a focus, check official marks and condition, avoid fakes and compare real sold prices before you buy Pokemon collectibles in Canada.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one Pokemon or format, check the official marks and condition, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
<ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/pokemon-cards-collecting-canada-beginners" style={{ color: '#e8b820' }}>Pokemon Cards Collecting for Beginners in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/pokemon-tcg-new-set-launch-buying-guide" style={{ color: '#e8b820' }}>Pokemon TCG New Set Launch Buying Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/squishmallows-plush-collecting-guide-canada" style={{ color: '#e8b820' }}>Squishmallows and Plush Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={{ color: '#e8b820' }}>Collectible Condition Terms Explained</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible\'s Value With Sold Listings</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/mystery-blind-box-collectibles-buying-guide-canada" style={{ color: '#e8b820' }}>Mystery and Blind Box Collectibles Buying Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={{ color: '#e8b820' }}>What to Check When Your Collectible Arrives</Link></li></ul></nav>
    </article>
  )
}
