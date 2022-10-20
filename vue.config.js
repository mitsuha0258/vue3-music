const { defineConfig } = require('@vue/cli-service')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')


module.exports = defineConfig({
  transpileDependencies: true,
  // 打包时不生成map文件
  productionSourceMap:false,
  // 按需引入element-plus配置
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      require('unplugin-element-plus/webpack')({
        // options
      }),
    ],
  }
})
