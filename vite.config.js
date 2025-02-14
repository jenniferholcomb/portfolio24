import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fixReactRefresh from 'fix-react-refresh-plugin';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  plugins: [
    {
      ...fixReactRefresh(),
      enforce: 'pre',
    },
    react()
  ]
});
