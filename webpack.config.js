const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

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
      }),
      new WorkboxPlugin.GenerateSW({
         clientsClaim: true,
         skipWaiting: true
      })
   ],
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
   }
}