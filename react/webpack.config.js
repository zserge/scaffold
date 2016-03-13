var path = require('path');

require('es6-promise').polyfill();

var config = {
  entry: path.resolve(__dirname, 'app/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.html$/, loader: 'file?name=[name].[ext]'},
      {test: /\.png$/, loader: 'file?name=[name].[ext]'},
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['react', 'es2015']}},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
    ]
  }
};

module.exports = config;
