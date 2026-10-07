import subprocess, sys
subprocess.check_call([sys.executable, "-m", "pip", "install", "supabase", "--quiet"],
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
from supabase import create_client

supabase = create_client(
    "https://eptnfpvwfxloimmbzxcl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254"
)

r = supabase.table("products").select("id, enabled, stock").eq("category", "Matchbox").execute()
data = r.data or []
print(f"Total Matchbox: {len(data)}")
print(f"enabled=true: {sum(1 for p in data if p.get('enabled'))}")
print(f"stock>0: {sum(1 for p in data if p.get('stock',0) > 0)}")
print(f"enabled AND stock>0: {sum(1 for p in data if p.get('enabled') and p.get('stock',0) > 0)}")
input("Entrée...")
