import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ========================================
// DEPLOYMENT CONFIGURATION
// ========================================
// IMPORTANT: Change 'portfolio' to YOUR GitHub repository name!
// 
// Example: If your repository is at:
//   https://github.com/username/my-awesome-portfolio
// 
// Then set:
//   const basePath = '/my-awesome-portfolio/';
// 
// For testing locally, you can use:
//   const basePath = '/';
// ========================================
const basePath = '/portfolio/';

export default defineConfig({
  plugins: [tailwindcss(), react() ],
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