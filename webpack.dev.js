require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    inline: true,
    open: true,
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: process.env.PORT
  }
});
