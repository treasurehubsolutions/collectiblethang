"""
eBay → Shopify : Récupération des images v2
Double-clique pour lancer
"""

import subprocess, sys, os

print("=" * 55)
print("  eBay → Shopify  :  Récupération des images v2")
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

import requests, pandas as pd, base64, time, re, unicodedata, json
from pathlib import Path
from xml.etree import ElementTree as ET

APP_ID    = "AlexAbra-Collecti-PRD-af606d196-62405c9d"
DEV_ID    = "881bff2e-587b-4149-9df6-6ff133c033c2"
CERT_ID   = "PRD-f606d1966eec-0cc5-4d34-9603-bea5"
USER_TOKEN = "v^1.1#i^1#I^3#r^1#f^0#p^3#t^Ul4xMF82OkE2RDJCMjUwMEVBMTlCODdGNTA0ODhDOUJFNTk5NTExXzJfMSNFXjI2MA=="

SHOPIFY_COLS = [
    "Handle","Title","Body (HTML)","Vendor","Product Category",
    "Type","Tags","Published","Option1 Name","Option1 Value",
    "Variant SKU","Variant Grams","Variant Inventory Tracker",
    "Variant Inventory Qty","Variant Inventory Policy",
    "Variant Fulfillment Service","Variant Price",
    "Variant Compare At Price","Variant Requires Shipping",
    "Variant Taxable","Image Src","Image Position","Image Alt Text",
    "Gift Card","SEO Title","SEO Description",
    "Google Shopping / Google Product Category",
    "Variant Image","Variant Weight Unit","Status","Collection",
]

CATEGORY_MAP = {
    "Action Figures":                     ("Toys & Collectibles","Action Figures","Toys & Games > Toys > Action Figures"),
    "Contemporary Manufacture":           ("Toys & Collectibles","Contemporary Toys","Toys & Games"),
    "Collectible Figures & Bobbleheads":  ("Collectibles","Bobbleheads","Toys & Games > Toys > Action Figures"),
    "Dolls & Doll Playsets":              ("Toys & Collectibles","Dolls","Toys & Games > Toys > Dolls"),
    "LEGO (R) Complete Sets & Packs":     ("LEGO","LEGO Sets","Toys & Games > Building Toys"),
    "VHS Tapes":                          ("Movies & Media","VHS Tapes","Media > Movies"),
    "Other Formats":                      ("Movies & Media","Media","Media"),
    "Video Games":                        ("Video Games","Video Games","Electronics > Video Games & Consoles"),
    "Hoodies & Sweatshirts":              ("Apparel","Hoodies","Apparel & Accessories > Clothing"),
    "Cars, Trucks & Motorcycles":         ("Toys & Collectibles","Die-Cast Vehicles","Toys & Games > Toys"),
    "Ornaments":                          ("Collectibles","Ornaments","Arts & Entertainment"),
    "Fast Food":                          ("Collectibles","Fast Food Toys","Toys & Games"),
}
DEFAULT_CAT = ("General","Miscellaneous","Arts & Entertainment")

CONDITION_MAP = {
    "New":"condition:new","Brand New":"condition:new",
    "New with tags":"condition:new-with-tags",
    "Open box":"condition:open-box","Like New":"condition:like-new",
    "Very Good":"condition:very-good","Used":"condition:used",
    "Good":"condition:good","Ungraded":"condition:ungraded",
}

def slugify(text):
    text = str(text).strip().lower()
    text = unicodedata.normalize("NFKD", text).encode("ascii","ignore").decode()
    text = re.sub(r"[^\w\s-]","",text)
    text = re.sub(r"[\s_]+","-",text)
    return re.sub(r"-+","-",text).strip("-")[:200]

def get_price(row):
    for col in ["Current price","Start price"]:
        try:
            f = float(row.get(col, 0) or 0)
            if f > 0: return f
        except: pass
    return 0.0

def build_tags(row):
    tags = []
    cond = CONDITION_MAP.get(str(row.get("Condition","")), "condition:unknown")
    tags.append(cond)
    cat = str(row.get("eBay category 1 name","")).strip()
    if cat and cat != "nan": tags.append(f"ebay-cat:{slugify(cat)}")
    curr = str(row.get("Currency","")).strip()
    if curr and curr != "nan": tags.append(f"currency:{curr.lower()}")
    item = str(row.get("Item number","")).strip()
    if item and item != "nan": tags.append(f"ebay:{item}")
    return ", ".join(tags)

# ── Méthode 1 : OAuth2 Browse API ─────────────────────────
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
    return None

def get_images_browse_api(item_id):
    token = get_oauth_token()
    if not token:
        return []
    r = requests.get(
        f"https://api.ebay.com/buy/browse/v1/item/v1|{item_id}|0",
        headers={
            "Authorization": f"Bearer {token}",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
        },
        timeout=15,
    )
    if r.status_code != 200:
        return []
    data = r.json()
    imgs = []
    primary = data.get("image", {}).get("imageUrl", "")
    if primary:
        imgs.append(re.sub(r"s-l\d+", "s-l1600", primary))
    for img in data.get("additionalImages", []):
        url = re.sub(r"s-l\d+", "s-l1600", img.get("imageUrl", ""))
        if url and url not in imgs:
            imgs.append(url)
    return imgs[:10]

