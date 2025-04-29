import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 8080 
  },
  build: {
    outDir: 'dist' // Aquí lo defines explícitamente
  },
  base: '/', // Configuración importante para que funcione el enrutamiento correctamente
})
