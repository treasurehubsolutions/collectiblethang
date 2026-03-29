'use client'
import { createContext, useContext, useState, useEffect } from 'react'
export const LangCtx = createContext({ lang:'en', toggle:()=>{} })
export const useLang = () => useContext(LangCtx)

export default function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  useEffect(() => {
    try { const s = localStorage.getItem('b2bt_lang'); if(s==='fr') setLang('fr') } catch(e){}
  }, [])
  function toggle() {
    const next = lang==='en'?'fr':'en'
    setLang(next)
    try { localStorage.setItem('b2bt_lang', next) } catch(e){}
  }
  return <LangCtx.Provider value={{lang,toggle}}>{children}</LangCtx.Provider>
}
