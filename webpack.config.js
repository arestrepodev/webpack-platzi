const path = require('path');

const config = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  mode: 'development'
};

module.exports = config;
