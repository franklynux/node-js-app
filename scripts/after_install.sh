#!/bin/bash
set -e

# Navigate to the application directory
cd /var/www/html

# Install npm and PM2 if not already installed
echo "Checking for Node.js and PM2..."
if ! command -v node &> /dev/null; then
  echo "Node.js is not installed. Installing..."
  curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
  apt-get install -y nodejs
fi

if ! command -v pm2 &> /dev/null; then
  echo "PM2 is not installed. Installing..."
  npm install -g pm2
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

echo "AfterInstall script completed."
