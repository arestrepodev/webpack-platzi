const path = require('path');

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'js', 'index.js'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    filename: 'bundle.js'
  },
  watch: true
};

module.exports = config;
