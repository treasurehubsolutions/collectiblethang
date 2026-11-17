import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Little People Collector Sets in Canada: A Buyer\'s Guide for Adult Fans'
const DESC = 'How to collect Fisher-Price Little People Collector sets in Canada: pick a theme, check the figures and the box, compare sold prices and plan shipping. A practical guide for adult fans and gift buyers.'
const SEO_TITLE = "Little People Collector Sets Buyer's Guide"
const SEO_DESC = "Collect Fisher-Price Little People Collector sets in Canada: pick a theme, check the figures and box, compare sold prices and plan shipping."
const SLUG = 'little-people-collector-sets-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. What the Collector line is', p: ['Fisher-Price Little People Collector sets are made for adults who grew up with the classic chunky figures. They come in themed sets built around films, TV shows, music and pop culture, and they are packaged as display pieces rather than toddler toys. That is why the box matters so much to collectors.'] },
  { h: '2. Pick a theme and stick to it', p: ['A themed shelf looks better and costs less than random buying. Choose a franchise you love, then add the sets that go with it. Gift buyers can do the same: one fan, one theme, one set that fits their favourite film or show.'] },
  { h: '3. Check the figures and the pieces', p: ['Collector sets usually include several figures plus a few small accessories or vehicles. Count them against the product description or the box photos before you pay. Missing small pieces are the most common problem on used or opened sets.'], list: [
    'Figures: all included, with clean paint and no chew marks or scratches.',
    'Accessories: vehicles, props and small parts should match the set.',
    'Box: crushed corners, torn window, price stickers, yellowing and shelf wear.'] },
  { h: '4. Sealed, open box or loose', p: ['A sealed set keeps the most value and is the safest gift. Open box and loose sets cost less and work for display, as long as they are complete. Ask the seller for photos of the actual item, not a stock picture. Our checklist on buying collectibles on eBay Canada lists what to look at before you click buy.'] },
  { h: '5. Compare sold prices, not asking prices', p: ['Asking prices show what sellers hope for. Sold listings show what collectors actually pay. Search the exact set name, filter to sold items and look at several recent sales. Prices on Canadian listings and on the US site can differ, so compare both, and add shipping to the total.'] },
  { h: '6. Shipping and customs', p: ['These sets are light but bulky, so shipping can add a lot to a small price. Buying from a Canadian seller avoids customs surprises and long waits. Look for tracked shipping and combined shipping if you want more than one set.'] },
  { h: '7. Display and storage', p: ['Keep sets out of direct sunlight, which yellows the plastic and fades the cardboard. Leave sealed boxes in the package and store them flat. For loose figures, a small shelf or a clear case keeps dust off and makes the scene easy to enjoy.'] },
  { h: '8. Build a wish list', p: ['Write down the sets you want and the ones you already own, with their condition. A short list makes a good deal easy to spot and keeps you from buying the same set twice.'] },
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
      <p style={p}>The classic chunky figures grew up with us. Here is how to choose, check and buy Little People Collector sets with confidence, whether you are building a shelf or shopping for a fan.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one theme, check the figures and the box, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/buying-collectibles-on-ebay-canada-checklist" style={{ color: '#e8b820' }}>Buying Collectibles on eBay Canada: An 8-Step Buyer's Checklist</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Collector's Holiday Gift Guide for Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-stocking-stuffers-under-20-canada" style={{ color: '#e8b820' }}>Collector Stocking Stuffers Under $20 in Canada</Link></li></ul></nav>
    </article>
  )
}
