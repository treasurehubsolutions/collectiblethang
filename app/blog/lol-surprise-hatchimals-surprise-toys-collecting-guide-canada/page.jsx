import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "LOL Surprise, Hatchimals and Surprise Toys in Canada: A Collector Buying Guide"
const DESC = "How to buy and collect LOL Surprise, Hatchimals and other surprise toys in Canada: sealed vs opened, checking contents, spotting fakes, comparing sold prices and shipping safely."
const SEO_TITLE = "Surprise Toys Collecting Guide"
const SEO_DESC = "Collecting LOL Surprise, Hatchimals and surprise toys in Canada: sealed vs opened, contents, fakes and sold prices."
const SLUG = 'lol-surprise-hatchimals-surprise-toys-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why surprise toys are collectible', p: ['LOL Surprise dolls, Hatchimals and other surprise toys are built around the reveal: layers of packaging, a hidden character and small accessories. Collectors enjoy completing series, finding rarer characters and displaying sealed or opened pieces. Because the contents are small and easy to lose, condition and completeness matter a great deal.'] },
  { h: '2. Choose a focus before you buy', p: ['A clear focus keeps prices easier to compare and your shelf consistent.'], list: [
    'Brand: LOL Surprise, Hatchimals or another surprise line.',
    'Series: one wave, one theme or one character family.',
    'State: sealed, opened but complete, or loose characters only.'] },
  { h: '3. Sealed or opened: know what you are buying', p: ['A sealed ball, capsule or egg keeps the surprise but you cannot confirm what is inside, and some lines have packaging that hints at the character. An opened item can be checked piece by piece. Ask the seller to state clearly whether the item is sealed, opened, tested and complete, and compare only like with like.'] },
  { h: '4. Check the contents and accessories', p: ['Small parts such as shoes, bottles, stickers, outfits and accessories are often missing from used lots. Ask for a photo of every piece and a count, and check the character for stains, marker, chewed edges or faded colour. For electronic Hatchimals, ask whether they power on, respond and hatch or move as intended.'] },
  { h: '5. Batteries, electronics and cleanliness', p: ['Battery corrosion is a common problem on older electronic toys. Ask whether the battery compartment is clean and whether the seller has tested the toy. Do not accept a vague wording such as untested without understanding that the toy may not work.'] },
  { h: '6. Duplicates, mixed lots and rare characters', p: ['Large mixed lots can be good value if you want many pieces, but they often contain duplicates and common characters. Rarer characters can sell for more, so look at photos and names rather than the headline. Search the exact character name and series to see what it really sells for.'] },
  { h: '7. Spotting fakes and look-alikes', p: ['Imitations of popular surprise toys are common. Warning signs include very low prices, unusual packaging, blurry printing, strange smells, rough moulding and no brand marks. Ask for photos of the markings and the packaging. Our fake and bootleg guide lists more warning signs.'] },
  { h: '8. Compare sold prices, not asking prices', p: ['Search the exact name, series and condition, filter to sold listings and compare several recent sales. Asking prices only show what sellers hope for. Add shipping to every price, because bulky boxes and lots can cost more to send than expected.'] },
  { h: '9. Shipping, customs, cleaning and storage', p: ['Choose tracked shipping and ask how the seller packs small parts so nothing gets lost. If you buy from the USA, confirm duties, taxes and delivery time first. At home, wipe plastic gently with a soft damp cloth and dry it well, and keep fabric and hair away from harsh cleaners. Store pieces in small zip bags or compartment boxes away from direct sun, and remove batteries from electronic toys you will not use for a while.'] },
  { h: '10. Questions collectors ask', p: ['Should I open a surprise toy? Sealed pieces keep the mystery and can matter to collectors, while opened pieces are easier to display, so choose what you enjoy. Are surprise toys a good investment? Prices move with demand and condition, so collect what you like and treat any resale value as a bonus.'] },
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
      <p style={p}>Sealed or opened, complete or not, real or fake: here is how to check contents, avoid look-alikes and compare real sold prices before you buy LOL Surprise, Hatchimals and other surprise toys in Canada.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one line or series, check the contents and condition, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
<ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/barbie-doll-collecting-guide-canada" style={{ color: '#e8b820' }}>Barbie Doll Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/retro-80s-90s-nostalgia-toys-collecting-guide-canada" style={{ color: '#e8b820' }}>Retro 80s and 90s Nostalgia Toys Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/mystery-blind-box-collectibles-buying-guide-canada" style={{ color: '#e8b820' }}>Mystery Blind Box Buying Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={{ color: '#e8b820' }}>Collectible Condition Terms Explained</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible Value With Sold Listings</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={{ color: '#e8b820' }}>Keep Collectibles in the Box or Open Them?</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={{ color: '#e8b820' }}>What to Check When Your Collectible Arrives</Link></li></ul></nav>
    </article>
  )
}
