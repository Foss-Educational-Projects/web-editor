import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import favicons from '@peterek/vite-plugin-favicons'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        react(),
        tailwindcss(),
        favicons('./src/assets/logo.svg', {
            appName: 'Web Language Converter',
            appDescription: 'Convert Different Languages Into Other Forms',
            background: '#fff',
            manifestMaskable: true,
        }),
    ],
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
