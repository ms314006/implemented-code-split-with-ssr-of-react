const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  target: 'node',
  entry: ['@babel/polyfill', './src/server.js'],
  externals: [webpackNodeExternals()],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@loadable/babel-plugin', '@babel/plugin-syntax-dynamic-import'],
          },
        },
      },
    ],
  },
  plugins: [new LoadablePlugin()],
};
