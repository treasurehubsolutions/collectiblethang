'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const ADMIN_PASSWORD = 'collectible2024' // Change this!

export default function AdminPage() {
  const [auth, setAuth] = useState(false)
  const [pw, setPw] = useState('')
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [filter, setFilter] = useState('all') // all, enabled, disabled

  function login() {
    if (pw === ADMIN_PASSWORD) {
      setAuth(true)
      loadProducts()
    } else {
      alert('Mot de passe incorrect')
    }
  }

  async function loadProducts() {
    setLoading(true)
    const res = await fetch('/api/admin')
    const data = await res.json()
    setProducts(data)
    setLoading(false)
  }

  async function toggleProduct(id) {
    setProducts(prev => prev.map(p => p.id === id ? {...p, enabled: !p.enabled} : p))
    await fetch('/api/admin', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({action: 'toggle', id})
    })
  }

  async function saveAll() {
    setSaved(false)
    const disabledIds = products.filter(p => !p.enabled).map(p => p.id)
    await fetch('/api/admin', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({action: 'save', disabledIds})
    })
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  if (!auth) return (
    <div style={{maxWidth:400,margin:'120px auto',padding:'0 24px',textAlign:'center'}}>
      <div style={{fontFamily:'Bebas Neue',fontSize:32,color:'#e8b820',letterSpacing:3,marginBottom:24}}>ADMIN</div>
      <input type="password" value={pw} onChange={e=>setPw(e.target.value)}
        onKeyDown={e=>e.key==='Enter'&&login()}
        placeholder="Mot de passe"
        style={{width:'100%',padding:'12px 16px',background:'#12121e',border:'1px solid #1c1c28',borderRadius:8,color:'#eee',fontSize:15,outline:'none',marginBottom:12}}/>
      <button onClick={login}
        style={{width:'100%',background:'#e8b820',color:'#000',border:'none',borderRadius:8,padding:'13px',fontWeight:800,fontSize:15,cursor:'pointer'}}>
        Se connecter
      </button>
    </div>
  )

  const filtered = products.filter(p => {
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter==='all' || (filter==='enabled'&&p.enabled) || (filter==='disabled'&&!p.enabled)
    return matchSearch && matchFilter
  })

  const enabledCount = products.filter(p=>p.enabled).length
  const disabledCount = products.filter(p=>!p.enabled).length

  return (
    <div style={{maxWidth:1300,margin:'0 auto',padding:'24px'}}>
      {/* Header */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24,flexWrap:'wrap',gap:12}}>
        <div>
          <div style={{fontFamily:'Bebas Neue',fontSize:28,color:'#e8b820',letterSpacing:3}}>GESTION DES PRODUITS</div>
          <div style={{fontSize:13,color:'#555',marginTop:2}}>
            <span style={{color:'#4ade80'}}>{enabledCount} actifs</span>
            {' · '}
            <span style={{color:'#f87171'}}>{disabledCount} désactivés</span>
            {' · '}
            {products.length} total
          </div>
        </div>
        <div style={{display:'flex',gap:10,alignItems:'center'}}>
          <button onClick={saveAll}
            style={{background:saved?'#166534':'#e8b820',color:saved?'#86efac':'#000',border:'none',borderRadius:8,padding:'10px 22px',fontWeight:800,fontSize:14,cursor:'pointer'}}>
            {saved ? '✓ Sauvegardé !' : '💾 Sauvegarder'}
          </button>
          <a href="/" style={{background:'#12121e',color:'#888',border:'1px solid #1c1c28',borderRadius:8,padding:'10px 16px',fontSize:13,textDecoration:'none'}}>← Site</a>
        </div>
      </div>

      {/* Filters */}
      <div style={{display:'flex',gap:10,marginBottom:16,flexWrap:'wrap'}}>
        <input value={search} onChange={e=>setSearch(e.target.value)}
          placeholder="Rechercher par titre ou catégorie..."
          style={{flex:1,minWidth:200,padding:'8px 14px',background:'#12121e',border:'1px solid #1c1c28',borderRadius:8,color:'#eee',fontSize:13,outline:'none'}}/>
        {[['all','Tous'],['enabled','Actifs'],['disabled','Désactivés']].map(([v,l])=>(
          <button key={v} onClick={()=>setFilter(v)}
            style={{padding:'8px 16px',borderRadius:8,border:'1px solid #1c1c28',background:filter===v?'#e8b820':'#12121e',color:filter===v?'#000':'#888',fontWeight:filter===v?700:400,fontSize:13,cursor:'pointer'}}>
            {l}
          </button>
        ))}
      </div>

      {/* Info */}
      <div style={{background:'rgba(232,184,32,.08)',border:'1px solid rgba(232,184,32,.2)',borderRadius:8,padding:'10px 14px',marginBottom:16,fontSize:12,color:'#aaa'}}>
        💡 <strong style={{color:'#e8b820'}}>Comment ça marche :</strong> Clique sur le bouton vert/rouge pour activer ou désactiver un produit. Clique <strong>"Sauvegarder"</strong> pour appliquer les changements sur le site.
      </div>

      {/* Products table */}
      {loading ? (
        <div style={{textAlign:'center',padding:60,color:'#555'}}>Chargement...</div>
      ) : (
        <div style={{display:'flex',flexDirection:'column',gap:6}}>
          {filtered.map(p => (
            <div key={p.id} style={{display:'flex',alignItems:'center',gap:12,background:p.enabled?'#12121e':'#0a0a10',border:`1px solid ${p.enabled?'#1c1c28':'#2a1010'}`,borderRadius:8,padding:'10px 14px',opacity:p.enabled?1:.65}}>
              {/* Photo */}
              <div style={{width:52,height:52,borderRadius:6,overflow:'hidden',background:'#0d0d12',flexShrink:0,position:'relative'}}>
                {p.photos?.[0]
                  ? <img src={p.photos[0]} alt="" style={{width:'100%',height:'100%',objectFit:'contain',padding:3}}/>
                  : <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:22}}>🛍️</div>}
              </div>
              {/* Info */}
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:12,fontWeight:500,color:p.enabled?'#ddd':'#666',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{p.title}</div>
                <div style={{display:'flex',gap:10,marginTop:3,flexWrap:'wrap'}}>
                  <span style={{fontSize:10,color:'#555'}}>{p.category}</span>
                  <span style={{fontSize:10,color:'#e8b820',fontWeight:700}}>CA${p.price.toFixed(2)}</span>
                  <span style={{fontSize:10,color:p.stock>0?'#4ade80':'#f87171'}}>{p.stock>0?`${p.stock} en stock`:'Rupture'}</span>
                  {p.watchers>5&&<span style={{fontSize:10,color:'#f87171'}}>{p.watchers}👁</span>}
                </div>
              </div>
              {/* Toggle */}
              <button onClick={()=>toggleProduct(p.id)}
                style={{flexShrink:0,padding:'6px 14px',borderRadius:6,border:'none',background:p.enabled?'rgba(74,222,128,.15)':'rgba(248,113,113,.15)',color:p.enabled?'#4ade80':'#f87171',fontWeight:700,fontSize:12,cursor:'pointer'}}>
                {p.enabled ? '✓ Actif' : '✗ Masqué'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
