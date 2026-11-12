import Link from 'next/link'

const BASE = 'https://theshelfcartel.com'
const TITLE = 'VHS Tapes and DVDs for Collectors in Canada: Condition, Language and Smart Buying'
const DESC = 'Collecting VHS tapes and DVDs in Canada: how to judge tape and case condition, understand English and French editions, buy lots wisely and store your movies.'
const SLUG = 'vhs-tapes-collecting-guide-canada'
const IMG1 = 'https://i.ebayimg.com/images/g/5DsAAOSw6P1nno50/s-l1600.jpg'
const IMG2 = 'https://i.ebayimg.com/images/g/IbAAAeSwgX9nw9CE/s-l1600.jpg'
const IMG3 = 'https://i.ebayimg.com/images/g/90MAAeSwUFtoM5BR/s-l1600.jpg'
const ALT1 = 'Columbo VHS tape lot, Columbia House Collector’s Edition, photographed by The Shelf Cartel'
const ALT2 = 'The Grudge VHS in a French edition, photographed by The Shelf Cartel'
const ALT3 = 'Six Days Seven Nights VHS tape, English edition, photographed by The Shelf Cartel'

export const metadata = {
  title: `${TITLE} | The Shelf Cartel`,
  description: DESC,
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, type: 'article', url: `${BASE}/blog/${SLUG}`, siteName: 'The Shelf Cartel', locale: 'en_CA',
    images: [{ url: IMG1, width: 1600, height: 1600, alt: ALT1 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [IMG1] },
}

const sections = [
  { h: '1. Why people collect VHS and DVD', p: ['Physical movies are having a quiet comeback. A tape or a disc is yours to keep, it does not disappear when a streaming catalogue changes, and many older titles are simply not available online. For some collectors it is pure nostalgia, for others it is the cover art, the old trailers at the start of a tape or the hunt for a title they watched as a kid.'] },
  { h: '2. Pick a lane', p: ['A collection that is focused is easier to build and to afford. Popular lanes include:'], list: [
    'A genre: horror, sci-fi, action, comedy or classic dramas.',
    'An actor or a TV series: for example box sets and tape lots of a long-running detective show.',
    'A format: sealed DVD seasons, big box VHS releases or special collector’s editions.',
    'A language: English titles, French dubbed releases or bilingual editions, which matter a lot in Canada.'],
    after: 'Once you know your lane, it is much easier to spot a good deal in a lot of tapes.' },
  { h: '3. Check the tape, not just the box', p: ['For VHS, the cardboard sleeve and the plastic case are only half of the story. Ask the seller whether the tape has been tested, and look at the photos for the label, the spine and the screws on the shell. A tape that was stored flat in a dry place is a better bet than one that sat in a damp basement. Words like “tested” or “plays well” in the listing are a good sign, and a clear photo of each tape is even better.'] },
  { h: '4. Check the case, sleeve and disc', p: ['For DVDs, look for scratches on the disc surface, cracks in the case and a clean insert. A sealed disc keeps the best value, but remember that a “new” label should always be backed by photos of the shrink wrap. For both formats, small details such as a rental sticker, a faded spine or a torn sleeve are worth knowing about before you pay.'] },
  { h: '5. English, French and regional editions', p: ['In Canada you will find the same movie in English and in a French dubbed edition, sometimes with a different title and different cover art. Read the title and the photos carefully so you get the language you want. French editions of some films can be harder to find, which is exactly why collectors like them. For DVDs, also check that the region code matches your player.'] },
  { h: '6. Buying lots wisely', p: ['A lot of tapes can be a cheap way to start, but the quality can vary from one tape to the next. Look for a list of titles, clear photos and an honest description of condition. If you only want a few titles, a “you pick” listing or single tapes may cost less in the end than a big lot full of titles you do not care about. Remember to count shipping, since tapes and boxed sets are heavier than they look.'] },
  { h: '7. Store and play your collection well', p: ['Store tapes upright like books, away from sunlight, heat, damp and strong magnets such as speakers. Rewind a tape before you put it away. Keep discs in their cases, hold them by the edges and clean them gently with a soft cloth, wiping from the centre to the edge. If you plan to play old tapes, a clean and working VCR matters as much as the tape itself.'] },
  { h: '8. Big box, clamshell and special editions', p: ['Not every tape looks the same. Some releases came in oversized cardboard boxes, plastic clamshell cases or collector’s editions with a special slipcover, and many collectors look for these because they stand out on a shelf. When a listing mentions a special format, ask for a photo of the packaging from every side so you can see the corners, the spine and any stickers. Packaging that is complete and clean is usually what separates an average copy from a great one.'] },
  { h: '9. Build a simple wish list and a checklist', p: ['Keep a short list of the titles you want and note the language and format for each one. Before you buy, run through a quick checklist: is the title and language right, are there clear photos of the front, back and spine, does the seller say the tape or disc was tested, and is the total with shipping still a fair price? A wish list keeps you from buying random lots on impulse, and a checklist makes every purchase calmer and more consistent.'] },
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
      <p style={p}>Long winter evenings and holiday gifts make this a great time to start (or grow) a collection of VHS tapes and DVDs. Here is how to buy well in Canada, whether you love classic TV, horror, adventure films or French dubbed editions.</p>
      <figure style={fig}>
        <img src={IMG1} alt={ALT1} width={1600} height={1600} loading="eager" style={img} />
        <figcaption style={cap}>A Columbo tape lot from our shop: TV favourites are a popular way to start.</figcaption>
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
        <figcaption style={cap}>French editions, like this copy of The Grudge, can be harder to find.</figcaption>
      </figure>
      {sections.slice(2, 4).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <figure style={fig}>
        <img src={IMG3} alt={ALT3} width={1600} height={1600} loading="lazy" style={img} />
        <figcaption style={cap}>Tested tapes with clear photos, like this Six Days Seven Nights, are the safest buys.</figcaption>
      </figure>
      {sections.slice(4).map(s => (
        <section key={s.h}>
          <h2 style={h2}>{s.h}</h2>
          {s.p.map((t, i) => <p key={i} style={p}>{t}</p>)}
        </section>
      ))}
      <h2 style={h2}>Where to find VHS tapes and DVDs in Canada</h2>
      <p style={p}>Browse <Link href="/shop" style={{ color: '#e8b820' }}>our shop</Link> for VHS tapes, DVDs and more, with honest condition notes and shipping across Canada and the USA. New items arrive every week.</p>
      <p style={{ ...p, color: '#fff', fontWeight: 700 }}>Next step: pick one genre or one language, set a budget and add your first tape. A focused shelf always beats a crowded one.</p>
      <h2 style={h2}>Related reading</h2>
      <ul style={{ ...p, paddingLeft: 22 }}><li style={{ marginBottom: 6 }}><Link href="/blog/collectors-holiday-gift-guide-canada" style={{ color: '#e8b820' }}>Holiday Gift Guide for Collectors in Canada</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/video-game-collectibles-guide-canada" style={{ color: '#e8b820' }}>Video Game Collectibles Guide</Link></li><li style={{ marginBottom: 6 }}><Link href="/blog/hockey-collectibles-guide-canada" style={{ color: '#e8b820' }}>Hockey Collectibles Guide</Link></li></ul>
    </article>
  )
}
