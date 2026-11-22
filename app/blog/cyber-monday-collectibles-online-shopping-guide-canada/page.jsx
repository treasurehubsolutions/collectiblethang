import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Cyber Monday 2026 for Collectors in Canada: An Online Shopping Checklist'
const DESC = 'Cyber Monday is November 30, 2026. An online shopping checklist for collectors in Canada: compare sold prices, read listings closely, check shipping and returns, and avoid fake deals on Hot Wheels, Funko Pop and action figures.'
const SEO_TITLE = "Cyber Monday 2026 for Collectors in Canada"
const SEO_DESC = "Cyber Monday collector tips for Canada: compare sold prices, read listings, check shipping and returns, and avoid fake deals."
const SLUG = 'cyber-monday-collectibles-online-shopping-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/afAAAeSwxgFoB~U8/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/RAsAAeSwWIxqje3T/s-l1600.jpg'
const ALT1 = 'NECA TMNT The Last Ronin Lost Years Nightwatcher Donatello action figure, photographed by The Shelf Cartel'
const ALT2 = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, photographed by The Shelf Cartel'
const ALT3 = 'Funko Pop Television He-Man #991 Masters of the Universe vinyl figure, new and sealed, photographed by The Shelf Cartel'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG1] },
}

const sections = [
  { h: '1. What Cyber Monday means for collectors', p: ['Cyber Monday falls on Monday, November 30, 2026, three days after Black Friday. It is an online-only shopping day, which suits collectors because most of our hobby already happens on screens: shops, marketplaces and collector groups. The risk is the same as always, buying fast and paying too much, so a short checklist helps.'] },
  { h: '2. Make your list before the day starts', p: ['Write down the exact pieces you want: line, series, character, condition and a maximum price. Having the list on your phone lets you ignore everything else. A focused list also helps you spot a real deal in seconds instead of scrolling for an hour.'] },
  { h: '3. Compare against sold prices', p: ['A discount is only meaningful if the original price was fair. Search the exact name, filter to sold listings and read several recent sales. If the Cyber Monday price is at or below what the item really sold for, it is worth buying. Our guide on checking a collectible’s value with sold listings shows how.'] },
  { h: '4. Read the whole listing, not just the headline', p: ['Titles can hide details. Scroll through every photo, read the description and look for words like loose, opened, damaged, reproduction or custom. For boxed and carded pieces, ask for clear photos of corners, windows and blisters. Our condition terms guide explains MIB, MOC and the other abbreviations.'] },
  { h: '5. Add up shipping and taxes', p: ['A low item price can become an average one after shipping. Compare the total you would pay delivered to your postal code, and check whether the seller offers combined shipping when you buy several pieces. Buying from a Canadian seller can avoid customs surprises, and we ship across Canada and the USA.'] },
  { h: '6. Know the return policy before you pay', p: ['Return rules differ from one seller to the next. Read them before you click, keep the original packaging until you have inspected the item and photograph the parcel when it arrives. Our arrival checklist lists what to look at in the first ten minutes.'] },
  { h: '7. Watch for fake deals and fake sellers', p: ['Countdown timers, “only 1 left” banners and unknown sellers with prices far below market are warning signs. Look for real photos of the actual item, a clear description and a seller history you can verify. Our guide on spotting fake and bootleg collectibles has a full list of checks.'] },
  { h: '8. Pay safely and keep records', p: ['Use a payment method that offers buyer protection and avoid sending money outside the marketplace or checkout. Keep order emails, listing screenshots and tracking numbers in one folder. If something goes wrong, those records make a claim much easier.'] },
  { h: '9. Hot Wheels, Funko Pop and action figures', p: ['For Hot Wheels, check the series, the casting and the card. For Funko Pop, look at the box corners and the window. For action figures, confirm every accessory and tight joints. Match each detail to the listing before you buy.'] },
  { h: '10. Plan for holiday shipping', p: ['Orders placed on Cyber Monday ship into the busiest weeks for carriers. If a piece is a gift, order early, choose tracking and leave a buffer. Our guide on ordering collectibles early for the holidays covers the timing.'] },
  { h: '11. Set a budget and a stop rule', p: ['Choose a total spend and a maximum number of pieces before you start. When you reach either one, stop. A simple note with each purchase and its price keeps the month from ending with a surprise on your statement.'] },
  { h: '12. Questions collectors ask', p: ['Is Cyber Monday better than Black Friday for collectibles? Not necessarily, so compare both against sold prices rather than trusting the date. Should I buy sealed or open? Sealed suits display and resale, open is cheaper and lets you handle the piece. Can I wait until Boxing Day? Sometimes, but sought-after pieces can sell out, so check your list every few days.'] }
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2, IMG3],
    datePublished: '2026-11-20',
    dateModified: '2026-11-20',
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
      <p style={p}>Cyber Monday, November 30, 2026, is the biggest online shopping day of the season. For collectors the goal is not to buy the most, it is to buy the right pieces at a fair delivered price. Here is a checklist for Hot Wheels, Funko Pop and action figure collectors.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A NECA figure from our shop: check accessories and joints before you pay.</figcaption>
      </figure>
      {sections.slice(0, 4).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>Check the series and the condition of the car and the card.</figcaption>
      </figure>
      {sections.slice(4).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A sealed Funko Pop: the box is part of the value.</figcaption>
      </figure>
      <h2 style={h2}>Shop collectibles in Canada</h2>
      <p style={p}>Browse <Link href="/shop?category=Hot%20Wheels" style={a}>Hot Wheels</Link>, <Link href="/shop?category=Funko%20Pop" style={a}>Funko Pop</Link>, <Link href="/shop?category=Star%20Wars" style={a}>Star Wars</Link> and <Link href="/shop?category=Marvel" style={a}>Marvel</Link> at The Shelf Cartel, with honest condition and shipping across Canada and the USA. See the <Link href="/shop" style={a}>full shop</Link> for the current selection.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: write your list, set a maximum delivered price per item and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/black-friday-collectibles-guide-canada" style={a}>Black Friday 2026 for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/boxing-day-collectibles-collectors-guide-canada" style={a}>Boxing Day 2026 for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={a}>How to Spot Fake and Bootleg Collectibles</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={a}>Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={a}>How to Check What a Collectible Is Really Worth</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={a}>Your Collectible Just Arrived: A 10-Minute Inspection Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/neca-action-figures-collecting-guide-canada" style={a}>NECA Action Figures in Canada: A Collector’s Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={a}>Holiday Gift Guide for Collectors in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-premium-vs-mainline" style={a}>Hot Wheels Premium vs Mainline: How to Tell the Difference</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-treasure-hunt-guide" style={a}>Hot Wheels Treasure Hunts: How to Spot One</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/ou-acheter-funko-pop-rares-canada" style={a}>Where to Buy Rare Funko Pop Figures in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/buying-collectibles-on-ebay-canada-checklist" style={a}>Buying Collectibles on eBay Canada: An 8-Step Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-formula-1-collecting-guide-canada" style={a}>Hot Wheels Formula 1 Collecting Guide for Canadian Fans</Link></li>
      <li style={{ marginBottom: 6 }}><Link href="/blog/beyblade-x-collecting-guide-canada" style={a}>Beyblade X Collecting Guide for Canadian Collectors</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/order-collectibles-early-holiday-shipping-canada-guide" style={a}>Order Collectibles Early for the Holidays: Shipping Guide for Canada</Link></li>
      </ul></nav>
    </article>
  )
}
