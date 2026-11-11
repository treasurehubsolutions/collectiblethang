import { createClient } from '@supabase/supabase-js'
const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const svc = process.env.SUPABASE_SERVICE_KEY
// Next.js met les requêtes fetch en cache: sans ça le site affiche d'anciens titres/photos/prix
const noStore = (input, init = {}) => fetch(input, { ...init, cache: 'no-store' })
export const supabase = createClient(url, anon, { global: { fetch: noStore } })
export const getAdminClient = () => createClient(url, svc, { global: { fetch: noStore } })
