import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "Disney Collectibles in Canada: A Collector's Guide to Figures, Plush, Pins and Die-Cast"
const DESC = "How to collect Disney in Canada: pick a franchise and format, check condition and licensing marks, spot fakes, compare sold prices, plan shipping and display pieces safely."
const SEO_TITLE = "Disney Collectibles Guide for Canadian Collectors"
const SEO_DESC = "Collecting Disney figures, plush, pins and die-cast in Canada: choose a focus, check licence marks and condition, spot fakes and compare sold prices."
const SLUG = 'disney-collectibles-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why Disney collecting is so broad', p: ['Disney covers classic characters, animated films, theme-park merchandise and licensed lines from many makers. That range is the appeal and the trap: with figures, plush, pins, die-cast, LEGO and trading items all in play, a collection without a focus grows fast and gets hard to display or value.'] },
  { h: '2. Choose a franchise and a format', p: ['Start by picking one character, film or era, then one or two formats. A collector who loves a single film might buy figures and plush only, while another follows die-cast vehicles or pins. A clear focus makes it easier to compare prices, spot gaps and say no to impulse buys.'], list: [
    'Franchise: classic characters, a favourite film or a newer release.',
    'Format: figures, plush, pins, die-cast, building sets or cards.',
    'Budget: set a monthly limit so a long checklist does not become a stress.'] },
  { h: '3. Know who made it', p: ['Disney items come from many licensed manufacturers, and quality varies by maker. Look for the licence text, the manufacturer name and the year on the box or tag. Matching those details with the maker\'s own product line is the quickest way to confirm an item is what the listing claims.'] },
  { h: '4. Condition: sealed, boxed, loose or tagged', p: ['For boxed items, check corners, window plastic, price stickers and shelf wear. For plush, ask about tags, stuffing, smoke and pet exposure. Loose figures should come with the accessories they shipped with. Our guide to condition terms explains what sellers usually mean by new, sealed and open box.'] },
  { h: '5. Spotting fakes and unlicensed copies', p: ['Popular characters attract unlicensed copies. Be careful with prices far below the usual range, blurry or stock photos, missing licence text, odd colours or stitching and sellers with no history. Ask for photos of the actual item and its markings before you pay. Our guide to spotting fake and bootleg collectibles lists more warning signs.'] },
  { h: '6. Compare sold prices, not asking prices', p: ['Search the exact item name and number, filter to sold listings and look at several recent sales. Asking prices only show what sellers hope for. Compare the same condition each time, add shipping to every price and remember that holiday demand can push prices up for a few weeks.'] },
  { h: '7. Exclusives, variants and limited runs', p: ['Many Disney lines include store exclusives, event pieces and colour variants. These can be worth more over time, but only when you can confirm the exact variant. Check the sticker, the box number and the item description against a reliable reference before you pay a premium.'] },
  { h: '8. Shipping and customs to Canada', p: ['Buying from a Canadian seller keeps shipping simple and avoids customs surprises. If you buy from the USA, confirm duties, taxes and the delivery estimate first, and choose tracked shipping for anything fragile. Check the item the day it arrives and photograph any damage right away.'] },
  { h: '9. Display and storage', p: ['Keep boxed pieces out of direct sunlight, which fades cardboard and plastic. Store plush in a dry, smoke-free space and give pins a padded board or album. Dust loose figures gently with a soft brush. Our storage and display guide covers shelves, cases and humidity in more detail.'] },
  { h: '10. Questions collectors ask', p: ['Is Disney collecting a good investment? Prices move with demand, so collect what you enjoy and treat any resale value as a bonus. Should I keep items in the box? Boxed and sealed pieces usually sell better, while loose ones are easier to display. How do I start? Pick one character or film, set a budget and learn the sold-price range before you buy.'] },
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
      <p style={p}>Figures, plush, pins and die-cast: here is how to choose a focus, check licence marks and condition, avoid fakes and compare real sold prices before you buy Disney collectibles in Canada.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one character or film, check the licence marks and condition, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
<ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/disney-pixar-cars-diecast-collecting-guide-canada" style={{ color: '#e8b820' }}>Disney Pixar Cars Die-Cast Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Collectors Holiday Gift Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={{ color: '#e8b820' }}>Collectible Condition Terms Explained</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible's Value With Sold Listings</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/squishmallows-plush-collecting-guide-canada" style={{ color: '#e8b820' }}>Squishmallows and Plush Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/mystery-blind-box-collectibles-buying-guide-canada" style={{ color: '#e8b820' }}>Mystery and Blind Box Collectibles Buying Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={{ color: '#e8b820' }}>What to Check When Your Collectible Arrives</Link></li></ul></nav>
    </article>
  )
}
