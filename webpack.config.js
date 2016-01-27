var path = require('path');
var webpack = require('webpack');
var webpackBase = require('./webpack.base');
var assign = require('object-assign');

var paths = {
  SRC: path.resolve(__dirname, './src')
};

module.exports = assign(webpackBase, {

  entry: [
    'webpack/hot/dev-server',
    paths.SRC + '/app.js'
  ],

  devtool: 'source-map',

  devServer: {
    contentBase: paths.SRC,
    hot: true,
    inline: true,
    hostname: '0.0.0.0',
    port: '8080'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]

});
