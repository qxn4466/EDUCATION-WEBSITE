from app.core.config import settings
from sqlalchemy import create_engine, text

print(f"Database URL: {settings.DATABASE_URL}")

try:
    engine = create_engine(settings.DATABASE_URL)
    
    # Use engine.begin() for auto-commit
    with engine.begin() as conn:
        result = conn.execute(text("SELECT 1"))
        print("✅ Connection successful with config!")
        
        # Test insert
        conn.execute(
            text("INSERT INTO student_enquiries (name, phone, class_subject, message) VALUES ('Config Test', '9999999999', 'Python', 'Testing config')")
        )
        print("✅ Insert successful with config!")
        
except Exception as e:
    print(f"❌ Error: {e}")
