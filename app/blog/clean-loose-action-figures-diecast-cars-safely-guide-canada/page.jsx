import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'How to Clean Loose Action Figures and Die-Cast Cars Safely'
const DESC = 'A gentle, step-by-step way to clean loose action figures, die-cast cars and plastic collectibles: dusting, mild soap, soft tools, what to avoid, drying, storage and when to leave a piece alone.'
const SEO_TITLE = 'Clean Action Figures and Die-Cast Cars Safely'
const SEO_DESC = 'Safe cleaning tips for loose action figures and die-cast cars: dust, mild soap, soft brushes, what to avoid, drying and storage for collectors in Canada.'
const SLUG = 'clean-loose-action-figures-diecast-cars-safely-guide-canada'
const IMG2 = 'https://i.ebayimg.com/images/g/~FQAAeSwiXpo0DVC/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/afAAAeSwxgFoB~U8/s-l1600.jpg'
const ALT2 = 'Hot Wheels 1998 Subaru Impreza 22B-STi in white from The 90s series, photographed by The Shelf Cartel'
const ALT3 = 'NECA TMNT The Last Ronin Lost Years Nightwatcher Donatello action figure, photographed by The Shelf Cartel'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG3, width: 1600, height: 1600, alt: ALT3 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG3] },
}

const sections = [
  { h: '1. Decide first: clean it or leave it', p: ['Not every piece needs cleaning. Light dust can be removed without water. Sealed, boxed or carded items should never be opened to clean them, only dusted on the outside. Very old or fragile pieces, painted details that look flaky and anything with a worn decal deserve extra care, and sometimes the best choice is to do nothing. If a piece is valuable to you, test your method on a spare item first.'] },
  { h: '2. Gather gentle tools', p: ['You need very little: a soft makeup or paint brush, a microfibre cloth, cotton swabs, a bowl of lukewarm water, a drop of mild dish soap and a clean towel. A soft toothbrush can help in grooves. Skip anything abrasive, such as scouring pads, rough paper towels or toothpaste.'] },
  { h: '3. Start with a dry dusting', p: ['Always begin dry. Brush dust from faces, joints, hair and vehicle details with the soft brush, working from the top down. Dry dusting often does most of the job, and it avoids water getting into places it should not go.'] },
  { h: '4. Mild soap and lukewarm water for stuck-on grime', p: ['If grime remains, dampen a cloth or swab with lukewarm water and a very small amount of mild soap. Wipe small areas at a time, then wipe again with a cloth dampened with plain water. Keep the cloth damp, not dripping. Hot water and strong cleaners can harm paint, plastic and glue.'] },
  { h: '5. Be careful with paint, decals and prints', p: ['Painted faces, printed logos and stickers can lift or smear. Do not rub them. Dab gently, check the cloth for colour, and stop at the first sign of transfer. Never soak a piece that has stickers, paper labels or hand-painted detail.'] },
  { h: '6. Die-cast cars: wheels, windows and base', p: ['For die-cast cars, brush dust from the body, windows and grille, then use a swab for the wheel wells. A cotton swab can lift grime around the axles. Do not soak the car, because water can stay trapped around the metal base and the axles. Printed details and decals should only be dabbed, never rubbed.'] },
  { h: '7. Action figures: joints, hair and accessories', p: ['Move joints only as far as they go easily. Dust around the joints with a soft brush and use a swab for tight spots. Hair, capes and fabric parts should be brushed, not scrubbed. Clean accessories separately and keep small pieces in a tray so nothing is lost down the drain.'] },
  { h: '8. What to avoid', p: ['Avoid acetone, nail polish remover, rubbing alcohol, bleach, glass cleaner and magic erasers. These can strip paint, cloud clear plastic or leave a sticky finish. Avoid the dishwasher, hot water and hair dryers. If you are unsure whether a product is safe, do not use it on the piece.'] },
  { h: '9. Dry completely before storing', p: ['Pat the piece with a clean towel and let it air dry in a well-ventilated spot away from direct sun and heat. Make sure no moisture stays in joints or wheel wells before you put the piece back on a shelf or in a case. Moisture trapped in a closed case can cause problems later.'] },
  { h: '10. Keep it clean: display and storage', p: ['A closed display case, shelf cover or storage box keeps most dust off. Keep pieces away from direct sunlight, which can fade colours, and away from damp basements. Our storage guide for die-cast and Funko collections shows ways to display without crowding.'] },
  { h: '11. Sticky or tacky plastic and other problems', p: ['If a piece feels sticky, has a strong smell, shows cracks or has paint that is coming off, stop cleaning. Aging plastic can behave differently from one piece to the next. Wipe off only what you can without pressure, store the piece separately from others, and consider asking in a collector community before trying stronger methods.'] },
  { h: '12. Questions collectors ask', p: ['Can I clean a figure still in its box? Only dust the outside of the packaging with a dry soft cloth. Does cleaning change the value? It can help a dusty piece look better, but damage from rough cleaning can lower it, so go slowly. Should I clean before selling? A gentle dry dusting and honest photos are usually enough, and our inspection guide shows what buyers check when a piece arrives.'] }
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    image: [IMG3],
    datePublished: '2026-11-21',
    dateModified: '2026-11-21',
    mainEntityOfPage: `${BASE}/blog/${SLUG}`,
    author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
    publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const a = { color: '#e8b820' }
  const fig = { width: '100%', maxWidth: 420, height: 'auto', aspectRatio: '1 / 1', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: TITLE, item: `${BASE}/blog/${SLUG}` }] }) }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,5vw,48px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>Loose figures and die-cast cars collect dust, fingerprints and grime over time. A gentle routine keeps them looking good without harming paint or plastic. Here is a careful way to clean your pieces, plus the mistakes to avoid.</p>
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="eager" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A loose action figure from our shop: dust it first and go gently around joints and paint.</figcaption>
      </figure>
      {sections.slice(0, 6).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      {sections.slice(6, 12).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={IMG2} alt={ALT2} width={1600} height={1600} loading="lazy" style={fig} />
        <figcaption style={{ color: '#a0a0ae', fontSize: 13, marginTop: 6 }}>A loose die-cast car: brush the body, then use a swab around wheels and windows.</figcaption>
      </figure>
      <h2 style={h2}>Shop collectibles in Canada</h2>
      <p style={p}>Browse <Link href="/shop?category=Hot%20Wheels" style={a}>Hot Wheels</Link>, <Link href="/shop?category=Funko%20Pop" style={a}>Funko Pop</Link> and <Link href="/shop?category=Action%20Figures" style={a}>action figures</Link> at The Shelf Cartel, with honest condition and shipping across Canada and the USA. See the <Link href="/shop" style={a}>full shop</Link> for the current selection.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: dust one loose piece with a soft brush today, and only reach for mild soap if the grime stays.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}>
        <li style={{ marginBottom: 6 }}><Link href="/blog/diecast-funko-storage-display-guide-canada" style={a}>Die-Cast and Funko Storage and Display Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/keep-collectibles-in-box-or-open-them-guide-canada" style={a}>Keep Collectibles in the Box or Open Them?</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/collectible-condition-terms-explained-canada" style={a}>Collectible Condition Terms Explained</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/what-to-check-when-your-collectible-arrives-canada" style={a}>Your Collectible Just Arrived: A 10-Minute Inspection Checklist</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/neca-action-figures-collecting-guide-canada" style={a}>NECA Action Figures Collecting Guide</Link></li>
        <li style={{ marginBottom: 6 }}><Link href="/blog/catalogue-and-insure-your-collection-canada-guide" style={a}>How to Catalogue and Insure Your Collection</Link></li>
      </ul></nav>
    </article>
  )
}
