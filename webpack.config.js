// const webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: {
      app: './src/Components/App.jsx'
   },
   // entry: {
   //    app: './src/Server/Server.js'
   // },
   devServer: {
      contentBase: './dist'
   },
   // target: 'node',
   // externals: nodeExternals(),
   module: {
      rules: [{
            test: /\.html$/,
            use: [{
               loader: 'html-loader'
            }]
         },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         }
      ],
   },
   plugins: [
      // new webpack.DefinePlugin({
      //    'process.env': {
      //       NODE_ENV: `'production'`
      //    }
      // }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         title: 'Web-playground',
         template: './src/index.html',
         filename: './index.html'
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