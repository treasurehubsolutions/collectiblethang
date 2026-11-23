import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'JDM Hot Wheels Collecting Guide for Canadian Collectors: Japanese Cars, Series and Smart Buying'
const DESC = 'How to collect JDM Hot Wheels in Canada: pick a brand or series, read the card, tell Premium from mainline, check condition, spot fakes, compare sold prices and ship safely.'
const SEO_TITLE = 'JDM Hot Wheels Collecting Guide'
const SEO_DESC = 'Collect JDM Hot Wheels in Canada: pick a brand or series, read the card, check condition and compare sold prices.'
const SLUG = 'jdm-hot-wheels-collecting-guide-canada'
const IMG = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const ALT = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, a JDM die-cast car photographed by The Shelf Cartel'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG, width: 1600, height: 1600, alt: ALT }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG] },
}

const sections = [
  { h: '1. What "JDM" means for Hot Wheels collectors', p: ['JDM stands for Japanese Domestic Market: cars built for buyers in Japan, such as Skylines, Supras, RX-7s, Civics and Imprezas. Hot Wheels has released many of them over the years, and collectors who grew up with import tuner culture, video games and car meets keep asking for more. A JDM collection is easy to start because the theme is clear and every car has a story.'] },
  { h: '2. Choose a focus before you buy', p: ['A focus keeps your budget under control and your shelf consistent. Pick one lane to begin with.'], list: [
    'By brand: Nissan, Toyota, Honda, Mazda, Subaru or Mitsubishi.',
    'By model: every release of one car, such as a Skyline or an RX-7.',
    'By series: Car Culture, Japan Historics, The 90s and other Premium lines.',
    'By colour or era: all white cars, or only 1990s icons.'] },
  { h: '3. Mainline or Premium?', p: ['Mainline cars are the basic blister-pack releases, usually with plastic bases and simpler paint. Premium releases, including many Car Culture sets, normally add metal bases, real-rider rubber tyres and more detailed decoration. Neither is better for everyone: mainline suits a low budget and a big shelf, Premium suits collectors who want detail. Our guide to Hot Wheels Premium vs Mainline explains the difference in more detail.'] },
  { h: '4. Read the card and the casting name', p: ['The card tells you the series, the model name and the release year. Write down the exact casting name, because several versions of one car can exist in different colours and decorations. This is what you will search for when you compare prices, so it saves time later.'] },
  { h: '5. Check condition on carded cars', p: ['Look at the corners of the card for soft or bent edges, the blister for dents and cracks, and any creases or price-sticker marks. Many collectors keep the car sealed, so card condition matters. Ask for sharp photos of the front and the back, not a single flattering angle.'] },
  { h: '6. Check loose cars too', p: ['Loose cars cost less and are great for display. Check the paint for chips, the wheels for wobble and straight axles, and the windows for scratches. A loose car should be described honestly as loose, played with or display only.'] },
  { h: '7. Fakes, repaints and custom cars', p: ['Repainted or custom cars are sometimes sold as originals. Warning signs include fresh paint over rivets, uneven decals, a missing base text and a price far below recent sales. Our guide on how to spot fake and bootleg collectibles lists more checks. If a listing does not show the base of the car, ask for a photo.'] },
  { h: '8. Compare sold prices, not asking prices', p: ['Search the exact casting name, filter to sold listings and compare several recent sales in the same condition. Asking prices only show what sellers hope for. Add shipping to every price so you can see the real total. The sold listings guide shows the full method.'] },
  { h: '9. Display, storage and shipping', p: ['Keep cars out of direct sunlight, which fades card art and yellows plastic. Protector cases or a shelf with a back panel keep dust off. When you buy from the USA, confirm duties, taxes and delivery time first. Small die-cast cars ship well, and combining several cars in one parcel can lower the shipping cost per car.'] },
  { h: '10. Questions collectors ask', p: ['Should I open my JDM cars? That is a personal choice: open them if you want to display the car, keep them sealed if you care about card condition. See our guide on keeping collectibles in the box or opening them. Are JDM cars a good investment? Prices move with demand and condition, so buy what you enjoy and treat any resale value as a bonus.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG],
    datePublished: '2026-11-23',
    dateModified: '2026-11-23',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const lnk = { color: '#e8b820' }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: TITLE, item: `${BASE}/blog/${SLUG}` }] }) }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Skylines, Supras, Imprezas and RX-7s: here is how to pick a focus, read the card, check condition and compare real sold prices before you build a JDM Hot Wheels collection in Canada.</p>
      <img src={IMG} alt={ALT} width={1600} height={1600} loading="eager" style={{ width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }} />
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Hot Wheels in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop?category=Hot%20Wheels%20Premium" style={lnk}>Hot Wheels Premium</Link> and <Link href="/shop?category=Hot%20Wheels" style={lnk}>Hot Wheels</Link> selection, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one Japanese brand, write down the exact casting name and compare recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
<ul style={{ ...p, paddingLeft: 22 }}>
<li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-premium-vs-mainline" style={lnk}>Hot Wheels Premium vs Mainline</Link></li>
<li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-car-culture-series-a-collectionner" style={lnk}>Hot Wheels Car Culture Series</Link></li>
<li style={{ marginBottom: 6 }}><Link href="/blog/guide-debuter-collection-hot-wheels" style={lnk}>How to Start a Hot Wheels Collection</Link></li>
<li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-treasure-hunt-guide" style={lnk}>Hot Wheels Treasure Hunt Guide</Link></li>
<li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={lnk}>How to Spot Fake and Bootleg Collectibles</Link></li>
<li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={lnk}>How to Check a Collectible Value With Sold Listings</Link></li>
<li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={lnk}>Keep Collectibles in the Box or Open Them?</Link></li>
<li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={lnk}>Die-Cast and Funko Storage and Display Guide</Link></li>
</ul></nav>
    </article>
  )
}
