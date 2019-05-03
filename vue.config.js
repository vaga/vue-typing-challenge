const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-typing-challenge/'
    : '/',
  outputDir: path.resolve(__dirname, "./docs")
}
