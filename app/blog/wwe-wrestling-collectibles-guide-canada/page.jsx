import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'WWE Collectibles in Canada: Elite Figures, Retro LJN and Giant Plush for Wrestling Fans'
const DESC = 'Collecting WWE and wrestling toys in Canada: Mattel Elite figures, retro LJN Superstars, giant plush and cards. How to check condition, packaging and buy smart.'
const SLUG = 'wwe-wrestling-collectibles-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/Ar0AAeSw5vBqBmxI/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/x5QAAeSwa3tqbf0z/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/RHcAAeSwvrRpbtnx/s-l1600.jpg'
const ALT1 = 'Lex Luger WWE Elite Ultimate Edition 6 inch action figure by Mattel, photographed by The Shelf Cartel'
const ALT2 = 'CM Punk Mattel Elite Saturday Night’s Main Event wrestling figure, photographed by The Shelf Cartel'
const ALT3 = 'WWE 23 inch Hulk Hogan giant plush, Canada exclusive, new with tag, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why wrestling collectibles are so popular', p: ['Wrestling is built on characters, and that is exactly what makes it great to collect. Fans pick a favourite era, a legend from childhood or a current star, and a shelf of figures turns into a timeline of the sport. Legends from the 80s and 90s sit next to today’s champions, and every wrestler has several versions to hunt for.'] },
  { h: '2. Know the main types', p: ['WWE collectibles come in several families, and knowing the difference helps you buy what you really want:'], list: [
    'Mattel Elite and Ultimate Edition figures: 6 inch articulated figures made for adult collectors, often with accessories and special packaging.',
    'Retro LJN Superstars: soft, chunky figures in the style of the classic 1980s line, loved for nostalgia.',
    'Giant plush: large 23 inch plush wrestlers, popular as gifts and as display pieces.',
    'Cards and memorabilia: vintage wrestling cards of the legends, graded or raw.'],
    after: 'Pick one family to start. A focused shelf looks better and costs less than buying a bit of everything.' },
  { h: '3. Check condition and packaging', p: ['For carded or boxed figures, look at the corners, the plastic bubble, the window and any creases on the card. Collectors often pay more for a clean package, so ask for photos of the front, the back and each corner. For loose figures, check that all the accessories are there, such as masks, belts or extra hands, and look for paint wear and loose joints.'] },
  { h: '4. Understand editions and exclusives', p: ['Many wrestling pieces were released as store exclusives or in special series. A Canada exclusive plush, for example, can be harder to find outside the country, which is one reason collectors look for it. Read the title and description carefully: the series name, the year and the word “exclusive” tell you exactly which version you are buying.'] },
  { h: '5. Retro LJN figures: what to look for', p: ['The classic soft figures are a favourite for nostalgic fans. Because they are old, condition varies a lot. Check the face and body for scuffs and paint loss, ask whether the figure is loose or carded, and look at the photos of the back. Listings where you can pick your wrestler let you build a set one figure at a time.'] },
  { h: '6. Giant plush: size and tags', p: ['A 23 inch plush takes real space and costs more to ship than a regular figure, so count shipping before you buy. “New with tag” and a clean tag are what most buyers want, and a sealed bag is even better. Store plush away from sunlight and damp so the colours stay bright.'] },
  { h: '7. Display and protect your collection', p: ['Keep figures away from direct sun, which fades paint and plastic. Dust shelves or use a display case for your best pieces, and keep the original box if you plan to resell one day. For cards, use sleeves and rigid holders so the corners stay sharp.'] },
  { h: '8. Set a budget and a wish list', p: ['Write down the wrestlers and versions you want, then set a limit for each one. Compare the total with shipping, check clear photos, and be patient. A wish list stops impulse buying and helps you recognise a good deal when it appears.'] },
  { h: '9. Read the listing like a collector', p: ['Before you buy a wrestling figure, read the whole title and description. Check the wrestler’s name, the series or wave, the scale and whether the figure is new in package, opened or loose. Look for notes about accessories, because a missing belt, mask or pair of hands changes the value. If something is unclear, ask for extra photos of the back of the package, the joints and any marks. A clear answer from the seller is a good sign.'] },
  { h: '10. Gift ideas for every kind of wrestling fan', p: ['Wrestling collectibles are easy gifts because every fan has a favourite. For a long-time fan, a legend from the 80s or 90s in an Elite or retro LJN version is a safe pick. For a younger fan, a current star or a giant plush is fun and sturdy. For a collector who already has a lot, a Canada exclusive or a less common version of a favourite wrestler is a nice surprise. Keep the box in good shape, add a gift receipt note when you can, and order early in the season so shipping is never a worry.'] },
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
      <p style={p}>Whether you grew up with the legends of the ring or follow today’s champions, wrestling collectibles make great shelf pieces and great holiday gifts. Here is how to buy well in Canada, from Mattel Elite figures to retro LJN and giant plush.</p>
      <figure style={fig}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={img} />
        <figcaption style={cap}>Lex Luger as an Elite Ultimate Edition figure from our shop: legends are a great way to start.</figcaption>
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
        <figcaption style={cap}>Mattel Elite figures like this CM Punk come with detailed sculpts and special packaging.</figcaption>
      </figure>
      {sections.slice(2, 4).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={fig}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="lazy" style={img} />
        <figcaption style={cap}>Giant plush like this Hulk Hogan make big display pieces and gifts.</figcaption>
      </figure>
      {sections.slice(4).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <h2 style={h2}>Where to find WWE collectibles in Canada</h2>
      <p style={p}>Browse <Link href="/shop" style={{ color: '#e8b820' }}>our shop</Link> for WWE figures, plush, cards and more, with honest condition notes and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one wrestler or one era, set a budget and add your first figure. A focused shelf always beats a crowded one.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/star-wars-marvel-legends-collecting-guide-canada" style={{ color: '#e8b820' }}>Star Wars and Marvel Legends Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/vhs-tapes-collecting-guide-canada" style={{ color: '#e8b820' }}>VHS Tapes and DVDs Guide</Link></li></ul>
    </article>
  )
}
