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
      }, { // 处理html文件，并处理img 中 src 和 data-src 的引入路径
        test: /\.html$/,
        loader: "html-loader?attrs=img:src img:data-src"
      }, { // 处理字体文件
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }, { // 处理图片，并将8k以下的图片转为base64编码
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
      }
    ]
  },
  plugins: []
}

module.exports = webpackConfig