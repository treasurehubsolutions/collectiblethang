'use client'
import { useState } from 'react'
import { useCart } from '../../components/CartProvider'
import Link from 'next/link'

const CA_PROVINCES = [['QC','Québec'],['ON','Ontario'],['BC','Colombie-Brit.'],['AB','Alberta'],['MB','Manitoba'],['SK','Saskatchewan'],['NS','Nouvelle-Écosse'],['NB','Nouveau-Brunswick'],['NL','Terre-Neuve'],['PE','Î.-P.-É.'],['YT','Yukon'],['NT','T.N.-O.'],['NU','Nunavut']]
const US_STATES = [['NY','New York'],['CA','California'],['TX','Texas'],['FL','Florida'],['IL','Illinois'],['PA','Pennsylvania'],['OH','Ohio'],['GA','Georgia'],['NC','North Carolina'],['MI','Michigan'],['WA','Washington'],['AZ','Arizona'],['MA','Massachusetts'],['TN','Tennessee'],['IN','Indiana'],['CO','Colorado'],['VA','Virginia'],['OR','Oregon'],['WI','Wisconsin'],['MN','Minnesota'],['AL','Alabama'],['SC','South Carolina'],['LA','Louisiana'],['KY','Kentucky'],['CT','Connecticut'],['IA','Iowa'],['NV','Nevada'],['AR','Arkansas'],['MS','Mississippi'],['KS','Kansas'],['UT','Utah'],['NE','Nebraska'],['NM','New Mexico'],['WV','West Virginia'],['ID','Idaho'],['HI','Hawaii'],['NH','New Hampshire'],['ME','Maine'],['RI','Rhode Island'],['MT','Montana'],['DE','Delaware'],['SD','South Dakota'],['ND','North Dakota'],['AK','Alaska'],['VT','Vermont'],['WY','Wyoming']]

function calcShipping(items, country, province) {
  const w = items.reduce((a,i)=>a+(i.weight||250)*i.qty, 0)
  const v = items.reduce((a,i)=>a+i.price*i.qty, 0)
  if (v >= 150) return { cost:0, label:'🎉 Livraison gratuite (+150$)' }
  if (country==='CA') {
    const far = ['BC','AB','SK','MB','YT','NT','NU','NL'].includes(province)
    if (w<=500) return { cost:far?12.99:9.99, label:'Canada standard (5-10 jours)' }
    if (w<=1000) return { cost:far?16.99:13.99, label:'Canada standard (5-10 jours)' }
    if (w<=2000) return { cost:far?22.99:18.99, label:'Canada standard (5-10 jours)' }
    return { cost:far?34.99:28.99, label:'Canada standard (5-10 jours)' }
  } else {
    if (w<=500) return { cost:14.99, label:'USPS Standard USA (7-14 jours)' }
    if (w<=1000) return { cost:19.99, label:'USPS Standard USA (7-14 jours)' }
    if (w<=2000) return { cost:29.99, label:'USPS Standard USA (7-14 jours)' }
    return { cost:44.99, label:'USPS Standard USA (7-14 jours)' }
  }
}

