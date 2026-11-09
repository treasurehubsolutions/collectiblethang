import Link from 'next/link'

export const metadata = {
  title: 'Collector Blog: Hot Wheels, Funko, Star Wars & More | The Shelf Cartel',
  description: 'Guides and news for toy and collectible fans in Canada: how to start a Hot Wheels collection, what to look for when buying, and more.',
  alternates: { canonical: 'https://theshelfcartel.com/blog' },
}

const posts = [
  {
    href: '/blog/guide-debuter-collection-hot-wheels',
    title: 'How to Start a Hot Wheels Collection: A Beginner’s Guide for Canadian Collectors',
    excerpt: 'Pick a theme, learn the difference between mainline and Premium, check condition and buy smart.',
  },
]

export default function Blog() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 40, letterSpacing: 2, color: '#fff', marginBottom: 6 }}>COLLECTOR BLOG</h1>
      <p style={{ color: '#9a9ab0', fontSize: 15, marginBottom: 24 }}>Guides and tips for toy and collectible fans in Canada.</p>
      {posts.map(p => (
        <Link key={p.href} href={p.href} style={{ display: 'block', background: '#0f0f1c', border: '1px solid #1c1c30', borderRadius: 10, padding: '18px 20px', marginBottom: 12, textDecoration: 'none' }}>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: 24, letterSpacing: 1, color: '#e8b820', marginBottom: 6 }}>{p.title}</div>
          <div style={{ color: '#aaa', fontSize: 14, lineHeight: 1.6 }}>{p.excerpt}</div>
        </Link>
      ))}
    </div>
  )
}
