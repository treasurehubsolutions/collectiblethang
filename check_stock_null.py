import subprocess, sys
subprocess.check_call([sys.executable, "-m", "pip", "install", "supabase", "--quiet"],
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
from supabase import create_client

supabase = create_client(
    "https://eptnfpvwfxloimmbzxcl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254"
)

# Simuler exactement ce que fait le feed
all_products = []
from_idx = 0
while True:
    result = supabase.table("products")\
        .select("id, enabled, stock, price, photos")\
        .eq("enabled", True)\
        .gt("stock", 0)\
        .range(from_idx, from_idx + 999)\
        .execute()
    batch = result.data or []
    all_products.extend(batch)
    if len(batch) < 1000: break
    from_idx += 1000

print(f"enabled=true AND stock>0: {len(all_products)}")

valid = [p for p in all_products if p.get("price",0) > 0 and p.get("photos") and len(p.get("photos",[])) > 0]
print(f"Avec prix et photos: {len(valid)}")
input("Entrée...")
