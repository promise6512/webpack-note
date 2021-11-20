const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //用于抽离css文件
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    clean: true, //清理dist
    assetModuleFilename: 'images/[contenthash][ext]'
  },
  mode: 'production',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', //模板文件
      filename: 'app.html',
      inject: 'body' 
    }),
    //压缩css
    new MiniCssExtractPlugin({
      filename: 'style/[contenthash].css'
    })

  ],
  //webpack-dev-server入口文件夹
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
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader,'css-loader', 'less-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, //排除node_modules中的文件
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-runtime']
            ]
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin()],

    /* splitChunks: {
      chunks: 'all' //实现代码分割
    } */
  }
};
