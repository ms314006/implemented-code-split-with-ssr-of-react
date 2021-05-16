const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/client.js'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        },
      },
    ],
  },
  devServer: {
    port: 8080,
  },
};
