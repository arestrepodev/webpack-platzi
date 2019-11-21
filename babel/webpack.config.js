const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'js', 'index.js'),
  // devServer: {
  //   hot: true,
  //   open: true
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'], 
        exclude: "/nonde_modules/"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Babel'
    })
  ],
  resolve: {
    alias: {
      Node: path.resolve(__dirname, "node_modules")
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
};

module.exports = config;
