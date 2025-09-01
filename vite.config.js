import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    visualizer({
      filename: 'stats.html',   // output file
      template: 'treemap',      // sunburst | treemap | network
      gzipSize: true,
      brotliSize: true,
      open: true                // auto-open in browser after build
    })
  ],
  base: '/cool-animation-portfolio/', // 👈 required for GitHub Pages
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // get the package name
            const parts = id.toString().split('node_modules/')[1].split('/')
            const pkgName = parts[0].startsWith('@') ? parts[0] + '/' + parts[1] : parts[0]
            return pkgName
          }
        }
      }
    }
  }
})
