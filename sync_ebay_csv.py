"""
Synchronise Supabase avec le CSV eBay :
- Garde seulement les produits du CSV avec qty > 0, FIXED_PRICE, sans variation
- Déduplique par item_id ET par titre similaire (ratio > 0.92)
- Désactive dans Supabase tout ce qui n'est pas dans la liste finale
"""

import subprocess, sys
for pkg in ["supabase", "python-Levenshtein"]:
    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", pkg, "--quiet"],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )

import csv, re
from supabase import create_client
from collections import defaultdict

SUPABASE_URL = "https://eptnfpvwfxloimmbzxcl.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254"
CSV_PATH = r"D:\collectiblethang\eBay-all-active-listings-report-2026-10-06-13332684109.csv"

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

print("=" * 60)
print("  Sync eBay CSV → Supabase")
print("=" * 60)
print()

# ── 1. Lire le CSV ──────────────────────────────────────────
print("📂 Lecture du CSV...")
rows = []
with open(CSV_PATH, newline="", encoding="utf-8-sig") as f:
    reader = csv.DictReader(f)
    for row in reader:
        rows.append(row)
print(f"   {len(rows)} lignes brutes")

# ── 2. Filtres de base ───────────────────────────────────────
BANNED_KEYWORDS = [
    "you pick", "your pick", "your choice", "u pick",
]

def clean_qty(v):
    try: return int(str(v).strip())
    except: return 0

kept = []
skipped_qty = skipped_auction = skipped_variation = skipped_keyword = 0
for r in rows:
    qty = clean_qty(r.get("Available quantity", 0))
    fmt = r.get("Format", "").strip().upper()
    variation = r.get("Variation details", "").strip()
    title_lower = r.get("Title", "").lower()

    if qty <= 0:
        skipped_qty += 1; continue
    if fmt != "FIXED_PRICE":
        skipped_auction += 1; continue
    if variation:
        skipped_variation += 1; continue
    if any(kw in title_lower for kw in BANNED_KEYWORDS):
        skipped_keyword += 1; continue
    kept.append(r)

print(f"   Filtrés: {skipped_qty} qty=0 | {skipped_auction} auctions | {skipped_variation} variations | {skipped_keyword} you-pick/lot/bundle")
print(f"   ✅ {len(kept)} valides après filtres")

# ── 3. Dédupliquer par item_id ────────────────────────────────
seen_ids = {}
dedup_id = []
dup_id_count = 0
for r in kept:
    iid = str(r.get("Item number", "")).strip()
    if iid in seen_ids:
        dup_id_count += 1
    else:
        seen_ids[iid] = True
        dedup_id.append(r)
print(f"   Doublons item_id supprimés: {dup_id_count}")

# ── 4. Dédupliquer par titre ultra-similaire (ratio ≥ 0.92) ─
def normalize(t):
    return re.sub(r'\s+', ' ', re.sub(r'[^a-z0-9 ]', '', t.lower())).strip()

# Levenshtein similarity
try:
    from Levenshtein import ratio as lev_ratio
except ImportError:
    def lev_ratio(a, b):
        # fallback simple
        if not a and not b: return 1.0
        longer = max(len(a), len(b))
        if longer == 0: return 1.0
        dist = sum(c1 != c2 for c1, c2 in zip(a[:longer], b[:longer])) + abs(len(a)-len(b))
        return 1 - dist/longer

# Mots-clés à bannir dans les titres
BANNED_KEYWORDS = [
    "you pick", "your pick", "your choice", "u pick",
]

THRESHOLD = 0.92
final = []
seen_titles = []
dup_title_count = 0

for r in dedup_id:
    title = normalize(r.get("Title", ""))
    is_dup = False
    for t in seen_titles:
        if lev_ratio(title, t) >= THRESHOLD:
            is_dup = True
            break
    if is_dup:
        dup_title_count += 1
    else:
        seen_titles.append(title)
        final.append(r)

print(f"   Doublons titre similaire supprimés: {dup_title_count}")
print(f"   ✅ {len(final)} produits uniques à garder dans Supabase")
print()

# ── 5. Charger tous les produits Supabase ────────────────────
print("🔍 Chargement des produits Supabase...")
all_products = []
from_idx = 0
while True:
    result = supabase.table("products")\
        .select("id, ebay_id, title, enabled, stock, admin_deleted, admin_price, admin_created, admin_oos")\
        .range(from_idx, from_idx + 999)\
        .execute()
    batch = result.data or []
    all_products.extend(batch)
    if len(batch) < 1000: break
    from_idx += 1000
print(f"   {len(all_products)} produits en base")

# ── 6. Calculer quoi désactiver ──────────────────────────────
valid_ebay_ids = set(str(r.get("Item number","")).strip() for r in final)

to_disable = []
skipped_admin = 0
for p in all_products:
    ebay_id = str(p.get("ebay_id","")).strip()
    # 🔒 PROTECTION ADMIN : ne jamais toucher aux produits avec flags admin
    if p.get("admin_deleted") or p.get("admin_created") or p.get("admin_oos"):
        skipped_admin += 1
        continue
    if p.get("enabled") and ebay_id not in valid_ebay_ids:
        to_disable.append(p["id"])

currently_enabled = sum(1 for p in all_products if p.get("enabled"))
print(f"   Actuellement activés: {currently_enabled}")
print(f"   Protégés admin (ignorés): {skipped_admin}")
print(f"   À désactiver: {len(to_disable)}")
print(f"   Resteront actifs: {currently_enabled - len(to_disable)}")
print()

if not to_disable:
    print("🎉 Tout est déjà synchronisé !")
    input("Entrée pour fermer...")
    exit()

confirm = input(f"Désactiver {len(to_disable)} produits absents du CSV ? (oui/non) : ").strip().lower()
if confirm not in ("oui", "o", "yes", "y"):
    print("Annulé.")
    exit()

# ── 7. Désactiver par batch ──────────────────────────────────
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
print("=" * 60)
print(f"  ✅ {disabled} produits désactivés !")
print(f"  Produits actifs restants: {currently_enabled - disabled}")
print("=" * 60)
print()
input("Appuie sur ENTRÉE pour fermer...")
