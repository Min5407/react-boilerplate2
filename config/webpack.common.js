const path = require("path");
const miniCssExtratPlugin = require("mini-css-extract-plugin");
const reactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const babelConfig = require("./babel.config");

const rootPath = path.resolve(__dirname, "..");
const distPath = path.resolve(rootPath, "dist");
const srcPath = path.resolve(rootPath, "src");

const plugins = [
  new CleanWebpackPlugin(), // recommend - put it on top
  new miniCssExtratPlugin(),
  new htmlWebpackPlugin({
    template: "./src/index.html", // referencing src/index.html
    // filename: "./index.html",
    // favicon: "./static/logo.png",
  }),
];

module.exports = {
  entry: {
    path: path.resolve(srcPath, "index.tsx"),
  },

  output: {
    path: path.resolve(distPath, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      // asset files
      {
        test: /\.(?:ico|png|jpe?g|gif|svg|mp4|woff(2)?|eot|ttf|otf|svg)$/i,
        type: "asset",
      },

      // babel
      {
        test: /\.tsx?$/, // js or jsx OR ts or tsx
        exclude: /node_modules/,
        use: { loader: "babel-loader", options: babelConfig },
      },

      // css
      {
        test: /\.(s[ac]|c)ss$/i, // reg => sass | scss | css
        use: [
          {
            loader: miniCssExtratPlugin.loader,
          },
          "css-loader",
          "postcss-loader", // make sure to put postcss loader to go on top of sass-loader as it wont complile "//" comment in the scss file
          "sass-loader",
        ],
      },
    ],
  },

  plugins,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // allow to import file without typing the file format. Ex) import A from "./app.jsx" -> import A from "./app"
  },
};
