import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'src', // Project root directory
  publicDir: path.resolve(__dirname, 'public'), // Directory for static assets
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Output directory for the build
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias for easier imports
    },
  },
  server: {
    open: true, // Automatically open the app in the browser
    port: 5000
  },
});
