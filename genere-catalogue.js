const fs = require('fs')
const csv = require('csv-parse/sync')

// Charger le CSV source du catalogue FB (shelf_cartel_catalog.csv)
const source = csv.parse(fs.readFileSync('shelf_cartel_catalog.csv','utf8'), {columns:true})

// Combiner les deux fichiers de matching
const matching = {}
const allMatches = [
  ...fs.readFileSync('matching_deja_fait.tsv','utf8').split('\n').filter(Boolean),
  ...fs.readFileSync('nouveaux_matches.tsv','utf8').split('\n').filter(Boolean),
]
for(const line of allMatches){
  const [idx,id,price,photo] = line.split('|')
  matching[idx] = {id, price, photo}
}

const rows = source.map((row, i) => {
  const idx = String(i+1)
  const m = matching[idx]
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    availability: 'in stock',
    condition: row.condition,
    price: m ? `${m.price} CAD` : row.price,
    link: m ? `https://collectiblethang.vercel.app/product/${m.id}` : '',
    image_link: m?.photo !== 'null' && m?.photo ? m.photo : row.image_link,
    brand: 'The Shelf Cartel Toys',
    google_product_category: row.google_product_category,
  }
})

const cols = ['id','title','description','availability','condition','price','link','image_link','brand','google_product_category']
const out = [cols.join(','), ...rows.map(r => cols.map(c => `"${(r[c]||'').replace(/"/g,'""')}"`).join(','))].join('\n')
fs.writeFileSync('catalogue_final.csv', out)
console.log(`${rows.length} produits, ${rows.filter(r=>r.link).length} avec lien`)