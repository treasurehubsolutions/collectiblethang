'use client'
import { createContext, useContext, useState } from 'react'
const LangCtx = createContext({ lang: 'fr', setLang: () => {} })
export function useLang() { return useContext(LangCtx) }
export default function LangProvider({ children }) {
  const [lang, setLang] = useState('fr')
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>
}
