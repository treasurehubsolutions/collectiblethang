"""
Désactive les doublons par ebay_id (même listing importé 2x)
"""

import subprocess, sys
for pkg in ["supabase"]:
    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", pkg, "--quiet"],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )

from supabase import create_client
from collections import defaultdict

SUPABASE_URL = "https://eptnfpvwfxloimmbzxcl.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254"

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

print("=" * 55)
print("  Fix doublons par ebay_id (v2)")
print("=" * 55)
print()

# Récupérer TOUS les produits (enabled ou non) avec pagination
print("🔍 Chargement de tous les produits...")
all_products = []
from_idx = 0
while True:
    result = supabase.table("products")\
        .select("id, ebay_id, title, enabled, stock, created_at")\
        .range(from_idx, from_idx + 999)\
        .execute()
    batch = result.data or []
    all_products.extend(batch)
    if len(batch) < 1000:
        break
    from_idx += 1000

print(f"✅ {len(all_products)} produits au total")

# Grouper par ebay_id
groups = defaultdict(list)
for p in all_products:
    ebay_id = str(p.get("ebay_id", "")).strip()
    if ebay_id and ebay_id != "None":
        groups[ebay_id].append(p)

# Trouver les ebay_id en double
doublons = {eid: prods for eid, prods in groups.items() if len(prods) > 1}
print(f"📋 {len(doublons)} ebay_id en double")
print()

to_disable = []
for ebay_id, prods in doublons.items():
    # Garder celui qui a des photos en priorité, sinon le plus récent
    prods_with_photos = [p for p in prods if p.get("photos") and len(p.get("photos", [])) > 0]
    if prods_with_photos:
        keeper = sorted(prods_with_photos, key=lambda p: p.get("created_at", ""), reverse=True)[0]
    else:
        keeper = sorted(prods, key=lambda p: p.get("created_at", ""), reverse=True)[0]

    for p in prods:
        if p["id"] != keeper["id"] and p.get("enabled"):
            to_disable.append(p["id"])

print(f"Total à désactiver: {len(to_disable)}")
print()

if not to_disable:
    print("🎉 Aucun doublon enabled à corriger !")
    input("Entrée pour fermer...")
    exit()

confirm = input(f"Désactiver ces {len(to_disable)} doublons ? (oui/non) : ").strip().lower()
if confirm not in ("oui", "o", "yes", "y"):
    print("Annulé.")
    exit()

BATCH = 100
disabled = 0
for i in range(0, len(to_disable), BATCH):
    batch = to_disable[i:i+BATCH]
    supabase.table("products")\
        .update({"enabled": False, "stock": 0})\
        .in_("id", batch)\
        .execute()
    disabled += len(batch)
    print(f"\r  Désactivé: {disabled}/{len(to_disable)}", end="", flush=True)

print()
print()
print("=" * 55)
print(f"  ✅ {disabled} doublons désactivés !")
print("=" * 55)
print()
input("Appuie sur ENTRÉE pour fermer...")
