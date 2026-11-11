import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Transformers and DC Multiverse Collecting Guide: Lines, Scales and Smart Buying'
const DESC = 'How to collect Transformers and DC Multiverse action figures in Canada: know the lines and scales, check packaging and accessories, spot reissues and errors, and buy with confidence.'
const SLUG = 'transformers-dc-multiverse-collecting-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/I7MAAOSwadhoUfHW/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/UYUAAeSwfcBo6~bn/s-l1600.jpg'
const ALT1 = 'Transformers Beast Wars Maximal Rattrap vintage reissue action figure, carded, photographed by The Shelf Cartel'
const ALT2 = 'McFarlane Toys DC Multiverse Huntress Collector Edition 7 inch action figure, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Know the line before you buy', p: ['Transformers come in many lines: vintage Generation 1 pieces, modern Generations releases, Beast Wars, movie lines and collaborations with other brands. DC Multiverse figures from McFarlane Toys also come in different tiers, such as standard releases, Collector Edition and Gold Label exclusives. The line name is printed on the box, and it tells you the size, the level of detail and how the figure is meant to be displayed.'] },
  { h: '2. Check the scale and the display plan', p: ['Most DC Multiverse figures are made for a 7 inch scale, so they look best next to each other. Transformers vary much more: classes such as Deluxe or Voyager describe the size of the figure, and a Transformer can change shape, so think about whether you want it in robot mode or vehicle mode on the shelf. Choosing one scale and one theme keeps a collection tidy and easier to grow.'] },
  { h: '3. Inspect the packaging and the accessories', p: ['For carded or boxed figures, the packaging matters to many collectors. Ask for clear photos of the real item.'], list: [
    'Packaging: bent or creased cards, yellowed bubbles, crushed box corners and price stickers.',
    'Accessories: weapons, stands, alternate hands and display bases should all be present when the figure came with them.',
    'Figure: loose joints, paint rubs, stress marks on plastic and, for Transformers, parts that transform smoothly.'] },
  { h: '4. Understand reissues, exclusives and errors', p: ['Vintage reissues copy an older toy but are new products, and the box usually says so. Exclusives are tied to a retailer or an event, and a Collector Edition or Gold Label figure often has a small marking on the box. Factory errors, such as a figure assembled with the wrong part, can interest some collectors, but they need clear photos and an honest description.'] },
  { h: '5. Buy from a seller who packs and ships with care', p: ['Boxed action figures are easy to damage in transit. Choose sellers who describe the condition honestly, show real photos and ship with tracking. We ship across Canada and the USA and pack carded and boxed figures to protect the corners and the card.'] },
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
  const fig = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" style={{ color: '#888', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Transformers and DC Multiverse figures are two of the most popular action figure lines for collectors. Here are five quick tips to build a shelf you are proud of, whether you are starting out or adding to a collection.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A carded Beast Wars reissue from our shop: the card and bubble are part of the item.</figcaption>
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
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A DC Multiverse Collector Edition figure: check the accessories listed on the box.</figcaption>
      </figure>
      <h2 style={h2}>Shop Transformers and DC Collectibles in Canada</h2>
      <p style={p}>You can browse our current selection of <Link href="/shop?category=Transformers" style={{ color: '#e8b820' }}>Transformers</Link> and <Link href="/shop?category=DC%20Comics" style={{ color: '#e8b820' }}>DC Comics</Link> collectibles at The Shelf Cartel, with real photos, honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick a line and a scale, check the packaging and accessories, and buy from a seller who shows real photos.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/star-wars-marvel-legends-collecting-guide-canada" style={{ color: '#e8b820' }}>Star Wars and Marvel Legends Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/ou-acheter-funko-pop-rares-canada" style={{ color: '#e8b820' }}>Where to Buy Rare Funko Pop Figures in Canada</Link></li></ul>
    </article>
  )
}
