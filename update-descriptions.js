// update-descriptions.js
// Run: node update-descriptions.js
// Requires: npm install @supabase/supabase-js csv-parse
// Set env vars: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_KEY

import { createClient } from '@supabase/supabase-js'
import { parse } from 'csv-parse/sync'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing env vars: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_KEY required')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false }
})

// Read CSV from same directory as this script
const csvPath = join(__dirname, 'catalogue_final.csv')
const csvContent = readFileSync(csvPath, 'utf-8')

const rows = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
  quote: '"',
  trim: true,
})

console.log(`Found ${rows.length} rows in CSV`)

let updated = 0
let skipped = 0
let errors = 0

for (const row of rows) {
  const link = row.link || ''
  const description = row.description || ''

  // Extract UUID from URL like https://collectiblethang.vercel.app/product/UUID
  const match = link.match(/\/product\/([a-f0-9-]{36})/)
  if (!match) { skipped++; continue }
  if (!description.trim()) { skipped++; continue }

  const id = match[1]

  const { error } = await supabase
    .from('products')
    .update({ description: description.trim() })
    .eq('id', id)

  if (error) {
    console.error(`Error updating ${id}: ${error.message}`)
    errors++
  } else {
    updated++
    if (updated % 50 === 0) console.log(`Updated ${updated}...`)
  }
}

console.log(`\nDone! Updated: ${updated} | Skipped: ${skipped} | Errors: ${errors}`)
