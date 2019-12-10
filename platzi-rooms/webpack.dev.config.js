const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: "http://localhost:9000/",
    chunkFilename: "js/[id].[chunkhash].js"
  },
  devServer: {
    open: true,
    port: 9000,
    hot: true,
    contentBase:path.resolve(__dirname, "dist")
  },
  resolve:{
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'      
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css|postcss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
        ]
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: "assets/"
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
};
