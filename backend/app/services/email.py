import resend
from app.core.config import settings

# Initialize Resend
resend.api_key = settings.RESEND_API_KEY

def send_email(subject: str, html_content: str):
    try:
        params = {
            "from": "Vidya Classes <noreply@vidyaclasses.in.net>",
            "to": [settings.ADMIN_EMAIL],
            "subject": subject,
            "html": html_content,
        }
        
        email = resend.Emails.send(params)
        print(f"✅ Email sent successfully to: {settings.ADMIN_EMAIL}")
        return True
    except Exception as e:
        print(f"❌ Email error: {e}")
        return False


async def send_enquiry_email(enquiry_data: dict):
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
            <div style="background: linear-gradient(135deg, #2563eb, #16a34a, #f97316); padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
                <h2 style="color: white; margin: 0;">Vidya Coaching Classes</h2>
                <p style="color: white; margin: 5px 0 0;">Quality Education with Values</p>
            </div>
            <div style="padding: 20px;">
                <h3 style="color: #2563eb;">New Student Enquiry Received</h3>
                <p><strong>📝 Name:</strong> {enquiry_data['name']}</p>
                <p><strong>📞 Phone:</strong> {enquiry_data['phone']}</p>
                <p><strong>📚 Class/Subject:</strong> {enquiry_data.get('class_subject', 'Not specified')}</p>
                <p><strong>💬 Message:</strong> {enquiry_data.get('message', 'No message')}</p>
                <p><strong>🕐 Time:</strong> {enquiry_data.get('created_at')}</p>
                <hr style="margin: 20px 0;">
                <p style="color: #666; font-size: 12px;">This is an automated notification from Vidya Coaching Classes website.</p>
            </div>
        </div>
    </body>
    </html>
    """

    return send_email(
        subject="🔔 New Student Enquiry - Vidya Coaching Classes",
        html_content=html   
    )


async def send_contact_email(contact_data: dict):
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
            <div style="background: linear-gradient(135deg, #2563eb, #16a34a, #f97316); padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
                <h2 style="color: white; margin: 0;">Vidya Coaching Classes</h2>
                <p style="color: white; margin: 5px 0 0;">Quality Education with Values</p>
            </div>
            <div style="padding: 20px;">
                <h3 style="color: #2563eb;">New Contact Form Submission</h3>
                <p><strong>📝 Name:</strong> {contact_data['name']}</p>
                <p><strong>📞 Phone:</strong> {contact_data['phone']}</p>
                <p><strong>💬 Message:</strong> {contact_data['message']}</p>
                <p><strong>🕐 Time:</strong> {contact_data.get('created_at')}</p>
                <hr style="margin: 20px 0;">
                <p style="color: #666; font-size: 12px;">This is an automated notification from Vidya Coaching Classes website.</p>
            </div>
        </div>
    </body>
    </html>
    """

    return send_email(
        subject="📧 New Contact Message - Vidya Coaching Classes",
        html_content=html
    )