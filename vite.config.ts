import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@functions": path.resolve(__dirname, "src/functions"),
      "@bam": path.resolve(__dirname, "src/bam"),
      "@pages": path.resolve(__dirname, "src/pages")
    },
    extensions: ['.ts', '.tsx']
  },


  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
