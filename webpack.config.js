const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: debug ? 'inline-sourcemap' : false,
  entry: path.join(__dirname, '/src/js/index.js'),
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.scss$/,
        // use: ExtractTextPlugin.extract({
          // fallback: 'style-loader',
          use: [
            { loader: 'style-loader', options: { sourceMap: true } },
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        // })
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './src'
  }
  // TODO: differ between production build and dev build

  // plugins: [
  //   new ExtractTextPlugin('styles.css'),
  //   new webpack.optimize.OccurrenceOrderPlugin(),
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: JSON.stringify('production')
  //     }
  //   }),
  //   new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  // ]
}
