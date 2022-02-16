const path = require('path')

module.exports = {
  extensions: ['.ts', '.js', '.vue'],
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}
