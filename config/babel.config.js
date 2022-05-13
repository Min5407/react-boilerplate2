const isProduction = process.env.NODE_ENV === "production";

const plugins = [];

if (!isProduction) {
  plugins.push("react-refresh/babel");
}

module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }], // automatic - auto imports the functions that jsx transpiles to/
    "@babel/preset-typescript",
  ],
  plugins,
};
