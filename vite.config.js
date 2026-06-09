import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'download-route',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/download' || req.url === '/download/') {
            req.url = '/download.html';
          }
          next();
        });
      },
    },
  ],
})
