import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'Video Game Collectibles: Figures from Zelda Season to Sonic, PlayStation and Mortal Kombat'
const DESC = 'The Zelda 40th anniversary has video game collecting buzzing. Learn how to buy video game action figures in Canada: pick a franchise, check the scale, the accessories and the box.'
const SLUG = 'video-game-collectibles-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/OqsAAOSwuoVoBreF/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/CdYAAeSwmwNpaEov/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/vngAAeSw65BqbT16/s-l1600.jpg'
const ALT1 = 'PlayStation Ghost of Tsushima 6 inch Jin Sakai Samurai action figure with two accessories, photographed by The Shelf Cartel'
const ALT2 = 'Sonic the Hedgehog Knuckles 6 inch Collectors Edition figure by Jakks Pacific, photographed by The Shelf Cartel'
const ALT3 = 'McFarlane Toys Mortal Kombat Klassic Johnny Cage action figure 2026, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Pick a franchise, not just a console', p: ['Video game collectibles cover a huge range, so a clear lane keeps your shelf (and your budget) under control. Popular lanes right now:'], list: [
    'PlayStation heroes: Ghost of Tsushima, God of War, Horizon and The Last of Us figures, usually 6 inch.',
    'Sega and Sonic: Jakks Pacific Sonic figures, including the playful Sonic x DC crossovers.',
    'Fighting games: McFarlane Mortal Kombat Klassic and the Street Fighter crossover figures.',
    'Nintendo: Mario, Metroid and other classic characters in 2.5 to 12 inch sizes.'],
    after: 'Zelda’s 40th anniversary and the Switch 2 holiday rush are pulling a lot of attention toward gaming, which is why Nintendo-themed items can sell quickly this season.' },
  { h: '2. Check the scale before you buy', p: ['Most video game figures are 4, 5, 6 or 7 inches, but brands do not always match. A 6 inch PlayStation figure will not line up with a 5 inch Sonic. If you want a consistent display, stick to one scale per shelf and read the size in the listing before you order.'] },
  { h: '3. Count the accessories', p: ['Weapons, alternate hands, masks and stands are easy to lose and hard to replace. For a loose figure, ask for photos with every accessory laid out. For a figure in the box, check that the tray still holds each piece and that the plastic window is not cracked.'] },
  { h: '4. Judge the packaging and the condition', p: ['Sealed boxes with sharp corners, no creases and a clear window carry the best value for collectors who display in package. Loose figures are cheaper and perfect if you enjoy posing them. Both are fine as long as the listing describes the condition honestly and shows real photos of the actual item.'] },
  { h: '5. Games, consoles and retro items', p: ['If you also collect the games themselves, complete copies with the case, disc and manual are worth more than loose discs. Retro gaming decor, such as Sega Genesis dioramas, is a small, affordable way to add character to a gaming shelf. Always check the region (NTSC North America for Canadian consoles) and test what you can.'] },
  { h: '6. Display and protect your collection', p: ['Direct sunlight fades paint and yellows plastic, so keep figures away from windows. Use a closed cabinet or acrylic cases to limit dust, wipe loose figures gently with a soft dry brush, and never store them in a hot attic or a damp basement. For boxed pieces, a clear protective case keeps corners sharp and the window clean.', 'Stands help a lot with top-heavy figures. Small posing stands and clear risers also let you build a layered display, with a tall character at the back and smaller ones in front.'] },
  { h: '7. Set a simple budget and a wish list', p: ['Decide what you can spend per month before you start browsing. Write a short wish list of three to five figures, ranked by how much you want them, and buy one at a time. This avoids impulse purchases and makes it easier to wait for a fair price instead of overpaying for hype.', 'Remember to add shipping to your total. Buying several figures from the same seller in one order usually saves on delivery and gives you one parcel to track.'] },
  { h: '8. Buy smart during the holiday rush', p: ['New releases and anniversary editions get scalped and overpriced. Compare recent sold prices instead of listing prices, skip anything that sounds too good to be true, and order early so your gift arrives before the holidays.'] },
  { h: '9. Read the listing like a collector', p: ['Check the title for the franchise, character, brand and scale, then compare it with the photos. Make sure the figure in the pictures is the one described, and look for the manufacturer name on the box or the base. If something is unclear, ask the seller before you order. A good seller will happily send extra photos of the accessories, the back of the box and any flaws.'] },
  { h: '10. Gift ideas for every kind of gamer', p: ['Match the gift to the player. A fan of a single franchise will love one more character from that series, a retro gamer will enjoy a loose figure or a piece of gaming decor, and a younger player will often prefer a colourful Sonic or Nintendo figure over a serious display piece. For a small budget, one loose figure with all its accessories makes a thoughtful stocking stuffer. Check the return policy and the shipping time if you are buying close to a holiday.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG1, IMG2, IMG3],
    datePublished: '2026-11-11',
    dateModified: '2026-11-13',
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
      <p style={p}>The Legend of Zelda turns 40, the Switch 2 is on every wish list and gaming is all over the holiday conversation. That makes this a great moment to start (or grow) a collection of video game figures and collectibles. Here is how to buy well in Canada, whether you love PlayStation heroes, Sonic, Mortal Kombat or Nintendo classics.</p>
      <figure style={fig}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={img} />
        <figcaption style={cap}>A 6 inch PlayStation figure from our shop: check the scale and the accessories.</figcaption>
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
        <figcaption style={cap}>Sonic figures often come as Collectors Edition 6 inch releases.</figcaption>
      </figure>
      {sections.slice(2, 4).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={fig}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="lazy" style={img} />
        <figcaption style={cap}>Fighting game figures like Mortal Kombat Klassic are popular with display collectors.</figcaption>
      </figure>
      {sections.slice(4).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <h2 style={h2}>Where to find video game collectibles in Canada</h2>
      <p style={p}>Browse our current selection of <Link href="/shop?category=Action%20Figures" style={{ color: '#e8b820' }}>action figures</Link> and the rest of <Link href="/shop" style={{ color: '#e8b820' }}>our shop</Link> for PlayStation, Sonic, Mortal Kombat, Nintendo and more, with honest condition notes and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one franchise, set a budget and add your first figure. A focused shelf always beats a crowded one.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/star-wars-marvel-legends-collecting-guide-canada" style={{ color: '#e8b820' }}>Star Wars and Marvel Legends Collecting Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/tmnt-collectibles-guide-canada" style={{ color: '#e8b820' }}>Teenage Mutant Ninja Turtles Collectibles Guide</Link></li></ul>
    </article>
  )
}
