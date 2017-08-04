const path = require('path');

module.exports = {
  entry: {
    'bundle': './src/js/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
        }],
        exclude: [/node_modules/],
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