# ── Méthode 2 : Trading API (fallback) ────────────────────
def get_images_trading_api(item_id):
    xml = f"""<?xml version="1.0" encoding="utf-8"?>
<GetItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">
  <RequesterCredentials>
    <eBayAuthToken>{USER_TOKEN}</eBayAuthToken>
  </RequesterCredentials>
  <ItemID>{item_id}</ItemID>
  <DetailLevel>ReturnAll</DetailLevel>
</GetItemRequest>"""
    headers = {
        "X-EBAY-API-SITEID": "0",
        "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
        "X-EBAY-API-CALL-NAME": "GetItem",
        "X-EBAY-API-APP-NAME": APP_ID,
        "X-EBAY-API-DEV-NAME": DEV_ID,
        "X-EBAY-API-CERT-NAME": CERT_ID,
        "Content-Type": "text/xml",
    }
    try:
        r = requests.post(
            "https://api.ebay.com/ws/api.dll",
            headers=headers, data=xml.encode("utf-8"), timeout=15
        )
        root = ET.fromstring(r.text)
        ns = {"e": "urn:ebay:apis:eBLBaseComponents"}
        imgs = []
        for pic in root.findall(".//e:PictureURL", ns):
            url = re.sub(r"s-l\d+", "s-l1600", pic.text or "")
            if url and url not in imgs:
                imgs.append(url)
        return imgs[:10]
    except:
        return []

def get_images(item_id):
    # Essaie Browse API d'abord, puis Trading API en fallback
    imgs = get_images_browse_api(item_id)
    if not imgs:
        imgs = get_images_trading_api(item_id)
    return imgs

# ── Trouver le CSV ─────────────────────────────────────────
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

