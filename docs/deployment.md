# 🚀 Deployment Guide (Without Docker)

This document explains how to run the Education Website in production using:

- FastAPI (Backend)
- Next.js (Frontend)
- PostgreSQL (Database)
- Nginx (Reverse Proxy)
- systemd (Service management)
- Let's Encrypt (SSL)

---

## 📌 Architecture

User → Nginx (80/443)
       ↓
Frontend (Next.js - port 5000)
Backend (FastAPI - port 5001)
       ↓
PostgreSQL (port 5432)

---

## ⚙️ Backend Setup

### 1. Create virtual environment

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
# 🚀 Deployment Guide (Without Docker)

This document explains how to run the Education Website in production using:

- FastAPI (Backend)
- Next.js (Frontend)
- PostgreSQL (Database)
- Nginx (Reverse Proxy)
- systemd (Service management)
- Let's Encrypt (SSL)

---

## 📌 Architecture

User → Nginx (80/443)
       ↓
Frontend (Next.js - port 5000)
Backend (FastAPI - port 5001)
       ↓
PostgreSQL (port 5432)

---

## ⚙️ Backend Setup

### 1. Create virtual environment

```bash
cd backend
python3 -m venv venv
source venv/bin/activate

2. Install dependencies
pip install -r requirements.txt
pip install pydantic-settings
3. Configure environment

.env

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/education_db
Frontend Setup
cd frontend
npm install
npm run build
npm start -- -p 5000
🌐 Nginx Configuration

File: /etc/nginx/sites-available/vidyaclasses

server {
    listen 80;
    server_name vidyaclasses.in.net www.vidyaclasses.in.net;

    location / {
        proxy_pass http://localhost:5000;
    }

    location /api/ {
        proxy_pass http://localhost:5001;
    }
}

Enable:

sudo ln -s /etc/nginx/sites-available/vidyaclasses /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
🔒 SSL Setup
sudo certbot --nginx -d vidyaclasses.in.net -d www.vidyaclasses.in.net

Choose:

Redirect HTTP → HTTPS
⚙️ systemd Services
Backend Service

/etc/systemd/system/education-backend.service

[Unit]
Description=Education Website Backend
After=network.target

[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu/EDUCATION-WEBSITE/backend
ExecStart=/home/ubuntu/EDUCATION-WEBSITE/backend/venv/bin/uvicorn app.main:app --host 0.0.0.0 --port 5001
Restart=always

[Install]
WantedBy=multi-user.target
Frontend Service

/etc/systemd/system/education-frontend.service

[Unit]
Description=Education Website Frontend
After=network.target

[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu/EDUCATION-WEBSITE/frontend
ExecStart=/usr/bin/npm start -- -p 5000
Restart=always
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
▶️ Enable Services
sudo systemctl daemon-reload
sudo systemctl enable education-backend
sudo systemctl enable education-frontend
sudo systemctl start education-backend
sudo systemctl start education-frontend
🔍 Logs
journalctl -u education-backend -f
journalctl -u education-frontend -f
🔄 Restart Services
sudo systemctl restart education-backend
sudo systemctl restart education-frontend



===============================
# EduInstitute - Vidya Coaching Classes
## Deployment Documentation

### Overview
This document outlines the complete deployment setup for the Vidya Coaching Classes educational website. The site is a Next.js frontend application with a FastAPI backend, running on an Ubuntu server with Nginx as a reverse proxy.

---

## Architecture
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Browser │────▶│ Nginx (443) │────▶│ Frontend │
│ (HTTPS) │ │ Reverse Proxy │ │ (Static HTML) │
└─────────────────┘ └─────────────────┘ └─────────────────┘
│
▼
┌─────────────────┐ ┌─────────────────┐
│ /api/* │────▶│ Backend │
│ Proxy Pass │ │ FastAPI:5001 │
└─────────────────┘ └─────────────────┘
│
▼
┌─────────────────┐
│ PostgreSQL │
│ Database │
└─────────────────┘

text

---

## Server Information

| Component | Details |
|-----------|---------|
| **Server IP** | 152.67.4.81 |
| **Domain** | vidyaclasses.in.net |
| **OS** | Ubuntu 24.04 LTS |
| **User** | ubuntu |

---

## Directory Structure
/home/ubuntu/EDUCATION-WEBSITE/
├── backend/
│ ├── app/
│ │ ├── api/
│ │ ├── core/
│ │ ├── models/
│ │ ├── schemas/
│ │ ├── services/
│ │ ├── database.py
│ │ └── main.py
│ ├── venv/
│ ├── .env
│ └── requirements.txt
├── frontend/
│ ├── src/
│ │ ├── app/
│ │ ├── components/
│ │ └── types/
│ ├── public/
│ ├── out/ # Static build output
│ ├── .env
│ ├── next.config.js
│ └── package.json
└── docs/
└── deployment.md

text

---

## Backend Setup (FastAPI)

### Service File: `/etc/systemd/system/education-backend.service`

```ini
[Unit]
Description=Education Website Backend (FastAPI)
After=network.target postgresql.service

