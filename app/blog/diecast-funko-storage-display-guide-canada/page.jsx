import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'How to Store and Display Die-Cast Cars and Funko Pop Figures: A Collector Guide'
const DESC = 'Practical tips to store and display die-cast cars and Funko Pop figures in Canada: light, humidity, protectors, shelves, dust and safe moving, so your collection stays in great condition.'
const SLUG = 'diecast-funko-storage-display-guide-canada'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

const sections = [
  { h: '1. Know the three enemies: light, humidity and heat', p: ['Most damage to collectibles is slow and quiet. Direct sunlight fades card art and box colours and can yellow plastic. Humidity softens cardboard and can cause spots. Heat can warp thin plastic and weaken glue. Choose a spot away from windows, radiators and damp basements, and your collection will look better for much longer. Canadian winters add another factor: very dry indoor air and big temperature swings, so avoid unheated garages and attics.'] },
  { h: '2. Carded die-cast cars: protect the card first', p: ['For carded Hot Wheels, Matchbox and similar cars, the card and the blister are a big part of the value. Clear protective cases keep corners sharp, stop the card from bending and keep dust off. Store cards upright or flat, never stacked under heavy weight, and never push the cards tightly into a box where the corners can fold.'], list: [
    'Use a clear protector sized for the card, not a case that is too tight.',
    'Keep cards out of direct sun, even behind glass.',
    'Handle by the edges and avoid pressing on the blister.'] },
  { h: '3. Loose die-cast cars: give each car its own space', p: ['Loose cars chip when they touch each other. A shallow display case with separate compartments, a wall shelf with small dividers or a compartment box lets each car sit on its own. Soft liners help, and a quick wipe with a dry microfibre cloth removes dust without scratching the paint. Avoid harsh cleaners on paint and decals.'] },
  { h: '4. Funko Pop figures: the box is part of the collectible', p: ['Many collectors keep Funko Pop figures in the box, so a clean window and sharp corners matter. Plastic Pop protectors are cheap and protect against dust, scuffs and light pressure. Keep boxes upright on a shelf with a little space between them so the corners are not crushed, and do not stack boxes more than a couple high.'] },
  { h: '5. Display or store: choose per item', p: ['You do not have to choose one approach for the whole collection. A common way to do it is to display the pieces you love most and store duplicates, spares and future trades safely in boxes. Rotating what is on the shelf every few months keeps the display fresh and spreads out the light exposure.'] },
  { h: '6. Dust, cleaning and a simple routine', p: ['Dust is easier to prevent than to remove. Closed cases and protectors do most of the work. For open shelves, a soft brush or a dry microfibre cloth once a month is usually enough. Do not use water on cardboard, and test any cleaner on a hidden spot first.'] },
  { h: '7. Moving and shipping your collection', p: ['If you move or ship pieces, wrap each one separately and keep boxes upright where you can. Add padding on all sides so nothing slides, and use a sturdy outer box. Take a few photos before you send an item so the condition is documented. Careful packing is a big part of how we ship to collectors across Canada and the USA.'] },
  { h: '8. Keep a simple inventory', p: ['A list with the name, series number, condition and where each piece is stored makes it easy to find things, avoid buying duplicates and prove what you own. A phone photo of each shelf is a quick backup that takes a minute.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    datePublished: '2026-11-13',
    dateModified: '2026-11-13',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const a = { color: '#e8b820' }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" style={{ color: '#888', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Finding a great piece is only half of collecting. How you store and display it decides whether it still looks great in five years. Here are practical tips for die-cast cars and Funko Pop figures, from light and humidity to protectors, shelves and safe moving.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop die-cast and Funko Pop in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop?category=Hot%20Wheels" style={a}>Hot Wheels</Link>, <Link href="/shop?category=Matchbox" style={a}>Matchbox</Link> and <Link href="/shop?category=Funko%20Pop" style={a}>Funko Pop</Link> selection, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one shelf, add protectors to your best pieces and keep the whole collection out of direct light.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/guide-debuter-collection-hot-wheels" style={a}>How to Start a Hot Wheels Collection</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/matchbox-collecting-guide-vintage-collectors" style={a}>Matchbox Collecting Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/ou-acheter-funko-pop-rares-canada" style={a}>Where to Buy Rare Funko Pop Figures in Canada</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-treasure-hunt-guide" style={a}>Hot Wheels Treasure Hunt Guide</Link></li>
      </ul>
    </article>
  )
}
