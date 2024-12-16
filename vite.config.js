import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Punith1997-Portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  server: {
    host: "0.0.0.0", // Ensures access via IP (e.g., 192.168.38.132)
    port: 3000,
  }
})
