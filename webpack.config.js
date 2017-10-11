const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: __dirname + '/js/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'source'),
  },
}
