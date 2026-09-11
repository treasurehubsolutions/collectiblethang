"""
╔══════════════════════════════════════════════════════════╗
║   eBay → Shopify  :  Récupération des images             ║
║   Double-clique sur ce fichier pour lancer               ║
╚══════════════════════════════════════════════════════════╝

Ce script va :
1. Lire ton CSV eBay
2. Récupérer toutes les images via l'API eBay
3. Générer le CSV Shopify FINAL avec les images
"""

import subprocess, sys, os

# ── Installation automatique des dépendances ──────────────
print("=" * 55)
print("  eBay → Shopify  :  Récupération des images")
print("=" * 55)
print()
print("Installation des outils nécessaires...")

for pkg in ["requests", "pandas"]:
    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", pkg, "--quiet"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

print("OK - Outils installés.")
print()

import requests
import pandas as pd
import base64
import time
import re
import unicodedata
import json
from pathlib import Path
from xml.etree import ElementTree as ET

# ── Tes clés eBay ─────────────────────────────────────────
APP_ID    = "AlexAbra-Collecti-PRD-af606d196-62405c9d"
DEV_ID    = "881bff2e-587b-4149-9df6-6ff133c033c2"
CERT_ID   = "PRD-f606d1966eec-0cc5-4d34-9603-bea5"
USER_TOKEN = "v^1.1#i^1#p^3#r^1#I^3#f^0#t^Ul4xMF82OjUwNjE4QUZDMkZBNDIzRDAyQTUwQjFDNzI3OTkzRjg5XzJfMSNFXjI2MA=="

# ── Colonnes Shopify ───────────────────────────────────────
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
    "Building Toy Complete Sets & Packs": ("LEGO","Building Sets","Toys & Games > Building Toys"),
    "VHS Tapes":                          ("Movies & Media","VHS Tapes","Media > Movies"),
    "Other Formats":                      ("Movies & Media","Media","Media"),
    "Video Games":                        ("Video Games","Video Games","Electronics > Video Games & Consoles"),
    "Hoodies & Sweatshirts":              ("Apparel","Hoodies","Apparel & Accessories > Clothing"),
    "Cars, Trucks & Motorcycles":         ("Toys & Collectibles","Die-Cast Vehicles","Toys & Games > Toys"),
    "Ornaments":                          ("Collectibles","Ornaments","Arts & Entertainment"),
    "Fast Food":                          ("Collectibles","Fast Food Toys","Toys & Games"),
    "Corkscrews & Openers":               ("Kitchen","Bar Accessories","Home & Garden > Kitchen & Dining"),
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
        v = row.get(col,"")
        try:
            f = float(v)
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

