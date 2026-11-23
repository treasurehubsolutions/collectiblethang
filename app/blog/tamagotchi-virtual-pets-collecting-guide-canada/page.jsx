import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = "Tamagotchi and Virtual Pets in Canada: A Collector Buying Guide"
const DESC = "How to buy and collect Tamagotchi and other virtual pets in Canada: original vs reissue, shell and screen condition, battery tests, spotting fakes, comparing sold prices and shipping safely."
const SEO_TITLE = "Tamagotchi Collecting Guide"
const SEO_DESC = "Collecting Tamagotchi and virtual pets in Canada: original or reissue, condition, battery tests, fakes and sold prices."
const SLUG = 'tamagotchi-virtual-pets-collecting-guide-canada'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC },
}

const sections = [
  { h: '1. Why virtual pets are collectible', p: ['Tamagotchi and other handheld virtual pets are small egg-shaped or pocket-sized toys with a tiny screen and a creature you feed, play with and care for. Collectors enjoy the nostalgia, the many shell colours and designs, and the different generations and character sets. Because they are small, battery powered and often played with, condition and working order matter a great deal.'] },
  { h: '2. Choose a focus before you buy', p: ['A clear focus keeps prices easier to compare and your shelf consistent.'], list: [
    'Generation: original 1990s style, later reissues, or a recent colour or collaboration release.',
    'Shell design: one colour family, one theme or one character set.',
    'State: sealed in the package, working and complete, or display-only for parts.'] },
  { h: '3. Original, reissue or look-alike: know what you are buying', p: ['Original releases, anniversary reissues and recent models can look similar in photos but differ in packaging, screen, buttons and features. Ask the seller to name the exact model and release, and compare only like with like. If a listing only says virtual pet or egg toy, ask for photos of the front, back and any markings before you buy.'] },
  { h: '4. Check shell, screen and buttons', p: ['Look for scratches, yellowing, sun fading, cracked shells and worn paint. On the screen, check for dead pixels, faint lines and stains behind the glass or plastic. Press each button, if the seller can test them, and ask whether any button feels stuck, mushy or loose. Cleaning marks and missing parts such as the chain or cover should be shown in the photos.'] },
  { h: '5. Batteries, power and testing', p: ['Battery corrosion is a common problem on older electronic toys. Ask whether the battery compartment is clean and whether the seller has powered the toy on and tested the screen and sound. A listing that says untested may not work, so allow for that in the price you are willing to pay. Some pets can reset when the battery is removed, so ask the seller not to reset a toy unless it is needed.'] },
  { h: '6. Sealed, boxed and loose', p: ['A sealed package keeps the toy unused but you cannot test it, so check the box for creases, tears, price stickers and sun fading. A loose toy can be tested but may be missing its package and paperwork. Decide whether you want a display piece or a pet to play with, and buy the state that fits.'] },
  { h: '7. Spotting fakes and look-alikes', p: ['Imitations of popular virtual pets are common. Warning signs include very low prices, odd packaging, blurry printing, rough moulding, wrong logos and a screen or button layout that does not match the official model. Ask for clear photos of the markings and packaging. Our fake and bootleg guide lists more warning signs.'] },
  { h: '8. Compare sold prices, not asking prices', p: ['Search the exact model, colour and condition, filter to sold listings and compare several recent sales. Asking prices only show what sellers hope for. Add shipping to every price and check whether the item is working, untested or for parts.'] },
  { h: '9. Shipping, customs, cleaning and storage', p: ['Choose tracked shipping and ask how the seller packs small electronics so the shell and screen are protected. If you buy from the USA or overseas, confirm duties, taxes and delivery time first. At home, wipe the shell gently with a soft slightly damp cloth, avoid liquids near the screen and buttons, and dry it well. Store pets in a small box or bag away from direct sun and heat, and remove the battery from any toy you will not use for a while.'] },
  { h: '10. Questions collectors ask', p: ['Should I keep a virtual pet sealed or play with it? Sealed pieces keep the package intact, while a played pet is more fun, so choose what you enjoy or buy one of each. Are virtual pets a good investment? Prices move with demand, model and condition, so collect what you like and treat any resale value as a bonus.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    datePublished: '2026-11-23',
    dateModified: '2026-11-23',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: TITLE, item: `${BASE}/blog/${SLUG}` }] }) }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Original or reissue, working or untested, real or fake: here is how to check the shell, screen and battery, avoid look-alikes and compare real sold prices before you buy Tamagotchi and other virtual pets in Canada.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
        </section>
      ))}
      <h2 style={h2}>Shop Collectibles in Canada</h2>
      <p style={p}>Browse our current <Link href="/shop" style={{ color: '#e8b820' }}>toys and collectibles</Link>, with honest condition and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: choose one model or generation, check that it works and its condition, and buy from a seller who shows real photos.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
<ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/retro-80s-90s-nostalgia-toys-collecting-guide-canada" style={{ color: '#e8b820' }}>Retro 80s and 90s Nostalgia Toys Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/video-game-collectibles-guide-canada" style={{ color: '#e8b820' }}>Video Game Collectibles Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/kidult-collectors-starter-guide-canada" style={{ color: '#e8b820' }}>Kidult Collectors Starter Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={{ color: '#e8b820' }}>Collectible Condition Terms Explained</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-spot-fake-bootleg-collectibles-canada" style={{ color: '#e8b820' }}>How to Spot Fake and Bootleg Collectibles</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/how-to-check-collectible-value-sold-listings-canada" style={{ color: '#e8b820' }}>How to Check a Collectible Value With Sold Listings</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={{ color: '#e8b820' }}>Keep Collectibles in the Box or Open Them?</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={{ color: '#e8b820' }}>What to Check When Your Collectible Arrives</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/lol-surprise-hatchimals-surprise-toys-collecting-guide-canada" style={{ color: '#e8b820' }}>LOL Surprise, Hatchimals and Surprise Toys Guide</Link></li></ul></nav>
    </article>
  )
}
