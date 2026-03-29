'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from './CartProvider'
import { useLang } from './LangProvider'
import { T } from '../lib/i18n'

const NAV_CATS = [
  ['Hot Wheels','🚗'],['Hot Wheels Premium','🏎️'],['Star Wars','⚔️'],
  ['Marvel','⚡'],['DC Comics','🦇'],['Transformers','🤖'],
  ['WWE & Wrestling','🏆'],['Hallmark Ornaments','🎄'],['McFarlane Figures','💀'],
  ['Jurassic Park / World','🦕'],['VHS Tapes','📼'],
]

const TOPBAR_EN = ['🚚 FREE shipping $150+','🔒 Secure Stripe','↩️ 30-day returns','⭐ 100% Positive Feedback']
const TOPBAR_FR = ['🚚 Livraison GRATUITE dès 150$','🔒 Paiement Sécurisé','↩️ Retours 30 jours','⭐ 100% Feedback']

export default function Header() {
  const { count, setOpen } = useCart()
  const { lang, toggle } = useLang()
  const tx = T[lang]
  const [search, setSearch] = useState('')
  const topbarItems = lang === 'en' ? TOPBAR_EN : TOPBAR_FR

  function handleSearch(e) {
    e.preventDefault()
    if (search.trim()) window.location.href = '/shop?search=' + encodeURIComponent(search.trim())
  }

  return (
    <>
      <div style={{background:'linear-gradient(90deg,#cc1100,#7c22e8)',color:'#fff',textAlign:'center',padding:'6px 12px',fontSize:11,fontWeight:700}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap',gap:0}}>
          {topbarItems.map((item, i) => (
            <span key={i} style={{display:'inline-flex',alignItems:'center',gap:4}}>
              {i > 0 && <span style={{margin:'0 6px',opacity:.5}}>·</span>}
              {item}
            </span>
          ))}
          <span style={{margin:'0 6px',opacity:.5}}>·</span>
          <span style={{display:'inline-flex',alignItems:'center',gap:5}}>
            <img src="/qc-flag.png" alt="QC" style={{width:20,height:14,borderRadius:2,objectFit:'cover'}}/>
            Fièrement Québécois
          </span>
        </div>
      </div>

      <header style={{background:'#07070f',borderBottom:'1px solid #1c1c30',position:'sticky',top:0,zIndex:200}}>
        <div style={{maxWidth:1300,margin:'0 auto',padding:'0 20px',height:62,display:'flex',alignItems:'center',gap:16}}>
          <Link href="/" style={{flexShrink:0,display:'flex',alignItems:'center'}}>
            <Image src="/logo.png" alt="Born2BeToys" width={160} height={50} style={{objectFit:'contain',height:50,width:'auto'}}/>
          </Link>
          <form onSubmit={handleSearch} style={{flex:1,maxWidth:500,display:'flex'}}>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder={tx.searchPlaceholder}
              style={{flex:1,padding:'8px 14px',background:'#12121e',border:'1px solid #2a2a3a',borderRight:'none',borderRadius:'6px 0 0 6px',color:'#eee',fontSize:13,outline:'none'}}/>
            <button type="submit" style={{padding:'8px 16px',background:'#cc1100',color:'#fff',border:'none',borderRadius:'0 6px 6px 0',fontWeight:800,fontSize:13,cursor:'pointer'}}>
              {tx.search}
            </button>
          </form>
          <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:8,flexShrink:0}}>
            <button onClick={toggle} style={{background:'none',border:'1px solid #2a2a3a',color:'#aaa',borderRadius:6,padding:'6px 10px',fontSize:12,fontWeight:700,cursor:'pointer'}}>
              {lang==='en' ? '🇫🇷 FR' : '🇺🇸 EN'}
            </button>
            <Link href="/livraison" style={{fontSize:12,color:'#666',textDecoration:'none',padding:'6px 10px',border:'1px solid #1c1c30',borderRadius:5,whiteSpace:'nowrap'}}>
              {tx.shipping}
            </Link>
            <button onClick={()=>setOpen(true)} style={{display:'flex',alignItems:'center',gap:7,background:'#cc1100',color:'#fff',border:'none',borderRadius:6,padding:'8px 16px',fontWeight:800,fontSize:13,cursor:'pointer'}}>
              🛒 {tx.cart}
              {count>0 && <span style={{background:'rgba(255,255,255,.2)',borderRadius:20,padding:'1px 7px',fontSize:11,fontWeight:700}}>{count}</span>}
            </button>
          </div>
        </div>
        <div style={{background:'#0a0a16',borderTop:'1px solid #1a1a28',overflowX:'auto'}}>
          <div style={{maxWidth:1300,margin:'0 auto',padding:'0 20px',display:'flex',alignItems:'center'}}>
            <Link href="/shop" style={{padding:'9px 14px',fontSize:12,color:'#aaa',textDecoration:'none',borderRight:'1px solid #1a1a28',whiteSpace:'nowrap',fontWeight:700}}>
              {tx.allItems}
            </Link>
            {NAV_CATS.map(([cat,emoji]) => (
              <Link key={cat} href={'/shop?category='+encodeURIComponent(cat)}
                style={{padding:'9px 12px',fontSize:12,color:'#777',textDecoration:'none',borderRight:'1px solid #1a1a28',whiteSpace:'nowrap',display:'flex',alignItems:'center',gap:4}}>
                {emoji} {cat}
              </Link>
            ))}
            <Link href="/shop?sort=popular" style={{padding:'9px 13px',fontSize:12,color:'#00c8d4',textDecoration:'none',whiteSpace:'nowrap',fontWeight:700}}>
              {tx.popular}
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
