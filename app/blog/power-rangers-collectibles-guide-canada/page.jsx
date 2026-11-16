import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Power Rangers Collectibles in Canada: Lightning Collection, Re-Ignition and Vintage Zords'
const DESC = 'How to collect Power Rangers figures in Canada: Lightning Collection, Re-Ignition 6 inch figures, vintage Bandai zords and big 12 inch figures. Check the line, the scale, the accessories and the packaging before you buy.'
const SLUG = 'power-rangers-collectibles-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/Wd0AAeSwPS5pF9Qa/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/~rIAAeSwiY5p9i5L/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/n6YAAeSw18ppESxF/s-l1600.jpg'
const ALT1 = 'Power Rangers Lightning Collection In Space Silver Ranger Zhane action figure in its box, photographed by The Shelf Cartel'
const ALT2 = 'Power Rangers Wild Force Red Ranger Cole Evans 12 inch Bandai action figure from 2002, photographed by The Shelf Cartel'
const ALT3 = 'Hasbro Power Rangers Re-Ignition Auto Morphin Green Ranger 6 inch figure, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Pick a lane: modern 6 inch, big figures or vintage', p: ['Power Rangers collecting covers more than thirty years of toys. Hasbro Lightning Collection and Re-Ignition figures are articulated 6 inch pieces made for adult collectors. Bandai figures from the early 2000s, including the 12 inch Wild Force line, have a retro charm. Vintage Mighty Morphin zords from the 1990s bring pure nostalgia. Choosing one lane keeps your shelf consistent and your budget under control.'] },
  { h: '2. Know the line and the team', p: ['Lightning Collection figures usually come with extra heads, hands, weapons and effect parts, and they cover many seasons: Mighty Morphin, In Space, Dino Thunder, Dino Fury and more. Re-Ignition figures are a simpler 6 inch line built around the classic Mighty Morphin team. Always read the full name of the ranger, the season and the line in the listing, because two figures that look alike can come from different eras and sizes.'] },
  { h: '3. Check the accessories before you pay', p: ['Power Rangers figures are loaded with small parts that get lost over the years. A Silver Ranger without its blaster, or a Red Ranger without his sword, loses value fast. Ask the seller to confirm that everything is included and look at the photos for each piece.'], list: [
    'Box: crushed corners, torn window, price stickers, yellowing and sun fading.',
    'Contents: weapons, alternate hands, extra heads, stands and inserts should all be there.',
    'Figure: loose joints, stiff or broken hinges, paint rubs and sticky plastic.'] },
  { h: '4. Sealed, new in box or loose', p: ['A sealed figure keeps the most value and is the safest choice for gifts. Loose figures are cheaper and perfect for display, but only if they are complete. When a listing says new, look for photos of the actual item in its box rather than a stock picture. Our checklist on buying collectibles on eBay Canada explains what to look at before you click buy.'] },
  { h: '5. Vintage zords and Megazord toys', p: ['Vintage zords such as the 1991 Tyrannosaurus and the Megazord toys are large, heavy and full of moving parts. Check that the pieces connect, that the stickers are intact and that no parts are missing. Vintage items are often played-with, so honest photos and a clear description matter more than a perfect box.'] },
  { h: '6. Rare figures and the 12 inch Bandai line', p: ['Some figures are harder to find because they came out in small runs, were exclusive to a store or event, or are simply old. Large 12 inch Bandai figures from the early 2000s, such as the Wild Force Red Ranger, are fun display pieces that do not look like anything else on the shelf. Compare sold prices, not asking prices, to see what collectors actually pay.'] },
  { h: '7. Shipping, storage and display', p: ['Boxed figures travel best when the seller packs them with extra padding and ships with tracking, across Canada and the USA. At home, keep your Rangers out of direct sun, which fades both the plastic and the cardboard. A shallow shelf lets each ranger stand with their weapons, and clear protective cases keep boxes flat and corners sharp.'] },
  { h: '8. Build a wish list', p: ['Write down the rangers, seasons and zords you want, and note what you already own with its condition. With a short list you can spot a good deal quickly and avoid buying the same figure twice. Go, go, Power Rangers.'] },
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
  const fig = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>It is morphin time again. Whether you grew up with the original team or you collect the newest Hasbro lines, here is how to buy Power Rangers figures with confidence and build a shelf worth showing off.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A Lightning Collection In Space Silver Ranger from our shop: check the box and the accessories.</figcaption>
      </figure>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A 12 inch Wild Force Red Ranger by Bandai: a big display piece with retro charm.</figcaption>
      </figure>
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A Re-Ignition Green Ranger in 6 inch scale: compare the line and the size before you buy.</figcaption>
      </figure>
      <h2 style={h2}>Shop Power Rangers and Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>action figures and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one lane, check the line and the accessories, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/tmnt-collectibles-guide-canada" style={{ color: '#e8b820' }}>Teenage Mutant Ninja Turtles Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/gi-joe-classified-collecting-guide-canada" style={{ color: '#e8b820' }}>G.I. Joe Classified Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/star-wars-marvel-legends-collecting-guide-canada" style={{ color: '#e8b820' }}>Star Wars and Marvel Legends Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/buying-collectibles-on-ebay-canada-checklist" style={{ color: '#e8b820' }}>Buying Collectibles on eBay Canada: An 8-Step Buyer's Checklist</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={{ color: '#e8b820' }}>Die-Cast and Funko Storage and Display Guide</Link></li></ul></nav>
    </article>
  )
}
