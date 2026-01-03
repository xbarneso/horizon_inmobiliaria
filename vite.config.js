import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Descomenta y actualiza el base path si usas GitHub Pages
  // base: '/horizon-inmobiliaria/',
})
