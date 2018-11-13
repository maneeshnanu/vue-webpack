'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const HOST = 'localhost'
const PORT = 8080

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    publicPath: '/',
    contentBase: 'dist',
    host: HOST,
    port: PORT,
    hot: true,
    clientLogLevel: 'warning',
    compress: true,
    open: true,
    overlay: { warnings: false, errors: true },
    quiet: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'vue-style-loader', 'css-loader' ]
      }, {
        test: /\.styl(us)?$/,
        use: [ 'vue-style-loader', 'css-loader', 'stylus-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})