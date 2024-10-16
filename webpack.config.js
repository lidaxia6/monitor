const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'l-monitor': path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    clean: true,
  },
};
