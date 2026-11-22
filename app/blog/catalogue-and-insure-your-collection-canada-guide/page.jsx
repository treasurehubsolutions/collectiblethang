import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const SLUG = 'catalogue-and-insure-your-collection-canada-guide'
const TITLE = 'How to Catalogue and Insure Your Collection: A Practical Guide for Canadian Collectors'
const IMG1 = 'https://i.ebayimg.com/images/g/HvsAAeSwVZ5qmAgv/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/19oAAeSw9ERoq3O7/s-l1600.jpg'
const ALT1 = 'Funko Pop Star Wars Cobb Vanth #484 Chase Limited Edition from The Mandalorian, new in box, photographed by The Shelf Cartel'
const ALT2 = 'Star Wars The Vintage Collection Lando Calrissian 3.75-inch action figure, photographed by The Shelf Cartel'
const DESC = 'Build a simple inventory of your collectibles, take good photos, keep receipts and check your home insurance. A practical guide for collectors in Canada.'
const SEO_TITLE = 'How to Catalogue and Insure Your Collection'
const SEO_DESC = 'Track your collectibles with a simple spreadsheet, photos and receipts, and learn what to ask your insurer. A practical guide for Canadian collectors.'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why a collection inventory is worth the time', p: [
    'A collection grows one piece at a time, and after a year or two most collectors cannot say exactly what they own, what they paid or where each item came from. A simple inventory fixes that. It helps you avoid buying doubles, see what is missing from a set, set a fair price if you ever sell, and prove what you own if something is damaged, lost or stolen.'] },
  { h: '2. What to write down for each piece', p: ['Keep it simple so you actually keep it up. One row per item is enough:'], list: [
    'Name, brand, line or series, and the number on the package (for example the Funko Pop number or the Hot Wheels collector number).',
    'Year, edition or variant: chase, exclusive, limited, first edition, and so on.',
    'Condition: sealed, boxed, carded, opened or loose, plus any flaws such as a soft corner or a paint chip.',
    'Purchase date, price paid in Canadian dollars, where you bought it and the shipping cost.',
    'A rough current value, based on recent sold listings rather than asking prices.',
    'Where it is stored: shelf, bin or display case.'] },
  { h: '3. Pick a tool you will really use', p: [
    'A spreadsheet is the easiest place to start. Columns for the fields above, one row per item, and a total at the bottom. If you prefer an app, there are collection tracker apps for many categories, but a spreadsheet you own and can export is the safest choice because it does not depend on a company staying in business.',
    'Back it up. Save a copy in cloud storage and another on a USB key. An inventory that burns with the collection does not help anyone.'] },
  { h: '4. Take photos that prove condition', p: [
    'Photos are the second half of your inventory. Take a clear front shot of each piece, a shot of the back or the bottom, and a close-up of any flaw. Use daylight or a soft lamp, a plain background and no glare on the plastic window. For a larger collection, one wide shot of each shelf or case is also useful. Name the files with the same item name as your spreadsheet so you can match them later.'] },
  { h: '5. Keep receipts and proof of purchase', p: [
    'Save order confirmations, eBay purchase emails, shipping receipts and any certificate or card that came with the item. Take screenshots of the listing page, because listings disappear. A folder named by year is plenty. If an item was a gift, note who gave it and when.'] },
  { h: '6. Check what your home insurance really covers', p: [
    'Many people assume their tenant or home insurance covers a collection in full, and that is not always true. Policies often limit how much they pay for certain categories, and some collectibles may be treated differently from ordinary household contents. We are not insurance advisors, so the best step is a short call or email to your insurer or broker. Useful questions to ask:'], list: [
    'Are my collectibles covered, and is there a limit per item or for the whole collection?',
    'Do I need to list high-value pieces separately, or add an extra endorsement (a rider)?',
    'Do you pay replacement cost or only the depreciated value?',
    'What proof do you need if I make a claim: photos, receipts, an appraisal?',
    'Are items covered while in storage, in a locker or when I travel to a show?'] },
  { h: '7. Know when an appraisal is needed', p: [
    'For most mainline toys and figures, your spreadsheet, photos and recent sold prices are enough. For a few high-value or vintage pieces, a written appraisal from a specialist can help with insurance. Ask your insurer first, because they often tell you what they accept.'] },
  { h: '8. Reduce the risk in the first place', p: [
    'The best claim is the one you never make. Keep the collection away from windows, water pipes and basement floors that can flood. Use sturdy shelves, secure heavy cases and keep valuable items out of view from outside. Our storage and display guide covers shelves and cases in more detail.'] },
  { h: '9. Update it a few times a year', p: [
    'Set a reminder before the holidays and again in the spring. Add new pieces, update values from recent sold listings and check that your photos are still backed up. Fifteen minutes each time keeps the inventory useful.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1],
    datePublished: '2026-11-20',
    dateModified: '2026-11-20',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const fig = { margin: '20px 0', textAlign: 'center' }
  const img = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  const cap = { color: '#a0a0ae', fontSize: 13, marginTop: 6 }
  const lk = { color: '#e8b820' }
  const Fig = ({ src, alt, c, eager }) => (
    <figure style={fig}>
      <img src={src} alt={alt} width={1600} height={1600} loading={eager ? 'eager' : 'lazy'} style={img} />
      <figcaption style={cap}>{c}</figcaption>
    </figure>
  )
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: TITLE, item: `${BASE}/blog/${SLUG}` }] }).replace(/</g, '\\u003c') }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>How many pieces are on your shelves right now, and what are they worth? Most collectors cannot answer quickly. With the holiday season and Black Friday adding new pieces to many collections, this is a good time to set up a simple inventory. Here is how to catalogue your collection, store the proof and check your insurance, step by step.</p>
      <Fig src={IMG1} alt={ALT1} c="A boxed chase figure from our shop: the number and the sticker on the box go in your inventory." eager />
      {sections.slice(0, 4).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <Fig src={IMG2} alt={ALT2} c="Note the line, the character and the condition of the card for every piece." />
      {sections.slice(4, 9).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <h2 style={h2}>Where to shop</h2>
      <p style={p}>Add to your shelf with our <Link href="/shop?category=Funko%20Pop" style={lk}>Funko Pop</Link>, <Link href="/shop?category=Hot%20Wheels" style={lk}>Hot Wheels</Link> and <Link href="/shop?category=Star%20Wars" style={lk}>Star Wars</Link> collections, or see everything new in the <Link href="/shop" style={lk}>shop</Link>. We use real photos of the actual item, describe the condition honestly and ship across Canada and the USA.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Our rule of thumb: one row and two photos for every piece, and a call to your insurer once a year.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={lk}>Diecast and Funko Storage and Display Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={lk}>How to Check Collectible Value With Sold Listings</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={lk}>Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={lk}>Keep It in the Box or Open It?</Link></li>
      </ul></nav>
    </article>
  )
}
