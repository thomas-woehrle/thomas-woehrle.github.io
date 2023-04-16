import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //base: "/thomas-woehrle.github.io/",
  plugins: [react()],
})
