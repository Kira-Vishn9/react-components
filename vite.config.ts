/// <reference types="vitest"/>
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint()],
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        provider: 'c8',
        all: false,
        reporter: "text",
        lines: 40
      },
      setupFiles: './src/setupTest.ts',
    },
})
