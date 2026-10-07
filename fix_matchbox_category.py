import subprocess, sys
subprocess.check_call([sys.executable, "-m", "pip", "install", "supabase", "--quiet"],
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
from supabase import create_client

supabase = create_client(
    "https://eptnfpvwfxloimmbzxcl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254"
)

print("🔍 Chargement des produits Hot Wheels...")
all_products = []
from_idx = 0
while True:
    result = supabase.table("products")\
        .select("id, title, category")\
        .eq("category", "Hot Wheels")\
        .range(from_idx, from_idx + 999)\
        .execute()
    batch = result.data or []
    all_products.extend(batch)
    if len(batch) < 1000: break
    from_idx += 1000

print(f"   {len(all_products)} produits Hot Wheels")

matchbox = [p for p in all_products if "matchbox" in p.get("title", "").lower()]
print(f"   {len(matchbox)} produits Matchbox trouvés")
print()

for p in matchbox[:5]:
    print(f"   - {p['title'][:60]}")
if len(matchbox) > 5:
    print(f"   ... et {len(matchbox)-5} autres")
print()

if not matchbox:
    print("Aucun produit Matchbox trouvé.")
    input("Entrée...")
    exit()

confirm = input(f"Changer {len(matchbox)} produits vers catégorie 'Matchbox' ? (oui/non) : ").strip().lower()
if confirm not in ("oui", "o", "yes", "y"):
    print("Annulé.")
    exit()

ids = [p["id"] for p in matchbox]
BATCH = 100
updated = 0
for i in range(0, len(ids), BATCH):
    batch = ids[i:i+BATCH]
    supabase.table("products").update({"category": "Matchbox"}).in_("id", batch).execute()
    updated += len(batch)
    print(f"\r  Mis à jour: {updated}/{len(ids)}", end="", flush=True)

print()
print(f"\n✅ {updated} produits déplacés vers catégorie Matchbox !")
input("Entrée pour fermer...")
