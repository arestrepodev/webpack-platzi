const path = require('path');

const config = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, 'src', 'js', 'index.js'),
    buy: path.resolve(__dirname, 'src', 'js', 'buy.js'),
    contact: path.resolve(__dirname, 'src', 'js', 'contact.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    filename: 'bundle-[name].js'
  }
};

module.exports = config;
