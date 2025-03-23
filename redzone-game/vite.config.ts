import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true
  },
  resolve: {
    alias: {
      'three': 'three'
    }
  },
  optimizeDeps: {
    include: ['three']
  }
}); 