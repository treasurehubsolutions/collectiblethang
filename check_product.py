import subprocess, sys
subprocess.check_call([sys.executable, "-m", "pip", "install", "supabase", "--quiet"],
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
from supabase import create_client

supabase = create_client(
    "https://eptnfpvwfxloimmbzxcl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254"
)

r = supabase.table("products").select("id, title, enabled, stock, ebay_id").eq("id", "19fead71-b5f6-4f5f-9be9-e547b3279a25").execute()
print(r.data)
input("Entrée...")
