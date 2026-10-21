import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Automatically handles sub-paths on GitHub Pages, while maintaining normal local serving maps
  base: command === 'build' ? '/jamesdulaogonbuilds/' : '/',
});
