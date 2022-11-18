// const path = require("path");
// // const webpack = require('webpack');
// // const dotenv = require('dotenv').config( {
// //   path: path.join(__dirname, '.env')
// // });

// // module.exports = {
// //   mode: "development",
// //   entry: path.join(__dirname, "/src/index.jsx"),

// //   output: {
// //     path: path.join(__dirname, "/public/dist"),

// //     filename: "bundle.js"
// //   },

// //   resolve: {
// //     extensions: ['.js','.jsx','.json']
// //   },

// //   module: {
// //     rules: [
// //       {
// //         test: /\.(js|jsx)$/,
// //         exclude: /nodeModules/,
// //         use: {
// //           loader: "babel-loader",
// //         },
// //       },
// //       {
// //         test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
// //         exclude: /node_modules/, //folder to be excluded
// //         use: 'babel-loader' //loader which we are going to use
// //       },
// //       {
// //         test: /\.css$/,
// //         use: [
// //           'style-loader',
// //           'css-loader'
// //         ]
// //       },
// //     ]
// //   },
// //   plugins: [
// //     new webpack.DefinePlugin( {
// //       "process.env": dotenv.parsed
// //     } ),
// //   ],
// // };

// module.exports = {
//   devtool: 'source-map',
//   mode: "development",
//   entry: path.join(__dirname, "/src/index.jsx"),

//   output: {
//     path: path.join(__dirname, "/public/dist"),
//     filename: "bundle.js"
//   },

//   module: {
//     rules: [
//       {
//         test: [/\.jsx$/],
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['env', 'react'],
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [
//           { loader: 'style-loader' },
//           { loader: 'css-loader'}
//         ]
//       }
//     ]
//   }
// };

const path = require("path");
const webpack = require('webpack');
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
});

module.exports = {
  mode: "development",

  entry: path.join(__dirname, "/src/index.jsx"),

  output: {
    path: path.join(__dirname, "/public/dist"),

    filename: "bundle.js"
  },

  resolve: {
    extensions: ['.js','.jsx','.json']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, //folder to be excluded
        use: 'babel-loader' //loader which we are going to use
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin( {
      "process.env": dotenv.parsed
    } ),
  ],
};