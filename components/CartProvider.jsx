'use client'
import { createContext, useContext, useState, useEffect } from 'react'
const CartCtx = createContext({ items: [], total: 0, addItem: () => {}, removeItem: () => {}, clearCart: () => {} })
export function useCart() { return useContext(CartCtx) }
export default function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)

  const addItem = (product) => {
    setItems(prev => {
      const ex = prev.find(i => i.id === product.id)
      if (ex) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
    setOpen(true)
  }
  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id))
  const clearCart = () => setItems([])
  const total = items.reduce((a, i) => a + i.price * i.qty, 0)

  return (
    <CartCtx.Provider value={{ items, total, addItem, removeItem, clearCart, open, setOpen }}>
      {children}
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 999, display: 'flex', justifyContent: 'flex-end' }}>
          <div onClick={() => setOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.6)' }} />
          <div style={{ position: 'relative', width: 380, maxWidth: '100vw', background: '#0d0d18', borderLeft: '1px solid #1c1c28', height: '100vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: 22, letterSpacing: 2, color: '#f0c030' }}>PANIER</div>
              <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#888', fontSize: 22, cursor: 'pointer' }}>✕</button>
            </div>
            {items.length === 0 ? (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', fontSize: 14 }}>Votre panier est vide</div>
            ) : (
              <>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
                  {items.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: 10, alignItems: 'center', background: '#12121e', borderRadius: 8, padding: '10px 12px' }}>
                      <div style={{ width: 52, height: 52, borderRadius: 6, overflow: 'hidden', background: '#07070f', flexShrink: 0 }}>
                        {item.photos?.[0] ? <img src={item.photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 3 }} /> : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🛍️</div>}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 11, color: '#bbb', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</div>
                        <div style={{ fontFamily: 'Bebas Neue', fontSize: 16, color: '#f0c030', marginTop: 2 }}>CA${(item.price * item.qty).toFixed(2)}</div>
                      </div>
                      <button onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: 16, padding: '0 4px' }}>✕</button>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid #1c1c28', paddingTop: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                    <span style={{ color: '#888' }}>Total</span>
                    <span style={{ fontFamily: 'Bebas Neue', fontSize: 22, color: '#f0c030' }}>CA${total.toFixed(2)}</span>
                  </div>
                  <a href="/checkout" style={{ display: 'block', background: '#cc1100', color: '#fff', textAlign: 'center', padding: '14px', borderRadius: 8, fontWeight: 800, fontSize: 15, textDecoration: 'none' }}>
                    Passer la commande →
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </CartCtx.Provider>
  )
}
