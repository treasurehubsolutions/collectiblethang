import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'G.I. Joe Classified Collecting Guide: Retro Cardbacks, 6 Inch Figures and Smart Buying'
const DESC = 'Collecting G.I. Joe in Canada: Classified Series 6 inch figures, retro cardbacks, vehicles and sets. How to check condition, packaging and buy smart.'
const SLUG = 'gi-joe-classified-collecting-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/cvYAAeSwgCFn8we9/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/xVwAAeSw5NJqg0Pf/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/SQUAAeSw6fRqgOJk/s-l1600.jpg'
const ALT1 = 'G.I. Joe Classified Series Snake Eyes 6 inch action figure by Hasbro, photographed by The Shelf Cartel'
const ALT2 = 'G.I. Joe Classified Retro Cardback Vincent Falcon 6 inch figure, photographed by The Shelf Cartel'
const ALT3 = 'G.I. Joe Ninja Commando 4x4 and Cobra H.I.S.S. construction set, new sealed, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why G.I. Joe is a great line to collect', p: ['G.I. Joe mixes nostalgia with a modern, well-sculpted line. Many collectors grew up with the team and the Cobra villains, and today’s 6 inch Classified Series brings those characters back with lots of articulation and detail. It is easy to start small, with one favourite character, and grow from there.'] },
  { h: '2. Know the main types', p: ['G.I. Joe collectibles come in a few families:'], list: [
    'Classified Series 6 inch figures: the main modern line from Hasbro, with numbered figures and deluxe versions.',
    'Retro Cardback releases: figures in packaging that recalls the classic vintage cards, loved for display.',
    'Vehicles and construction sets: buildable vehicles and playsets that pair well with figures.',
    'Crossovers and multi-packs: special collaborations and 2-packs that bring characters together.'],
    after: 'Choose one family first. A focused shelf looks better and costs less than a bit of everything.' },
  { h: '3. Check condition and packaging', p: ['For carded figures, look at the corners, the bubble and any creases or shelf wear. Retro cardbacks are bought for their packaging, so ask for photos of the front, the back and every corner. For loose figures, check that all the accessories are included and that the joints are tight.'] },
  { h: '4. Understand numbers, waves and exclusives', p: ['Classified figures often carry a number on the package, and some versions are deluxe, convention or store exclusives. Read the title and description closely: the number, the character name and the word “exclusive” tell you exactly which version you are getting. Exclusives can be harder to find later, which is why collectors watch for them.'] },
  { h: '5. Cobra, Joes and the characters people hunt', p: ['Fans often start with fan-favourite ninjas such as Snake Eyes and Storm Shadow, then add Cobra troopers like the Viper to build a squad. Buying figures from the same wave or theme gives a shelf that looks like a scene rather than a random group.'] },
  { h: '6. Vehicles and sets: parts and seals', p: ['For construction sets and vehicles, a sealed box is the safest choice because all the pieces are inside. If a set is opened, ask whether the parts are complete and whether the instructions are included. Big boxes cost more to ship, so count shipping before you buy.'] },
  { h: '7. Display and protect your collection', p: ['Keep figures away from direct sun, which fades paint and plastic. Use shelves or a display case, and keep the original packaging if you plan to resell one day. For carded figures, clear protective cases keep the corners sharp.'] },
  { h: '8. Set a budget and a wish list', p: ['Write down the characters and versions you want, then set a limit for each. Compare the total with shipping, check clear photos and be patient. A wish list stops impulse buying and helps you spot a good deal when it appears.'] },
  { h: '9. Read the listing like a collector', p: ['Before you buy, read the whole title and description. Check the character, the series, the scale and whether the figure is carded, boxed or loose. Look for notes about accessories, because a missing weapon or stand changes the value. If something is unclear, ask for extra photos of the back of the package and of any marks. A clear answer from the seller is a good sign.'] },
  { h: '10. Gift ideas for every kind of G.I. Joe fan', p: ['For a long-time fan, a classic character like Snake Eyes in a retro cardback is a safe pick. For a younger fan, a sturdy loose figure or a construction set is fun to play with. For a collector who already has a lot, a deluxe or exclusive version is a nice surprise. Keep the packaging in good shape and order early in the season so shipping is never a worry.'] },
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
      <p style={p}>Whether you grew up with the Joes and Cobra or you are discovering them now, G.I. Joe makes great shelf pieces and great holiday gifts. Here is how to buy well in Canada, from Classified Series figures to retro cardbacks and sets.</p>
      <figure style={fig}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={img} />
        <figcaption style={cap}>Snake Eyes from the Classified Series: a fan favourite and a great starting point.</figcaption>
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
        <figcaption style={cap}>Retro Cardback figures like this one are made to be displayed in their packaging.</figcaption>
      </figure>
      {sections.slice(2, 4).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={fig}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="lazy" style={img} />
        <figcaption style={cap}>Sealed construction sets like this Ninja Commando 4x4 are easy gifts and fun displays.</figcaption>
      </figure>
      {sections.slice(4).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <h2 style={h2}>Where to find G.I. Joe collectibles in Canada</h2>
      <p style={p}>Browse <Link href="/shop" style={{ color: '#e8b820' }}>our shop</Link> for G.I. Joe figures, vehicles and more, with honest condition notes and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one character or one wave, set a budget and add your first figure. A focused shelf always beats a crowded one.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/star-wars-marvel-legends-collecting-guide-canada" style={{ color: '#e8b820' }}>Star Wars and Marvel Legends Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/wwe-wrestling-collectibles-guide-canada" style={{ color: '#e8b820' }}>WWE and Wrestling Collectibles Guide</Link></li></ul>
    </article>
  )
}
