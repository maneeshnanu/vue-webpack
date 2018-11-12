'use strict'

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: [
    './src/app.js'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}