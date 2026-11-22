import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Sonic the Hedgehog Collectibles in Canada: A Buyer\'s Guide to Figures, Plush and Retro Games'
const DESC = 'How to collect Sonic the Hedgehog figures, plush and retro games in Canada: pick a focus, check condition and completeness, spot fakes, compare sold prices and plan shipping.'
const SEO_TITLE = "Sonic the Hedgehog Collectibles Buyer's Guide"
const SEO_DESC = "Collect Sonic the Hedgehog figures, plush and retro games in Canada: pick a focus, check condition, spot fakes and compare sold prices."
const SLUG = 'sonic-the-hedgehog-collectibles-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why Sonic collecting is so broad', p: ['Sonic the Hedgehog has been around for decades, so the hobby covers a lot: action figures, plush, vinyl figures, die-cast and toy vehicles, trading and card items, and the original video games. Before you buy anything, decide which part you want. A focused shelf is cheaper and looks better than a mix of everything.'] },
  { h: '2. Pick a focus and a budget', p: ['Common focuses include one character, one era of the games, one toy line or one format such as plush. Set a budget per item and a monthly limit. Gift buyers can keep it simple: one fan, one favourite character, one item that fits.'] },
  { h: '3. Figures and toys: what to check', p: ['Many Sonic figures come with small accessories, extra hands or effect pieces. Compare the item against the product photos and description before you pay. Loose figures should have clean paint and firm joints.'], list: [
    'Completeness: accessories, stands and extra parts should match the listing.',
    'Paint and joints: look for rubbed paint, scuffs, loose limbs and sun fading.',
    'Packaging: window clarity, bent corners, creases, price stickers and yellowing.'] },
  { h: '4. Plush and soft toys', p: ['Check the tags, stitching and eyes, and ask about smoke, pets and odours when the item is used. Official plush normally carries printed tags and clean embroidery. Prize or unbranded plush is usually cheaper but is not the same thing, so make sure the listing says which one it is.'] },
  { h: '5. Retro games: complete or loose', p: ['For the original games, a complete copy has the case, the manual and the disc or cartridge. Loose copies cost less but are not the same item. Ask for photos of the actual disc or cartridge, the case and the manual, and read our guide to video game collectibles for what else to look at.'] },
  { h: '6. Spotting fakes and bootlegs', p: ['Popular characters attract copies. Warning signs include blurry printing, odd colours, missing logos or licence text, flimsy packaging and a price far below the usual range. Compare the item with photos of an official one, and use our guide to spotting fake and bootleg collectibles before you buy.'] },
  { h: '7. Compare sold prices, not asking prices', p: ['Asking prices show what sellers hope for. Sold listings show what collectors actually pay. Search the exact item name, filter to sold items and look at several recent sales. Canadian and US prices can differ, so compare both, and add shipping to the total.'] },
  { h: '8. Shipping, customs and timing', p: ['Plush is light but bulky, and boxed figures can be fragile, so shipping can change the real price. Buying from a Canadian seller avoids customs surprises and long waits. Look for tracked shipping and combined shipping if you want more than one item, and order early for holiday gifts.'] },
  { h: '9. Display and storage', p: ['Keep figures and plush out of direct sunlight, which fades paint and fabric. Store boxed items upright or flat without squeezing the packaging. A small shelf or a clear case keeps dust off and makes the display easy to enjoy.'] },
  { h: '10. Questions collectors ask', p: ['Is a loose figure worth buying? Yes, if it is complete and in good shape, and if you display it rather than keep it sealed. Should I open a sealed item? Only if you bought it to enjoy; a sealed item keeps its value better. How many pieces make a collection? There is no right number: one favourite character on a shelf is a collection too.'] },
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
      <p style={p}>From figures and plush to retro games, here is how to choose, check and buy Sonic the Hedgehog collectibles with confidence, whether you are building a shelf or shopping for a fan.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one focus, check condition and completeness, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/video-game-collectibles-guide-canada" style={{ color: '#e8b820' }}>Video Game Collectibles Guide for Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible's Value With Sold Listings</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={{ color: '#e8b820' }}>Collectible Condition Terms Explained</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/buying-collectibles-on-ebay-canada-checklist" style={{ color: '#e8b820' }}>Buying Collectibles on eBay Canada: An 8-Step Buyer's Checklist</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/squishmallows-plush-collecting-guide-canada" style={{ color: '#e8b820' }}>Squishmallows and Plush Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={{ color: '#e8b820' }}>What to Check When Your Collectible Arrives</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/retro-80s-90s-nostalgia-toys-collecting-guide-canada" style={{ color: '#e8b820' }}>Retro 80s and 90s Nostalgia Toys Collecting Guide</Link></li></ul></nav>
    </article>
  )
}
