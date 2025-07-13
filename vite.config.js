import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/AI-Workflow-Hub/',
  plugins: [react()],
  define: {
    // Ensure environment variables are properly embedded
    __VITE_OPENROUTER_API_KEY__: JSON.stringify(process.env.VITE_OPENROUTER_API_KEY),
    __VITE_OPENROUTER_MODEL__: JSON.stringify(process.env.VITE_OPENROUTER_MODEL),
    __VITE_OPENROUTER_BASE_URL__: JSON.stringify(process.env.VITE_OPENROUTER_BASE_URL),
  },
  build: {
    // Ensure environment variables are included in production build
    rollupOptions: {
      external: [],
    },
  },
})
