var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

// require("expose-loader?libraryName!./file.js");
const extractCssLess = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: true
  // disable: process.env.NODE_ENV === "development"
});

var webpackConfig = {
  // 设置入口文件。
  entry: {
    'background': './src/js/background.js',
    'content': './src/js/content.js',
    'main': './src/js/main.js',
    'words': './src/js/words.js'
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
      },
      // { // 处理html文件，并处理img 中 src 和 data-src 的引入路径
      //   test: /\.html$/,
      //   loader: "html-loader?attrs=img:src img:data-src"
      // },
      { // 处理字体文件
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }, { // 处理图片，并将8k以下的图片转为base64编码
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8&name=./img/[hash].[ext]'
      },
      {
        test: /\.less$/,
        use: extractCssLess.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "less-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
        // loader: extractCssLess.extract("style-loader", "css-loader")
        // 'style-loader!css-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-withimg-loader'
　　　 }
      // { test: /\.ejs$/, loader: 'ejs-loader?variable=data' },
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      // favicon: './images/logo.png',
      hash: true,
      title: 'title',
      chunks: ['content'],
      // excludeChunks: ['content', 'background'],
      // template: './src/template/card/snow.html'
    }),
    extractCssLess,
    new CopyWebpackPlugin([
      { from: 'manifest.json', to: 'manifest.json' },
      { from: 'popup.html', to: 'popup.html' },
      { from: 'images/logo.png', to: 'images/logo.png' },
    ])
  ]
}

module.exports = webpackConfig