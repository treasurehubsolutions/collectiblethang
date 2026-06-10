'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useCart } from './CartProvider'
import { useLang } from './LangProvider'

const CATS = ['Hot Wheels','Hot Wheels Premium','Star Wars','Marvel','DC Comics','Transformers','WWE & Wrestling','Jurassic Park / World','McFarlane Figures','VHS Tapes','Hallmark Ornaments','Deals']

export default function Header() {
  const { items, setOpen } = useCart()
  const { lang, setLang } = useLang()
  const count = items.reduce((a, i) => a + i.qty, 0)
  const [q, setQ] = useState('')

  return (
    <>
      {/* Top bar */}
      <div style={{ background: 'linear-gradient(90deg,#cc1100,#7c22e8)', padding: '5px 0', textAlign: 'center', fontSize: 11, fontWeight: 600, color: '#fff', letterSpacing: '0.05em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        🔥 NOUVEAUX ARTICLES CHAQUE SEMAINE &nbsp;·&nbsp; 📦 EMBALLAGE SÉCURISÉ &nbsp;·&nbsp; ⭐ 100% FEEDBACK POSITIF &nbsp;·&nbsp; Fièrement Québécois 🏳
      </div>

      {/* Main header */}
      <header style={{ background: '#07070f', borderBottom: '1px solid #1c1c28', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', gap: 12, height: 56 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src="/logo.png" alt="COLLECTIBLETHANG" style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Search */}
          <form action="/shop" style={{ flex: 1, display: 'flex', gap: 0, maxWidth: 500 }}>
            <input name="search" value={q} onChange={e => setQ(e.target.value)}
              placeholder="Search Hot Wheels, Star Wars, Marvel, LEGO..."
              style={{ flex: 1, padding: '8px 14px', background: '#12121e', border: '1px solid #1c1c28', borderRight: 'none', borderRadius: '6px 0 0 6px', color: '#eee', fontSize: 13, outline: 'none' }} />
            <button type="submit" style={{ padding: '8px 16px', background: '#cc1100', color: '#fff', border: 'none', borderRadius: '0 6px 6px 0', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Search</button>
          </form>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto', flexShrink: 0 }}>
            {/* Lang toggle */}
            <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              style={{ background: '#12121e', border: '1px solid #1c1c28', borderRadius: 4, padding: '5px 10px', color: '#888', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>

            {/* Shipping */}
            <Link href="/livraison" style={{ color: '#888', fontSize: 12, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
              📦 <span style={{ display: 'none' }}>Shipping</span>
            </Link>

            {/* Cart */}
            <button onClick={() => setOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#cc1100', border: 'none', borderRadius: 6, padding: '7px 14px', color: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
              🛒 Cart {count > 0 && <span style={{ background: '#fff', color: '#cc1100', borderRadius: '50%', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800 }}>{count}</span>}
            </button>
          </div>
        </div>

        {/* Category nav */}
        <div style={{ background: '#0a0a14', borderTop: '1px solid #141420', overflowX: 'auto' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 16px', display: 'flex', gap: 0 }}>
            {CATS.map(cat => (
              <Link key={cat} href={cat === 'Deals' ? '/shop?sort=price_asc' : `/shop?category=${encodeURIComponent(cat)}`}
                style={{ padding: '8px 14px', fontSize: 12, color: cat === 'Deals' ? '#f0c030' : '#888', textDecoration: 'none', whiteSpace: 'nowrap', borderBottom: '2px solid transparent', fontWeight: cat === 'Deals' ? 700 : 400 }}>
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  )
}
