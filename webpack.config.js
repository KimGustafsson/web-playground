const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: {
      app: './src/index.js'
   },
   devServer: {
      contentBase: './dist'
   },
   plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         title: 'Web-playground'
      })
   ],
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
   }
}