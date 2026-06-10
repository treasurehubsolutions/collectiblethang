'use client'
import { useState, useRef } from 'react'

const ADMIN_PW = 'collectible2024'
const CATEGORIES = ['Hot Wheels','Hot Wheels Premium','Star Wars','Marvel','DC Comics','Transformers','Jurassic Park / World','WWE & Wrestling','G.I. Joe','TMNT','Power Rangers','Masters of the Universe','Sonic the Hedgehog','Pokémon','Hallmark Ornaments','Funko Pop','McFarlane Figures','Disney & Pixar','LEGO','VHS Tapes','Video Games','Video Game Figures','Diecast & Scale Models','Action Figures','Little People Collector','Dolls & Barbie','Hockey','Playmobil','Fortnite','Électroménager','Bar & Brasserie','Autres']
const EMPTY = { title:'', description:'', price:'', currency:'CAD', condition:'New', category:'Action Figures', stock:'1', weight:'250', photos:[], enabled:true }

export default function AdminPage() {
  const [auth, setAuth] = useState(false)
  const [pw, setPw] = useState('')
  const [tab, setTab] = useState('products')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [editId, setEditId] = useState(null)
  const [form, setForm] = useState(EMPTY)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef()

  function login() {
    if (pw === ADMIN_PW) { setAuth(true); loadProducts() }
    else alert('Mot de passe incorrect')
  }

  async function loadProducts() {
    setLoading(true)
    const res = await fetch('/api/admin?action=list')
    const data = await res.json()
    setProducts(data || [])
    setLoading(false)
  }

  async function saveProduct() {
    if (!form.title || !form.price) return alert('Titre et prix requis')
    setSaving(true)
    const body = { ...form, price: parseFloat(form.price), stock: parseInt(form.stock), weight: parseInt(form.weight) }
    const res = await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: editId ? 'update' : 'create', id: editId, product: body })
    })
    const data = await res.json()
    if (data.error) { alert('Erreur: ' + data.error) }
    else {
      setMsg(editId ? '✓ Produit mis à jour !' : '✓ Produit ajouté !')
      setTimeout(() => setMsg(''), 3000)
      setForm(EMPTY); setEditId(null); setTab('products'); loadProducts()
    }
    setSaving(false)
  }

  async function deleteProduct(id) {
    if (!confirm('Supprimer ce produit ?')) return
    await fetch('/api/admin', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'delete', id }) })
    loadProducts()
  }

  async function toggleProduct(id, enabled) {
    await fetch('/api/admin', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'toggle', id, enabled: !enabled }) })
    setProducts(prev => prev.map(p => p.id === id ? { ...p, enabled: !enabled } : p))
  }

  async function uploadPhoto(file) {
    setUploading(true)
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/upload', { method: 'POST', body: fd })
    const data = await res.json()
    setUploading(false)
    if (data.url) setForm(f => ({ ...f, photos: [...f.photos, data.url] }))
    else alert('Erreur upload: ' + (data.error || 'inconnue'))
  }

  function editProduct(p) {
    setEditId(p.id)
    setForm({ title:p.title, description:p.description||'', price:p.price.toString(), currency:p.currency, condition:p.condition, category:p.category, stock:p.stock.toString(), weight:(p.weight||250).toString(), photos:p.photos||[], enabled:p.enabled })
    setTab('add')
  }

  if (!auth) return (
    <div style={{maxWidth:380,margin:'120px auto',padding:'0 24px',textAlign:'center'}}>
      <div style={{fontFamily:'Bebas Neue',fontSize:36,color:'#e8b820',letterSpacing:3,marginBottom:24}}>ADMIN</div>
      <input type="password" value={pw} onChange={e=>setPw(e.target.value)} onKeyDown={e=>e.key==='Enter'&&login()}
        placeholder="Mot de passe" style={{width:'100%',padding:'12px 16px',background:'#12121e',border:'1px solid #1c1c28',borderRadius:8,color:'#eee',fontSize:15,outline:'none',marginBottom:12}}/>
      <button onClick={login} style={{width:'100%',background:'#e8b820',color:'#000',border:'none',borderRadius:8,padding:'13px',fontWeight:800,fontSize:15,cursor:'pointer'}}>Se connecter</button>
    </div>
  )

  const filtered = products.filter(p => {
    const ms = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())
    const mf = filter==='all' || (filter==='enabled'&&p.enabled) || (filter==='disabled'&&!p.enabled)
    return ms && mf
  })

  const F = ({label,k,type='text',options}) => (
    <div style={{marginBottom:14}}>
      <label style={{display:'block',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'#555',marginBottom:5}}>{label}</label>
      {options
        ? <select value={form[k]} onChange={e=>setForm(f=>({...f,[k]:e.target.value}))} style={{width:'100%',padding:'9px 12px',borderRadius:6,background:'#12121e',border:'1px solid #1c1c28',color:'#eee',fontSize:13,outline:'none'}}>
            {options.map(o=><option key={o} value={o}>{o}</option>)}
          </select>
        : <input type={type} value={form[k]} onChange={e=>setForm(f=>({...f,[k]:e.target.value}))} style={{width:'100%',padding:'9px 12px',borderRadius:6,background:'#12121e',border:'1px solid #1c1c28',color:'#eee',fontSize:13,outline:'none'}}/>
      }
    </div>
  )

  return (
    <div style={{maxWidth:1300,margin:'0 auto',padding:'24px'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24,flexWrap:'wrap',gap:12}}>
        <div style={{fontFamily:'Bebas Neue',fontSize:28,color:'#e8b820',letterSpacing:3}}>GESTION DES PRODUITS</div>
        <div style={{display:'flex',gap:8}}>
          <button onClick={()=>{setForm(EMPTY);setEditId(null);setTab('add')}} style={{background:'#e8b820',color:'#000',border:'none',borderRadius:6,padding:'9px 18px',fontWeight:800,fontSize:13,cursor:'pointer'}}>+ Ajouter</button>
          <a href="/" style={{background:'#12121e',color:'#888',border:'1px solid #1c1c28',borderRadius:6,padding:'9px 14px',fontSize:13,textDecoration:'none'}}>← Site</a>
        </div>
      </div>
      {msg && <div style={{background:'rgba(74,222,128,.1)',border:'1px solid rgba(74,222,128,.3)',color:'#4ade80',padding:'10px 16px',borderRadius:8,marginBottom:16,fontWeight:600}}>{msg}</div>}
      <div style={{display:'flex',gap:0,marginBottom:24,borderBottom:'1px solid #1c1c28'}}>
        {[['products',`Produits (${products.length})`],['add',editId?'Modifier':'Ajouter']].map(([t,l])=>(
          <button key={t} onClick={()=>setTab(t)} style={{padding:'10px 20px',background:'none',border:'none',borderBottom:tab===t?'2px solid #e8b820':'2px solid transparent',color:tab===t?'#e8b820':'#666',fontWeight:tab===t?700:400,fontSize:14,cursor:'pointer'}}>{l}</button>
        ))}
      </div>

      {tab==='products' && (
        <div>
          <div style={{display:'flex',gap:10,marginBottom:14,flexWrap:'wrap'}}>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Rechercher..." style={{flex:1,minWidth:200,padding:'8px 14px',background:'#12121e',border:'1px solid #1c1c28',borderRadius:6,color:'#eee',fontSize:13,outline:'none'}}/>
            {[['all','Tous'],['enabled','Actifs'],['disabled','Masqués']].map(([v,l])=>(
              <button key={v} onClick={()=>setFilter(v)} style={{padding:'8px 14px',borderRadius:6,border:'1px solid #1c1c28',background:filter===v?'#e8b820':'#12121e',color:filter===v?'#000':'#888',fontWeight:filter===v?700:400,fontSize:12,cursor:'pointer'}}>{l}</button>
            ))}
          </div>
          {loading ? <div style={{textAlign:'center',padding:60,color:'#555'}}>Chargement...</div> : (
            <div style={{display:'flex',flexDirection:'column',gap:6}}>
              {filtered.map(p=>(
                <div key={p.id} style={{display:'flex',alignItems:'center',gap:12,background:p.enabled?'#12121e':'#0a0a10',border:`1px solid ${p.enabled?'#1c1c28':'#2a1010'}`,borderRadius:8,padding:'10px 14px',opacity:p.enabled?1:.6}}>
                  <div style={{width:52,height:52,borderRadius:6,overflow:'hidden',background:'#0d0d12',flexShrink:0}}>
                    {p.photos?.[0]?<img src={p.photos[0]} alt="" style={{width:'100%',height:'100%',objectFit:'contain',padding:3}}/>:<div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:22}}>🛍️</div>}
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontSize:12,fontWeight:500,color:p.enabled?'#ddd':'#555',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{p.title}</div>
                    <div style={{display:'flex',gap:10,marginTop:3,flexWrap:'wrap'}}>
                      <span style={{fontSize:10,color:'#555'}}>{p.category}</span>
                      <span style={{fontSize:10,color:'#e8b820',fontWeight:700}}>CA${p.price?.toFixed(2)}</span>
                      <span style={{fontSize:10,color:p.stock>0?'#4ade80':'#f87171'}}>{p.stock>0?`${p.stock} en stock`:'Rupture'}</span>
                      {p.source==='manual'&&<span style={{fontSize:9,background:'rgba(139,92,246,.2)',color:'#a78bfa',padding:'1px 5px',borderRadius:3,fontWeight:700}}>MANUEL</span>}
                    </div>
                  </div>
                  <div style={{display:'flex',gap:6,flexShrink:0}}>
                    <button onClick={()=>toggleProduct(p.id,p.enabled)} style={{padding:'5px 12px',borderRadius:5,border:'none',background:p.enabled?'rgba(74,222,128,.12)':'rgba(248,113,113,.12)',color:p.enabled?'#4ade80':'#f87171',fontWeight:700,fontSize:11,cursor:'pointer'}}>{p.enabled?'✓ Actif':'✗ Masqué'}</button>
                    <button onClick={()=>editProduct(p)} style={{padding:'5px 12px',borderRadius:5,border:'1px solid #2a2a38',background:'none',color:'#aaa',fontWeight:600,fontSize:11,cursor:'pointer'}}>✏️ Modifier</button>
                    <button onClick={()=>deleteProduct(p.id)} style={{padding:'5px 10px',borderRadius:5,border:'none',background:'rgba(220,38,38,.1)',color:'#f87171',fontWeight:700,fontSize:11,cursor:'pointer'}}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab==='add' && (
        <div style={{maxWidth:700}}>
          <h2 style={{fontFamily:'Bebas Neue',fontSize:22,letterSpacing:2,marginBottom:20,color:'#e8b820'}}>{editId?'✏️ MODIFIER':'+ NOUVEAU PRODUIT'}</h2>
          <F label="Titre *" k="title"/>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:12}}>
            <F label="Prix *" k="price" type="number"/>
            <F label="Devise" k="currency" options={['CAD','USD']}/>
            <F label="Stock" k="stock" type="number"/>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <F label="Catégorie" k="category" options={CATEGORIES}/>
            <F label="Condition" k="condition" options={['New','Brand New','Open box','Used','Like New']}/>
          </div>
          <F label="Poids (grammes)" k="weight" type="number"/>
          <div style={{marginBottom:14}}>
            <label style={{display:'block',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'#555',marginBottom:5}}>Description</label>
            <textarea value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))} rows={4} style={{width:'100%',padding:'9px 12px',borderRadius:6,background:'#12121e',border:'1px solid #1c1c28',color:'#eee',fontSize:13,outline:'none',resize:'vertical'}}/>
          </div>
          <div style={{marginBottom:20}}>
            <label style={{display:'block',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'#555',marginBottom:8}}>Photos</label>
            <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:10}}>
              {form.photos.map((ph,i)=>(
                <div key={i} style={{position:'relative',width:80,height:80,borderRadius:8,overflow:'hidden',border:'1px solid #1c1c28',background:'#0d0d12'}}>
                  <img src={ph} alt="" style={{width:'100%',height:'100%',objectFit:'contain',padding:4}}/>
                  <button onClick={()=>setForm(f=>({...f,photos:f.photos.filter((_,j)=>j!==i)}))} style={{position:'absolute',top:2,right:2,width:18,height:18,borderRadius:'50%',background:'rgba(220,38,38,.9)',color:'#fff',border:'none',cursor:'pointer',fontSize:10,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>✕</button>
                </div>
              ))}
              <button onClick={()=>fileRef.current.click()} style={{width:80,height:80,borderRadius:8,border:'2px dashed #2a2a38',background:'#12121e',color:'#666',cursor:'pointer',fontSize:24,display:'flex',alignItems:'center',justifyContent:'center'}}>{uploading?'⏳':'+'}</button>
            </div>
            <input ref={fileRef} type="file" accept="image/*" multiple style={{display:'none'}} onChange={async e=>{for(const file of e.target.files) await uploadPhoto(file); e.target.value=''}}/>
          </div>
          <div style={{display:'flex',gap:10}}>
            <button onClick={saveProduct} disabled={saving} style={{flex:1,background:'#e8b820',color:'#000',border:'none',borderRadius:8,padding:'14px',fontWeight:800,fontSize:15,cursor:'pointer',opacity:saving?.7:1}}>
              {saving?'Sauvegarde...':(editId?'💾 Mettre à jour':'✓ Ajouter le produit')}
            </button>
            <button onClick={()=>{setForm(EMPTY);setEditId(null);setTab('products')}} style={{padding:'14px 20px',background:'#12121e',color:'#888',border:'1px solid #1c1c28',borderRadius:8,fontWeight:600,fontSize:14,cursor:'pointer'}}>Annuler</button>
          </div>
        </div>
      )}
    </div>
  )
}
