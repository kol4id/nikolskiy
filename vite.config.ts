import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  preview: {
    port: 4173, // Порт по умолчанию
    host: true, // Разрешить доступ с других хостов (например, из Nginx)
    allowedHosts: [
      'niksto-lazer.ru',
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // <--- Add this
    },
  },
})
