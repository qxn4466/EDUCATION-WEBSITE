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