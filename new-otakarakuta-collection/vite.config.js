import { defineConfig } from 'vite';
import path from 'path';

export default {
  root: 'new-otakarakuta-collection',
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  }
};

