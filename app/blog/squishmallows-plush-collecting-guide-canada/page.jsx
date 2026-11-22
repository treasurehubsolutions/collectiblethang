import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Squishmallows Plush Collecting Guide for Canadian Collectors'
const DESC = 'A practical guide to collecting Squishmallows plush in Canada: sizes, tags, condition checks, fakes, cleaning, sold prices, storage and shipping tips.'
const SEO_TITLE = "Squishmallows Collecting Guide for Canada"
const SEO_DESC = "Collect Squishmallows in Canada: sizes, tags, condition checks, fakes, cleaning, storage and what to check before you buy."
const SLUG = 'squishmallows-plush-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why people collect Squishmallows', p: ['Squishmallows are soft plush with a lot of characters, so collectors usually pick a theme: one animal, one character name, a holiday, a colour or a favourite size. A clear focus keeps the collection tidy and helps you spot a fair price. Many buyers also collect them simply because they are fun to display and to hug.'] },
  { h: '2. Pick a focus before you buy', p: ['Write down the exact character names, sizes and any season or edition you want. Squishmallows with similar looks and names are easy to mix up, so a short list prevents expensive mistakes.'] },
  { h: '3. Sizes and how they change the price', p: ['The same character can come in several sizes, and a larger plush is not the same item as a small clip-on or a mid-size one. Always check the size in the listing and compare sold prices for that exact size only.'] },
  { h: '4. Read the tags', p: ['Tags are a big part of a collectible plush. Look for the sewn-in tag with the character name and the paper hang tag, and check that both are present and readable. A missing hang tag usually lowers the price, and a faded or cut tag should be mentioned by the seller. Our condition terms guide explains common wording.'] },
  { h: '5. Check the condition', p: ['Look at the fabric for pilling, stains, fading and pet hair, check the stitching and the eyes and ask about smoke or pet smells. Ask for clear daylight photos of the front, back and tags. A clean plush with both tags is the easiest to resell later.'] },
  { h: '6. New with tags or used', p: ['New with tags costs more than used and is the safer choice for gifts and for collectors who care about condition. Used plush can be a good deal if it is clean and the seller shows it honestly. Our guide on keeping collectibles in the box or opening them covers the trade-off.'] },
  { h: '7. Watch for fakes and look-alikes', p: ['Look-alike plush exist. Warning signs include a price far below normal, blurry photos, a missing or odd-looking tag, rough stitching, strange fabric feel and a character name that does not match the picture. Our guide on spotting fake and bootleg collectibles has a full checklist.'] },
  { h: '8. Check sold prices first', p: ['Asking prices can be far from what a plush really sells for. Search the exact character name and size, filter to sold listings and compare several recent sales in the same condition. Our sold-listings guide shows how to read them.'] },
  { h: '9. Cleaning and care', p: ['Follow the care instructions on the tag when you clean a plush. Surface cleaning is usually gentler than a full wash, and drying away from heat helps protect the fabric. If a plush is a collectible you want to keep tagged, avoid cleaning the tag.'] },
  { h: '10. Shipping and packing', p: ['Plush are light but can be crushed or dirtied in transit. Choose a seller who bags the item, uses a sturdy outer package and ships with tracking, and who describes tags and condition honestly. We ship across Canada and the USA.'] },
  { h: '11. Store and display your plush', p: ['Keep plush out of direct sunlight, which fades fabric, and away from damp, pets and smoke. Shelves, display cubes and clear bins keep them clean, and spacing them out stops tags from bending. Our storage and display guide has more ideas.'] },
  { h: '12. Questions collectors ask', p: ['Are Squishmallows a good gift? Yes, a clean plush with its tags is an easy gift, as long as you check the size. Should I remove the tags? If you plan to resell or care about value, leave them on. How do I find a specific character? Search the exact name and size, check sold listings and set a maximum price.'] }
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
      <p style={p}>Squishmallows are soft, collectible plush that many people hunt by character name. This guide covers sizes, tags, condition, fakes, cleaning, sold prices and storage so you can build a collection in Canada with confidence.</p>
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
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: write down the exact character names and sizes you want, set a maximum delivered price and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/barbie-doll-collecting-guide-canada" style={a}>Barbie Doll Collecting Guide for Canadian Collectors</Link></li>
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
