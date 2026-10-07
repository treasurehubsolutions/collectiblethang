'use client'
import { useState, useEffect, useRef } from 'react'
import { useCart } from '../../components/CartProvider'
import Link from 'next/link'

const CA_PROVINCES = [
  ['QC','Québec'],['ON','Ontario'],['BC','British Columbia'],['AB','Alberta'],
  ['MB','Manitoba'],['SK','Saskatchewan'],['NS','Nova Scotia'],['NB','New Brunswick'],
  ['NL','Newfoundland'],['PE','P.E.I.'],['YT','Yukon'],['NT','N.W.T.'],['NU','Nunavut']
]
const US_STATES = [
  ['NY','New York'],['CA','California'],['TX','Texas'],['FL','Florida'],
  ['IL','Illinois'],['PA','Pennsylvania'],['OH','Ohio'],['GA','Georgia'],
  ['NC','North Carolina'],['MI','Michigan'],['WA','Washington'],['AZ','Arizona'],
  ['MA','Massachusetts'],['TN','Tennessee'],['IN','Indiana'],['CO','Colorado'],
  ['VA','Virginia'],['OR','Oregon'],['WI','Wisconsin'],['MN','Minnesota'],
  ['AL','Alabama'],['SC','South Carolina'],['LA','Louisiana'],['KY','Kentucky'],
  ['CT','Connecticut'],['IA','Iowa'],['NV','Nevada'],['AR','Arkansas'],
  ['MS','Mississippi'],['KS','Kansas'],['UT','Utah'],['NE','Nebraska'],
  ['NM','New Mexico'],['WV','West Virginia'],['ID','Idaho'],['HI','Hawaii'],
  ['NH','New Hampshire'],['ME','Maine'],['RI','Rhode Island'],['MT','Montana'],
  ['DE','Delaware'],['SD','South Dakota'],['ND','North Dakota'],['AK','Alaska'],
  ['VT','Vermont'],['WY','Wyoming']
]

const inputStyle = {width:'100%',padding:'10px 14px',borderRadius:6,background:'#0f0f1c',border:'1px solid #1c1c30',color:'#eee',fontSize:13,outline:'none',boxSizing:'border-box'}
const labelStyle = {display:'block',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'#555',marginBottom:5}

