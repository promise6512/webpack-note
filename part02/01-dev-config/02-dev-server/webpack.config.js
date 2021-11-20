const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    publicPath: '/'
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: false,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:9000'
    },
    /* http2: true */
    historyApiFallback: true,
    host: '0.0.0.0' //区域网中其他主机可以通过http://10.162.47.247:3000/访问项目
  },
  plugins: [new htmlWebpackPlugin()]
}