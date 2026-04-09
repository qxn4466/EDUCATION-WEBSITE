import sys
sys.path.insert(0, '/home/ubuntu/EDUCATION-WEBSITE/backend')

from app.services.service import send_email
from app.core.config import settings

async def test_email():
    print(f"Current ADMIN_EMAIL: {settings.ADMIN_EMAIL}")
    print(f"RESEND_API_KEY exists: {bool(settings.RESEND_API_KEY)}")
    
    test_html = """
    <h2>Test Email</h2>
    <p>This is a test email from Vidya Classes</p>
    <p>If you received this, email is working correctly!</p>
    """
    
    result = send_email(
        subject="Test Email - Vidya Classes",
        html_content=test_html
    )
    
    if result:
        print("✅ Email sent successfully!")
    else:
        print("❌ Email failed to send")

if __name__ == "__main__":
    import asyncio
    asyncio.run(test_email())