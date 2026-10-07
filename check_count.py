import subprocess, sys
subprocess.check_call([sys.executable, "-m", "pip", "install", "supabase", "--quiet"],
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

from supabase import create_client

SUPABASE_URL = "https://eptnfpvwfxloimmbzxcl.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254"

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

all_products = []
from_idx = 0
while True:
    result = supabase.table("products").select("id, enabled, stock").range(from_idx, from_idx + 999).execute()
    batch = result.data or []
    all_products.extend(batch)
    if len(batch) < 1000: break
    from_idx += 1000

total = len(all_products)
enabled = sum(1 for p in all_products if p.get("enabled"))
with_stock = sum(1 for p in all_products if p.get("enabled") and p.get("stock", 0) > 0)

print(f"Total en base: {total}")
print(f"enabled=true: {enabled}")
print(f"enabled=true AND stock>0: {with_stock}")
input("Entrée pour fermer...")
