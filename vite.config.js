import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



export default defineConfig({
  base: './', // 打包的静态资源引用路径
  plugins: [vue()], // 放插件用的
  resolve: {
    alias: {
      '@': '/src' // 配置@/提示符
    }
  },
})
