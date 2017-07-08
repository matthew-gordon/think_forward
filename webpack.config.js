const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: debug ? 'inline-sourcemap' : false,
  entry: path.join(__dirname, '/src/js/index.js'),
  module: {
    loaders: [{
      test:/\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  output: {
    path: path.join(__dirname, '/src'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './src'
  }
}
