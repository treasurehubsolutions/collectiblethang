import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const SLUG = 'kidult-collectors-starter-guide-canada'
const TITLE = 'Kidult Collecting in Canada: How Adults Can Start a Toy Collection on a Budget'
const IMG1 = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/UOAAAeSwUzJpWpZM/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/mfwAAeSw~GRpHS9G/s-l1600.jpg'
const IMG4 = 'https://i.ebayimg.com/images/g/r2gAAeSw-JRqnFxX/s-l1600.jpg'
const ALT1 = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, photographed by The Shelf Cartel'
const ALT2 = 'Hot Wheels Fast & Furious 1969 Ford Mustang Boss 302 25th Anniversary 2026 die-cast car on its card, photographed by The Shelf Cartel'
const ALT3 = 'Hot Wheels Peanuts Snoopy HW Screen Time 1:64 die-cast car, photographed by The Shelf Cartel'
const ALT4 = 'Hot Wheels Toyota AE86 Sprinter Trueno purple J-Imports 2026 die-cast car, photographed by The Shelf Cartel'
const DESC = 'Adult collectors, often called kidults, are a big part of the toy market. Learn how to start a collection in Canada on a budget: pick a lane, set a limit, check condition and shop smart.'
const SEO_TITLE = 'Kidult Collecting in Canada: Start on a Budget'
const SEO_DESC = 'Kidult collecting in Canada: pick a lane, set a monthly budget, check condition, compare sold prices and display your toys.'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG2, width: 1600, height: 1600, alt: ALT2 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG2] },
}

const sections = [
  { h: '1. Why so many adults are collecting toys', p: ['Industry reports in 2025 and 2026 keep pointing to the same thing: adult fans are one of the strongest forces in the toy market. People who grew up with Hot Wheels, Star Wars, Transformers or Beyblade now have their own shelf, their own budget and a good reason to enjoy it: nostalgia, design, a small daily break, or the fun of the hunt.'] },
  { h: '2. Pick one lane before you buy anything', p: ['The fastest way to overspend is to buy a little of everything. Pick one lane and stay in it for the first few months:'], list: [
    'Die-cast cars: Hot Wheels, Matchbox, Car Culture and Premium lines.',
    'Action figures: Star Wars, Marvel Legends, G.I. Joe Classified, NECA, McFarlane.',
    'Pop culture pieces: Funko Pop, Hallmark ornaments, Beyblade X, Little People Collector sets.',
    'A single character, brand or color: all the Snoopy pieces, all the JDM cars, all the purple cars.'],
    after: 'A clear lane makes every deal easier to judge, and your shelf ends up with a story instead of a pile.' },
  { h: '3. Set a monthly budget and a price per piece', p: ['Decide what you can spend each month without stress, then set a ceiling per piece. Small items such as a single Hot Wheels car are a great way to start because one purchase does not hurt, and you learn what a fair price looks like. Save the bigger purchases for pieces you have already watched for a while.'] },
  { h: '4. Learn to read condition', p: ['Condition decides how much a collectible is worth to the next buyer. Check these points every time:'], list: [
    'Carded or boxed items: look at the corners, creases, dents and yellowing of the plastic.',
    'Loose items: look for paint chips, bent axles, missing accessories and sun fading.',
    'Photos: prefer sellers who show the real item from several angles, not a stock picture.'] },
  { h: '5. Compare sold prices, not just asking prices', p: ['An asking price is only a wish. A sold price is what a buyer really paid. Before you buy a piece you care about, search for it on eBay.ca, filter by sold items and compare condition and shipping. If you see several recent sales around the same number, you have a fair reference. Do not rush because of hype: most popular items come back in another form or another store.'] },
  { h: '6. Watch out for shipping, duties and fakes', p: ['In Canada the shipping cost can change a good deal into an average one, so always compare the total. Combining several small pieces in one order saves money. Be careful with prices that look too good to be true on figures and trading cards, and check the box, the printing and the seller feedback.'] },
  { h: '7. Display what you love', p: ['A collection you keep in a drawer is only half the fun. Protector cases for carded cars, a simple shelf for loose pieces and a spot away from direct sunlight and humidity are enough to start. Our guide on how to store and display die-cast cars and Funko Pop figures has more ideas.'] },
  { h: '8. Keep it fun', p: ['Collecting should be a break, not a second job. Track what you own in a simple list, enjoy the hunt, trade or sell the pieces that no longer fit your lane, and remember that the best collection is the one that makes you smile when you look at it.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG2, IMG1],
    datePublished: '2026-11-17',
    dateModified: '2026-11-17',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const img = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  const fig = { margin: '20px 0', textAlign: 'center' }
  const cap = { color: '#a0a0ae', fontSize: 13, marginTop: 6 }
  const imgs = [[IMG1, ALT1, 'A themed 1:64 series from our shop: an easy, low-cost way to start.'], [IMG3, ALT3, 'Pop culture crossovers make great starter pieces for a new collection.'], [IMG4, ALT4, 'Pick a style, such as JDM, and let it guide your first purchases.']]
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: TITLE, item: `${BASE}/blog/${SLUG}` }] }) }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Walk through any toy aisle this holiday season and you will see it: adults are buying toys for themselves. Collectors sometimes call this the kidult trend, and it is one of the biggest stories in toys right now. The good news is that you do not need a big budget to join in. A clear plan, a few condition checks and patience are enough.</p>
      <figure style={fig}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="eager" style={img} />
        <figcaption style={cap}>A single carded die-cast car is a perfect first piece: small price, easy to display.</figcaption>
      </figure>
      {sections.map((s, i) => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, j) => <p key={j} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
          {i >= 1 && i <= 3 && (
            <figure style={fig}>
              <img src={imgs[i - 1][0]} alt={imgs[i - 1][1]} width={1600} height={1600} loading="lazy" style={img} />
              <figcaption style={cap}>{imgs[i - 1][2]}</figcaption>
            </figure>
          )}
        </section>
      ))}
      <h2 style={h2}>Where to start in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>shop</Link>, including <Link href="/shop?category=Hot%20Wheels" style={{ color: '#e8b820' }}>Hot Wheels</Link> and <Link href="/shop?category=Hot%20Wheels%20Premium" style={{ color: '#e8b820' }}>Hot Wheels Premium</Link>. Every item is photographed by us, with honest condition notes and shipping across Canada and the USA. New pieces arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one lane, set a monthly limit and pick up your first three pieces. That is how every great collection starts.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/guide-debuter-collection-hot-wheels" style={{ color: '#e8b820' }}>How to Start a Hot Wheels Collection</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/buying-collectibles-on-ebay-canada-checklist" style={{ color: '#e8b820' }}>Buying Collectibles on eBay Canada: An 8-Step Checklist</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>How to Store and Display Die-Cast Cars and Funko Pop Figures</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-stocking-stuffers-under-20-canada" style={{ color: '#e8b820' }}>Collector Stocking Stuffers Under $20</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/tamagotchi-virtual-pets-collecting-guide-canada" style={{ color: '#e8b820' }}>Tamagotchi and Virtual Pets Collecting Guide for Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/lol-surprise-hatchimals-surprise-toys-collecting-guide-canada" style={{ color: '#e8b820' }}>LOL Surprise and Hatchimals Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/retro-80s-90s-nostalgia-toys-collecting-guide-canada" style={{ color: '#e8b820' }}>Retro 80s and 90s Nostalgia Toys Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/lego-buying-guide-collectors-canada" style={{ color: '#e8b820' }}>LEGO Buying Guide for Collectors: Sets, Condition and Smart Deals</Link></li></ul></nav>
    </article>
  )
}
