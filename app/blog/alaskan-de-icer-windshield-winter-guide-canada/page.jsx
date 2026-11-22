import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const SEO_TITLE = 'Best Windshield De-Icer Spray in Canada'
const TITLE = 'Best Windshield De-Icer Spray in Canada: Alaskan Multi-Purpose De-Icer 3-Pack (Dégivrant Polyvalent) Winter Guide'
const SEO_DESC = 'How to defrost a frozen windshield fast in Canada: how de-icer spray works, safe use on glass and locks, and the Alaskan 3-pack. Guide FR/EN.'
const DESC = 'How to defrost a frozen windshield fast in Canada: how de-icer spray works, safe use on glass, locks and mirrors, and why the Alaskan Multi-Purpose De-Icer 3-pack (3 x 445 g, up to -31°C) is a winter essential. Guide bilingue FR/EN.'
const SLUG = 'alaskan-de-icer-windshield-winter-guide-canada'
const PRODUCT = `${BASE}/product/490315ae-5c9f-41d2-8bbb-6600e159cf29`
const SB = 'https://eptnfpvwfxloimmbzxcl.supabase.co/storage/v1/object/public/product-images/'
const IMG1 = `${SB}1794872955953-mkwhzadi158.jpg`
const IMG2 = `${SB}1794872955359-0e61byhj7dvd.jpg`
const ALT1 = 'Alaskan Multi-Purpose De-Icer (Dégivrant Polyvalent) 3-pack of 445 g spray cans, sold by The Shelf Cartel in Canada'
const ALT2 = 'Alaskan windshield de-icer 3 x 445 g spray cans in shrink wrap, ready to ship from Quebec'

