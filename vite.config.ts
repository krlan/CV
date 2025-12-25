import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Will work with GitHub Pages when using GitHub Actions
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
