import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Advent Calendars for Collectors in Canada: A Buyer\'s Guide to Toy, LEGO and Die-Cast Countdowns'
const DESC = 'How to choose a collector advent calendar in Canada: pick a theme, check what is inside, confirm seals and completeness, compare sold prices, plan shipping and avoid late-order stress.'
const SEO_TITLE = "Advent Calendars for Collectors: Buyer's Guide"
const SEO_DESC = "Choosing a toy, LEGO or die-cast advent calendar in Canada: pick a theme, check what is inside, confirm seals, compare sold prices and order early."
const SLUG = 'advent-calendars-for-collectors-buying-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why collectors buy advent calendars', p: ['An advent calendar turns a themed set of small collectibles into a daily ritual. Collectors like them for the surprise, for the small figures, cars or bricks that are hard to buy one at a time, and for the way a calendar works as a gift. The catch is that you commit to the whole assortment, so it pays to check what you are getting before you buy.'] },
  { h: '2. Pick a theme you will actually enjoy', p: ['Calendars come in many themes: LEGO and other building sets, die-cast cars, mini figures, trading cards, plush and blind-box style surprises. Choose the theme the collector already loves. A calendar full of items outside your interests will feel like filler by day ten.'] },
  { h: '3. Check what is inside before you buy', p: ['Read the item list and look at the photos of the contents, not only the box. Some calendars show every item, while others keep a few surprises hidden. Know how many days it covers, which items repeat and whether any days hold only stickers or paper extras.'], list: [
    'Item list: confirm the number of days and the type of item behind each door.',
    'Scale and size: small pieces are fun to open but easy to lose, so plan where they will go.',
    'Exclusives: an item that appears only in the calendar can be worth more on its own later.'] },
  { h: '4. Sealed, new or opened', p: ['A factory-sealed calendar is the safest buy, because every door is intact. A calendar described as opened or partly used is a different item and should cost less. Ask whether all the pieces are present and whether anything has been built, removed or swapped. Our guide to condition terms explains what sellers usually mean by new, sealed and open box.'] },
  { h: '5. Spotting fakes and bad listings', p: ['Seasonal items attract poor listings. Be careful with prices far below the usual range, stock photos with no photo of the real box, missing brand or licence text and sellers with no history. If a listing will not show the actual box, ask for a photo before you pay. Our guide to spotting fake and bootleg collectibles lists more warning signs.'] },
  { h: '6. Compare sold prices, not asking prices', p: ['Asking prices show what sellers hope for, while sold listings show what buyers actually paid. Search the exact name of the calendar, filter to sold items and look at several recent sales. Seasonal items often cost more close to the date and less after the season, so timing matters. Add shipping to every price you compare.'] },
  { h: '7. Order early and plan the delivery', p: ['An advent calendar is only useful if it arrives before the first day. Order early, choose tracked shipping and keep a few days of margin for delays. Buying from a Canadian seller avoids customs surprises. If you shop from the USA, check duties and the delivery estimate before you pay.'] },
  { h: '8. Buying for a collector', p: ['If you are buying for someone else, check which brands and series they already collect and pick a calendar that adds to the shelf instead of duplicating it. Confirm the age range printed on the box, because small parts are not suitable for young children. A short note that the calendar is a gift helps the seller pack it with care.'] },
  { h: '9. Storing the box and the contents', p: ['Keep the calendar flat and dry until the first day. When you open each door, keep the small items in labelled bags or a divided tray so nothing gets lost. Collectors who plan to keep the box for display should open the doors gently and avoid tearing the cardboard.'] },
  { h: '10. Questions collectors ask', p: ['Is a calendar worth buying after the season? Sometimes, if the price drops and the contents are complete, but check sold prices first. Can I resell the items? Yes, but a complete calendar is usually easier to sell than loose parts. Should I open it early? Only if you do not mind losing the countdown; a sealed calendar keeps its value better than an opened one.'] },
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
      <p style={p}>From LEGO and die-cast to mini figures, here is how to choose, check and buy a collector advent calendar with confidence, so it arrives on time and holds what you expect.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick a theme, confirm what is inside and that the box is sealed, and order early from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
<ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Collectors Holiday Gift Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-stocking-stuffers-under-20-canada" style={{ color: '#e8b820' }}>Collectors Stocking Stuffers Under $20</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/order-collectibles-early-holiday-shipping-canada-guide" style={{ color: '#e8b820' }}>Order Collectibles Early for Holiday Shipping</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={{ color: '#e8b820' }}>Collectible Condition Terms Explained</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible's Value With Sold Listings</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/lego-buying-guide-collectors-canada" style={{ color: '#e8b820' }}>LEGO Buying Guide for Collectors</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/mystery-blind-box-collectibles-buying-guide-canada" style={{ color: '#e8b820' }}>Mystery and Blind Box Collectibles Buying Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={{ color: '#e8b820' }}>What to Check When Your Collectible Arrives</Link></li></ul></nav>
    </article>
  )
}
