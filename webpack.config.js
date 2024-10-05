const path = require('path');

module.exports = {
  entry: './public/admin/index.js',
  output: {
    path: path.resolve(__dirname, 'public/admin'),
    filename: 'cms.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'development', // or 'production'
};
