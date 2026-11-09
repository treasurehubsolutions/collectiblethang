import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'How to Start a Hot Wheels Collection: A Beginner’s Guide for Canadian Collectors'
const DESC = 'Pick a theme, learn the difference between mainline and Premium, check condition, store your cars and buy smart. A simple beginner guide for Hot Wheels collectors in Canada.'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/guide-debuter-collection-hot-wheels` },
  openGraph: { title: TITLE, description: DESC, type: 'article' },
}

const sections = [
  { h: '1. Decide what you want to collect', p: ['You do not need to collect everything. Most collectors pick a theme and stick to it:'], list: [
    'A brand or make: Datsun, Porsche, Ford Mustang, Nissan Skyline.',
    'A series: Car Culture, Fast & Furious, Pop Culture, Boulevard.',
    'A style: JDM, American muscle, off-road trucks, movie and TV cars.',
    'A color or era: all black cars, vintage 1970s castings, and so on.'],
    after: 'A clear theme makes it easier to spot a good deal, and it gives your shelf a story.' },
  { h: '2. Know the difference between mainline and Premium', p: [
    'Mainline cars are the standard blister-pack models you find in stores. Premium cars, such as Car Culture and Boulevard, usually have metal bases, rubber “Real Riders” tires and more detailed paint. They cost more, but many collectors find the extra detail worth it. If you are unsure, start with a few mainline cars and add a few Premium pieces of the lines you like most.'] },
  { h: '3. Check the condition before you buy', p: ['Condition changes the value of a car more than most beginners expect. Look at:'], list: [
    'The card and blister: bent corners, creases or dents lower the value of a carded car.',
    'The paint and wheels: chips, scratches or loose axles matter on loose cars.',
    'The photos: always buy from sellers who show real photos of the actual item, not stock images.'] },
  { h: '4. Store your cars properly', p: ['Protect your cars from sunlight, humidity and crushing. Protector cases for carded cars and simple display shelves for loose ones are inexpensive and keep your collection in good shape.'] },
  { h: '5. Buy smart: lots, singles and fair prices', p: ['Lots can be a great way to build a collection fast, but check what is really inside and compare prices with recent sold listings before you buy. Singles let you target exactly the models you want. A fair price, clear photos and honest condition notes are the signs of a seller you can trust.'] },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    mainEntityOfPage: `${BASE}/blog/guide-debuter-collection-hot-wheels`,
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" style={{ color: '#888', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Starting a Hot Wheels collection is easy, cheap and addictive. Whether you grew up racing these cars on orange track or you just discovered the Car Culture lines, a few simple choices at the start will save you money and keep your collection fun instead of overwhelming.</p>
      {sections.map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
          {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
          {s.after && <p style={p}>{s.after}</p>}
        </section>
      ))}
      <h2 style={h2}>Where to find Hot Wheels in Canada</h2>
      <p style={p}>You can browse our current selection of <Link href="/shop?category=Hot%20Wheels" style={{ color: '#e8b820' }}>Hot Wheels</Link> and <Link href="/shop?category=Hot%20Wheels%20Premium" style={{ color: '#e8b820' }}>Hot Wheels Premium</Link> at The Shelf Cartel, with real photos, honest condition and shipping across Canada and the USA. Check back often: new items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one theme, set a small budget, and pick up your first three cars. That is how every great collection starts.</p>
    </article>
  )
}