export default function CheckoutPage() {
  const { items, total } = useCart()
  const [form, setForm] = useState({name:'',email:'',address:'',city:'',province:'QC',country:'CA'})
  const [loading, setLoading] = useState(false)
  const shipping = calcShipping(items, form.country, form.province)
  const grandTotal = total + shipping.cost

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
      const res = await fetch('/api/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({items,customerInfo:form,shipping})})
      const {url,error} = await res.json()
      if (error) throw new Error(error)
      if (url) window.location.href = url
    } catch(e) { alert('Erreur: '+e.message); setLoading(false) }
  }

  const F = ({label,k,type='text'}) => (
    <div style={{marginBottom:13}}>
      <label style={{display:'block',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'#555',marginBottom:5}}>{label}</label>
      <input type={type} value={form[k]} onChange={e=>setForm(f=>({...f,[k]:e.target.value}))} style={{width:'100%',padding:'10px 14px',borderRadius:6,background:'#12121e',border:'1px solid #1c1c28',color:'#eee',fontSize:13,outline:'none'}}/>
    </div>
  )

  return (
    <div style={{maxWidth:1000,margin:'0 auto',padding:'36px 24px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:40}}>
      <div>
        <h1 style={{fontFamily:'Bebas Neue',fontSize:26,letterSpacing:2,marginBottom:20}}>LIVRAISON</h1>
        <F label="Nom complet *" k="name"/>
        <F label="Email *" k="email" type="email"/>
        <F label="Adresse" k="address"/>
        <F label="Ville" k="city"/>
        <div style={{marginBottom:13}}>
          <label style={{display:'block',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'#555',marginBottom:5}}>Pays</label>
          <select value={form.country} onChange={e=>setForm(f=>({...f,country:e.target.value,province:e.target.value==='CA'?'QC':'NY'}))} style={{width:'100%',padding:'10px 14px',borderRadius:6,background:'#12121e',border:'1px solid #1c1c28',color:'#eee',fontSize:13,outline:'none'}}>
            <option value="CA">🇨🇦 Canada</option><option value="US">🇺🇸 États-Unis</option>
          </select>
        </div>
        <div style={{marginBottom:20}}>
          <label style={{display:'block',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'#555',marginBottom:5}}>{form.country==='CA'?'Province':'État'}</label>
          <select value={form.province} onChange={e=>setForm(f=>({...f,province:e.target.value}))} style={{width:'100%',padding:'10px 14px',borderRadius:6,background:'#12121e',border:'1px solid #1c1c28',color:'#eee',fontSize:13,outline:'none'}}>
            {(form.country==='CA'?CA_PROVINCES:US_STATES).map(([code,name])=>(<option key={code} value={code}>{name}</option>))}
          </select>
        </div>
        <div style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:8,padding:'12px 14px',marginBottom:16}}>
          <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'#555',marginBottom:6}}>Livraison estimée</div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{fontSize:13,color:'#aaa'}}>{shipping.label}</div>
            <div style={{fontFamily:'Bebas Neue',fontSize:18,color:shipping.cost===0?'#4ade80':'#e8b820'}}>{shipping.cost===0?'GRATUIT':`CA$${shipping.cost.toFixed(2)}`}</div>
          </div>
          {total<150&&<div style={{fontSize:11,color:'#555',marginTop:4}}>Livraison gratuite dès CA$150</div>}
        </div>
        <button onClick={pay} disabled={loading||!form.name||!form.email} style={{width:'100%',background:'#e8b820',color:'#000',border:'none',borderRadius:8,padding:'16px',fontWeight:800,fontSize:16,cursor:'pointer',opacity:loading?.7:1}}>
          {loading?'Redirection...':'💳 PAYER — CA$'+grandTotal.toFixed(2)}
        </button>
        <div style={{textAlign:'center',fontSize:11,color:'#444',marginTop:8}}>🔒 Stripe SSL</div>
      </div>
      <div>
        <h2 style={{fontFamily:'Bebas Neue',fontSize:22,letterSpacing:2,marginBottom:14}}>RÉSUMÉ</h2>
        <div style={{background:'#12121e',border:'1px solid #1c1c28',borderRadius:10,padding:'14px',display:'flex',flexDirection:'column',gap:10}}>
          {items.map(item=>(
            <div key={item.id} style={{display:'flex',gap:10,alignItems:'center'}}>
              <div style={{width:46,height:46,borderRadius:6,overflow:'hidden',background:'#0d0d12',flexShrink:0}}>
                {item.photos?.[0]?<img src={item.photos[0]} alt="" style={{width:'100%',height:'100%',objectFit:'contain',padding:3}}/>:<div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>🛍️</div>}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:11,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',color:'#bbb'}}>{item.title}</div>
                <div style={{fontSize:10,color:'#555'}}>×{item.qty}</div>
              </div>
              <div style={{fontFamily:'Bebas Neue',fontSize:14,color:'#e8b820',flexShrink:0}}>CA${(item.price*item.qty).toFixed(2)}</div>
            </div>
          ))}
          <div style={{borderTop:'1px solid #1c1c28',paddingTop:10,display:'flex',flexDirection:'column',gap:5}}>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:'#666'}}><span>Sous-total</span><span>CA${total.toFixed(2)}</span></div>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:'#666'}}><span>Livraison</span><span style={{color:shipping.cost===0?'#4ade80':'#aaa'}}>{shipping.cost===0?'GRATUIT':'CA$'+shipping.cost.toFixed(2)}</span></div>
            <div style={{borderTop:'1px solid #1c1c28',paddingTop:8,display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
              <span style={{fontWeight:700,color:'#eee'}}>Total</span>
              <span style={{fontFamily:'Bebas Neue',fontSize:24,color:'#e8b820'}}>CA${grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
