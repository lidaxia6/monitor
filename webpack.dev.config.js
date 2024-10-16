const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'l-monitor': path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    port: 3000,
    hot: true,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './examples/index2devServer.html'),
      filename: 'index.html',
      chunks: ['l-monitor'],
    }),
  ],
};
