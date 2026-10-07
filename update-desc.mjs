import { createClient } from '@supabase/supabase-js'
import { parse } from 'csv-parse/sync'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SUPABASE_URL = 'https://eptnfpvwfxloimmbzxcl.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false }
})

const csvContent = readFileSync(join(__dirname, 'catalogue_final.csv'), 'utf-8')
const rows = parse(csvContent, { columns: true, skip_empty_lines: true, quote: '"', trim: true })

console.log(`Found ${rows.length} rows in CSV`)

let updated = 0, skipped = 0, errors = 0

for (const row of rows) {
  const link = row.link || ''
  const description = (row.description || '').trim()
  const match = link.match(/\/product\/([a-f0-9-]{36})/)
  if (!match || !description) { skipped++; continue }
  const id = match[1]
  const { error } = await supabase.from('products').update({ description }).eq('id', id)
  if (error) { console.error(`Error ${id}: ${error.message}`); errors++ }
  else { updated++; if (updated % 100 === 0) console.log(`Updated ${updated}...`) }
}

console.log(`\nDone! Updated: ${updated} | Skipped: ${skipped} | Errors: ${errors}`)
