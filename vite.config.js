import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Team-Balance/',   // <--- exacto como se llama tu repo
  build: {
    outDir: 'dist'
  }
})