export const metadata = {
  title: `${SEO_TITLE} | The Shelf Cartel`,
  description: SEO_DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: SEO_TITLE, description: SEO_DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why a frozen windshield is more than an annoyance', p: ['From November to March, a lot of Canadians start the morning scraping. A thin layer of frost or ice on the windshield, side windows and mirrors cuts visibility, adds minutes to every trip and is hard on wipers and your hands. Freezing rain and wet snow that turns to ice overnight make it worse. A de-icer spray gives you a fast way to clear the glass so you can drive safely, with less scraping and less waiting for the engine to warm up.'] },
  { h: '2. How a de-icer spray works', p: ['A de-icer spray is made to lower the freezing point of the ice on a surface. When it touches frost or a thin layer of ice, it starts to break the bond between the ice and the glass, so the ice softens and can be wiped or wiped away with the wipers. It works best on frost, ice and light snow. It is not a replacement for clearing thick snow or for common sense: always clear all windows, mirrors, lights and the roof before you drive.'] },
  { h: '3. What to look for before you buy', p: ['Not all winter sprays are the same. Before you pick one, check these points:'], list: [
    'Temperature rating: the Alaskan label says it is effective down to -31°C, which matters in Quebec, Ontario and the Prairies.',
    'Multi-purpose use: a good de-icer is not only for the windshield. It should also be made for mirrors, rear windows and locks.',
    'Size and quantity: a 445 g can lasts through many mornings, and a 3-pack covers the car, the house and a backup in the trunk.',
    'Bilingual label and safety information: look for clear instructions in English and French, plus the hazard symbols.',
    'Price per can: a 3-pack is usually cheaper per can than buying singles when stores run out in the first cold snap.'] },
  { h: '4. Alaskan Multi-Purpose De-Icer, 3 x 445 g: what it is', p: ['Alaskan Multi-Purpose De-Icer, in French Dégivrant Polyvalent, is a Canadian-branded aerosol spray from Premier Tech. The label says it melts frost, ice and light snow in seconds and helps prevent ice and snow build-up. It is made for windshields and also for wiper blades, side mirrors, rear windows, door locks, screen doors and patio doors, outdoor taps, garbage bin lids and garage doors. Our listing is a pack of three 445 g cans, new, ready to ship from Quebec.'] },
  { h: '5. How to use it step by step', p: ['Follow the label first, then use these simple steps:'], list: [
    'Start the car and turn on the defrost if you can, so the glass is not freezing cold.',
    'Shake the can and hold it upright about 15 to 20 cm from the glass.',
    'Spray directly onto the frost or ice, working from the top of the windshield down.',
    'Wait a few seconds, then use the wipers or a soft cloth to clear the loosened ice.',
    'Repeat on stubborn spots. Do not scrape hard on dry glass with a metal tool.'],
    after: 'Spray the rubber of the wiper blades and the edges of the doors only as the label allows. Avoid prolonged contact with painted surfaces and test on a small hidden area first.' },
  { h: '6. Locks, mirrors, garage doors and taps', p: ['A good winter spray earns its place beyond the windshield. A frozen car door lock is a classic problem: a short spray near the keyhole can free it so the key turns. Side mirrors that are coated in ice can be cleared in seconds so you can check your blind spots. Garage doors, screen doors and patio door tracks can freeze shut, and so can outdoor taps and garbage bin lids on collection day. Keep one can in the house, one in the car and one by the door.'] },
  { h: '7. Safety: flammable aerosol, handle with care', p: ['The Alaskan can carries the hazard pictograms for a flammable aerosol under pressure. Treat it like any other aerosol product. Keep it away from flames, sparks, cigarettes and heat, do not puncture or burn the can, and keep it out of reach of children. Use it outdoors or in a well-ventilated space. Do not store cans in a hot car in summer. Read the full label before use.'] },
  { h: '8. Simple habits that prevent ice on your car', p: ['A spray is the fast fix, but a few habits reduce how much ice forms in the first place. Park facing east when you can so the morning sun helps. Lift the wiper arms off the glass the night before a freezing rain forecast. Cover the windshield with a sheet or a cardboard cover. Keep the washer fluid rated for winter. And keep a good ice scraper and a snow brush in the car anyway, because a spray works best as part of the kit and not as the only tool.'] },
  { h: '9. Shipping in Canada: what to know about aerosols', p: ['Aerosol cans are regulated goods, so shipping them follows special rules and can be slower or limited to ground service. At The Shelf Cartel we ship from Quebec and we check the available service for each destination at checkout. If you live in Quebec, you can also ask about local pickup in the Mauricie region. Order before the first big freeze so you are not stuck waiting during a cold snap.'] },
  { h: '10. Guide rapide en français : dégivrant pour pare-brise au Canada', p: ['Le dégivrant polyvalent Alaskan en format de 3 canettes de 445 g est conçu pour faire fondre le givre, la glace et la neige légère en quelques secondes. Il est efficace jusqu\'à -31 °C selon l\'étiquette et convient au pare-brise, aux lames d\'essuie-glaces, aux rétroviseurs latéraux, aux vitres arrières, aux serrures de portes, aux portes moustiquaires et portes-fenêtres, aux robinets extérieurs, aux couvercles de poubelles et aux portes de garage. Vaporisez directement sur la surface gelée, attendez quelques secondes et essuyez. Attention : produit en aérosol inflammable, à tenir loin des flammes et des enfants.'] },
]

const faqs = [
  { q: 'What temperature does the Alaskan De-Icer work down to?', a: 'The label says the Alaskan Multi-Purpose De-Icer is effective down to -31°C.' },
  { q: 'Can I use de-icer spray on car windows and mirrors?', a: 'Yes. It is made for windshields, side mirrors, rear windows and door locks. Spray on the ice, wait a few seconds and wipe or use the wipers. Test on painted surfaces first and avoid prolonged contact with paint.' },
  { q: 'How many cans are in the pack?', a: 'The listing is a 3-pack of 445 g spray cans, new.' },
  { q: 'Is the de-icer spray flammable?', a: 'Yes. It is an aerosol with flammable and under-pressure hazard pictograms. Keep it away from flames and heat, use it in a ventilated area and keep it away from children.' },
  { q: 'Où acheter un dégivrant pour pare-brise au Québec?', a: 'The Shelf Cartel vend le dégivrant polyvalent Alaskan en paquet de 3 canettes de 445 g, expédié depuis le Québec, avec ramassage possible dans la région de la Mauricie.' },
]

