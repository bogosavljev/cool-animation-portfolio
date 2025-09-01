import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cool-animation-portfolio/', // 👈 required for GitHub Pages
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React libraries into their own chunk
          react: ['react', 'react-dom'],

          // Example: if you use framer-motion, split it too
          animation: ['framer-motion'],

          // Example: if you use three.js, split it too
          // three: ['three']
        }
      }
    }
  }
})
