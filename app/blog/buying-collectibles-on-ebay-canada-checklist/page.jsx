import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Buying Collectibles on eBay Canada: An 8-Step Buyer’s Checklist'
const DESC = 'An 8-step checklist for buying Hot Wheels, Funko Pop and figures on eBay in Canada: exact searches, sold prices, photos, seller feedback, shipping costs and what to do on arrival.'
const SLUG = 'buying-collectibles-on-ebay-canada-checklist'
const IMG1 = 'https://i.ebayimg.com/images/g/vigAAeSw8cpoM3n0/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/RAsAAeSwWIxqje3T/s-l1600.jpg'
const ALT1 = 'Hot Wheels Treasure Hunt 1978 Dodge Li’L Red Express Truck in green, photographed by The Shelf Cartel'
const ALT2 = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, photographed by The Shelf Cartel'
const ALT3 = 'Funko Pop Television He-Man #991 Masters of the Universe vinyl figure, new and sealed, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Search with the exact name', p: ['The more specific your search, the fewer surprises. Use the brand, the line, the character or casting name, the year if you know it, and the packaging (carded, boxed, loose). Save the searches you use often so eBay can tell you when new matching listings appear. Broad searches like “old toys” bring noise; precise ones bring the piece you want.'] },
  { h: '2. Check sold prices, not asking prices', p: ['Asking prices show what sellers hope for. Sold listings show what buyers actually paid. Filter your search to sold items and compare the same series, the same condition and the same packaging. If a listing is priced well above recent sales, you can wait or make an offer. If it is at or below them, it may be a fair deal.'] },
  { h: '3. Read the photos before the title', p: ['Titles are written to attract clicks. Photos tell the truth. Look for photos of the real item, not a stock image, and zoom on the corners of the card or box, the blister, the window and any creases. If the photos are blurry or missing an angle, ask the seller for more before you buy. For carded and boxed collectibles, our guides on Hot Wheels Premium vs mainline and on Treasure Hunts show what to check.'] },
  { h: '4. Read the whole description', p: ['Condition notes, missing accessories, repaired parts and “sold as is” warnings are usually in the description, not the title. Check that the item matches the line and the year you want, and that accessories are included. A short description with no condition details is a reason to ask questions.'] },
  { h: '5. Check the seller', p: ['Open the seller profile and read the feedback, especially the recent comments about packaging and shipping speed. A seller with real photos, clear descriptions and a clear return policy is easier to trust. Be careful with brand-new accounts offering sought-after items far below the market price.'] },
  { h: '6. Understand shipping and total cost', p: ['The item price is only part of the cost. Check the shipping cost, the delivery estimate and whether duties or taxes may apply when the seller is outside Canada. Sellers who ship within Canada often make the total clearer. If you want several items, ask whether the seller can combine them in one parcel.'] },
  { h: '7. Buy It Now, auction or offer?', p: ['Buy It Now is simple and fast. Auctions can be good for items you are patient about, but set a maximum price before you start and stick to it, so the excitement of the last minutes does not decide for you. When a listing accepts offers, a polite, realistic offer based on recent sold prices often works better than a very low one.'] },
  { h: '8. Keep proof and inspect on arrival', p: ['Save the listing photos and the description until the item arrives. When the parcel comes, check it right away against the listing. If something is not as described, contact the seller first with clear photos and use eBay’s return or help process if needed. Acting quickly makes any problem easier to solve.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2, IMG3],
    datePublished: '2026-11-13',
    dateModified: '2026-11-13',
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
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>eBay is where many collectors find the pieces they cannot find in stores, but a great find and a bad surprise can look the same at first glance. This checklist helps you buy Hot Wheels, Funko Pop and figures on eBay in Canada with more confidence.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A Hot Wheels Treasure Hunt: know exactly what you are looking at before you buy.</figcaption>
      </figure>
      {sections.slice(0, 3).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>Check the series and the condition of the car and card in the photos.</figcaption>
      </figure>
      {sections.slice(3).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A sealed Funko Pop: the box is part of the value.</figcaption>
      </figure>
      <h2 style={h2}>Shop our collectibles</h2>
      <p style={p}>Browse <Link href="/shop?category=Hot%20Wheels" style={a}>Hot Wheels</Link>, <Link href="/shop?category=Funko%20Pop" style={a}>Funko Pop</Link>, <Link href="/shop?category=Star%20Wars" style={a}>Star Wars</Link> and <Link href="/shop?category=Marvel" style={a}>Marvel</Link> at The Shelf Cartel, with honest condition and shipping across Canada and the USA. You can also find us on eBay as collectiblethang. See the <Link href="/shop" style={a}>full shop</Link> for the current selection.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one item you want, check its recent sold prices and read the seller’s feedback before you bid or buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={a}>Holiday Gift Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/black-friday-collectibles-guide-canada" style={a}>Black Friday 2026 for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-premium-vs-mainline" style={a}>Hot Wheels Premium vs Mainline: How to Tell the Difference</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-treasure-hunt-guide" style={a}>Hot Wheels Treasure Hunts: How to Spot One</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/ou-acheter-funko-pop-rares-canada" style={a}>Where to Buy Rare Funko Pop Figures in Canada</Link></li>
      </ul></nav>
    </article>
  )
}
