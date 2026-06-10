'use client'
import { useState } from 'react'
import { useCart } from './CartProvider'

export default function AddToCartBtn({ product, size = 'sm' }) {
  const { addItem, items } = useCart()
  const [added, setAdded] = useState(false)
  const inCart = items.some(i => i.id === product.id)

  function handleAdd(e) {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  const small = size === 'sm'
  return (
    <button onClick={handleAdd}
      style={{
        background: inCart ? '#166534' : '#cc1100',
        color: '#fff', border: 'none',
        borderRadius: small ? 5 : 8,
        padding: small ? '5px 10px' : '11px 20px',
        fontWeight: 700,
        fontSize: small ? 11 : 14,
        cursor: 'pointer',
        transition: 'opacity .15s',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}>
      {added ? '✓' : inCart ? '✓ Added' : '+'}
    </button>
  )
}
