var path = require('path');
const webpack = require("webpack");
require("dotenv").config({ path: __dirname + '/../server/.env' });

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
  // plugins: [
  //   new webpack.DefinePlugin({
  //     "process.env": {
  //       SERVER_ADDR: JSON.stringify(process.env.SERVER_ADDR),
  //       PORT: JSON.stringify(process.env.PORT)
  //     },
  //   }),
  // ],
};