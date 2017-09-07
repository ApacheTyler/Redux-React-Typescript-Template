var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: debug ? "source-map" : null,
  watch: debug,
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { 
        enforce: "pre", 
        test: /\.js$/, 
        loader: "source-map-loader" 
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { 
        enforce: "pre",
        test: /\.tsx?$/, 
        loader: "awesome-typescript-loader" 
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    path: __dirname + "/build",
    filename: "app.min.js"
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: 'index.ejs',
        inject: 'body'
      }
    ),
    new ExtractTextPlugin(
      {
        filename: './build/app.min.css',
        allChunks: true
      }
    ),
    new CopyWebpackPlugin([
      {
        from: './images',
        to: 'images'
      }
    ])
  ]
};
