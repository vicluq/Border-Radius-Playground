const webpack = require("webpack");
const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CSSExtract = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin"); //optimize js
const CSSOptimize = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: __dirname + "\\src\\script.js",
  output: {
    filename: "main.[contentHash].js",
    path: __dirname + "\\public",
  },
  optimization: {
    minimizer: [new CSSOptimize({})],
  },
  plugins: [
    new HTMLPlugin({
      template: "./src/index.html",
      minify: true,
    }),

    new CSSExtract({
      filename: "index.min.css", //could add to a folder and html plugin would insert it ass well
    }),

    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: true }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [CSSExtract.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ["file-loader"],
      },
    ],
  },
};
