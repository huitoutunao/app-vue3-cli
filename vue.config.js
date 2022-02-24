// const path = require('path')
const IS_PROD = ['production'].includes(process.env.NODE_ENV)

module.exports = {
  publicPath: IS_PROD ? './' : process.env.VUE_APP_PUBLIC_PATH,
  lintOnSave: 'error',
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
}
