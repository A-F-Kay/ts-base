// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  mode: "development", // add production config when needed
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js"], // resolve all the modules other than index.ts
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.ts?$/,
      },
    ],
  },
};
