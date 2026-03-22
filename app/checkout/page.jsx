'use client'
import { useState } from 'react'
import { useCart } from '../../components/CartProvider'
import Link from 'next/link'

export default function CheckoutPage() {
  const { items, total } = useCart()
  const [form, setForm] = useState({name:'',email:'',address:'',city:'',postal:'',country:'CA'})
  const [loading, setLoading] = useState(false)

  if (!items.length) return (
    <div style={{maxWidth:500,margin:'80px auto',padding:'0 24px',textAlign:'center'}}>
      <div style={{fontSize:56,marginBottom:12}}>🛒</div>
      <h2 style={{fontFamily:'Bebas Neue',fontSize:28,letterSpacing:2,marginBottom:12}}>Panier vide</h2>
      <Link href="/shop" style={{display:'inline-block',background:'#e8b820',color:'#000',padding:'12px 28px',borderRadius:6,fontWeight:800,textDecoration:'none'}}>Retour à la boutique</Link>
    </div>
  )

  async function pay() {
    if (!form.name||!form.email) return alert('Remplis ton nom et email')
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({items,customerInfo:form}) })
      const { url, error } = await res.json()
      if (error) throw new Error(error)
      if (url) window.location.href = url
    } catch(e) { alert('Erreur: '+e.message); setLoading(false) }
  }

  const F = ({label,k,type='text'}) => (
    <div style={{marginBottom:14}}>
      <label style={{display:'block',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'#555',marginBottom:5}}>{label}</label>
      <input type={type} value={form[k]} onChange={e=>setForm(f=>({...f,[k]:e.target.value}))}
        style={{width:'100%',padding:'10px 14px',borderRadius:6,background:'#12121e',border:'1px solid #1c1c28',color:'#eee',fontSize:13,outline:'none'}}/>
    </div>
  )

  return (
    <div style={{maxWidth:1000,margin:'0 auto',padding:'40px 24px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:40}}>
      <div>
        <h1 style={{fontFamily:'Bebas Neue',fontSize:28,letterSpacing:2,marginBottom:24}}>LIVRAISON</h1>
        <F label="Nom complet *" k="name"/>
        <F label="Email *" k="email" type="email"/>
        <F label="Adresse" k="address"/>
        <F label="Ville" k="city"/>
        <F label="Code postal" k="postal"/>
        <div style={{marginBottom:20}}>
          <label style={{display:'block',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'#555',marginBottom:5}}>Pays</label>
          <select value={form.country} onChange={e=>setForm(f=>({...f,country:e.target.value}))}
            style={{width:'100%',padding:'10px 14px',borderRadius:6,background:'#12121e',border:'1px solid #1c1c28',color:'#eee',fontSize:13,outline:'none'}}>
            <option value="CA">🇨🇦 Canada</option>
            <option value="US">🇺🇸 États-Unis</option>
          </select>
        </div>
        <h2 style={{fontFamily:'Bebas Neue',fontSize:22,letterSpacing:2,marginBottom:14}}>PAIEMENT</h2>
        <button onClick={pay} disabled={loading||!form.name||!form.email}
          style={{width:'100%',background:'#e8b820',color:'#000',border:'none',borderRadius:8,padding:'16px',fontWeight:800,fontSize:16,cursor:'pointer',opacity:loading?.7:1,letterSpacing:.3}}>
          {loading?'Redirection vers Stripe...':'💳 PAYER PAR CARTE — CA$'+total.toFixed(2)}
        </button>
        <div style={{textAlign:'center',fontSize:11,color:'#444',marginTop:10}}>🔒 Paiement 100% sécurisé par Stripe</div>
      </div>
      <div>
        <h2 style={{fontFamily:'Bebas Neue',fontSize:22,letterSpacing:2,marginBottom:16}}>RÉSUMÉ</h2>
        <div style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:10,padding:'16px',display:'flex',flexDirection:'column',gap:10}}>
          {items.map(item=>(
            <div key={item.id} style={{display:'flex',gap:12,alignItems:'center'}}>
              <div style={{width:48,height:48,borderRadius:6,overflow:'hidden',background:'#0d0d12',flexShrink:0}}>
                {item.photos?.[0]?<img src={item.photos[0]} alt="" style={{width:'100%',height:'100%',objectFit:'contain',padding:3}}/>:<div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>🛍️</div>}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:11,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',color:'#bbb'}}>{item.title}</div>
                <div style={{fontSize:11,color:'#555'}}>×{item.qty}</div>
              </div>
              <div style={{fontFamily:'Bebas Neue',fontSize:15,color:'#e8b820',flexShrink:0}}>{item.currency==='CAD'?'CA$':'$'}{(item.price*item.qty).toFixed(2)}</div>
            </div>
          ))}
          <div style={{borderTop:'1px solid #1c1c28',paddingTop:12,display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
            <span style={{color:'#666',fontSize:13}}>Total</span>
            <span style={{fontFamily:'Bebas Neue',fontSize:26,color:'#e8b820',letterSpacing:1}}>CA${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
