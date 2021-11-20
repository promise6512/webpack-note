const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/app.js',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') //路径别名
    },
    extensions: ['.json', '.js', '.vue']//优先匹配json 再匹配js
  }
}