import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'new-otakarakuta-collection'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: path.resolve(__dirname, 'new-otakarakuta-collection', 'index.html')
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
