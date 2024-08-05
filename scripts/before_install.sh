#!/bin/bash
set -e

# Stop the current application
echo "Stopping current application..."
pm2 stop all || true

# Remove old application files
echo "Removing old application files..."
rm -rf /var/www/html/*

# Ensure the deployment directory exists
echo "Ensuring /var/www/html exists..."
mkdir -p /var/www/html

echo "BeforeInstall script completed."
