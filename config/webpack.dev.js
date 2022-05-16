const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const reactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  target: "web",

  devServer: {
    open: true,
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 3000,
  },

  plugins: [new reactRefreshPlugin()],
});
