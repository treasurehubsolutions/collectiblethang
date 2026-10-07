import subprocess, sys
subprocess.check_call([sys.executable, "-m", "pip", "install", "supabase", "--quiet", "--break-system-packages"],
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
from supabase import create_client

SUPABASE_URL = "https://eptnfpvwfxloimmbzxcl.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdG5mcHZ3Znhsb2ltbWJ6eGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcyNDg0OCwiZXhwIjoyMDkwMzAwODQ4fQ.3IZlRA6NhxLAV3y85vmx0YzPh44PRKdTWMWtOoKk254"

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

print("Ajout des colonnes admin dans Supabase...")
print()
print("⚠️  Tu dois exécuter ces 3 requêtes SQL dans le dashboard Supabase:")
print("    https://supabase.com/dashboard/project/eptnfpvwfxloimmbzxcl/sql/new")
print()
print("--- COPIE CE SQL ET COLLE-LE ---")
print()
print("""ALTER TABLE products ADD COLUMN IF NOT EXISTS admin_deleted boolean DEFAULT false;
ALTER TABLE products ADD COLUMN IF NOT EXISTS admin_price numeric DEFAULT NULL;
ALTER TABLE products ADD COLUMN IF NOT EXISTS admin_created boolean DEFAULT false;""")
print()
print("--- FIN DU SQL ---")
print()
print("Appuie sur Entrée quand c'est fait pour vérifier...")
input()

# Vérification
try:
    r = supabase.table("products").select("admin_deleted, admin_price, admin_created").limit(1).execute()
    if r.data is not None:
        print("✅ Colonnes détectées avec succès !")
    else:
        print("❌ Colonnes pas encore visibles, réessaie.")
except Exception as e:
    print(f"❌ Erreur: {e}")
    print("Les colonnes n'existent pas encore — exécute le SQL d'abord.")

input("\nEntrée pour fermer...")
