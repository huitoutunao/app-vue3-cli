/* eslint no-param-reassign: off */
const { defineConfig } = require('@vue/cli-service')
const StylelintPlugin = require('stylelint-webpack-plugin')

const IS_PROD = ['production'].includes(process.env.NODE_ENV)
const IS_DEV = ['development'].includes(process.env.NODE_ENV)

module.exports = defineConfig({
  publicPath: IS_PROD ? './' : process.env.VUE_APP_PUBLIC_PATH,
  transpileDependencies: true,
  lintOnSave: 'error',
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
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
})
