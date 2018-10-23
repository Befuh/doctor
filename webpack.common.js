const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.join(__dirname, 'src/App.jsx'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new Dotenv()
  ],
  resolve: {
    modules: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'src')],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$|\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
