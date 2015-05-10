var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      './demo.js'
    ]
  },
  output: {
    filename: 'demo.js',
    path: __dirname + '/dist/',
    publicPath: '/dist/',
    sourceMapFilename: './dist/demo.map',
    library: 'Demo',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel-loader']}
    ]
  }
};
