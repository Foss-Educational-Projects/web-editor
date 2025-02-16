import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import favicons from '@peterek/vite-plugin-favicons'

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [react(), favicons('./src/assets/logo.svg',
		{
			appName: "Web Language Converter", 
			appDescription: "Convert Different Languages Into Other Forms",
			background: '#fff',
			manifestMaskable: true
			
		})],
})
