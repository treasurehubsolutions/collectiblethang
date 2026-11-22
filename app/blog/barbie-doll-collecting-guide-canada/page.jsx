import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Barbie Doll Collecting Guide for Canadian Collectors'
const DESC = 'A practical guide to collecting Barbie dolls in Canada: boxed vs loose, outfits and accessories, condition checks, fakes, sold prices, storage and shipping tips.'
const SEO_TITLE = "Barbie Doll Collecting Guide for Canada"
const SEO_DESC = "Collect Barbie dolls in Canada: boxed or loose, outfits and accessories, condition checks, fakes, storage and what to check before you buy."
const SLUG = 'barbie-doll-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why Barbie dolls attract collectors', p: ['Barbie has been around for decades, so there is a huge range to collect: classic fashion dolls, themed and career dolls, holiday editions, collaboration dolls and playline favourites. Some collectors focus on one era or theme, others simply buy what they love. A clear focus makes it much easier to stay on budget.'] },
  { h: '2. Pick a focus before you buy', p: ['Decide whether you want one theme, one doll style, one holiday series or dolls from a particular period. A focus keeps your shelf coherent and helps you recognise a good deal when you see it. Write down the exact doll names you are hunting.'] },
  { h: '3. Boxed, sealed or loose', p: ['Boxed dolls, especially ones that were never removed from the packaging, usually keep their value best if the box is clean and the window is intact. Loose dolls are cheaper and great for display or play. Our guide on keeping collectibles in the box or opening them can help you decide.'] },
  { h: '4. Outfits, shoes and accessories', p: ['Much of a Barbie\'s appeal is in the small pieces: shoes, jewellery, purses, hair accessories and stands. A loose doll is only complete if it has everything that came with it. Compare the listing with photos of the original packaging and ask the seller what is included.'] },
  { h: '5. Check the doll\'s condition', p: ['Look at the face paint, hair, hands, joints and body. Common issues include messy or cut hair, ink or marker stains, loose limbs, tangled or frizzy hair, worn paint and smoke or pet smells. Ask for clear daylight photos from the front, back and close-up of the face. Our condition terms guide explains the usual wording.'] },
  { h: '6. Check the box', p: ['For boxed dolls, look at corner wear, creases, tape marks, window dents, sun fading and price stickers. A box in poor shape lowers the price even if the doll is fine. If the listing says sealed, check that the seal looks original.'] },
  { h: '7. Watch for fakes and mixed dolls', p: ['Look-alike dolls and mismatched parts exist. Warning signs include prices far below normal, vague titles, blurry photos, odd box printing and a doll that does not match the item name. Dolls sold as loose lots may mix bodies, heads and clothes from different lines. Our guide on spotting fake and bootleg collectibles has a full checklist.'] },
  { h: '8. Check sold prices first', p: ['Asking prices can be far from what dolls really sell for. Search the exact doll name, filter to sold listings and compare several recent sales for the same condition: boxed, loose or sealed. Our sold-listings guide shows how to read them.'] },
  { h: '9. Shipping and packing', p: ['Boxed dolls are easy to crush and the window can crack, so good packing matters. Choose a seller who uses padding, a sturdy outer box and tracking, and who describes the box honestly. We ship across Canada and the USA.'] },
  { h: '10. Store and display your dolls', p: ['Keep dolls out of direct sunlight, which fades boxes and dulls hair and fabric, and away from heat and humidity. Use stands, display cases or shelves with some space between dolls, and keep loose accessories in labelled bags. Our storage and display guide has more ideas.'] },
  { h: '11. Build a collection on a budget', p: ['Set a maximum delivered price for each doll, include shipping in the total and be ready to wait for the right listing. Buying a few clean dolls from a theme you love is better than buying many that you do not care about.'] },
  { h: '12. Questions collectors ask', p: ['Are dolls a good gift? Yes, a boxed doll in good condition with a clear photo is easy to give. Should I open the box? If you plan to resell or want to keep value, leave it closed; if you simply enjoy the doll, opening is fine. How do I find a specific doll? Search the exact name, check sold listings and set a maximum price.'] }
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
      <p style={p}>Barbie is one of the most recognisable names in collecting. This guide covers boxed and loose dolls, accessories, condition, fakes, sold prices and storage so you can build a collection in Canada with confidence.</p>
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
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: write down the exact doll names you want, set a maximum delivered price and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/calico-critters-playmobil-collecting-guide-canada" style={a}>Calico Critters and Playmobil Collecting Guide</Link></li>
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
