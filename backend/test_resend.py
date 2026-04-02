import resend
import os

# Set your API key directly for testing
resend.api_key = "re_e4ZJUh1K_CP39nuHd4XnTu8b5U7js34w4"  # Your actual key

try:
    params = {
        "from": "Vidya Classes <noreply@vidyaclasses.in.net>",
        "to": ["vidyaclassesbgm@gmail.com"],
        "subject": "Test Email from Vidya Classes",
        "html": "<h1>Test</h1><p>If you receive this, Resend is working!</p>",
    }
    
    print("📧 Sending test email...")
    email = resend.Emails.send(params)
    print(f"✅ Email sent! ID: {email['id']}")
    print(f"✅ Check vidyaclassesbgm@gmail.com inbox/spam")
    
except Exception as e:
    print(f"❌ Error: {e}")