//公共配置
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //用于抽离css文件
module.exports = {
  entry: {
    index: "./src/index.js",
    another: "./src/another-module.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    clean: true, //清理dist
    assetModuleFilename: "images/[contenthash][ext]", //图片文件输出路径
    publicPath: "http://localhost:8080/", //指定公共路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", //模板文件
      filename: "app.html",
      inject: "body",
    }),
    //压缩css
    new MiniCssExtractPlugin({
      filename: "style/[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.png$/,
        type: "asset/resource", //导出一个单独的文件
      },
      {
        test: /\.jpg$/,
        type: "asset/inline", //导出一个data URI(bae64编码)
      },
      {
        test: /\.txt$/,
        type: "asset/source", //导出源代码
      },
      {
        test: /\.gif$/,
        type: "asset", //在asset/resource和asset/inline之间自动选择
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024, //小于4M时导出导出一个data URI(bae64编码), 大于4M时导出一个单独的文件
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, //排除node_modules中的文件
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [["@babel/plugin-transform-runtime"]],
          },
        },
      },
    ],
  },
};
