const path = require('path');

const config = {
  entry: path.resolve(__dirname, 'index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

module.exports = config;
