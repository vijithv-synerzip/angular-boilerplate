/**
 * This webpack configuration file specifies necessary configurations needed in development mode.
 * It loads common configuration from webpack.common.js and appends extra configurations needed for dev mode.
 * @type {webpack|exports}
 */

var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
        secure: false,
        rewrite: function (request) {
          console.log('REQUEST -> ', request);
          request.url = request.url.replace(/^\/mock/, '');
        }
      }
    }
  }
});
