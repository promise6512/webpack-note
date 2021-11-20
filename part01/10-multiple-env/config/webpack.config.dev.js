//开发环境下的配置
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //用于抽离css文件
module.exports = {
  output: {
    filename: "scripts/[name].js",
  },
  mode: "development",
  devtool: "inline-source-map",
  //webpack-dev-server入口文件夹
  devServer: {
    static: "./dist",
  },
};
