var webpack = require('webpack');
var path = require('path');

// require("expose-loader?libraryName!./file.js");

var webpackConfig = {
  // 设置入口文件。
  entry: {
    'background': './src/js/background.js',
    'content': './src/js/content.js'
  },
  output: {
    // 设置输出文件夹
    path: path.join(__dirname, 'dist'),
    // 设置公用文件夹路径
    publicPath: '/',
    // 设置输出的js文件的名字规则。
    // [name] 为chunk中的名称
    // [hash] 为webpack生成的哈希值
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: []
}

module.exports = webpackConfig