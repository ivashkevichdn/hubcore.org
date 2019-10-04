const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './grandcore/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/index_mini.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=.+)?$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './grandcore/index.html',
    }),
    new CopyWebpackPlugin([{ from: 'grandcore/favicon.ico', to: 'static/favicon.ico' }]),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist/satatic',
    hot: true,
  },
};
