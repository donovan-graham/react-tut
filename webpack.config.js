const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const HotModuleReplacementPluginConfig = new webpack.HotModuleReplacementPlugin();

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/index.jsx',
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      // Load ES6/JSX
      {
        test: /\.jsx?$/,
        include: [
          `${__dirname}/app`,
        ],
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      },
    ],
  },
  resolve: {
    root: `${__dirname}/app`,
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
    pathinfo: true,
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    HTMLWebpackPluginConfig,
    HotModuleReplacementPluginConfig,
  ],
};
