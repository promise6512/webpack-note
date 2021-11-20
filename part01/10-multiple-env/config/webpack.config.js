//用于合并配置
const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.config.common");
const productionConfig = require("./webpack.config.prod");
const developmentConfig = require("./webpack.config.dev");
//console.log(merge)
module.exports = (env) => {
  switch(true) {
    case env.development:
      return merge(commonConfig, developmentConfig); //合并commonConfig和developmentConfig的配置
    case env.production:
      return merge(commonConfig, productionConfig); ////合并commonConfig和productionConfig的配置
    default:
      return new Error("No matching configuration was found")
  }
}