export default function Article() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: TITLE,
        description: DESC,
        image: [IMG1, IMG2],
        datePublished: '2026-11-16',
        dateModified: '2026-11-16',
        inLanguage: 'en-CA',
        mainEntityOfPage: `${BASE}/blog/${SLUG}`,
        author: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
        publisher: { '@type': 'Organization', name: 'The Shelf Cartel', url: BASE },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  }
  const h2 = { fontFamily: 'Bebas Neue', fontSize: 26, letterSpacing: 1.5, color: '#e8b820', margin: '32px 0 10px' }
  const p = { color: '#c8c8d4', fontSize: 16, lineHeight: 1.75, margin: '0 0 12px' }
  const img = { width: '100%', maxWidth: 420, height: 'auto', objectFit: 'contain', background: '#0f0f1c', borderRadius: 10 }
  const fig = { margin: '20px 0', textAlign: 'center' }
  const cap = { color: '#a0a0ae', fontSize: 13, marginTop: 6 }
  const link = { color: '#e8b820' }
  const render = s => (
    <section key={s.h}>
      <h2 style={h2}>{s.h}</h2>
      {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
      {s.list && <ul style={{ ...p, paddingLeft: 22 }}>{s.list.map(l => <li key={l} style={{ marginBottom: 6 }}>{l}</li>)}</ul>}
      {s.after && <p style={p}>{s.after}</p>}
    </section>
  )
  return (
    <article style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: TITLE, item: `${BASE}/blog/${SLUG}` }] }) }} />
      <Link href="/blog" aria-label="Back to the blog" style={{ color: '#a0a0ae', fontSize: 13, textDecoration: 'none' }}>{'← Blog'}</Link>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(30px,5vw,46px)', letterSpacing: 1.5, color: '#fff', lineHeight: 1.05, margin: '14px 0 16px' }}>{TITLE}</h1>
      <p style={p}>When the first cold snap hits, a frozen windshield can make you late and make driving unsafe. A good de-icer spray clears frost and light ice in seconds, so you can see and go. Here is how it works, how to use it safely and what to look for, with a look at the Alaskan Multi-Purpose De-Icer 3-pack. <Link href={PRODUCT} style={link}>See the 3-pack in our shop</Link>.</p>
      <figure style={fig}>
        <img src={IMG1} alt={ALT1} width={800} height={800} loading="eager" style={img} />
        <figcaption style={cap}>Alaskan Multi-Purpose De-Icer, pack of three 445 g cans, from The Shelf Cartel.</figcaption>
      </figure>
      {sections.slice(0, 4).map(render)}
      <figure style={fig}>
        <img src={IMG2} alt={ALT2} width={800} height={800} loading="lazy" style={img} />
        <figcaption style={cap}>The 3-pack ships new from Quebec. Aerosol rules apply to shipping.</figcaption>
      </figure>
      {sections.slice(4).map(render)}
      <section>
        <h2 style={h2}>Frequently asked questions</h2>
        {faqs.map(f => (
          <div key={f.q} style={{ marginBottom: 14 }}>
            <h3 style={{ color: '#fff', fontSize: 17, margin: '0 0 4px' }}>{f.q}</h3>
            <p style={p}>{f.a}</p>
          </div>
        ))}
      </section>
      <h2 style={h2}>Get your de-icer before the next freeze</h2>
      <p style={p}>The <Link href={PRODUCT} style={link}>Alaskan Multi-Purpose De-Icer 3-pack (3 x 445 g)</Link> is available now at The Shelf Cartel for $25.00 CAD. Browse <Link href="/shop" style={link}>the full shop</Link> for more finds, and see our <Link href="/livraison" style={link}>shipping information</Link> for delivery options across Canada.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: keep one can in the car, one at the door and one in reserve before the first big freeze.</p>
      <nav aria-label="Related reading"><h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={link}>Holiday Gift Guide for Collectors in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-stocking-stuffers-under-20-canada" style={link}>Collector Stocking Stuffers Under $20</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/black-friday-collectibles-guide-canada" style={link}>Black Friday Collectibles Guide for Canada</Link></li></ul></nav>
    </article>
  )
}
