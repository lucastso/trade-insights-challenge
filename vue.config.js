import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://vuetestti.s3.us-east-1.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json'
        }
      }
    }
  }
})
