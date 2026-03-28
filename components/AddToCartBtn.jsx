'use client'
import { useCart } from './CartProvider'
import { useState } from 'react'
export default function AddToCartBtn({ product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  function handle() { addItem(product); setAdded(true); setTimeout(()=>setAdded(false),1200) }
  return (
    <button onClick={handle} style={{background:added?'#166534':'#e8b820',color:added?'#86efac':'#000',border:'none',borderRadius:4,padding:'5px 10px',fontSize:10,fontWeight:700,cursor:'pointer',transition:'all .2s'}}>
      {added?'✓ Ajouté':'+ Panier'}
    </button>
  )
}
