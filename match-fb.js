// match-fb.js
const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')

const sb = createClient(
  'https://eptnfpvwfxloimmbzxcl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254'
)

const unmatched = fs.readFileSync('titres_non_matches.csv','utf8')
  .split('\n').slice(1).filter(Boolean)
  .map(l => { const [idx,...rest]=l.split(','); return {idx, title:rest.join(',').replace(/^"|"$/g,'')} })

async function run() {
  const {data} = await sb.from('products').select('id,title,price,photos').eq('enabled',true)
  const norm = s => s.toLowerCase().replace(/[^a-z0-9]/g,' ').replace(/\s+/g,' ').trim()
  const words = s => norm(s).split(' ').filter(w=>w.length>3)

  const results = []
  for (const u of unmatched) {
    const frWords = words(u.title)
    let best=null, bestScore=0
    for (const p of data) {
      const enWords = words(p.title)
      const score = frWords.filter(w=>enWords.includes(w)).length
      if(score>bestScore && score>=2){ bestScore=score; best=p }
    }
    if(best) results.push(`${u.idx}|${best.id}|${best.price}|${best.photos?.[0]||'null'}`)
  }
  fs.writeFileSync('nouveaux_matches.tsv', results.join('\n'))
  console.log(`${results.length} matches trouvés`)
}
run()