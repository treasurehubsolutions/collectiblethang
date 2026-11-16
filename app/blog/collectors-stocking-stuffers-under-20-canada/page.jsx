import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Collector Stocking Stuffers Under $20 in Canada: Small Gifts Big Fans Will Love'
const DESC = 'Stocking stuffer ideas for collectors in Canada: Hot Wheels, Matchbox, small die-cast and more under $20. How to pick, check condition and ship in time for the holidays.'
const SLUG = 'collectors-stocking-stuffers-under-20-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/UOAAAeSwUzJpWpZM/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/mfwAAeSw~GRpHS9G/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/r2gAAeSw-JRqnFxX/s-l1600.jpg'
const ALT1 = 'Hot Wheels Fast & Furious 1969 Ford Mustang Boss 302 25th Anniversary 2026 die-cast car on its card, photographed by The Shelf Cartel'
const ALT2 = 'Hot Wheels Peanuts Snoopy HW Screen Time 1:64 die-cast car, photographed by The Shelf Cartel'
const ALT3 = 'Hot Wheels Toyota AE86 Sprinter Trueno purple J-Imports 2026 die-cast car, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why small collectibles make the best stocking stuffers', p: ['A stocking stuffer has a simple job: surprise someone with something they actually want. For a collector, a small piece that fills a gap on the shelf beats a random gift every time. Small collectibles are also easy to wrap, easy to ship and easy to match to a budget, which is why more and more people shop for them in November and December.'] },
  { h: '2. Set a budget and a theme first', p: ['Decide how many gifts go in the stocking and what you want to spend on each one. A theme keeps the stocking feeling special instead of random. Good themes include:'], list: [
    'Movie and TV cars: Fast & Furious, Batman, Netflix and pop culture castings.',
    'JDM favourites: Toyota, Honda, Nissan and other Japanese classics.',
    'Cartoon and character fun: Snoopy and other Screen Time castings.',
    'A set in progress: the next number in a series the person is already collecting.'],
    after: 'If you know what is already on their shelf, pick the missing piece. If you do not, a popular theme is a safe choice.' },
  { h: '3. Hot Wheels: the classic stocking stuffer', p: ['A single Hot Wheels car is small, colourful and affordable, and the numbered cards make it easy to see where it fits in a series. Look at the card number, the series name and the year in the listing, such as 2026 releases or a 25th anniversary casting. A clean card with no creases and a clear bubble makes the best gift, because the packaging is part of what the collector wants to keep.'] },
  { h: '4. Matchbox and other small die-cast', p: ['Matchbox cars are another great pick for a stocking. They often come in realistic everyday vehicles, trucks and classics, which suits fans who like real-life models over fantasy designs. Lots where you pick your own cars let you build a small bundle for one person without spending much.'] },
  { h: '5. Check condition, even on a cheap item', p: ['A low price does not mean you should skip the checks. For carded cars, look for soft corners, bent cards and a cracked or dented bubble. For loose cars, look at the paint, the wheels and the axles. Ask the seller for extra photos if the listing shows only one picture. Small problems matter more when the item is a gift, because the person opening it will look at it closely.'] },
  { h: '6. Combine items to save on shipping', p: ['Shipping can cost more than a small car, so look for sellers who combine items in one parcel. Putting several stocking stuffers in one order saves money and means only one delivery date to track. At The Shelf Cartel you can add several items to your cart and ship across Canada and the USA in one go.'] },
  { h: '7. Order early and plan for delivery', p: ['Holiday mail is busy, so order well before the last-minute rush. Check the estimated delivery date at checkout and leave a few days of margin. If the date is tight, choose items that ship from within Canada and keep a small backup gift on hand, just in case.'] },
  { h: '8. Wrap and present them well', p: ['A small gift looks bigger when it is presented well. Keep the original card or box in good shape, wrap each piece separately and add a short note about why you chose it. For a bigger effect, group three or four small pieces from the same theme in one gift bag so they feel like a set.'] },
  { h: '9. Ideas by type of collector', p: ['For a young fan, pick colourful characters and fun castings that can be played with. For a teen, choose JDM and movie cars. For an adult collector, look for a numbered casting from a current series or a limited run. For a person who has everything, a missing number in a series they love is always welcome.'] },
  { h: '10. A quick checklist before you click buy', p: ['Before you add a small collectible to your cart, run through the same short list every time. Read the full title and check the casting name, the series and the year. Look at every photo and zoom in on the card corners and the bubble. Check whether the item is new on card, opened or loose. Compare the price with recent sold listings so you know you are paying a fair amount. Then look at the shipping cost and the delivery estimate. Five minutes of checking is cheap insurance for a gift that cannot be replaced the night before the holidays.'] },
  { h: '11. Why a numbered series makes a smarter gift', p: ['Many small die-cast lines are numbered, for example 5 of 10 or 148 of 250. That number tells you how the piece fits into a set, and it gives the person opening the gift something to look for and complete. A collector who already owns numbers 1 to 4 will be delighted to get number 5. If you are not sure which numbers they have, ask a family member or look at their shelf, and write the series name on a small note so you can check it again when you order.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2, IMG3],
    datePublished: '2026-11-15',
    dateModified: '2026-11-15',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const img = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  const fig = { margin: '20px 0', textAlign: 'center' }
  const cap = { color: '#a0a0ae', fontSize: 13, marginTop: 6 }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>You do not need a big budget to make a collector happy. Small die-cast cars and other compact collectibles are easy to wrap, easy to ship and fun to open. Here is how to build a stocking full of great gifts for under $20 each, with tips for Canadian shoppers.</p>
      <figure style={fig}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={img} />
        <figcaption style={cap}>A movie car like this Fast & Furious Mustang is a perfect small gift from our shop.</figcaption>
      </figure>
      {sections.slice(0, 2).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <figure style={fig}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="lazy" style={img} />
        <figcaption style={cap}>Character castings like this Snoopy car are fun for fans of all ages.</figcaption>
      </figure>
      {sections.slice(2, 5).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={fig}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="lazy" style={img} />
        <figcaption style={cap}>JDM favourites like this Toyota AE86 are popular with teens and adults.</figcaption>
      </figure>
      {sections.slice(5).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <h2 style={h2}>Where to find stocking stuffers for collectors in Canada</h2>
      <p style={p}>Browse <Link href="/shop" style={{ color: '#e8b820' }}>our shop</Link> for Hot Wheels, Matchbox and more small collectibles, or go straight to <Link href="/shop?category=Hot%20Wheels%20Premium" style={{ color: '#e8b820' }}>Hot Wheels Premium</Link> for a step up. We ship across Canada and the USA, and new items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick a theme, set your budget per gift and order early so every stocking is ready on time.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/black-friday-collectibles-guide-canada" style={{ color: '#e8b820' }}>Black Friday Collectibles Guide for Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/guide-debuter-collection-hot-wheels" style={{ color: '#e8b820' }}>How to Start a Hot Wheels Collection</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/matchbox-collecting-guide-vintage-collectors" style={{ color: '#e8b820' }}>Matchbox Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>How to Store and Display Die-Cast Cars and Funko Pop Figures</Link></li></ul></nav>
    </article>
  )
}
