import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Mystery Boxes and Blind Bags: How Collectors in Canada Can Buy Smart'
const DESC = 'Blind boxes, mystery minis and chase figures are driving the collectibles boom. Learn how to read odds, spot sealed-box tricks, compare sold prices and decide between a blind pull and buying the exact piece you want.'
const SEO_TITLE = 'Mystery Boxes and Blind Bags: Buy Smart in Canada'
const SEO_DESC = 'Blind box and mystery collectible tips for Canada: read the odds, check the seal, compare sold prices and buy the exact piece when it makes sense.'
const SLUG = 'mystery-blind-box-collectibles-buying-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/RAsAAeSwWIxqje3T/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/afAAAeSwxgFoB~U8/s-l1600.jpg'
const ALT1 = 'Funko Pop Television He-Man #991 Masters of the Universe vinyl figure, new and sealed, photographed by The Shelf Cartel'
const ALT2 = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, photographed by The Shelf Cartel'
const ALT3 = 'NECA TMNT The Last Ronin Lost Years Nightwatcher Donatello action figure, photographed by The Shelf Cartel'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why mystery collectibles are everywhere', p: ['Industry reports on the toy market keep pointing to the same story: collectibles and adult fans are driving growth, and “surprise” formats such as blind boxes, mystery bags and chase variants sit at the heart of it. The appeal is simple. You do not know what you will get, so every opening feels like a small event. For a collector, that excitement is fun, but it is also exactly where overspending starts.'] },
  { h: '2. Decide what you actually want first', p: ['Before you buy a single blind box, write down what you are after: a full set, one favourite character, or just the fun of opening. If you want one specific piece, a blind purchase is a gamble and buying that exact piece is usually cheaper than chasing it through many boxes. If you enjoy the opening and are happy with any result, a blind box is a fair purchase.'] },
  { h: '3. Read the odds and the checklist', p: ['Many mystery lines list their figures and the type of rare or chase variant on the box, the card or the brand’s own page. Read it. Note how many regular figures there are, whether a chase exists and what makes it different. Never assume a chase is in every case; a variant that exists is not a variant you are guaranteed to pull.'] },
  { h: '4. Compare a blind pull with buying the piece', p: ['Add up what you would spend if you kept buying boxes until you hit the piece you want, then compare it with the sold price of that exact piece. Our guide on checking a collectible’s value with sold listings shows how to search the exact name and read recent sales. Often the straight purchase wins on cost and on time.'] },
  { h: '5. Check the seal and the packaging', p: ['A mystery item is only worth buying if the box or bag is truly factory sealed. Look for torn or reglued flaps, loose stickers, crushed corners and plastic that looks re-wrapped. Photos of every side of the box are a good sign; a single blurry photo is not. For a refresher on condition language, see our MIB, MOC and NRFB guide.'] },
  { h: '6. Beware of “weighed” and “felt” claims', p: ['Some sellers claim they can tell what is inside by weight, feel or a mark on the box. Treat that with caution. If a listing promises a specific chase inside a sealed mystery item, ask how the seller knows. A box that is described honestly as unknown is safer than one that promises a result.'] },
  { h: '7. Sealed mystery, opened single or full set', p: ['A sealed mystery box suits fans who enjoy the surprise. An opened single lets you see exactly what you get and usually costs less than a sealed rare. A full set saves you from duplicates. Match the format to your goal, and compare the delivered price of each option, not only the item price.'] },
  { h: '8. Duplicates are part of the game', p: ['If you open several boxes, you will likely end up with duplicates. Plan for them: swap with other collectors, keep a few for display and sell the extras with clear photos. Keeping a simple list of what you own makes it easy to avoid buying the same piece twice. Our guide on cataloguing your collection can help.'] },
  { h: '9. Spot fakes in the mystery category', p: ['Popular lines attract bootlegs. Check the printing on the box, the logos, the barcode and the figure’s paint and finish. Prices far below the usual range are a warning sign. Our checklist for spotting fake and bootleg collectibles walks through the main checks before you pay.'] },
  { h: '10. Count shipping and plan for the holidays', p: ['Small boxes can still be costly to ship, so compare the delivered total to your postal code and look for combined shipping when you buy several pieces. Ordering for a gift? Mystery items sell quickly in the holiday weeks, so order early and leave a buffer. See our holiday shipping guide for timing.'] },
  { h: '11. Set a budget and a stop rule', p: ['Choose a monthly amount and a maximum number of boxes before you start, and stop when you reach either one. Write each purchase down with its price. A simple note keeps a fun hobby from turning into a surprise on your statement.'] },
  { h: '12. Questions collectors ask', p: ['Is a blind box a good investment? Not as a rule: values change and many pieces sell for less than the price of the box, so buy what you enjoy. Should I buy a sealed case? Only if you want the full range and have the budget for duplicates. Is it better to buy the chase directly? If you want that exact piece, usually yes, once you compare the delivered price with recent sold listings.'] }
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2, IMG3],
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
      <p style={p}>Blind boxes, mystery bags and chase variants are one of the hottest corners of the collectibles world this holiday season. They are fun, but they reward a clear plan. Here is how collectors in Canada can enjoy the surprise without overpaying.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A sealed Funko Pop from our shop: the box is part of the value.</figcaption>
      </figure>
      {sections.slice(0, 4).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>Buying the exact piece lets you check the series, car and card before you pay.</figcaption>
      </figure>
      {sections.slice(4, 8).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A single figure with every accessory shown in the photos: no surprises on arrival.</figcaption>
      </figure>
      {sections.slice(8).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <h2 style={h2}>Shop collectibles in Canada</h2>
      <p style={p}>Prefer to know exactly what you get? Browse <Link href="/shop?category=Funko%20Pop" style={a}>Funko Pop</Link>, <Link href="/shop?category=Hot%20Wheels" style={a}>Hot Wheels</Link>, <Link href="/shop?category=Star%20Wars" style={a}>Star Wars</Link> and <Link href="/shop?category=Marvel" style={a}>Marvel</Link> at The Shelf Cartel, with honest condition and shipping across Canada and the USA. See the <Link href="/shop" style={a}>full shop</Link> for the current selection.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: decide whether you want the surprise or the exact piece, set a budget and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/funko-pop-chase-exclusives-holiday-guide-canada" style={a}>Funko Pop Chase and Exclusives: How to Read the Box</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={a}>How to Check What a Collectible Is Really Worth</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={a}>How to Spot Fake and Bootleg Collectibles</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={a}>Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={a}>Keep It in the Box or Open It?</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/kidult-collectors-starter-guide-canada" style={a}>Kidult Collecting in Canada: Start on a Budget</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/catalogue-and-insure-your-collection-canada-guide" style={a}>How to Catalogue and Insure Your Collection</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/order-collectibles-early-holiday-shipping-canada-guide" style={a}>Order Collectibles Early: A Holiday Shipping Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-stocking-stuffers-under-20-canada" style={a}>Collector Stocking Stuffers Under $20</Link></li>
      </ul></nav>
    </article>
  )
}
