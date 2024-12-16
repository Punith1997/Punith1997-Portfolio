import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/Punith1997-Portfolio/', // GitHub Pages base path
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically update service worker when new content is available
      manifest: {
        name: 'Punith AJ Portfolio',
        short_name: 'Portfolio',
        description: 'A Progressive Web App for Punith AJ Portfolio',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone', // Standalone mode for PWA
        start_url: '/Punith1997-Portfolio/', // Entry point for PWA
        icons: [
          {
            src: 'icon-192x192.png', // Add this file to the "public/" folder
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png', // Add this file to the "public/" folder
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,jpg}'], // Cache these file types
      }
    })
  ]
});
