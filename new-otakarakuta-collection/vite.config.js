import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // プロジェクトルートを指定
  build: {
    outDir: 'dist', // ビルドの出力先ディレクトリ
    rollupOptions: {
      input: './index.html', // エントリーファイルを正しく指定
    },
  },
});
