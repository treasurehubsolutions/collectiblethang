import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const SLUG = 'order-collectibles-early-holiday-shipping-canada-guide'
const TITLE = 'Order Collectibles Early: A Holiday Shipping Guide for Canadian Gift Buyers'
const IMG1 = 'https://i.ebayimg.com/images/g/HvsAAeSwVZ5qmAgv/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/81AAAeSwieZqmBkR/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/19oAAeSw9ERoq3O7/s-l1600.jpg'
const IMG4 = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const ALT1 = 'Funko Pop Star Wars Cobb Vanth #484 Chase Limited Edition from The Mandalorian, new in box, photographed by The Shelf Cartel'
const ALT2 = 'Funko Pop Disney Frozen II Elsa #594 Amazon Exclusive vinyl figure with protector case, photographed by The Shelf Cartel'
const ALT3 = 'Star Wars The Vintage Collection Lando Calrissian 3.75-inch action figure, photographed by The Shelf Cartel'
const ALT4 = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, photographed by The Shelf Cartel'
const DESC = 'Buying collectibles as holiday gifts in Canada? Order early, understand shipping times, check packaging and plan for delays. A practical guide for gift buyers.'
const SEO_TITLE = 'Order Collectibles Early: Holiday Shipping'
const SEO_DESC = 'Buying collectible gifts in Canada this holiday season? Order early, check carrier deadlines, combine shipping and plan for delays. A practical guide.'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why December is the risky month', p: [
    'Every year, parcel volumes climb through November and December. Carriers add extra staff, but delays still happen: weather, busy sorting centres and long cross-border routes all add days. A collectible that normally arrives in a few days can take noticeably longer in the last weeks before the holidays.',
    'The simplest protection is the oldest one: order early. If a gift has to be under the tree on a specific date, treat the date you order as the real deadline, not the date you hope it arrives.'] },
  { h: '2. Check the carrier’s official deadlines', p: [
    'Canada Post, UPS, FedEx, Purolator and the US carriers each publish their own holiday cut-off dates, and they change every year and by service level. We do not repeat them here because they can be updated, so look at the carrier’s own holiday page for the current dates.'], list: [
    'Find the date for your service level (regular parcel, expedited or express).',
    'Remember that shipping to another province or to the USA takes longer than local delivery.',
    'Count business days only: weekends and statutory holidays usually do not move parcels.',
    'Add a buffer of several days on top of the published date.'] },
  { h: '3. Know where the item ships from', p: [
    'Before you order, look at the shipping details on the listing. Items that ship from within Canada usually arrive faster and avoid extra border steps. Items that cross the border can be slowed by customs processing, and you may be charged duties or taxes depending on the route. Ask the seller if you are unsure. At The Shelf Cartel we ship across Canada and the USA and answer shipping questions before you order.'] },
  { h: '4. Combine items to save on shipping', p: [
    'Small collectibles such as Hot Wheels, Matchbox and small figures are light, so one parcel with several items is often cheaper than several parcels. It also means one tracking number to follow instead of three. If you are buying several stocking stuffers, put them in one order and ask the seller whether they can be combined.'] },
  { h: '5. Think about packaging for boxed collectibles', p: [
    'Funko Pop boxes, carded die-cast and boxed action figures are judged by their packaging, so a crushed corner can lower the value of a gift. Look for sellers who describe how they pack and who use a sturdy outer box instead of a thin mailer. If the gift is for a collector who keeps things sealed, mention box condition in your message to the seller.'] },
  { h: '6. Plan for gift wrapping and surprises', p: [
    'Ask the seller to leave prices and packing slips out of the box if the parcel is going straight to the recipient. If you want a surprise, ship to your own address and wrap the gift yourself, so you can also check the item as soon as it arrives. Our short guide on what to check when a collectible arrives takes about ten minutes.'] },
  { h: '7. Use tracking and keep your order number', p: [
    'Follow your tracking number, take a screenshot of the delivery estimate and keep the order number in a safe place. If a parcel looks delayed, contact the seller early, since most platforms have time limits for reporting problems. Early contact also leaves time for a replacement or a different gift.'] },
  { h: '8. Have a backup gift ready', p: [
    'Even with the best planning, something can go late. Choose a small backup gift, such as a Hot Wheels car or a small figure, that can ship quickly or be bought locally, and tell the recipient that the main gift is on its way. For ideas, see our holiday gift guide and our list of stocking stuffers under $20.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1],
    datePublished: '2026-11-19',
    dateModified: '2026-11-19',
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
  const Sec = ({ s }) => (
    <section>
      <h2 style={h2}>{s.h}</h2>
      {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
      {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
    </section>
  )
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: TITLE, item: `${BASE}/blog/${SLUG}` }] }).replace(/</g, '\\u003c') }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Black Friday is days away and the holiday parcel rush has started. If you are buying Funko Pops, Hot Wheels, Star Wars figures or other collectibles as gifts in Canada, a little planning now keeps the gift from arriving after the holidays. Here is a practical shipping checklist.</p>
      <Fig src={IMG1} alt={ALT1} c="Boxed collectibles such as Funko Pop chase figures need sturdy packaging for holiday shipping." eager />
      {sections.slice(0, 3).map(s => <Sec key={s.h} s={s} />)}
      <Fig src={IMG3} alt={ALT3} c="Carded and boxed figures are best shipped in a solid outer box." />
      {sections.slice(3, 6).map(s => <Sec key={s.h} s={s} />)}
      <Fig src={IMG2} alt={ALT2} c="A protector case helps, but the outer box still does most of the work." />
      {sections.slice(6).map(s => <Sec key={s.h} s={s} />)}
      <Fig src={IMG4} alt={ALT4} c="Small die-cast cars make easy backup gifts and combine well in one parcel." />
      <h2 style={h2}>Where to shop</h2>
      <p style={p}>Browse our <Link href="/shop?category=Funko%20Pop" style={lk}>Funko Pop</Link>, <Link href="/shop?category=Hot%20Wheels" style={lk}>Hot Wheels</Link> and <Link href="/shop?category=Star%20Wars" style={lk}>Star Wars</Link> collections, or see everything new in the <Link href="/shop" style={lk}>shop</Link>. We use real photos of the actual item, describe the condition honestly and ship across Canada and the USA.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Our rule of thumb: order early, add a buffer to the carrier date and keep a small backup gift ready.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={lk}>Holiday Gift Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-stocking-stuffers-under-20-canada" style={lk}>Collector Stocking Stuffers Under $20 in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/black-friday-collectibles-guide-canada" style={lk}>Black Friday 2026 for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={lk}>Your Collectible Just Arrived: A 10-Minute Inspection Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/alaskan-de-icer-windshield-winter-guide-canada" style={lk}>Alaskan Windshield De-Icer Winter Guide for Canada</Link></li>
      </ul></nav>
    </article>
  )
}
