import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ 修改為你的 GitHub 使用者名稱與 repo 名稱
export default defineConfig({
  base: '/shipment-app-v1/',
  plugins: [react()],
})
