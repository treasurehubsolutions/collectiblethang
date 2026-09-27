'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const CartCtx = createContext({ items: [], total: 0, addItem: () => {}, removeItem: () => {}, clearCart: () => {} })
export function useCart() { return useContext(CartCtx) }

export default function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem('tsc_cart')
      if (saved) setItems(JSON.parse(saved))
    } catch(e) {}
  }, [])

  useEffect(() => {
    if (!mounted) return
    try {
      localStorage.setItem('tsc_cart', JSON.stringify(items))
    } catch(e) {}
  }, [items, mounted])

  const addItem = (product) => {
    setItems(prev => {
      const ex = prev.find(i => i.id === product.id)
      const maxQty = product.stock ?? 1
      if (ex) {
        if (ex.qty >= maxQty) return prev // déjà au max
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      }
      if (maxQty <= 0) return prev // pas de stock
      return [...prev, { ...product, qty: 1 }]
    })
    setOpen(true)
  }

  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id))

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      removeItem(id)
    } else {
      setItems(prev => prev.map(i => {
        if (i.id !== id) return i
        const maxQty = i.stock ?? 1
        return { ...i, qty: Math.min(qty, maxQty) }
      }))
    }
  }

  const clearCart = () => setItems([])
  const total = items.reduce((a, i) => a + i.price * i.qty, 0)

  return (
    <CartCtx.Provider value={{ items, total, addItem, removeItem, updateQty, clearCart, open, setOpen }}>
      {children}
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 999, display: 'flex', justifyContent: 'flex-end' }}>
          <div onClick={() => setOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.6)' }} />
          <div style={{ position: 'relative', width: 380, maxWidth: '100vw', background: '#0d0d18', borderLeft: '1px solid #1c1c28', height: '100vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: 22, letterSpacing: 2, color: '#c9a227' }}>PANIER</div>
              <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#888', fontSize: 22, cursor: 'pointer' }}>✕</button>
            </div>
            {items.length === 0 ? (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', fontSize: 14 }}>Votre panier est vide</div>
            ) : (
              <>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
                  {items.map(item => {
                    const maxQty = item.stock ?? 1
                    return (
                      <div key={item.id} style={{ display: 'flex', gap: 10, alignItems: 'center', background: '#12121e', borderRadius: 8, padding: '10px 12px' }}>
                        <div style={{ width: 52, height: 52, borderRadius: 6, overflow: 'hidden', background: '#07070f', flexShrink: 0 }}>
                          {item.photos?.[0]
                            ? <img src={item.photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 3 }} />
                            : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🛍️</div>}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 11, color: '#bbb', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                            <button onClick={() => updateQty(item.id, item.qty - 1)} style={{ background: '#1c1c28', border: 'none', color: '#888', width: 22, height: 22, borderRadius: 4, cursor: 'pointer', fontSize: 14 }}>−</button>
                            <span style={{ fontSize: 12, color: '#aaa' }}>{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              disabled={item.qty >= maxQty}
                              style={{ background: '#1c1c28', border: 'none', color: item.qty >= maxQty ? '#333' : '#888', width: 22, height: 22, borderRadius: 4, cursor: item.qty >= maxQty ? 'not-allowed' : 'pointer', fontSize: 14 }}>+</button>
                          </div>
                          {item.qty >= maxQty && (
                            <div style={{ fontSize: 9, color: '#cc1100', marginTop: 2 }}>Stock max atteint</div>
                          )}
                          <div style={{ fontFamily: 'Bebas Neue', fontSize: 16, color: '#c9a227', marginTop: 2 }}>CA${(item.price * item.qty).toFixed(2)}</div>
                        </div>
                        <button onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: 16, padding: '0 4px' }}>✕</button>
                      </div>
                    )
                  })}
                </div>
                <div style={{ borderTop: '1px solid #1c1c28', paddingTop: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                    <span style={{ color: '#888' }}>Total</span>
                    <span style={{ fontFamily: 'Bebas Neue', fontSize: 22, color: '#c9a227' }}>CA${total.toFixed(2)}</span>
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
