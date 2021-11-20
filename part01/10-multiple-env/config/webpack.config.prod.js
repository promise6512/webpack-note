const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //用于抽离css文件
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin"); //用于压缩css文件
const TerserPlugin = require("terser-webpack-plugin"); //
module.exports = {
    output: {
      filename: "scripts/[name].[contenthash].js",
    },
    mode : "production",
    devtool: "inline-source-map",
    optimization: {
      minimizer: [new CssMinimizerWebpackPlugin(), new TerserPlugin()],
    },
    performance: {
      hints: false //取消性能提示 
    }
};
