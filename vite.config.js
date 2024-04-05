import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base:'/new_portafolio_react',
  plugins: [react()],
})
