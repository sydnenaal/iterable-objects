const path = require("path");
const pkg = require("./package.json");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: { main: "./index.ts" },
  target: "web",
  output: {
    path: path.join(__dirname, "lib"),
    filename: "[name].bundle.js",
    library: "lib",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
