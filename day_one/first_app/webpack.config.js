const path = require('path');

const config = {
  devtool: 'eval-source-map',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader' }
    ]
  }
};

module.exports = config;
