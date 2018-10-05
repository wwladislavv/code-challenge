const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.scss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }]
    },
      {
        exclude: /node_modules|packages/,
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
