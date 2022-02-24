/* eslint no-param-reassign: off */
/**
 * 下面内容按需添加，参考链接：https://github.com/staven630/vue-cli4-config
 * TODO: 压缩图片
 * TODO: 自动生成雪碧图
 * TODO: 打包分析
 * TODO: 引入 cdn 资源
 * TODO: 多页面打包
 * TODO: 去除 console.log()
 * TODO: 单独打包第三方模块 splitChunks
 * TODO: 开启 gzip 压缩
 */
const StylelintPlugin = require('stylelint-webpack-plugin')

const IS_PROD = ['production'].includes(process.env.NODE_ENV)
const IS_DEV = ['development'].includes(process.env.NODE_ENV)

module.exports = {
  publicPath: IS_PROD ? './' : process.env.VUE_APP_PUBLIC_PATH,
  lintOnSave: 'error',
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  configureWebpack: (config) => {
    const plugins = []
    if (IS_DEV) {
      plugins.push(
        new StylelintPlugin({
          files: ['src/**/*.vue', 'src/assets/**/*.scss'],
        })
      )
    }
    config.plugins = [...config.plugins, ...plugins]
  },
}
