import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Star Wars and Marvel Legends Collecting Guide: Scales, Lines and Smart Buying'
const DESC = 'How to collect Star Wars and Marvel Legends action figures in Canada: 3.75-inch vs 6-inch scale, the main lines, box condition and how to buy with confidence.'
const SLUG = 'star-wars-marvel-legends-collecting-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/19oAAeSw9ERoq3O7/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/ShIAAeSw8ZNoqgBD/s-l1600.jpg'
const ALT1 = 'Star Wars The Vintage Collection Lando Calrissian 3.75-inch action figure, photographed by The Shelf Cartel'
const ALT2 = 'Marvel Legends Series Wolverine action figure from the Deadpool and Wolverine movie line, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Pick a scale and stay with it', p: ['Star Wars figures are mostly collected in 3.75-inch scale (The Vintage Collection and Retro Collection) or 6-inch scale (The Black Series). Marvel Legends figures are generally 6-inch. Mixing scales on one shelf looks messy, so choose one that fits your space and budget, then build from there.'] },
  { h: '2. Know the main lines', p: ['Hasbro sells several lines under the same franchise names. The Vintage Collection and Retro Collection lean on classic Kenner-style cards, while The Black Series focuses on detailed 6-inch figures. Marvel Legends often include a Build-A-Figure piece spread across a wave. The line name and the number on the card tell you what a figure belongs to.'] },
  { h: '3. Check the box and the figure', p: ['For carded or boxed figures, look at the corners, the creases, the window and the price sticker. For loose figures, check that the accessories, weapons and extra hands are included, and ask for photos of the joints and the paint. Condition changes what collectors are willing to pay, so clear photos of the real item matter.'], list: [
    'Carded or boxed: bent corners, creased card, yellowed or dented bubble.',
    'Loose: missing accessories, loose joints, paint rubs, sun fading.',
    'Build-A-Figure waves: check that the part you need is actually included.'] },
  { h: '4. Collect by character, era or theme', p: ['A focus turns random figures into a collection. You can follow one character, one film or series, one trilogy or one team. A clear theme also helps you say no to figures that do not fit, which saves money and shelf space.'] },
  { h: '5. Buy smart and watch for reissues', p: ['Compare the price with recent sold listings for the exact figure, and be careful with listings that use only stock photos. Popular figures are often reissued, so a high price today is not always a long-term bargain. We offer shipping across Canada and the USA, with careful packing for boxed figures.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2],
    datePublished: '2026-11-10',
    dateModified: '2026-11-10',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" style={{ color: '#888', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Star Wars and Marvel Legends action figures are among the most popular collectibles for fans of all ages. With several scales, lines and conditions on the market, here are five quick tips to collect with confidence.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={{ width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A Star Wars Vintage Collection figure from our shop: check the card, the bubble and the corners.</figcaption>
      </figure>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="lazy" style={{ width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A Marvel Legends figure from our shop: the line name is printed on the box.</figcaption>
      </figure>
      <h2 style={h2}>Shop Star Wars and Marvel in Canada</h2>
      <p style={p}>You can browse our current selection of <Link href="/shop?category=Star Wars" style={{ color: '#e8b820' }}>Star Wars</Link> and <Link href="/shop?category=Marvel" style={{ color: '#e8b820' }}>Marvel</Link> figures at The Shelf Cartel, with real photos, honest condition and shipping across Canada and the USA. Check back often: new items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick a scale, check the box and the figure, then compare with recent sold prices before you buy.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/ou-acheter-funko-pop-rares-canada" style={{ color: '#e8b820' }}>Where to Buy Rare Funko Pop Figures in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/matchbox-collecting-guide-vintage-collectors" style={{ color: '#e8b820' }}>Matchbox Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li></ul>
    </article>
  )
}
