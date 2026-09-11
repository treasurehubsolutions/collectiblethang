#!/usr/bin/env node
// update-weights-supabase.js
// Met à jour les poids ET dimensions par catégorie dans Supabase
// Commande: node update-weights-supabase.js

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  'https://eptnfpvwfxloimmbzxcl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254'
)

// Poids (g) + dimensions L×l×H (cm) — emballage complet inclus
const CATEGORY_SPECS = {
  'Hot Wheels':              { weight: 180, length: 30, width: 15, height: 5  },
  'Hot Wheels Premium':      { weight: 220, length: 30, width: 15, height: 5  },
  'Star Wars':               { weight: 400, length: 32, width: 20, height: 10 },
  'Marvel':                  { weight: 450, length: 32, width: 20, height: 10 },
  'DC Comics':               { weight: 450, length: 32, width: 20, height: 10 },
  'Transformers':            { weight: 500, length: 32, width: 20, height: 15 },
  'WWE & Wrestling':         { weight: 700, length: 36, width: 30, height: 16 },
  'McFarlane Figures':       { weight: 500, length: 32, width: 20, height: 15 },
  'GI Joe':                  { weight: 350, length: 30, width: 18, height: 8  },
  'TMNT':                    { weight: 400, length: 32, width: 20, height: 10 },
  'Power Rangers':           { weight: 400, length: 32, width: 20, height: 10 },
  'Masters of the Universe': { weight: 400, length: 32, width: 20, height: 10 },
  'Jurassic Park / World':   { weight: 400, length: 32, width: 20, height: 10 },
  'Disney & Pixar':          { weight: 350, length: 30, width: 18, height: 8  },
  'Funko Pop':               { weight: 300, length: 20, width: 15, height: 20 },
  'Pokémon':                 { weight: 250, length: 25, width: 15, height: 5  },
  'Sonic':                   { weight: 350, length: 30, width: 18, height: 8  },
  'Action Figures':          { weight: 400, length: 32, width: 20, height: 10 },
  'Collectibles':            { weight: 350, length: 25, width: 20, height: 10 },
  'Diecast & Scale Models':  { weight: 300, length: 25, width: 15, height: 8  },
  'VHS Tapes':               { weight: 350, length: 25, width: 15, height: 10 },
  'DVD & Blu-ray':           { weight: 250, length: 25, width: 15, height: 5  },
  'Video Games':             { weight: 300, length: 25, width: 18, height: 5  },
  'Hallmark Ornaments':      { weight: 300, length: 20, width: 15, height: 10 },
  'LEGO':                    { weight: 600, length: 40, width: 30, height: 15 },
  'Dolls & Barbie':          { weight: 400, length: 35, width: 20, height: 10 },
  'Hockey':                  { weight: 300, length: 25, width: 15, height: 8  },
  'Apparel':                 { weight: 400, length: 35, width: 25, height: 5  },
}

async function updateWeights() {
  console.log('⚖️  Mise à jour des poids et dimensions par catégorie...\n')
  
  let total = 0

  for (const [category, specs] of Object.entries(CATEGORY_SPECS)) {
    const { error } = await supabase
      .from('products')
      .update(specs)
      .eq('category', category)

    if (error) {
      console.error(`❌ ${category}: ${error.message}`)
    } else {
      console.log(`✓ ${category}: ${specs.weight}g — ${specs.length}×${specs.width}×${specs.height} cm`)
      total++
    }
  }

  console.log(`\n✅ ${total} catégories mises à jour!`)
  console.log('\nTu peux ajuster produit par produit dans la page Admin.')
}

updateWeights().catch(console.error)
