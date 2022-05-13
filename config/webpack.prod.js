const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  target: "browserslist",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 3001,
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: "bundleStats.json",
    }),
  ],
});
