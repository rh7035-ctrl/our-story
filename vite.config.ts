import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'our-story' with the exact name of your GitHub repository if it's different
  base: process.env.NODE_ENV === 'production' ? '/our-story/' : '/',
  server: {
    host: true,
    port: 3000,
  }
});