from sqlalchemy import create_engine, text

DATABASE_URL = "postgresql:///education_db"

try:
    print("Testing database connection...")
    engine = create_engine(DATABASE_URL)
    
    with engine.begin() as conn:
        result = conn.execute(text("SELECT 1"))
        print("✅ Database connection successful!")
        
        # Get version
        result = conn.execute(text("SELECT version()"))
        version = result.fetchone()
        print(f"📦 PostgreSQL: {version[0][:50]}...")
        
        # List tables
        result = conn.execute(text("SELECT tablename FROM pg_tables WHERE schemaname='public'"))
        tables = [row[0] for row in result]
        print(f"📊 Tables: {tables}")
        
        # Test insert
        conn.execute(
            text("INSERT INTO student_enquiries (name, phone, class_subject, message) VALUES ('Test', '1234567890', 'Math', 'Test')")
        )

        print("✅ Test insert successful!")

except Exception as e:
    print(f"❌ Error: {e}")
    import traceback
    traceback.print_exc()