import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
    Components({
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
    visualizer(),
  ],
  resolve: {
    alias: {
      // 配置别名
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/assets/styles/vars.less')}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      overlay: false,
    },
    watch: {
      usePolling: true,
    },

    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api/': {
        target: 'http://t.flowx.woa.com/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api/': '',
        },
      },
    },
  },
});
