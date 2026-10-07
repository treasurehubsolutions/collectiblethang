"""
Détecte et désactive les doublons dans Supabase
Garde le plus récent (id le plus grand), désactive les autres
"""

import subprocess, sys
for pkg in ["supabase"]:
    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", pkg, "--quiet"],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )

from supabase import create_client

SUPABASE_URL = "https://eptnfpvwfxloimmbzxcl.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254"

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

print("=" * 55)
print("  Détection des doublons Supabase")
print("=" * 55)
print()

# Récupérer tous les produits avec pagination
print("🔍 Chargement des produits...")
all_products = []
from_idx = 0
while True:
    result = supabase.table("products")\
        .select("id, ebay_id, title, enabled, stock, created_at")\
        .eq("enabled", True)\
        .range(from_idx, from_idx + 999)\
        .execute()
    batch = result.data or []
    all_products.extend(batch)
    if len(batch) < 1000:
        break
    from_idx += 1000

print(f"✅ {len(all_products)} produits actifs chargés")
print()

# Grouper par titre normalisé
from collections import defaultdict
groups = defaultdict(list)
for p in all_products:
    title_key = p.get("title", "").strip().lower()
    groups[title_key].append(p)

# Trouver les doublons
doublons = {title: prods for title, prods in groups.items() if len(prods) > 1}

print(f"📋 {len(doublons)} titres en double trouvés:")
print()

to_disable = []
for title, prods in doublons.items():
    # Trier par created_at (garder le plus récent)
    prods_sorted = sorted(prods, key=lambda p: p.get("created_at", ""), reverse=True)
    keeper = prods_sorted[0]
    duplicates = prods_sorted[1:]

    print(f"  🔁 {title[:60]}")
    print(f"     ✅ Garde  : {keeper['id'][:8]}... (ebay_id: {keeper.get('ebay_id', '?')})")
    for d in duplicates:
        print(f"     ❌ Désactive: {d['id'][:8]}... (ebay_id: {d.get('ebay_id', '?')})")
        to_disable.append(d["id"])
    print()

print(f"Total à désactiver: {len(to_disable)}")
print()

if not to_disable:
    print("🎉 Aucun doublon à corriger !")
    input("Entrée pour fermer...")
    exit()

confirm = input(f"Désactiver ces {len(to_disable)} doublons ? (oui/non) : ").strip().lower()
if confirm != "oui":
    print("Annulé.")
    exit()

# Désactiver les doublons par batch
BATCH = 100
disabled = 0
for i in range(0, len(to_disable), BATCH):
    batch = to_disable[i:i+BATCH]
    result = supabase.table("products")\
        .update({"enabled": False, "stock": 0})\
        .in_("id", batch)\
        .execute()
    disabled += len(batch)
    print(f"\r  Désactivé: {disabled}/{len(to_disable)}", end="", flush=True)

print()
print()
print("=" * 55)
print("  ✅  TERMINÉ !")
print("=" * 55)
print(f"  Doublons désactivés: {disabled}")
print()
input("Appuie sur ENTRÉE pour fermer...")
