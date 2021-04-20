const { name } = require('./package')
module.exports = {
  // 配置 webpack 构建时的 publicPath 为目录名称
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/micro/micro-app-one/',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      // library: `${name}-[name]`,
      library: 'micro-app-one',
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
