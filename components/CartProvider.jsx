'use client'
import { createContext, useContext, useState } from 'react'
import Link from 'next/link'
const Ctx = createContext(null)
export const useCart = () => useContext(Ctx)

export default function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)
  const addItem = (p) => {
    setItems(prev => { const ex=prev.find(i=>i.id===p.id); if(ex) return prev.map(i=>i.id===p.id?{...i,qty:i.qty+1}:i); return [...prev,{...p,qty:1}] })
    setOpen(true)
  }
  const removeItem = (id) => setItems(prev=>prev.filter(i=>i.id!==id))
  const updateQty = (id, qty) => { if(qty<=0) return removeItem(id); setItems(prev=>prev.map(i=>i.id===id?{...i,qty}:i)) }
  const total = items.reduce((a,i)=>a+i.price*i.qty,0)
  const count = items.reduce((a,i)=>a+i.qty,0)
  return (
    <Ctx.Provider value={{items,addItem,removeItem,updateQty,total,count,open,setOpen}}>
      {children}
      {open&&<div onClick={()=>setOpen(false)} style={{position:'fixed',inset:0,zIndex:198,background:'rgba(0,0,0,.65)',backdropFilter:'blur(4px)'}}/>}
      <div style={{position:'fixed',right:0,top:0,bottom:0,zIndex:199,width:'min(100vw,420px)',background:'#0d0d12',borderLeft:'2px solid #1c1c28',display:'flex',flexDirection:'column',transform:open?'translateX(0)':'translateX(100%)',transition:'transform .28s cubic-bezier(.4,0,.2,1)'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 20px',borderBottom:'1px solid #1c1c28',background:'#12121e'}}>
          <div style={{fontFamily:'Bebas Neue',fontSize:20,letterSpacing:2,color:'#e8b820'}}>MON PANIER ({count})</div>
          <button onClick={()=>setOpen(false)} style={{background:'none',border:'1px solid #2a2a38',color:'#888',width:32,height:32,borderRadius:6,cursor:'pointer',fontSize:16}}>✕</button>
        </div>
        <div style={{flex:1,overflowY:'auto',padding:'14px 20px',display:'flex',flexDirection:'column',gap:10}}>
          {!items.length
            ? <div style={{textAlign:'center',padding:'60px 0',color:'#555'}}><div style={{fontSize:48,marginBottom:12}}>🛒</div><div>Votre panier est vide</div></div>
            : items.map(item=>(
              <div key={item.id} style={{display:'flex',gap:12,alignItems:'center',background:'#12121e',borderRadius:8,padding:'10px 12px',border:'1px solid #1c1c28'}}>
                <div style={{width:50,height:50,borderRadius:6,overflow:'hidden',background:'#0d0d12',flexShrink:0}}>
                  {item.photos?.[0]?<img src={item.photos[0]} alt="" style={{width:'100%',height:'100%',objectFit:'contain',padding:3}}/>:<div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:22}}>🛍️</div>}
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:11,fontWeight:500,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',color:'#ccc'}}>{item.title}</div>
                  <div style={{fontFamily:'Bebas Neue',fontSize:16,color:'#e8b820',marginTop:3}}>{item.currency==='CAD'?'CA$':'$'}{(item.price*item.qty).toFixed(2)}</div>
                  <div style={{display:'flex',alignItems:'center',gap:6,marginTop:5}}>
                    <button onClick={()=>updateQty(item.id,item.qty-1)} style={{width:22,height:22,borderRadius:4,background:'#1a1a26',border:'1px solid #2a2a38',color:'#eee',cursor:'pointer',fontSize:14,display:'flex',alignItems:'center',justifyContent:'center'}}>−</button>
                    <span style={{fontSize:12,width:20,textAlign:'center'}}>{item.qty}</span>
                    <button onClick={()=>updateQty(item.id,item.qty+1)} style={{width:22,height:22,borderRadius:4,background:'#1a1a26',border:'1px solid #2a2a38',color:'#eee',cursor:'pointer',fontSize:14,display:'flex',alignItems:'center',justifyContent:'center'}}>+</button>
                    <button onClick={()=>removeItem(item.id)} style={{marginLeft:'auto',background:'none',border:'none',color:'#555',cursor:'pointer',fontSize:14}}>✕</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {items.length>0&&(
          <div style={{borderTop:'1px solid #1c1c28',padding:'16px 20px',background:'#08080e'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:14}}>
              <span style={{color:'#666',fontSize:13}}>Total estimé</span>
              <span style={{fontFamily:'Bebas Neue',fontSize:26,color:'#e8b820',letterSpacing:1}}>CA${total.toFixed(2)}</span>
            </div>
            <Link href="/checkout" onClick={()=>setOpen(false)} style={{display:'block',width:'100%',background:'#e8b820',color:'#000',padding:'14px',borderRadius:8,fontWeight:800,fontSize:15,textAlign:'center',textDecoration:'none'}}>
              PASSER À LA CAISSE →
            </Link>
            <div style={{textAlign:'center',fontSize:11,color:'#444',marginTop:8}}>🔒 Paiement sécurisé par Stripe</div>
          </div>
        )}
      </div>
    </Ctx.Provider>
  )
}