# ── MAIN ──────────────────────────────────────────────────
def main():
    csv_path = find_ebay_csv()
    if csv_path is None:
        print("❌ CSV eBay introuvable.")
        print("   Mets le CSV dans le même dossier que ce script.")
        input("\nEntrée pour fermer...")
        return

    print(f"✅ CSV trouvé : {csv_path.name}")
    print()

    # Test de connexion API
    print("🔌 Test de connexion à l'API eBay...")
    token = get_oauth_token()
    if token:
        print("✅ Connexion OAuth2 OK")
    else:
        print("⚠️  OAuth2 échoué — utilisation du User Token en fallback")
    print()

    df = pd.read_csv(csv_path, dtype=str).fillna("")
    for col in ["Available quantity","Start price","Current price"]:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce").fillna(0)

    total = len(df)
    print(f"📦 {total} annonces à traiter")
    print()

    # Cache
    cache_file = Path(__file__).parent / "images_cache.json"
    if cache_file.exists():
        with open(cache_file) as f:
            cache = json.load(f)
        already = sum(1 for v in cache.values() if v)
        print(f"📷 Cache : {already} items déjà récupérés sur {len(cache)}")
    else:
        cache = {}

    print("🖼  Récupération des images...")
    print()

    handles_used = {}
    errors = 0

    for i, (_, row) in enumerate(df.iterrows()):
        item_id = str(row.get("Item number","")).strip()
        if not item_id or item_id == "nan":
            continue

        if item_id not in cache:
            try:
                imgs = get_images(item_id)
                cache[item_id] = imgs
            except Exception as e:
                cache[item_id] = []
                errors += 1
            time.sleep(0.3)

            if (i + 1) % 50 == 0:
                with open(cache_file, "w") as f:
                    json.dump(cache, f)

        nb_imgs = len(cache.get(item_id, []))
        pct = int((i + 1) / total * 100)
        bar = "█" * (pct // 5) + "░" * (20 - pct // 5)
        print(f"\r  [{bar}] {pct}%  ({i+1}/{total})  {nb_imgs} img", end="", flush=True)

    with open(cache_file, "w") as f:
        json.dump(cache, f)

    print()
    print()

    # Vérification résultat images
    total_with_imgs = sum(1 for v in cache.values() if v)
    if total_with_imgs == 0:
        print("❌ PROBLÈME : Aucune image récupérée.")
        print()
        print("   Causes possibles :")
        print("   1. Token eBay expiré → va sur developer.ebay.com")
        print("      et génère un nouveau User Token")
        print("   2. Problème réseau/firewall")
        print()
        print("   Colle ton nouveau token ici et appuie sur Entrée :")
        new_token = input("   > ").strip()
        if new_token and new_token.startswith("v^"):
            # Mettre à jour le token et réessayer sur 3 items
            global USER_TOKEN
            USER_TOKEN = new_token
            print()
            print("   Test avec le nouveau token...")
            sample_ids = [str(r.get("Item number","")).strip()
                         for _, r in df.head(3).iterrows()]
            for sid in sample_ids:
                imgs = get_images_trading_api(sid)
                if imgs:
                    print(f"   ✅ {sid} → {len(imgs)} images trouvées")
                    cache[sid] = imgs
                else:
                    print(f"   ❌ {sid} → 0 images")
            print()
            print("   Relance le script complet avec ton nouveau token.")
            input("Entrée pour fermer...")
            return
        else:
            print("   Token invalide. Fermeture.")
            input("Entrée pour fermer...")
            return

    print(f"✅ Images récupérées : {total_with_imgs}/{total} produits")
    print()
    print("⚙️  Génération du CSV Shopify...")

    rows = []

    for _, row in df.iterrows():
        item_id = str(row.get("Item number","")).strip()
        title   = str(row.get("Title","")).strip()
        sku     = str(row.get("Custom label (SKU)","")).strip()
        if not sku or sku == "nan":
            sku = f"EBAY-{item_id}"

        base_handle = slugify(title) or f"item-{item_id}"
        if base_handle not in handles_used:
            handles_used[base_handle] = 0
            handle = base_handle
        else:
            handles_used[base_handle] += 1
            handle = f"{base_handle}-{handles_used[base_handle]}"

        qty   = int(float(row.get("Available quantity", 0) or 0))
        price = get_price(row)
        tags  = build_tags(row)
        cat1  = str(row.get("eBay category 1 name","")).strip()
        prod_type, collection, google_cat = CATEGORY_MAP.get(cat1, DEFAULT_CAT)

        condition = str(row.get("Condition","")).strip()
        upc = str(row.get("P:UPC","")).strip()
        desc_parts = [f"<h2>{title}</h2>"]
        specs = []
        if condition and condition != "nan": specs.append(("Condition", condition))
        if cat1 and cat1 != "nan": specs.append(("Category", cat1))
        if upc and upc != "nan": specs.append(("UPC", upc.replace(".0","")))
        if specs:
            tbl = "<table><tbody>"
            for k,v in specs:
                tbl += f"<tr><td><strong>{k}</strong></td><td>{v}</td></tr>"
            tbl += "</tbody></table>"
            desc_parts.append(tbl)
        desc_parts.append(f'<p><small>eBay: <a href="https://www.ebay.com/itm/{item_id}">#{item_id}</a></small></p>')
        description = "\n".join(desc_parts)

        images = cache.get(item_id, [])

        main_row = {
            "Handle": handle, "Title": title, "Body (HTML)": description,
            "Vendor": "Collectiblethang", "Product Category": prod_type,
            "Type": collection, "Tags": tags, "Published": "TRUE",
            "Option1 Name": "Title", "Option1 Value": "Default Title",
            "Variant SKU": sku, "Variant Grams": "0",
            "Variant Inventory Tracker": "shopify",
            "Variant Inventory Qty": str(qty),
            "Variant Inventory Policy": "deny",
            "Variant Fulfillment Service": "manual",
            "Variant Price": f"{price:.2f}", "Variant Compare At Price": "",
            "Variant Requires Shipping": "TRUE", "Variant Taxable": "TRUE",
            "Image Src": images[0] if images else "",
            "Image Position": "1" if images else "",
            "Image Alt Text": title if images else "",
            "Gift Card": "FALSE", "SEO Title": title[:70],
            "SEO Description": re.sub(r"<[^>]+>","",description)[:320].strip(),
            "Google Shopping / Google Product Category": google_cat,
            "Variant Image": "", "Variant Weight Unit": "kg",
            "Status": "active", "Collection": collection,
        }
        rows.append(main_row)

        for idx, img_url in enumerate(images[1:], start=2):
            img_row = {col: "" for col in SHOPIFY_COLS}
            img_row["Handle"] = handle
            img_row["Image Src"] = img_url
            img_row["Image Position"] = str(idx)
            img_row["Image Alt Text"] = f"{title} - Image {idx}"
            rows.append(img_row)

    out_df = pd.DataFrame(rows, columns=SHOPIFY_COLS)
    output_path = Path(__file__).parent / "shopify_AVEC_IMAGES.csv"
    out_df.to_csv(output_path, index=False, encoding="utf-8")

    produits   = out_df[out_df["Title"] != ""].shape[0]
    avec_image = out_df[(out_df["Title"] != "") & (out_df["Image Src"] != "")].shape[0]
    total_imgs = out_df[out_df["Image Src"] != ""].shape[0]

    print()
    print("=" * 55)
    print("  ✅  TERMINÉ !")
    print("=" * 55)
    print()
    print(f"  Produits          : {produits}")
    print(f"  Avec images       : {avec_image}")
    print(f"  Sans images       : {produits - avec_image}")
    print(f"  Total images      : {total_imgs}")
    print()
    print(f"  📄 Fichier : {output_path}")
    print()
    print("  → Shopify : Products → Import")
    print("    coche 'Overwrite existing products'")
    print()
    input("Appuie sur ENTRÉE pour fermer...")

if __name__ == "__main__":
    main()
