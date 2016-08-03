var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('style/styles.css',{
      allChunks: true
    }),
    new CopyWebpackPlugin([{
      from: helpers.root('public')
    }],{
      ignore: ['*.scss']
    })
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
