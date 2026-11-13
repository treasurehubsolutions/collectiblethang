'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Compteur de visites maison: anonyme (aucune IP ni cookie), envoie le chemin + la source au serveur.
export default function Tracker() {
  const pathname = usePathname()
  useEffect(() => {
    try {
      if (!pathname || pathname.startsWith('/admin') || pathname.startsWith('/api')) return
      let sid = null, first = false
      try {
        sid = sessionStorage.getItem('tsc_sid')
        if (!sid) { sid = Math.random().toString(36).slice(2) + Date.now().toString(36); sessionStorage.setItem('tsc_sid', sid); first = true }
      } catch (e) { sid = 'x' + Math.random().toString(36).slice(2) }
      const q = new URLSearchParams(window.location.search)
      const payload = {
        path: pathname,
        sid,
        ref: first ? document.referrer || '' : '',
        utm_source: q.get('utm_source') || '',
        utm_medium: q.get('utm_medium') || '',
        utm_campaign: q.get('utm_campaign') || '',
      }
      const body = JSON.stringify(payload)
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/track', new Blob([body], { type: 'application/json' }))
      } else {
        fetch('/api/track', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {})
      }
    } catch (e) {}
  }, [pathname])
  return null
}
