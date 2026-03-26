from app.services.email import send_enquiry_email
import asyncio

async def test():
    test_data = {
        "name": "Test User",
        "phone": "9876543210",
        "class_subject": "Test Class",
        "message": "This is a test email",
        "created_at": "2024-03-26 10:00:00"
    }
    result = await send_enquiry_email(test_data)
    if result:
        print("✅ Email sent successfully!")
    else:
        print("❌ Email failed. Check your API key.")

asyncio.run(test())
