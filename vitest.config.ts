import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
    env: {
      VITE_OPENROUTER_API_KEY: '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',
      VITE_OPENROUTER_MODEL: 'mistralai/mistral-small-3.2-24b-instruct:free',
      VITE_OPENROUTER_BASE_URL: 'https://openrouter.ai/api/v1',
    },
  },
})
