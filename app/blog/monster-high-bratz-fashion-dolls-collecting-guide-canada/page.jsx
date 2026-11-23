import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "Monster High and Bratz Dolls in Canada: A Fashion Doll Collector Buying Guide"
const DESC = "How to buy and collect Monster High and Bratz dolls in Canada: choose a line, check outfits, accessories and boxes, spot unofficial copies, compare sold prices and store dolls safely."
const SEO_TITLE = "Monster High and Bratz Doll Collecting Guide"
const SEO_DESC = "Collecting Monster High and Bratz dolls in Canada: choose a line, check outfits and boxes, spot copies and compare sold prices."
const SLUG = 'monster-high-bratz-fashion-dolls-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why fashion dolls are back on collectors\' shelves', p: ['Monster High and Bratz dolls bring back strong memories for adults who grew up with them, and new releases keep younger fans interested. Between dolls, outfits, pets and playsets, there is a lot to choose from, so a clear plan keeps your shelf and budget under control.'] },
  { h: '2. Choose a focus before you buy', p: ['Pick a simple way to narrow your search. A focus makes prices easier to compare and avoids duplicate purchases.'], list: [
    'Line: Monster High, Bratz, or one specific series or wave.',
    'Character: one favourite doll and her different versions.',
    'Format: boxed dolls, loose dolls, outfits, pets and accessories.'] },
  { h: '3. Boxed or loose: what changes the price', p: ['A sealed box in good shape usually sells for more than a loose doll, but a complete loose doll can be a fair way to collect on a smaller budget. Ask for photos of all box corners and the window. Our guide on keeping collectibles in the box or opening them can help you decide.'] },
  { h: '4. Check outfits and accessories', p: ['Many dolls come with shoes, bags, pets, brushes or stands. A doll with missing pieces is worth less, so compare the listing to photos of a complete example. Ask whether the outfit and the shoes are the original ones, since mixed clothing is common on loose dolls.'] },
  { h: '5. Condition of hair, face and body', p: ['For loose dolls, ask about tangled or cut hair, scuffed face paint, loose joints and stains on the body. Close photos of the face and the hands help. Marker marks and green or dark staining on plastic are worth asking about before you pay.'] },
  { h: '6. Spotting unofficial copies', p: ['Popular dolls attract unofficial copies. Warning signs include prices far below the usual range, stock photos only, blurry face paint, poor stitching on outfits and boxes with odd printing. Ask for photos of the real item. Our fake and bootleg guide lists more warning signs.'] },
  { h: '7. Compare sold prices, not asking prices', p: ['Search the exact doll name and series, filter to sold listings and look at several recent sales in the same condition. Asking prices only show what sellers hope for. Add shipping to every price you compare.'] },
  { h: '8. Shipping and customs to Canada', p: ['Boxed dolls can arrive with crushed corners, so ask how the seller packs the box. Buying from a Canadian seller keeps shipping simple. If you buy from the USA, confirm duties, taxes and the delivery estimate first, and choose tracked shipping. Check the parcel the day it arrives and photograph any damage right away.'] },
  { h: '9. Storage and display', p: ['Keep dolls out of direct sunlight, which fades hair and plastic, and away from heat and humidity. A closed case or shelf limits dust. Store loose accessories in small bags so shoes and pets do not get lost. Our storage and display guide covers shelves and cases in more detail.'] },
  { h: '10. Questions collectors ask', p: ['Should I keep the box? Yes, a good box usually helps the value and protects the doll. Are fashion dolls a good investment? Prices move with demand, so collect what you enjoy and treat any resale value as a bonus.'] },
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
      <p style={p}>Dolls, outfits and accessories: here is how to choose a line, check condition and boxes, avoid unofficial copies and compare real sold prices before you buy Monster High and Bratz dolls in Canada.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one line or doll, check the accessories and item condition, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
<ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/barbie-doll-collecting-guide-canada" style={{ color: '#e8b820' }}>Barbie Doll Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/retro-80s-90s-nostalgia-toys-collecting-guide-canada" style={{ color: '#e8b820' }}>Retro 80s and 90s Nostalgia Toys Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/mystery-blind-box-collectibles-buying-guide-canada" style={{ color: '#e8b820' }}>Mystery Blind Box Buying Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={{ color: '#e8b820' }}>Collectible Condition Terms Explained</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible Value With Sold Listings</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={{ color: '#e8b820' }}>Keep Collectibles in the Box or Open Them?</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={{ color: '#e8b820' }}>What to Check When Your Collectible Arrives</Link></li></ul></nav>
    </article>
  )
}
