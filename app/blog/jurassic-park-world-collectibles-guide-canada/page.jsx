import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Jurassic Park and Jurassic World Collectibles: Dinosaurs, Hot Wheels and Smart Buying'
const DESC = 'How to collect Jurassic Park and Jurassic World toys in Canada: dinosaur figures, Hot Wheels and Matchbox vehicles, ornaments and playsets. Check the line, the size, the packaging and the sounds before you buy.'
const SLUG = 'jurassic-park-world-collectibles-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/4qoAAeSwhd9pe62G/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/oSgAAeSwSARpqKjy/s-l1600.jpg'
const ALT1 = 'Hot Wheels Premium Pop Culture Jurassic Park 92 Jeep Wrangler Sahara diecast car, photographed by The Shelf Cartel'
const ALT2 = 'Mattel Jurassic World Chaos Theory Danger Pack with Guemesia dinosaur figure, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Decide what kind of Jurassic collector you are', p: ['Jurassic Park and Jurassic World cover a lot of ground: large roaring dinosaur figures, small articulated figures, playsets, Hot Wheels and Matchbox vehicles, Hallmark ornaments and nostalgic items from the original films. Picking one lane, for example dinosaurs only, or vehicles only, keeps your shelf focused and your budget under control.'] },
  { h: '2. Know the line and the size', p: ['The line name is printed on the box: Mattel releases include collections with different themes, sizes and features. Some dinosaurs are small enough for a desk, others are oversized pieces that need real shelf space. Check the size on the box or in the listing before you buy, because a figure that looks small in a photo can be very large in person.'] },
  { h: '3. Test the features and check the packaging', p: ['Many Jurassic World figures have moving jaws, lights, sounds or a grow or chomp feature. Ask the seller to confirm that these work and that batteries are included when the box says so.'], list: [
    'Box: crushed corners, torn window, price stickers and sun fading.',
    'Contents: small accessories, mini figures, stands and inserts should all be there.',
    'Figure: loose limbs, paint rubs, cracked plastic and working sounds or lights.'] },
  { h: '4. Vehicles and diecast: look at the car, the card and the series', p: ['Jurassic Park vehicles from Hot Wheels and Matchbox are popular with both dinosaur fans and diecast collectors. Premium releases often have metal bodies, real riders and detailed paint, so check the card for bends or soft corners and the car for paint chips. Our blog guide on Premium and mainline releases explains how to tell them apart.'] },
  { h: '5. Ornaments, sealed items and display', p: ['Hallmark ornaments and sealed playsets keep their appeal when the box stays in good shape. Keep sealed items out of direct sun and store them upright so the box does not bend. When shipping, choose a seller who packs boxed items with care and ships with tracking, across Canada and the USA.'] },
  { h: '6. Loose dinosaurs versus boxed sets', p: ['Loose dinosaurs are fun to pose and display, but check that the moving parts still work and that no accessory is missing. Boxed and sealed items keep more appeal for many collectors, as long as the box has no crushed corners or fading. Decide which you prefer before you buy so your shelf looks consistent.'] },
  { h: '7. Store and display your collection', p: ['Keep sun away from boxes and plastic, and avoid damp rooms that can warp cardboard. Large dinosaurs need a stable shelf, while small figures and diecast cars look good in a display case. If a figure has batteries for sounds or lights, take them out for long storage so they cannot leak.'] },
  { h: '8. Build a wish list and track what you own', p: ['Note the lines, dinosaurs and vehicles you want, and keep a simple list of what you already own. It avoids duplicates and helps you spot a good deal on a piece you have been looking for.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2],
    datePublished: '2026-11-11',
    dateModified: '2026-11-12',
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
      <p style={p}>Dinosaurs never go out of style. Whether you grew up with the first film or you collect the newer Jurassic World lines, here are five quick tips to buy smart and build a shelf worth showing off.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A Hot Wheels Premium Jurassic Park Jeep from our shop: check the card and the paint.</figcaption>
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
        <figcaption style={{ color: '#888', fontSize: 13, marginTop: 6 }}>A Jurassic World Danger Pack: confirm the contents and the features listed on the box.</figcaption>
      </figure>
      <h2 style={h2}>Shop Jurassic Park and Jurassic World in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop?category=Jurassic%20Park%20%2F%20World" style={{ color: '#e8b820' }}>Jurassic Park / World</Link> selection, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one lane, check the size and the packaging, and buy from a seller who shows real photos.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/hot-wheels-premium-vs-mainline" style={{ color: '#e8b820' }}>Hot Wheels Premium vs Mainline</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/transformers-dc-multiverse-collecting-guide-canada" style={{ color: '#e8b820' }}>Transformers and DC Multiverse Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/matchbox-collecting-guide-vintage-collectors" style={{ color: '#e8b820' }}>Matchbox Collecting Guide for Vintage Collectors</Link></li></ul>
    </article>
  )
}
