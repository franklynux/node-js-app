#!/bin/bash
set -e

# Navigate to the application directory
cd /var/www/html

# Start the application using PM2
echo "Starting the application..."
pm2 start dist/app.js --name "My-Node.js-App"

# Save the PM2 process list and corresponding environments
echo "Saving PM2 process list..."
pm2 save

echo "ApplicationStart script completed."
