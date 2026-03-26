import smtplib
from email.mime.text import MIMEText
from app.core.config import settings


def send_email(subject: str, html_content: str):
    try:
        msg = MIMEText(html_content, "html")
        msg["Subject"] = subject
        msg["From"] = settings.EMAIL_FROM
        msg["To"] = settings.ADMIN_EMAIL

        with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
            server.starttls()
            server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
            server.send_message(msg)

        return True
    except Exception as e:
        print(f"Email error: {e}")
        return False


async def send_enquiry_email(enquiry_data: dict):
    html = f"""
    <h2>New Student Enquiry</h2>
    <p><strong>Name:</strong> {enquiry_data['name']}</p>
    <p><strong>Phone:</strong> {enquiry_data['phone']}</p>
    <p><strong>Class/Subject:</strong> {enquiry_data.get('class_subject', 'Not specified')}</p>
    <p><strong>Message:</strong> {enquiry_data.get('message', 'No message')}</p>
    <p><strong>Time:</strong> {enquiry_data.get('created_at')}</p>
    """

    return send_email(
        subject="New Student Enquiry Received",
        html_content=html
    )


async def send_contact_email(contact_data: dict):
    html = f"""
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {contact_data['name']}</p>
    <p><strong>Phone:</strong> {contact_data['phone']}</p>
    <p><strong>Message:</strong> {contact_data['message']}</p>
    <p><strong>Time:</strong> {contact_data.get('created_at')}</p>
    """

    return send_email(
        subject="New Contact Form Submission",
        html_content=html
    )