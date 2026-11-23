import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "Model Trains in Canada: An HO and N Scale Collector Buying Guide"
const DESC = "How to buy model trains in Canada: choose a scale and era, check couplers, wheels and boxes, test locomotives, compare sold prices, handle shipping and store rolling stock safely."
const SEO_TITLE = "Model Trains Collecting Guide for Canada"
const SEO_DESC = "Buying model trains in Canada: pick a scale, check condition and boxes, test locomotives, compare sold prices and store rolling stock."
const SLUG = 'model-trains-ho-n-scale-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why model trains attract collectors', p: ['Model trains combine engineering, history and display. Some people run layouts, others keep locomotives and cars on a shelf. Either way, the range of scales, railways and eras is wide, so a plan helps you avoid buying pieces that do not fit together.'] },
  { h: '2. Choose a scale first', p: ['Scale decides which track, locomotives and cars work together. Common choices include HO, N, O and the larger garden sizes. HO and N are popular because they fit in smaller spaces. Pick one scale before you buy, and confirm the scale in every listing.'] },
  { h: '3. Choose an era or railway', p: ['A focus keeps a collection looking coherent and makes prices easier to compare.'], list: [
    'Railway: a single railway or a set of related ones.',
    'Era: steam, early diesel or modern equipment, so cars look right behind the locomotive.',
    'Type: locomotives, passenger cars, freight cars or accessories and buildings.'] },
  { h: '4. Locomotives: what to ask the seller', p: ['Ask whether the locomotive runs, and request a video if possible. Useful questions: does it run smoothly in both directions, are the lights working, is the motor quiet, and is it analog or fitted with a digital decoder. A listing that says sold as is and untested should be priced for repair.'] },
  { h: '5. Rolling stock, couplers and wheels', p: ['For cars, check the couplers, the wheels and any fine details such as grab irons, ladders and brake parts, which break easily. Photos of both sides and the underside help. Mixed couplers can cause trouble on a layout, so ask which type is fitted.'] },
  { h: '6. Boxes, paperwork and sets', p: ['Original boxes and foam trays protect the item and often raise the price, since many collectors prefer complete pieces. For train sets, confirm that the track, controller and cars are all included. Our condition terms guide explains how sellers describe new, like new and used.'] },
  { h: '7. Spotting problems and unofficial copies', p: ['Warning signs include prices far below the usual range, stock photos only, mismatched paint, wrong markings for the railway and parts that look repainted or glued. Ask for photos of the actual item and the model number. Our fake and bootleg guide covers more warning signs.'] },
  { h: '8. Compare sold prices, not asking prices', p: ['Search the exact model number, filter to sold listings and compare several recent sales in the same condition. Asking prices only show what sellers hope for. Add shipping, which can be significant for heavy locomotives and sets.'] },
  { h: '9. Shipping and customs to Canada', p: ['Trains are fragile, so ask how the seller packs them. Locomotives should be wrapped in their own foam or tray, and boxes should not be crushed in transit. Buying from a Canadian seller keeps shipping simple. If you buy from the USA, confirm duties, taxes and the delivery estimate first, and choose tracked shipping. Photograph any damage the day the parcel arrives.'] },
  { h: '10. Storage, display and questions', p: ['Keep trains in a dry place away from direct sunlight and extreme heat or cold, ideally in their boxes or in a closed case to limit dust. Our storage and display guide covers shelves, cases and humidity. Should I keep the boxes? Yes, boxes usually help the value and protect the item. Are model trains a good investment? Prices move with demand, so collect what you enjoy and treat any resale value as a bonus.'] },
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
      <p style={p}>Locomotives, cars and sets: here is how to choose a scale, check condition and boxes, avoid unofficial copies and compare real sold prices before you buy model trains in Canada.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one scale and era, check the condition and the box, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
<ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/gundam-gunpla-model-kits-collecting-guide-canada" style={{ color: '#e8b820' }}>Gundam and Gunpla Model Kits Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/large-scale-diecast-model-cars-1-18-1-24-1-43-guide-canada" style={{ color: '#e8b820' }}>Large-Scale Die-Cast Model Cars Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/retro-80s-90s-nostalgia-toys-collecting-guide-canada" style={{ color: '#e8b820' }}>Retro 80s and 90s Nostalgia Toys Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={{ color: '#e8b820' }}>Collectible Condition Terms Explained</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible Value With Sold Listings</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={{ color: '#e8b820' }}>Keep Collectibles in the Box or Open Them?</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={{ color: '#e8b820' }}>What to Check When Your Collectible Arrives</Link></li></ul></nav>
    </article>
  )
}
