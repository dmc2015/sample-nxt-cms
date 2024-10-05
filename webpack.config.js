// webpack.config.js
const path = require('path');

module.exports = {
  watch: true,
  entry: './public/admin/index.js', // The input file (your CMS entry point)
  output: {
    filename: 'cms.js', // The output file name
    path: path.resolve(__dirname, 'public/admin'), // Output directory
  },
  mode: 'production', // Use production mode for minified output
  module: {
    rules: [
      {
        test: /\.js$/, // Use babel-loader for JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      // If decap-cms-app needs an alias, you can add it here
      'decap-cms-app': path.resolve(__dirname, 'node_modules/decap-cms-app'),
    },
  },
};
