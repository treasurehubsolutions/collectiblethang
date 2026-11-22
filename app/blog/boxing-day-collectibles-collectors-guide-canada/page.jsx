import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Boxing Day 2026 for Collectors in Canada: A Smart Shopping Plan'
const DESC = 'Boxing Day is December 26. A practical plan for collectors in Canada: build a short list, check sold prices, read condition, avoid fake bargains and plan shipping for Hot Wheels, Funko Pop and action figures.'
const SEO_TITLE = "Boxing Day 2026 for Collectors in Canada"
const SEO_DESC = "Boxing Day collector tips for Canada: build a short list, check sold prices, read condition, avoid fake bargains and plan shipping."
const SLUG = 'boxing-day-collectibles-collectors-guide-canada'
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
  { h: '1. Why Boxing Day is different for collectors', p: ['Boxing Day on December 26 is a Canadian shopping tradition, and by then the holiday rush is over. Gifts have been opened, duplicates are showing up, and many sellers want to clear shelves before the new year. For collectors that can mean calmer browsing and a second chance at pieces that sold out before Christmas. It can also mean impulse buying, so a plan helps.'] },
  { h: '2. Start with a short list of gaps', p: ['Before you open a single flyer, write down the pieces that would complete a series, a team, a line or a shelf. Add a maximum price beside each one. Shopping from a list keeps you from filling your cart with whatever has a red tag, and a small, complete set almost always looks better than a pile of unrelated pieces.'] },
  { h: '3. Use holiday gift money wisely', p: ['Gift cards and cash from family often arrive right before Boxing Day. Decide in advance how much goes to your collection and how much you keep for something else. If you are tempted by several items, sleep on it and compare again the next morning. Truly sought-after pieces rarely vanish overnight, and a day of patience is cheaper than a regret.'] },
  { h: '4. Check sold prices, not just the discount', p: ['A percentage off only matters if the starting price was fair. Search the exact name, series and condition, filter to sold listings and read several recent sales. If the sale price is at or below what the item actually sold for, it is a good deal. If not, you can wait. Our guide on checking a collectible’s value with sold listings walks through the steps.'] },
  { h: '5. Read the condition carefully', p: ['Holiday returns and open-box items show up after Christmas. For carded and boxed pieces, ask for clear photos of the corners, the window and the blister, and read the description for dents, creases or missing accessories. Our condition terms guide explains what MIB, MOC and loose mean so you can compare listings fairly.'] },
  { h: '6. Hot Wheels, Funko Pop and figures: what to look for', p: ['For Hot Wheels, check the series name, the casting and whether the card is flat. For Funko Pop, look at the box corners and the window. For action figures such as NECA, confirm that every accessory is present and that the joints are tight. Match what you see to the listing before you pay.'] },
  { h: '7. Watch for fake urgency and fake bargains', p: ['Countdown timers, “last chance” banners and unknown sellers with prices far below market are classic warning signs. Buy from sellers who show real photos of the actual item, explain their return policy and have a history you can check. Our checklist on spotting fake and bootleg collectibles lists the checks to make.'] },
  { h: '8. Plan shipping and customs', p: ['Combined shipping can save a lot when you buy several small pieces from one seller, and a Canadian seller avoids customs surprises. Carrier delays can linger after Christmas, so give yourself extra time if something is meant for a birthday in early January. We ship across Canada and the USA, and our delivery page explains the details.'] },
  { h: '9. After you buy: inspect and protect', p: ['When a parcel arrives, open it carefully, photograph the box before you remove anything, and check the item against the listing the same day. Then store it away from direct sunlight and heat. Our storage guide and our arrival checklist cover the details.'] },
  { h: '10. Set a budget and a stop rule', p: ['Boxing Day is long and tempting, so write two numbers before you start: the total you will spend and the number of pieces you will buy. When you reach either one, you stop. Keep a note on your phone with each purchase and its price. It takes a minute and it keeps the new year from starting with a surprise on your statement.'] },
  { h: '11. Sealed, open or lot: which deal fits you', p: ['Sealed pieces suit display and resale, open pieces are cheaper and let you pose or handle them, and lots can be a bargain if you want several items from the same line. For lots, ask for a photo of every piece and check for duplicates. A lot with three things you want and five you do not is only a deal if you can resell the extras. Our guide on keeping collectibles in the box or opening them can help you decide.'] },
  { h: '12. Questions collectors ask', p: ['Is the biggest discount always the best buy? Not necessarily. A smaller discount on a clean, complete piece can be better than a large one on something damaged or incomplete. Should I wait for the last day? Prices can move either way, so check your list every few days and compare with recent sold prices instead of guessing. Can I return a collectible? Return policies differ from seller to seller, so read them before you pay and keep the original packaging until you have inspected the item.'] }
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
      <p style={p}>Boxing Day on December 26 is a big shopping day in Canada, and collectors are already planning. The goal is not to buy the most, it is to buy the right pieces at a fair price. Here is a simple plan for Hot Wheels, Funko Pop and action figure collectors.</p>
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
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: write your short list, set a maximum price per item and check recent sold prices before you buy.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/black-friday-collectibles-guide-canada" style={a}>Black Friday 2026 for Collectors in Canada</Link></li>
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
