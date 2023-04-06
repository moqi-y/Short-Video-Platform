import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),],
    resolve: {
        // 配置路径别名
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        // host: 'https://my-json-server.typicode.com',
        // port: 80,
        proxy: {
            '/api': {
                target: 'https://api.apiopen.top',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, ''), //注意
            }
        }
    },
})