export default function CheckoutPage() {
  const { items, subtotal, promoDiscount } = useCart()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('CA')
  const [province, setProvince] = useState('QC')
  const [postal, setPostal] = useState('')
  const [rates, setRates] = useState([])
  const [selectedRate, setSelectedRate] = useState(null)
  const [loadingRates, setLoadingRates] = useState(false)
  const [rateError, setRateError] = useState('')
  const [loading, setLoading] = useState(false)
  const timerRef = useRef(null)

  const totalValue = subtotal ?? items.reduce((a,i) => a + i.price * i.qty, 0)
  const discountedValue = totalValue - (promoDiscount || 0)
  const shippingCost = discountedValue >= 250 ? 0 : (selectedRate ? parseFloat(selectedRate.amount) : null)
  const grandTotal = discountedValue + (shippingCost || 0)

  async function fetchRates(p, c, prov) {
    const cleanPostal = p.replace(/\s/g,'').toUpperCase()
    if (!cleanPostal || cleanPostal.length < 5) return
    setLoadingRates(true)
    setRateError('')
    setRates([])
    setSelectedRate(null)
    try {
      const res = await fetch('/api/shipping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, toPostal: cleanPostal, toCountry: c, toState: prov })
      })
      const data = await res.json()
      if (data.rates && data.rates.length > 0) {
        setRates(data.rates)
        if (data.free) {
          setSelectedRate({ amount: '0.00', name: '🎉 Free Shipping', service: 'free' })
        } else {
          setSelectedRate(data.rates[0])
        }
      } else {
        setRateError('Could not get rates. Please try again.')
      }
    } catch(e) {
      setRateError('Connection error. Please try again.')
    }
    setLoadingRates(false)
  }

  function handlePostalChange(val) {
    setPostal(val)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      const clean = val.replace(/\s/g,'')
      if (clean.length >= 6 || (country === 'US' && clean.length >= 5)) {
        fetchRates(val, country, province)
      }
    }, 800)
  }

  function handleProvinceChange(val) {
    setProvince(val)
    const clean = postal.replace(/\s/g,'')
    if (clean.length >= 5) fetchRates(postal, country, val)
  }

  function handleCountryChange(val) {
    setCountry(val)
    setProvince(val === 'CA' ? 'QC' : 'NY')
    setPostal('')
    setRates([])
    setSelectedRate(null)
  }

  async function pay() {
    if (!name || !email) return alert('Please fill in your name and email')
    if (discountedValue < 250 && !selectedRate) return alert('Please enter your postal code to get shipping rates')
    setLoading(true)
    try {
      const shipping = discountedValue >= 250
        ? { cost: 0, label: 'Free Shipping' }
        : { cost: parseFloat(selectedRate.amount), label: selectedRate.name }
      const customerInfo = { name, email, address, city, province, country, postal }
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, customerInfo, shipping, promoDiscount: promoDiscount || 0 })
      })
      const { url, error } = await res.json()
      if (error) throw new Error(error)
      if (url) window.location.href = url
    } catch(e) {
      alert('Error: ' + e.message)
      setLoading(false)
    }
  }

  if (!items.length) return (
    <div style={{maxWidth:500,margin:'80px auto',padding:'0 24px',textAlign:'center'}}>
      <div style={{fontSize:56,marginBottom:12}}>🛒</div>
      <h2 style={{fontFamily:'Bebas Neue',fontSize:28,letterSpacing:2,marginBottom:12}}>Your cart is empty</h2>
      <Link href="/shop" style={{display:'inline-block',background:'#cc1100',color:'#fff',padding:'12px 28px',borderRadius:6,fontWeight:800,textDecoration:'none'}}>Back to Shop</Link>
    </div>
  )

  return (
    <div style={{maxWidth:1000,margin:'0 auto',padding:'36px 24px'}}>
      <h1 style={{fontFamily:'Bebas Neue',fontSize:28,letterSpacing:2,marginBottom:16,color:'#fff'}}>CHECKOUT</h1>
      <div style={{background:'#1a1200',border:'1px solid #c9a227',borderRadius:8,padding:'10px 16px',marginBottom:24,display:'flex',alignItems:'flex-start',gap:10}}>
        <span style={{fontSize:16,flexShrink:0}}>⚠️</span>
        <p style={{margin:0,fontSize:13,color:'#c9a227',lineHeight:1.6}}>
          <strong>Launch phase :</strong> Some items may be unavailable — a full refund will be issued immediately if so. &nbsp;·&nbsp; <strong>Phase de lancement :</strong> Certains produits pourraient ne pas être disponibles — un remboursement complet sera émis immédiatement.
        </p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:40}}>

        <div>
          <div style={{fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#555',marginBottom:14}}>Contact</div>

          <div style={{marginBottom:12}}>
            <label style={labelStyle}>Full name *</label>
            <input value={name} onChange={e=>setName(e.target.value)} style={inputStyle}/>
          </div>
          <div style={{marginBottom:12}}>
            <label style={labelStyle}>Email *</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} style={inputStyle}/>
          </div>

          <div style={{fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#555',marginBottom:14,marginTop:20}}>Shipping Address</div>

          <div style={{marginBottom:12}}>
            <label style={labelStyle}>Address</label>
            <input value={address} onChange={e=>setAddress(e.target.value)} style={inputStyle}/>
          </div>
          <div style={{marginBottom:12}}>
            <label style={labelStyle}>City</label>
            <input value={city} onChange={e=>setCity(e.target.value)} style={inputStyle}/>
          </div>

          <div style={{marginBottom:12}}>
            <label style={labelStyle}>Country</label>
            <select value={country} onChange={e=>handleCountryChange(e.target.value)} style={inputStyle}>
              <option value="CA">🇨🇦 Canada</option>
              <option value="US">🇺🇸 United States</option>
            </select>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:12}}>
            <div>
              <label style={labelStyle}>{country==='CA'?'Province':'State'}</label>
              <select value={province} onChange={e=>handleProvinceChange(e.target.value)} style={inputStyle}>
                {(country==='CA'?CA_PROVINCES:US_STATES).map(([code,name])=>(
                  <option key={code} value={code}>{name}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Postal / ZIP *</label>
              <input value={postal} onChange={e=>handlePostalChange(e.target.value)}
                placeholder={country==='CA'?'G8T 2K4':'10001'} style={inputStyle}/>
            </div>
          </div>

          <div style={{marginTop:20}}>
            <div style={{fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#555',marginBottom:10}}>Shipping Method</div>

            {discountedValue >= 250 ? (
              <div style={{background:'rgba(74,222,128,.08)',border:'1px solid rgba(74,222,128,.25)',borderRadius:8,padding:'14px 16px',display:'flex',alignItems:'center',gap:10}}>
                <span style={{fontSize:20}}>🎉</span>
                <div>
                  <div style={{fontWeight:700,color:'#4ade80',fontSize:13}}>Free Shipping!</div>
                  <div style={{fontSize:11,color:'#666'}}>Your order qualifies for free shipping</div>
                </div>
                <div style={{marginLeft:'auto',fontFamily:'Bebas Neue',fontSize:18,color:'#4ade80'}}>FREE</div>
              </div>
            ) : loadingRates ? (
              <div style={{background:'#0f0f1c',border:'1px solid #1c1c30',borderRadius:8,padding:'16px',textAlign:'center',color:'#555',fontSize:13}}>⏳ Getting shipping rates...</div>
            ) : rates.length > 0 ? (
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                {rates.map((rate, i) => (
                  <label key={i} style={{display:'flex',alignItems:'center',gap:12,background:selectedRate?.service===rate.service?'rgba(204,17,0,.08)':'#0f0f1c',border:`1px solid ${selectedRate?.service===rate.service?'#cc1100':'#1c1c30'}`,borderRadius:8,padding:'12px 14px',cursor:'pointer'}}>
                    <input type="radio" name="rate" checked={selectedRate?.service===rate.service} onChange={()=>setSelectedRate(rate)} style={{accentColor:'#cc1100'}}/>
                    <div style={{flex:1}}>
                      <div style={{fontSize:13,fontWeight:600,color:'#ddd'}}>{rate.name}</div>
                      <div style={{fontSize:11,color:'#555',marginTop:2}}>{rate.days}</div>
                    </div>
                    <div style={{fontFamily:'Bebas Neue',fontSize:18,color:'#d4a800'}}>CA${parseFloat(rate.amount).toFixed(2)}</div>
                  </label>
                ))}
              </div>
            ) : rateError ? (
              <div style={{background:'rgba(248,113,113,.08)',border:'1px solid rgba(248,113,113,.2)',borderRadius:8,padding:'12px 14px',color:'#f87171',fontSize:12}}>{rateError}</div>
            ) : (
              <div style={{background:'#0f0f1c',border:'1px solid #1c1c30',borderRadius:8,padding:'16px',textAlign:'center',color:'#555',fontSize:12}}>Enter your postal code above to see shipping rates</div>
            )}
          </div>

          <button onClick={pay} disabled={loading || (!selectedRate && discountedValue < 250) || !name || !email}
            style={{width:'100%',background:'#cc1100',color:'#fff',border:'none',borderRadius:8,padding:'16px',fontWeight:800,fontSize:16,cursor:'pointer',marginTop:20,opacity:(loading||(!selectedRate&&discountedValue<250)||!name||!email)?0.6:1}}>
            {loading ? 'Redirecting...' : `💳 PAY — CA$${grandTotal.toFixed(2)}`}
          </button>
          <div style={{textAlign:'center',fontSize:11,color:'#444',marginTop:8}}>🔒 Secured by Stripe SSL</div>
        </div>

        <div>
          <div style={{fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#555',marginBottom:14}}>Order Summary</div>
          <div style={{background:'#0f0f1c',border:'1px solid #1c1c30',borderRadius:10,padding:'14px',display:'flex',flexDirection:'column',gap:10}}>
            {items.map(item => (
              <div key={item.id} style={{display:'flex',gap:10,alignItems:'center'}}>
                <div style={{width:48,height:48,borderRadius:6,overflow:'hidden',background:'#07070f',flexShrink:0}}>
                  {item.photos?.[0]
                    ? <img src={item.photos[0]} alt="" style={{width:'100%',height:'100%',objectFit:'contain',padding:3}}/>
                    : <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>🛍️</div>}
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:11,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',color:'#bbb'}}>{item.title}</div>
                  <div style={{fontSize:10,color:'#555'}}>×{item.qty}</div>
                </div>
                <div style={{fontFamily:'Bebas Neue',fontSize:14,color:'#d4a800',flexShrink:0}}>CA${(item.price*item.qty).toFixed(2)}</div>
              </div>
            ))}
            <div style={{borderTop:'1px solid #1c1c30',paddingTop:10,display:'flex',flexDirection:'column',gap:6}}>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:'#666'}}>
                <span>Subtotal</span><span>CA${totalValue.toFixed(2)}</span>
              </div>
              {promoDiscount > 0 && (
                <div style={{display:'flex',justifyContent:'space-between',fontSize:12}}>
                  <span style={{color:'#4ade80'}}>🎉 Promo 3 pour 2</span>
                  <span style={{color:'#4ade80'}}>−CA${promoDiscount.toFixed(2)}</span>
                </div>
              )}
              <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:'#666'}}>
                <span>Shipping</span>
                <span style={{color:shippingCost===0?'#4ade80':'#aaa'}}>
                  {shippingCost===null ? '—' : shippingCost===0 ? 'FREE' : `CA$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              {discountedValue < 250 && (
                <div style={{fontSize:10,color:'#555',textAlign:'right'}}>Add CA${(250-discountedValue).toFixed(2)} more for free shipping</div>
              )}
              <div style={{borderTop:'1px solid #1c1c30',paddingTop:8,display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
                <span style={{fontWeight:700,color:'#eee'}}>Total</span>
                <span style={{fontFamily:'Bebas Neue',fontSize:26,color:'#d4a800'}}>CA${grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div style={{marginTop:20,background:'#0f0f1c',border:'1px solid #1c1c30',borderRadius:8,padding:'14px'}}>
            <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'#555',marginBottom:10}}>We Accept</div>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {['💳 Visa','💳 Mastercard','💳 Amex','🍎 Apple Pay','🟡 Google Pay'].map(c=>(
                <span key={c} style={{fontSize:11,background:'#1c1c30',color:'#888',padding:'4px 10px',borderRadius:4}}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
