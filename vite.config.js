import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => ({
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
  base: mode === 'github' ? '/cool-animation-portfolio/' : '/', // 👈 required '/cool-animation-portfolio/' for GitHub Pages
  // For GitHub Pages → run npm run deploy (uses base: '/cool-animation-portfolio/').
  // For Vercel → it just runs the default npm run build (uses base: '/').
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const parts = id.toString().split('node_modules/')[1].split('/')
            const pkgName = parts[0].startsWith('@') ? parts[0] + '/' + parts[1] : parts[0]
            return pkgName
          }
        }
      }
    }
  }
}))
