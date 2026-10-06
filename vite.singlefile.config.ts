import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { defineConfig } from 'vite'

// Preview-only config: bundles the whole site into ONE self-contained
// index.html (JS, CSS and images inlined) so it can be shared as a single
// file link. The normal vite.config.ts / dist build is untouched.
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  build: {
    outDir: 'dist-single',
    assetsInlineLimit: 100_000_000,
  },
})