[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu/EDUCATION-WEBSITE/backend
Environment="PATH=/home/ubuntu/EDUCATION-WEBSITE/backend/venv/bin"
ExecStart=/home/ubuntu/EDUCATION-WEBSITE/backend/venv/bin/uvicorn app.main:app --host 0.0.0.0 --port 5001
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
Environment Variables (.env)
env
# Database
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/education_db

# Email (Resend)
RESEND_API_KEY=re_xxxxxxx
ADMIN_EMAIL=vidyaclassesbgm@gmail.com

# App
APP_NAME=Vidya Classes
DEBUG=false
SECRET_KEY=your-secret-key

# CORS
BACKEND_CORS_ORIGINS=["https://vidyaclasses.in.net", "http://localhost:3000"]
Running the Backend
bash
# Start service
sudo systemctl start education-backend

# Check status
sudo systemctl status education-backend

# View logs
sudo journalctl -u education-backend -f
Frontend Setup (Next.js)
Next.js Configuration (next.config.js)
javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
Environment Variables (.env)
env
NEXT_PUBLIC_API_URL=https://vidyaclasses.in.net/api/v1
NEXT_PUBLIC_WHATSAPP_NUMBER=+918712346960
Building the Frontend
bash
cd /home/ubuntu/EDUCATION-WEBSITE/frontend
npm install
npm run build
Important: The build creates a flat HTML structure:

about.html (not about/index.html)

contact.html (not contact/index.html)

Nginx Configuration
Main Config File: /etc/nginx/sites-available/vidyaclasses
nginx
server {
    server_name vidyaclasses.in.net www.vidyaclasses.in.net;

    # API proxy
    location /api/ {
        rewrite ^/api/(.*) /$1 break;
        proxy_pass http://localhost:5001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Serve static frontend files
    location / {
        root /home/ubuntu/EDUCATION-WEBSITE/frontend/out;
        index index.html;
        try_files $uri $uri.html $uri/ /index.html;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/vidyaclasses.in.net/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/vidyaclasses.in.net/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    listen 80;
    server_name vidyaclasses.in.net www.vidyaclasses.in.net;
    return 301 https://$host$request_uri;
}
Key Configuration Details
Directive	Purpose
location /api/	Proxies API requests to backend on port 5001
rewrite ^/api/(.*) /$1 break	Removes /api prefix before forwarding to backend
try_files $uri $uri.html $uri/ /index.html	Looks for: exact file, file with .html, directory, then index
Enable the Site
bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/vidyaclasses /etc/nginx/sites-enabled/

# Disable default site
sudo rm /etc/nginx/sites-enabled/default

# Test and reload
sudo nginx -t
sudo systemctl reload nginx
SSL Certificate (Let's Encrypt)
bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d vidyaclasses.in.net -d www.vidyaclasses.in.net

# Auto-renewal (already configured)
sudo certbot renew --dry-run
Database (PostgreSQL)
Database Connection
bash
# Connect to database
sudo -u postgres psql -d education_db

# Or with password
psql -h localhost -U postgres -d education_db
Tables Created
sql
-- Student enquiries
CREATE TABLE student_enquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    class_subject VARCHAR(100),
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_processed BOOLEAN DEFAULT FALSE
);

-- Contact form submissions
CREATE TABLE contact_submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_processed BOOLEAN DEFAULT FALSE
);
Email Configuration (Resend)
Service File: app/services/email.py
python
import resend
from app.core.config import settings

resend.api_key = settings.RESEND_API_KEY

def send_email(subject: str, html_content: str):
    params = {
        "from": "Vidya Classes <onboarding@resend.dev>",
        "to": [settings.ADMIN_EMAIL],
        "subject": subject,
        "html": html_content,
    }
    return resend.Emails.send(params)
Resend Setup
Create account at resend.com

Get API key

Add to .env file

Troubleshooting Guide
Common Issues and Solutions
1. 403 Forbidden Errors
bash
# Fix permissions
sudo chown -R www-data:www-data /home/ubuntu/EDUCATION-WEBSITE/frontend/out
sudo chmod o+x /home/ubuntu /home/ubuntu/EDUCATION-WEBSITE
sudo find out -type d -exec chmod 755 {} \;
sudo find out -type f -exec chmod 644 {} \;
2. Build Permission Errors
bash
# Take ownership back from www-data
sudo chown -R ubuntu:ubuntu /home/ubuntu/EDUCATION-WEBSITE/frontend/out
rm -rf out/
npm run build
3. Backend Not Starting
bash
# Check logs
sudo journalctl -u education-backend -n 50

# Test manually
cd /home/ubuntu/EDUCATION-WEBSITE/backend
source venv/bin/activate
uvicorn app.main:app --host 0.0.0.0 --port 5001
4. Mixed Content Errors (HTTPS → HTTP)
Ensure NEXT_PUBLIC_API_URL uses https://

Configure Nginx to proxy API requests (not direct IP access)

5. API 404 Errors
Check Nginx try_files order

Verify backend routes: /health not /api/v1/health

Nginx rewrites /api/* to /*

Deployment Workflow
After Code Changes
bash
# 1. Pull latest changes
git pull origin develop

# 2. Build frontend
cd /home/ubuntu/EDUCATION-WEBSITE/frontend
npm install
npm run build

# 3. Fix permissions
sudo chown -R www-data:www-data out/
sudo find out -type d -exec chmod 755 {} \;
sudo find out -type f -exec chmod 644 {} \;

# 4. Reload Nginx
sudo systemctl reload nginx

# 5. Restart backend if needed
sudo systemctl restart education-backend
Rollback
bash
# Revert to previous build
cd /home/ubuntu/EDUCATION-WEBSITE/frontend
cp -r out out_backup_$(date +%Y%m%d_%H%M%S)
# Restore from backup if needed
Monitoring
Log Locations
Service	Log Location	Command
Nginx Access	/var/log/nginx/access.log	sudo tail -f /var/log/nginx/access.log
Nginx Error	/var/log/nginx/error.log	sudo tail -f /var/log/nginx/error.log
Backend	Journal	sudo journalctl -u education-backend -f
PostgreSQL	/var/log/postgresql/	sudo tail -f /var/log/postgresql/postgresql-*.log
Health Checks
bash
# API Health
curl https://vidyaclasses.in.net/api/health

# Frontend
curl https://vidyaclasses.in.net/

# Backend (local)
curl http://localhost:5001/health
Useful Commands
Service Management
bash
# Backend
sudo systemctl status education-backend
sudo systemctl restart education-backend
sudo systemctl stop education-backend

# Nginx
sudo systemctl status nginx
sudo systemctl reload nginx
sudo systemctl restart nginx

# PostgreSQL
sudo systemctl status postgresql
Database Queries
bash
# View recent enquiries
sudo -u postgres psql -d education_db -c "SELECT * FROM student_enquiries ORDER BY id DESC LIMIT 5;"

# View recent contact messages
sudo -u postgres psql -d education_db -c "SELECT * FROM contact_submissions ORDER BY id DESC LIMIT 5;"

# Count total enquiries
sudo -u postgres psql -d education_db -c "SELECT COUNT(*) FROM student_enquiries;"
SSL Certificate Renewal
Certbot automatically renews certificates. To test:

bash
sudo certbot renew --dry-run
To force renewal:

bash
sudo certbot renew --force-renewal
Environment Variables Reference
Backend (.env)
Variable	Description	Example
DATABASE_URL	PostgreSQL connection	postgresql://postgres:postgres@localhost:5432/education_db
RESEND_API_KEY	Resend email API key	re_xxxxxxx
ADMIN_EMAIL	Email to receive notifications	admin@example.com
APP_NAME	Application name	Vidya Classes
DEBUG	Debug mode	false
SECRET_KEY	Secret key for sessions	your-secret-key
BACKEND_CORS_ORIGINS	Allowed origins	["https://vidyaclasses.in.net"]
Frontend (.env)
Variable	Description	Example
NEXT_PUBLIC_API_URL	Backend API URL	https://vidyaclasses.in.net/api/v1
NEXT_PUBLIC_WHATSAPP_NUMBER	WhatsApp number	+918712346960