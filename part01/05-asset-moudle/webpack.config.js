const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true, //清理dist
    assetModuleFilename: 'images/[contenthash][ext]'
  },
  mode: "development",
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'app.html',
      inject: 'body'
    })
  ],
  devServer: {
    static: './dist'
  },

  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource', //导出一个单独的文件
      },
      {
        test: /\.jpg$/,
        type: 'asset/inline', //导出一个data URI(bae64编码)
      },
      {
        test: /\.txt$/,
        type: 'asset/source' //导出源代码
      },
      {
        test: /\.gif$/,
        type: 'asset', //在asset/resource和asset/inline之间自动选择
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024  //小于4M时导出导出一个data URI(bae64编码), 大于4M时导出一个单独的文件
          }
        }
      }
    ]
  }
};
