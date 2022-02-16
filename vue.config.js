// const path = require('path')

// const resolve = (dir) => path.join(__dirname, dir)

const resolve = require('./resolve')

module.exports = {
  lintOnSave: 'error',
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  configureWebpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve = resolve
    // const conf = config
    // conf.resolve = resolve
    // return conf
  },
  // configureWebpack: (config) => {
  //   // config.resolve.alias.set('@', resolve('./src'))
  //   // config.resolve = {
  //   //   alias: {
  //   //     '@': path.resolve(__dirname, './src'),
  //   //   },
  //   // },
  // },
}
