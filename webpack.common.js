const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.join(__dirname, 'src/app.jsx'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new Dotenv()
  ],
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
    extensions: ['js', 'jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
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
