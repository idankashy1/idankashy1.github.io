import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User Site at https://idankashy.github.io — base must be '/'.
// If/when a custom domain is configured (public/CNAME), '/' is still correct.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
