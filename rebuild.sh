#!/bin/bash
cd /home/ubuntu/EDUCATION-WEBSITE/frontend

# Take ownership and clean
sudo chown -R ubuntu:ubuntu out/
sudo rm -rf out/

# Build
npm run build

# Set permissions for Nginx
sudo chown -R www-data:www-data out/
sudo chmod -R 755 out/

# Reload Nginx
sudo systemctl reload nginx

echo "✅ Build complete! Site is live."
