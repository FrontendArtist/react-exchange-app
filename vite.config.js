import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'custom-mime-type',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.endsWith('.woff2')) {
            res.setHeader('Content-Type', 'font/woff2');
          } else if (req.url.endsWith('.woff')) {
            res.setHeader('Content-Type', 'font/woff');
          } else if (req.url.endsWith('.ttf')) {
            res.setHeader('Content-Type', 'font/ttf');
          }
          next();
        });
      },
    },
  ],
});