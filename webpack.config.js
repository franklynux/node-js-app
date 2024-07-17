const path = require('path');

module.exports = {
  mode: 'development', // Set mode to 'development' or 'production'
  entry: './src/app.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map', // Generate source maps for easier debugging
};
