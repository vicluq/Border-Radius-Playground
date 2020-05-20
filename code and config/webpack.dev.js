const webpack = require("webpack");
const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const webpackServer = require("webpack-dev-server");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: __dirname + "\\src\\script.js",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "/public"),
  },
  plugins: [
    new HTMLPlugin({
      template: "./src/index.html",
      minify: false,
    }),

    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: true }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    contentBase: "./public",
    port: 9090,
    liveReload: true,
  },
};
