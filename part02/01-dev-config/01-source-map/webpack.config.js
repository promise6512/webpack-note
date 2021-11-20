const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./app.js",
  devtool: "cheap-module-source-map",
  plugins: [new htmlWebpackPlugin()]
};