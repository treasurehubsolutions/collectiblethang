"""
eBay → Supabase : Récupération des photos via ScraperAPI
Sans API eBay — fonctionne même avec compte dev suspendu
"""

import subprocess, sys
for pkg in ["requests", "beautifulsoup4", "supabase"]:
    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", pkg, "--quiet"],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )

import requests, json, time, re
from bs4 import BeautifulSoup
from supabase import create_client
from pathlib import Path

# ── Config Supabase ────────────────────────────────────────
SUPABASE_URL = "https://eptnfpvwfxloimmbzxcl.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254"

# ── Config ScraperAPI ──────────────────────────────────────
SCRAPER_API_KEY = "682d5664708b6b1a480e94d082bc7f3e"

CACHE_FILE = Path(__file__).parent / "images_cache.json"

def load_cache():
    if CACHE_FILE.exists():
        with open(CACHE_FILE) as f:
            return json.load(f)
    return {}

def save_cache(cache):
    with open(CACHE_FILE, "w") as f:
        json.dump(cache, f)

def scrape_ebay_photos(item_id):
    """Scrape les photos via ScraperAPI (contourne le blocage eBay)."""
    ebay_url = f"https://www.ebay.ca/itm/{item_id}"
    try:
        r = requests.get(
            "https://api.scraperapi.com/",
            params={
                "api_key": SCRAPER_API_KEY,
                "url": ebay_url,
                "render": "true",   # JS requis pour charger les images eBay
                "country_code": "ca",
            },
            timeout=60,
        )
        if r.status_code != 200:
            return []

        text = r.text
        imgs = []

        # Méthode 1 : maxImageUrl dans le JSON embarqué (la plus fiable)
        matches = re.findall(r'"maxImageUrl"\s*:\s*"([^"]+)"', text)
        for m in matches:
            url_clean = m.replace("\\u002F", "/").replace("\\/", "/")
            url_clean = re.sub(r's-l\d+', 's-l1600', url_clean)
            if url_clean not in imgs and "ebayimg.com" in url_clean:
                imgs.append(url_clean)

        if imgs:
            return imgs[:10]

        # Méthode 2 : imageUrl générique
        matches2 = re.findall(r'"imageUrl"\s*:\s*"([^"]+ebayimg[^"]+)"', text)
        for m in matches2:
            url_clean = m.replace("\\u002F", "/").replace("\\/", "/")
            url_clean = re.sub(r's-l\d+', 's-l1600', url_clean)
            if url_clean not in imgs:
                imgs.append(url_clean)

        if imgs:
            return imgs[:10]

        # Méthode 3 : balises <img> dans le carrousel
        soup = BeautifulSoup(text, "html.parser")
        selectors = [
            "div.ux-image-carousel img",
            "img.img-visualViewport-image",
            "div[data-testid='ux-image-carousel-item'] img",
            ".ux-image-grid img",
        ]
        for sel in selectors:
            for img in soup.select(sel):
                src = img.get("src") or img.get("data-src") or img.get("data-zoom-src") or ""
                if "ebayimg.com" in src:
                    src = re.sub(r's-l\d+', 's-l1600', src)
                    if src not in imgs:
                        imgs.append(src)
            if imgs:
                break

        return imgs[:10]

    except Exception as e:
        print(f"\n  [erreur scraping] {e}")
        return []

def fetch_all_products(supabase):
    """Récupère TOUS les produits (pagination Supabase par blocs de 1000)."""
    all_products = []
    from_idx = 0
    while True:
        result = supabase.table("products")\
            .select("id, ebay_id, title, photos")\
            .eq("enabled", True)\
            .range(from_idx, from_idx + 999)\
            .execute()
        batch = result.data or []
        all_products.extend(batch)
        if len(batch) < 1000:
            break
        from_idx += 1000
    return all_products

def main():
    print("=" * 55)
    print("  eBay → Supabase : Mise à jour des photos")
    print("  (via ScraperAPI — contourne le blocage eBay)")
    print("=" * 55)
    print()

    supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
    cache = load_cache()

    print("🔍 Récupération de tous les produits Supabase...")
    all_products = fetch_all_products(supabase)

    without_photos = [
        p for p in all_products
        if not p.get("photos") or len(p.get("photos", [])) == 0
    ]

    print(f"✅ {len(all_products)} produits au total")
    print(f"📷 {len(without_photos)} produits sans photos")
    print()

    if not without_photos:
        print("🎉 Tous les produits ont déjà des photos !")
        input("Entrée pour fermer...")
        return

    updated = 0
    skipped = 0
    errors = 0

    for i, product in enumerate(without_photos):
        ebay_id = str(product.get("ebay_id", "")).strip()
        prod_id = product["id"]
        title = product.get("title", "")[:50]

        if not ebay_id or ebay_id == "None":
            skipped += 1
            continue

        # Vérifier le cache
        if ebay_id in cache and cache[ebay_id]:
            photos = cache[ebay_id]
        else:
            photos = scrape_ebay_photos(ebay_id)
            cache[ebay_id] = photos
            time.sleep(0.5)

        pct = int((i + 1) / len(without_photos) * 100)
        bar = "█" * (pct // 5) + "░" * (20 - pct // 5)

        if photos:
            try:
                supabase.table("products")\
                    .update({"photos": photos})\
                    .eq("id", prod_id)\
                    .execute()
                updated += 1
                print(f"\r  [{bar}] {pct}%  ✅ {title[:40]}... ({len(photos)} photos)", end="", flush=True)
            except Exception as e:
                errors += 1
                print(f"\r  [{bar}] {pct}%  ❌ Erreur update: {e}", end="", flush=True)
        else:
            skipped += 1
            print(f"\r  [{bar}] {pct}%  ⚠️  {title[:40]}... (0 photo)", end="", flush=True)

        if (i + 1) % 25 == 0:
            save_cache(cache)

    save_cache(cache)
    print()
    print()
    print("=" * 55)
    print("  ✅  TERMINÉ !")
    print("=" * 55)
    print(f"  Mis à jour  : {updated}")
    print(f"  Sans photos : {skipped}")
    print(f"  Erreurs     : {errors}")
    print()
    input("Appuie sur ENTRÉE pour fermer...")

if __name__ == "__main__":
    main()
