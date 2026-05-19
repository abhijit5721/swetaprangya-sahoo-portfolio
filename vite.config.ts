import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['@react-three/fiber', 'three'],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
