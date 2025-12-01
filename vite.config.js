import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vul dit aan met de NAAM van jouw GitHub repository!
const basePath = '/portfolio/';

export default defineConfig({
  plugins: [react()],
  base: basePath,
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        '404': 'index.html',
      },
    },
  },
});