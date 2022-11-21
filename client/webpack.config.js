var path = require('path');

module.exports = {
  entry: path.join(__dirname, "/src/index.jsx"),
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, "/dist")
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'}
        ]
      }
    ]
  }
};