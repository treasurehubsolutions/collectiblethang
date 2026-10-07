"""
eBay → Supabase : Récupération des descriptions
Double-clique pour lancer
"""

import subprocess, sys, os

print("=" * 55)
print("  eBay → Supabase  :  Récupération des descriptions")
print("=" * 55)
print()
print("Installation des outils nécessaires...")

for pkg in ["requests", "pandas"]:
    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", pkg, "--quiet"],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )
print("OK - Outils installés.")
print()

import requests, pandas as pd, base64, time, re, json
from pathlib import Path

APP_ID   = "AlexAbra-Collecti-PRD-af606d196-62405c9d"
CERT_ID  = "PRD-f606d1966eec-0cc5-4d34-9603-bea5"

SUPABASE_URL = "https://eptnfpvwfxloimmbzxcl.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254"

SUPABASE_HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

# ── OAuth2 eBay ────────────────────────────────────────────
_oauth_token = None
_oauth_expiry = 0

def get_oauth_token():
    global _oauth_token, _oauth_expiry
    if _oauth_token and time.time() < _oauth_expiry:
        return _oauth_token
    creds = base64.b64encode(f"{APP_ID}:{CERT_ID}".encode()).decode()
    r = requests.post(
        "https://api.ebay.com/identity/v1/oauth2/token",
        headers={
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": f"Basic {creds}",
        },
        data="grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope",
        timeout=15,
    )
    if r.status_code == 200:
        data = r.json()
        _oauth_token = data["access_token"]
        _oauth_expiry = time.time() + data["expires_in"] - 60
        return _oauth_token
    print(f"  ⚠️  OAuth2 erreur: {r.status_code} {r.text[:200]}")
    return None

def get_description_ebay(item_id, token):
    """Fetch description depuis Browse API eBay"""
    r = requests.get(
        f"https://api.ebay.com/buy/browse/v1/item/v1|{item_id}|0",
        headers={
            "Authorization": f"Bearer {token}",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
        },
        timeout=15,
    )
    if r.status_code != 200:
        return None
    data = r.json()

    # Priorité: shortDescription > description > title
    desc = data.get("shortDescription") or data.get("description") or ""

    # Nettoyer le HTML si présent
    desc = re.sub(r"<[^>]+>", " ", desc)
    desc = re.sub(r"\s+", " ", desc).strip()

    # Si trop court, construire une description à partir des specs
    if len(desc) < 20:
        parts = []
        title = data.get("title", "")
        if title:
            parts.append(title)
        condition = data.get("condition", "")
        if condition:
            parts.append(f"Condition: {condition}.")
        for spec in data.get("localizedAspects", [])[:5]:
            name = spec.get("name", "")
            value = spec.get("value", "")
            if name and value:
                parts.append(f"{name}: {value}.")
        desc = " ".join(parts).strip()

    return desc if len(desc) > 10 else None

def find_ebay_csv():
    script_dir = Path(__file__).parent
    downloads  = Path.home() / "Downloads"
    desktop    = Path.home() / "Desktop"
    for folder in [script_dir, downloads, desktop]:
        for f in sorted(folder.glob("*.csv"), key=lambda x: x.stat().st_mtime, reverse=True):
            name = f.name.lower()
            if any(k in name for k in ["ebay","active","listing"]):
                return f
    return None

def update_supabase(product_id, description):
    url = f"{SUPABASE_URL}/rest/v1/products?id=eq.{product_id}"
    r = requests.patch(url, headers=SUPABASE_HEADERS, json={"description": description})
    return r.status_code in (200, 204)

# ── MAIN ──────────────────────────────────────────────────
def main():
    csv_path = find_ebay_csv()
    if csv_path is None:
        print("❌ CSV eBay introuvable.")
        print("   Mets le CSV eBay (listings actifs) dans le même dossier que ce script.")
        input("\nEntrée pour fermer...")
        return

    print(f"✅ CSV trouvé : {csv_path.name}")
    print()

    print("🔌 Connexion à l'API eBay...")
    token = get_oauth_token()
    if not token:
        print("❌ Impossible de se connecter à l'API eBay.")
        input("\nEntrée pour fermer...")
        return
    print("✅ Connexion OK")
    print()

    # Charger le CSV eBay
    df = pd.read_csv(csv_path, dtype=str).fillna("")
    total = len(df)
    print(f"📦 {total} annonces trouvées dans le CSV")
    print()

    # Charger tous les produits Supabase (id + title) pour matcher par titre
    print("📡 Chargement des produits Supabase...")
    all_products = []
    offset = 0
    while True:
        r = requests.get(
            f"{SUPABASE_URL}/rest/v1/products?select=id,title&enabled=eq.true&limit=1000&offset={offset}",
            headers=SUPABASE_HEADERS
        )
        batch = r.json() if r.status_code == 200 else []
        if not batch:
            break
        all_products.extend(batch)
        offset += 1000
        if len(batch) < 1000:
            break

    print(f"✅ {len(all_products)} produits Supabase chargés")
    print()

    # Index par titre (lowercase) pour matcher
    supabase_by_title = {p["title"].lower().strip(): p["id"] for p in all_products}

    # Cache des descriptions déjà fetchées
    cache_file = Path(__file__).parent / "desc_cache.json"
    if cache_file.exists():
        with open(cache_file) as f:
            cache = json.load(f)
        print(f"📝 Cache : {len(cache)} descriptions déjà récupérées")
    else:
        cache = {}

    updated = 0
    skipped = 0
    not_found = 0
    errors = 0

    print("🔄 Récupération et mise à jour des descriptions...")
    print()

    for i, (_, row) in enumerate(df.iterrows()):
        item_id = str(row.get("Item number", "")).strip()
        title   = str(row.get("Title", "")).strip()

        if not item_id or item_id == "nan":
            skipped += 1
            continue

        # Trouver le produit dans Supabase par titre
        product_id = supabase_by_title.get(title.lower().strip())
        if not product_id:
            not_found += 1
            continue

        # Fetch description depuis eBay (avec cache)
        if item_id not in cache:
            try:
                if time.time() >= _oauth_expiry - 60:
                    token = get_oauth_token()
                desc = get_description_ebay(item_id, token)
                cache[item_id] = desc or ""
                time.sleep(0.3)
            except Exception as e:
                cache[item_id] = ""
                errors += 1

            # Sauvegarder le cache tous les 50
            if (i + 1) % 50 == 0:
                with open(cache_file, "w") as f:
                    json.dump(cache, f)

        description = cache.get(item_id, "")
        if not description:
            skipped += 1
            continue

        # Update Supabase
        if update_supabase(product_id, description):
            updated += 1
        else:
            errors += 1

        pct = int((i + 1) / total * 100)
        bar = "█" * (pct // 5) + "░" * (20 - pct // 5)
        print(f"\r  [{bar}] {pct}%  ({i+1}/{total})  ✅{updated} ⏭️{skipped} ❌{errors}", end="", flush=True)

    # Sauvegarder cache final
    with open(cache_file, "w") as f:
        json.dump(cache, f)

    print()
    print()
    print("=" * 55)
    print("  ✅  TERMINÉ !")
    print("=" * 55)
    print()
    print(f"  Mis à jour       : {updated}")
    print(f"  Ignorés          : {skipped}")
    print(f"  Non trouvés      : {not_found}")
    print(f"  Erreurs          : {errors}")
    print()
    input("Appuie sur ENTRÉE pour fermer...")

if __name__ == "__main__":
    main()
