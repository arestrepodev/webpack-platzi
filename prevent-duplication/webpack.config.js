const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  mode: 'production',
  entry: {
    home: path.resolve(__dirname, 'src', 'js', 'index.js'),
    contact: path.resolve(__dirname, 'src', 'js', 'contact.js')
  },
  devServer: {
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: '/nonde_modules/'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 90000
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Preprocesadores',
      minify: {
        collapseWhitespace: true
      },
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  resolve: {
    alias: {
      Node: path.resolve(__dirname, 'node_modules')
    },
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      name: 'commons'
    }
  }
};

module.exports = config;
