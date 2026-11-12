import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Hockey Collectibles in Canada: Bobbleheads, NHL Figures and Cards for Fans'
const DESC = 'Hockey season is in full swing. Learn how to buy hockey collectibles in Canada: bobbleheads, vintage NHL figures and cards, with tips on condition, packaging and display.'
const SLUG = 'hockey-collectibles-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/knsAAeSwDGNpawWg/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/0EQAAeSwQ8FpawkO/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/tWcAAeSwDwJpq4hU/s-l1600.jpg'
const ALT1 = 'Connor McDavid Edmonton Oilers Canada exclusive vinyl bubble head figure, photographed by The Shelf Cartel'
const ALT2 = 'Connor Bedard NHL Big Shot Shooters collectible figure, Canada exclusive, photographed by The Shelf Cartel'
const ALT3 = 'Patrick Roy NHL Headliners Signature Series figure by Irwin, 1997, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Pick your lane: players, teams or eras', p: ['Hockey collecting is huge, so a clear lane keeps your budget under control. Popular ones include:'], list: [
    'Current stars: bobbleheads and Big Shot Shooters figures of players like Connor McDavid, Connor Bedard and Sidney Crosby.',
    'Your favourite team: Oilers, Canadiens, Maple Leafs, Panthers or any club you cheer for.',
    'Vintage 1990s figures: NHL Headliners and Starting Lineup style figures of legends like Gretzky and Roy.',
    'Cards: new boxes and blaster bundles for the thrill of the pull, or older singles for the hunt.'],
    after: 'With the NHL season underway and the holidays close, hockey gifts are a safe pick for any fan on your list.' },
  { h: '2. Know the type of figure', p: ['Bobbleheads, vinyl bubble heads, shooters and posed figures are all different. Check the height, the base and whether the head still moves freely. Canada exclusive editions are popular because they are harder to find in other markets, so read the listing to see exactly which edition you are getting.'] },
  { h: '3. Check condition on vintage pieces', p: ['Figures from the 1990s are often sold loose. Look for scuffed paint, cracked bases, missing sticks or pucks, and yellowing on the plastic. Ask for photos from every angle. A loose set can be a great low-cost way to start a vintage display, as long as the description is honest about wear.'] },
  { h: '4. Packaging matters for newer releases', p: ['For current figures, a sealed box with sharp corners and a clear window keeps the best value. If you plan to display in package, check for creases, dents and sun fading before you buy.'] },
  { h: '5. A word on cards and sealed boxes', p: ['New hockey card boxes and blaster bundles are a fun way to get into the hobby, but the contents are random. Treat them as entertainment first, buy from a seller with clear photos of the sealed product, and keep any cards you pull in sleeves and top loaders right away to protect the edges and corners.'] },
  { h: '6. Display and protect your collection', p: ['Keep figures out of direct sunlight, which fades paint, and use a closed cabinet or acrylic cases to limit dust. Small stands and risers let you build a layered shelf, with a tall player at the back and smaller ones in front. Wipe loose figures gently with a soft dry brush.'] },
  { h: '7. Budget and shipping', p: ['Set a monthly budget, keep a short wish list and buy one piece at a time. Remember to add shipping to your total, and combine several items from the same seller in one order to save on delivery.'] },
  { h: '8. Read the listing like a collector', p: ['Before you buy, check the product title for the player name, team, brand and edition, then compare it with the photos. Make sure the figure in the pictures matches the description, and look for details such as the manufacturer name on the base or the box. If something is unclear, ask the seller a question before you order. A good seller will happily send extra photos of the base, the back of the figure and any flaws.'] },
  { h: '9. Gift ideas for every kind of hockey fan', p: ['Not sure what to pick for someone else? Match the gift to the fan. A young fan will enjoy a colourful bobblehead of a current star, a team loyalist will love a figure of their favourite club, and a parent who grew up in the 1990s will smile at a vintage NHL Headliners figure of a legend. For a small budget, a single card in a protective sleeve or a loose vintage figure makes a thoughtful stocking stuffer. Always check the return policy and the shipping time if you are buying close to a holiday.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2, IMG3],
    datePublished: '2026-11-12',
    dateModified: '2026-11-12',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const img = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  const fig = { margin: '20px 0', textAlign: 'center' }
  const cap = { color: '#888', fontSize: 13, marginTop: 6 }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" style={{ color: '#888', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>The hockey season is underway and the holidays are around the corner, which makes this a great time to start (or grow) a collection of hockey collectibles. Here is how to buy well in Canada, whether you love today’s stars, your home team or the vintage figures of the 1990s.</p>
      <figure style={fig}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={img} />
        <figcaption style={cap}>A Canada exclusive Connor McDavid bubble head from our shop.</figcaption>
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
        <figcaption style={cap}>Big Shot Shooters figures like this Connor Bedard are popular with young fans.</figcaption>
      </figure>
      {sections.slice(2, 4).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={fig}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="lazy" style={img} />
        <figcaption style={cap}>Vintage NHL Headliners figures, like this 1997 Patrick Roy, appeal to nostalgic collectors.</figcaption>
      </figure>
      {sections.slice(4).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <h2 style={h2}>Where to find hockey collectibles in Canada</h2>
      <p style={p}>Browse <Link href="/shop" style={{ color: '#e8b820' }}>our shop</Link> for hockey bobbleheads, NHL figures, cards and more, with honest condition notes and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one team or one era, set a budget and add your first piece. A focused shelf always beats a crowded one.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/video-game-collectibles-guide-canada" style={{ color: '#e8b820' }}>Video Game Collectibles Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/tmnt-collectibles-guide-canada" style={{ color: '#e8b820' }}>Teenage Mutant Ninja Turtles Collectibles Guide</Link></li></ul>
    </article>
  )
}
