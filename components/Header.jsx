'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from './CartProvider'

const NAV_CATS = [
  ['Hot Wheels','🚗'],['Hot Wheels Premium','🏎️'],['Star Wars','⚔️'],
  ['Marvel','⚡'],['DC Comics','🦇'],['Transformers','🤖'],
  ['WWE & Wrestling','🏆'],['Hallmark Ornaments','🎄'],['McFarlane Figures','💀'],
  ['Jurassic Park / World','🦕'],['Masters of the Universe','⚔️'],['VHS Tapes','📼'],
]

export default function Header() {
  const { count, setOpen } = useCart()
  const [search, setSearch] = useState('')
  function handleSearch(e) {
    e.preventDefault()
    if (search.trim()) window.location.href = `/shop?search=${encodeURIComponent(search.trim())}`
  }
  return (
    <>
      <div style={{background:'#e8b820',color:'#000',textAlign:'center',padding:'5px',fontSize:11,fontWeight:700,letterSpacing:'.5px'}}>
        🔥 NOUVEAUX ARTICLES CHAQUE SEMAINE &nbsp;·&nbsp; 📦 EMBALLAGE SÉCURISÉ &nbsp;·&nbsp; ⭐ 100% FEEDBACK POSITIF
      </div>
      <header style={{background:'#0d0d12',borderBottom:'1px solid #1c1c28',position:'sticky',top:0,zIndex:200}}>
        <div style={{maxWidth:1300,margin:'0 auto',padding:'0 20px',height:58,display:'flex',alignItems:'center',gap:16}}>
          <Link href="/" style={{fontFamily:'Bebas Neue',fontSize:22,color:'#e8b820',textDecoration:'none',letterSpacing:2,flexShrink:0}}>
            COLLECTIBLE<span style={{color:'#333'}}>THANG</span>
          </Link>
          <form onSubmit={handleSearch} style={{flex:1,maxWidth:500,display:'flex'}}>
            <input value={search} onChange={e=>setSearch(e.target.value)}
              placeholder="Rechercher Hot Wheels, Star Wars, Marvel..."
              style={{flex:1,padding:'8px 14px',background:'#1a1a26',border:'1px solid #2a2a38',borderRight:'none',borderRadius:'6px 0 0 6px',color:'#eee',fontSize:13,outline:'none'}}/>
            <button type="submit" style={{padding:'8px 16px',background:'#e8b820',color:'#000',border:'none',borderRadius:'0 6px 6px 0',fontWeight:800,fontSize:13,cursor:'pointer'}}>
              Chercher
            </button>
          </form>
          <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:8,flexShrink:0}}>
            <button onClick={()=>setOpen(true)}
              style={{display:'flex',alignItems:'center',gap:7,background:'#e8b820',color:'#000',border:'none',borderRadius:6,padding:'8px 16px',fontWeight:800,fontSize:13,cursor:'pointer'}}>
              🛒 Panier
              {count>0&&<span style={{background:'rgba(0,0,0,.2)',borderRadius:20,padding:'1px 7px',fontSize:11,fontWeight:700}}>{count}</span>}
            </button>
          </div>
        </div>
        <div style={{background:'#0a0a14',borderTop:'1px solid #1a1a28',overflowX:'auto'}}>
          <div style={{maxWidth:1300,margin:'0 auto',padding:'0 20px',display:'flex',alignItems:'center'}}>
            <Link href="/shop" style={{padding:'9px 14px',fontSize:12,color:'#aaa',textDecoration:'none',borderRight:'1px solid #1a1a28',whiteSpace:'nowrap',fontWeight:700}}>Tout voir</Link>
            {NAV_CATS.map(([cat,emoji])=>(
              <Link key={cat} href={`/shop?category=${encodeURIComponent(cat)}`}
                style={{padding:'9px 12px',fontSize:12,color:'#777',textDecoration:'none',borderRight:'1px solid #1a1a28',whiteSpace:'nowrap',display:'flex',alignItems:'center',gap:4}}>
                {emoji} {cat}
              </Link>
            ))}
            <Link href="/shop?sort=popular" style={{padding:'9px 13px',fontSize:12,color:'#e8b820',textDecoration:'none',whiteSpace:'nowrap',fontWeight:700}}>🔥 Populaires</Link>
          </div>
        </div>
      </header>
    </>
  )
}
