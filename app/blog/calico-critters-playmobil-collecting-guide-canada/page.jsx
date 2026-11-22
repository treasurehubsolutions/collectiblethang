import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Calico Critters and Playmobil Collecting Guide for Canadian Collectors'
const DESC = 'A practical guide to collecting Calico Critters and Playmobil in Canada: complete sets, missing pieces, boxes, condition checks, fakes, storage and shipping tips.'
const SEO_TITLE = "Calico Critters and Playmobil Collecting Guide"
const SEO_DESC = "Collect Calico Critters and Playmobil in Canada: complete sets, missing pieces, boxes, condition checks, storage and what to check before you buy."
const SLUG = 'calico-critters-playmobil-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why small-scale play sets attract collectors', p: ['Calico Critters and Playmobil are both toy lines built around tiny figures, furniture and accessories. Many collectors start by buying for a child, then keep going because the sets are detailed, colourful and easy to display. Both brands also have retired sets that are hard to find, which is where the collecting side begins.'] },
  { h: '2. Know what a set should include', p: ['Most of the value in these toys is in the small parts. A Calico Critters house needs its furniture, and a Playmobil scene needs its figures, tools and accessories. Before you buy, find the set number or name and compare the listing with the official contents. If the seller does not list what is included, ask.'] },
  { h: '3. Complete, incomplete and mixed lots', p: ['A complete set is worth more than the same pieces sold loose. Mixed lots can be good value if you want parts, but they rarely include every piece of any one set. Read the title and description carefully: words such as lot, assorted, parts or incomplete tell you what you are really getting.'] },
  { h: '4. Boxed, sealed or loose', p: ['Sealed or boxed sets keep their value best, especially for retired items, as long as the box is clean and the seal has not been tampered with. Loose sets are cheaper and perfect for play or display. Our guide on keeping collectibles in the box or opening them can help you decide, and our condition terms guide explains the common abbreviations.'] },
  { h: '5. Check the condition closely', p: ['With soft or flocked Calico Critters figures, look for stains, matted fur, loose or missing clothing and smoke or pet smells. With Playmobil, look for sun-faded plastic, yellowing, cracked joints, loose hands and worn stickers or printing. Ask for clear photos in daylight and of any small flaws. Our arrival checklist shows what to inspect when the parcel arrives.'] },
  { h: '6. Keep the right pieces together', p: ['Accessories are easy to mix up between sets. Small items like food, tools, bottles and furniture can belong to a different set than the figures. When a seller sells a complete set, ask which set number the pieces match, and keep your own sets in labelled bags so they stay together.'] },
  { h: '7. Watch for fakes and knock-offs', p: ['Both lines have look-alike products. Prices far below the market, vague listings, blurry photos and packaging with odd printing are warning signs. Compare the logo, the box printing and the figure quality with an official set. Our guide on spotting fake and bootleg collectibles has a full checklist.'] },
  { h: '8. Check sold prices before you pay', p: ['Asking prices can be much higher than what a set really sells for. Search the exact set name or number, filter to sold listings and compare several recent sales, including condition and whether the set was complete. Our sold-listings guide shows how to read them.'] },
  { h: '9. Shipping and protection', p: ['Boxed sets are bulky and light, so they can be crushed in transit. Choose a seller who packs with plenty of padding, uses tracking and describes the box condition honestly. We ship across Canada and the USA.'] },
  { h: '10. Store and display your sets', p: ['Keep plastic and fabric out of direct sun, which fades colours and makes plastic brittle, and away from humidity. Zip bags keep small accessories together, and clear boxes or shelves with a simple background show scenes well. Our storage and display guide has more ideas.'] },
  { h: '11. Mixing brands and building a theme', p: ['Many collectors focus on one theme, such as a Calico Critters family or a Playmobil city, farm or knight set, rather than buying everything. A clear theme makes it easier to set a budget and spot a missing piece. Check scale and style before mixing lines.'] },
  { h: '12. Questions collectors ask', p: ['Are these good gifts? Yes, complete sets with a clear box are easy to give. Should I keep the box? If you want to resell or display, a clean box adds value, but opening is fine if you just enjoy it. How do I find a retired set? Search the exact name or number, check sold listings and set a maximum delivered price.'] }
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    datePublished: '2026-11-21',
    dateModified: '2026-11-21',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const a = { color: '#e8b820' }
  const fig = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: TITLE, item: `${BASE}/blog/${SLUG}` }] }) }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Calico Critters and Playmobil are a friendly, affordable corner of the hobby. This guide covers complete sets, missing pieces, boxes, condition, fakes and storage so you can build a collection in Canada with confidence.</p>
      {sections.slice(0, 6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      {sections.slice(6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <h2 style={h2}>Shop collectibles in Canada</h2>
      <p style={p}>Browse toys and collectibles at The Shelf Cartel, with honest condition and shipping across Canada and the USA. See the <Link href="/shop" style={a}>full shop</Link> for the current selection.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: write down the exact set names or numbers you want, set a maximum delivered price and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/little-people-collector-sets-guide-canada" style={a}>Little People Collector Sets Guide for Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={a}>Keep Collectibles in the Box or Open Them?</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={a}>Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={a}>How to Spot Fake and Bootleg Collectibles</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={a}>How to Check What a Collectible Is Really Worth</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={a}>Your Collectible Just Arrived: A 10-Minute Inspection Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={a}>Die-Cast and Funko Pop Storage and Display Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/lego-buying-guide-collectors-canada" style={a}>LEGO Buying Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={a}>Holiday Gift Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/cyber-monday-collectibles-online-shopping-guide-canada" style={a}>Cyber Monday 2026 for Collectors in Canada</Link></li>
      </ul></nav>
    </article>
  )
}
