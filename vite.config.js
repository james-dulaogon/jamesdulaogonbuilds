import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

const srcDirectory = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': srcDirectory,
    },
  },
  // Necessary for direct deploying to GitHub Pages sub-routes later
  base: process.env.NODE_ENV === 'production' ? '/YOUR_GITHUB_REPOSITORY_NAME/' : '/',
});
