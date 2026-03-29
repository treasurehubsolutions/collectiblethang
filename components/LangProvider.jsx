'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const LangCtx = createContext('en')
export const useLang = () => useContext(LangCtx)

export default function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  useEffect(() => {
    const saved = localStorage.getItem('b2bt_lang')
    if (saved === 'fr') setLang('fr')
  }, [])
  function toggle() {
    const next = lang === 'en' ? 'fr' : 'en'
    setLang(next)
    localStorage.setItem('b2bt_lang', next)
  }
  return (
    <LangCtx.Provider value={{ lang, toggle }}>
      {children}
    </LangCtx.Provider>
  )
}