# ── Récupération images via eBay Trading API ──────────────
def get_images_for_item(item_id):
    xml = f"""<?xml version="1.0" encoding="utf-8"?>
<GetItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">
  <RequesterCredentials>
    <eBayAuthToken>{USER_TOKEN}</eBayAuthToken>
  </RequesterCredentials>
  <ItemID>{item_id}</ItemID>
  <DetailLevel>ReturnAll</DetailLevel>
  <IncludeItemSpecifics>true</IncludeItemSpecifics>
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
        # Image principale
        pic_url = root.find(".//e:PictureURL", ns)
        if pic_url is not None and pic_url.text:
            url = re.sub(r"s-l\d+", "s-l1600", pic_url.text)
            imgs.append(url)

        # Images supplémentaires
        for pic in root.findall(".//e:PictureURL", ns):
            url = re.sub(r"s-l\d+", "s-l1600", pic.text or "")
            if url and url not in imgs:
                imgs.append(url)

        return imgs[:10]
    except Exception as e:
        return []

# ── Trouver le CSV eBay automatiquement ───────────────────
def find_ebay_csv():
    # Cherche dans le dossier du script et Téléchargements
    script_dir = Path(__file__).parent
    downloads  = Path.home() / "Downloads"
    desktop    = Path.home() / "Desktop"

    for folder in [script_dir, downloads, desktop]:
        for f in folder.glob("*.csv"):
            if "ebay" in f.name.lower() or "active" in f.name.lower() or "listing" in f.name.lower():
                return f

    return None

# ── MAIN ──────────────────────────────────────────────────
def main():
    # Trouver le CSV
    csv_path = find_ebay_csv()

    if csv_path is None:
        print("❌ Fichier CSV eBay introuvable.")
        print()
        print("Assure-toi que le fichier CSV exporté depuis eBay")
        print("est dans le MÊME dossier que ce script.")
        print()
        print("Nom attendu : quelque chose comme")
        print("  eBay-all-active-listings-report-....csv")
        input("\nAppuie sur ENTRÉE pour fermer...")
        return

    print(f"✅ CSV trouvé : {csv_path.name}")
    print()

    df = pd.read_csv(csv_path, dtype=str).fillna("")

    # Convertir les colonnes numériques
    for col in ["Available quantity","Start price","Current price"]:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce").fillna(0)

    total = len(df)
    print(f"📦 {total} annonces à traiter")
    print()

    # Cache images (pour reprendre si interruption)
    cache_file = Path(__file__).parent / "images_cache.json"
    if cache_file.exists():
        with open(cache_file) as f:
            cache = json.load(f)
        print(f"📷 Cache images chargé : {len(cache)} items déjà récupérés")
    else:
        cache = {}

    # Récupérer les images
    print("🖼  Récupération des images depuis eBay...")
    print("    (environ 1-2 secondes par produit)")
    print()

    handles_used = {}

    for i, (_, row) in enumerate(df.iterrows()):
        item_id = str(row.get("Item number","")).strip()
        if not item_id or item_id == "nan":
            continue

        if item_id not in cache:
            imgs = get_images_for_item(item_id)
            cache[item_id] = imgs
            time.sleep(0.3)

            # Sauvegarder le cache toutes les 50 images
            if (i + 1) % 50 == 0:
                with open(cache_file, "w") as f:
                    json.dump(cache, f)

        pct = int((i + 1) / total * 100)
        bar = "█" * (pct // 5) + "░" * (20 - pct // 5)
        nb_imgs = len(cache.get(item_id, []))
        print(f"\r  [{bar}] {pct}%  ({i+1}/{total})  {nb_imgs} images", end="", flush=True)

    # Sauvegarder le cache final
    with open(cache_file, "w") as f:
        json.dump(cache, f)

    print()
    print()
    print("✅ Images récupérées !")
    print()

    # Construire le CSV Shopify
    print("⚙️  Génération du CSV Shopify...")

    rows = []

    for _, row in df.iterrows():
        item_id  = str(row.get("Item number","")).strip()
        title    = str(row.get("Title","")).strip()
        sku      = str(row.get("Custom label (SKU)","")).strip()
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
        upc       = str(row.get("P:UPC","")).strip()
        desc_parts = [f"<h2>{title}</h2>"]
        specs = []
        if condition and condition != "nan": specs.append(("Condition", condition))
        if cat1 and cat1 != "nan":          specs.append(("Category",  cat1))
        if upc  and upc  != "nan":          specs.append(("UPC", upc.replace(".0","")))
        if specs:
            tbl = "<table><tbody>"
            for k,v in specs:
                tbl += f"<tr><td><strong>{k}</strong></td><td>{v}</td></tr>"
            tbl += "</tbody></table>"
            desc_parts.append(tbl)
        desc_parts.append(f'<p><small>eBay: <a href="https://www.ebay.com/itm/{item_id}">#{item_id}</a></small></p>')
        description = "\n".join(desc_parts)

        seo_title = title[:70]
        seo_desc  = re.sub(r"<[^>]+>","",description)[:320].strip()

        # Ligne produit principale
        main_row = {
            "Handle": handle,
            "Title": title,
            "Body (HTML)": description,
            "Vendor": "",
            "Product Category": prod_type,
            "Type": collection,
            "Tags": tags,
            "Published": "TRUE",
            "Option1 Name": "Title",
            "Option1 Value": "Default Title",
            "Variant SKU": sku,
            "Variant Grams": "0",
            "Variant Inventory Tracker": "shopify",
            "Variant Inventory Qty": str(qty),
            "Variant Inventory Policy": "deny",
            "Variant Fulfillment Service": "manual",
            "Variant Price": f"{price:.2f}",
            "Variant Compare At Price": "",
            "Variant Requires Shipping": "TRUE",
            "Variant Taxable": "TRUE",
            "Image Src": "",
            "Image Position": "",
            "Image Alt Text": "",
            "Gift Card": "FALSE",
            "SEO Title": seo_title,
            "SEO Description": seo_desc,
            "Google Shopping / Google Product Category": google_cat,
            "Variant Image": "",
            "Variant Weight Unit": "kg",
            "Status": "active",
            "Collection": collection,
        }

        images = cache.get(item_id, [])

        # Mettre la 1ère image sur la ligne produit
        if images:
            main_row["Image Src"]      = images[0]
            main_row["Image Position"] = "1"
            main_row["Image Alt Text"] = f"{title}"

        rows.append(main_row)

        # Lignes images supplémentaires
        for idx, img_url in enumerate(images[1:], start=2):
            img_row = {col: "" for col in SHOPIFY_COLS}
            img_row["Handle"]         = handle
            img_row["Image Src"]      = img_url
            img_row["Image Position"] = str(idx)
            img_row["Image Alt Text"] = f"{title} - Image {idx}"
            rows.append(img_row)

    out_df = pd.DataFrame(rows, columns=SHOPIFY_COLS)

    output_path = Path(__file__).parent / "shopify_AVEC_IMAGES.csv"
    out_df.to_csv(output_path, index=False, encoding="utf-8")

    # Stats
    produits   = out_df[out_df["Title"] != ""].shape[0]
    avec_image = out_df[(out_df["Title"] != "") & (out_df["Image Src"] != "")].shape[0]
    sans_image = produits - avec_image
    total_imgs = out_df[out_df["Image Src"] != ""].shape[0]

    print()
    print("=" * 55)
    print("  ✅  TERMINÉ !")
    print("=" * 55)
    print()
    print(f"  Produits traités  : {produits}")
    print(f"  Avec images       : {avec_image}")
    print(f"  Sans images       : {sans_image}")
    print(f"  Total images      : {total_imgs}")
    print()
    print(f"  📄 Fichier généré :")
    print(f"     {output_path}")
    print()
    print("  Importe ce fichier dans Shopify :")
    print("  Products → Import → coche 'Overwrite existing'")
    print()
    input("Appuie sur ENTRÉE pour fermer...")

if __name__ == "__main__":
    main()
