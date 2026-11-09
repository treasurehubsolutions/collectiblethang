import { timingSafeEqual } from 'crypto'

// Verifie le mot de passe admin cote serveur (variable ADMIN_PASSWORD).
// Si la variable n'existe pas, tout est refuse (securite par defaut).
export function isAdmin(req) {
  const expected = process.env.ADMIN_PASSWORD
  const given = req.headers.get('x-admin-pw') || ''
  if (!expected) return false
  const a = Buffer.from(given)
  const b = Buffer.from(expected)
  return a.length === b.length && timingSafeEqual(a, b)
}
