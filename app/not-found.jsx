export const metadata = {
  title: 'Page not found | The Shelf Cartel',
  robots: { index: false, follow: true },
}

const link = { display: 'inline-block', padding: '12px 22px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }

export default function NotFound() {
  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: 48, margin: '0 0 12px' }}>404</h1>
      <p style={{ fontSize: 18, margin: '0 0 8px' }}>This page could not be found.</p>
      <p style={{ fontSize: 14, color: '#888', margin: '0 0 28px' }}>
        The item may have sold, or the link may be out of date. Browse our collectibles instead.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="/shop" style={{ ...link, background: '#e63946', color: '#fff' }}>Shop all</a>
        <a href="/shop?sort=new" style={{ ...link, border: '1px solid #444', color: 'inherit' }}>New arrivals</a>
        <a href="/contact" style={{ ...link, border: '1px solid #444', color: 'inherit' }}>Contact us</a>
      </div>
    </main>
  )
}
