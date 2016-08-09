/**
 * Basic configuration for webpack. test env and prod env configs import this basic configuration.
 * webpack.config.js loads dev config.
 * @type {webpack|exports}
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.css', '.scss', '.html']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$|\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style','css!sass')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style/[name].css', {
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      { from: helpers.root('node_modules/bootswatch'), to: helpers.root('dist/theme') }
    ],{
      ignore: [
        // Doesn't copy any files with a txt extension
        '*.txt',
        '*.json',
        '*.md',
        'LICENSE',
        '.npmignore'
      ]
    })
  ],

  tslint : {
    emitErrors: false,
    failOnHint: false
  }
};
