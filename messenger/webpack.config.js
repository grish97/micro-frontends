const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3005/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin()],
  },

  devServer: {
    port: 3005,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "messenger",
      filename: "remoteEntry.js",
      remotes: {
        store: "store@http://localhost:3010/remoteEntry.js"
      },
      exposes: {
        "./Messenger": "./src/pages/Messenger/index.tsx",
        "./routes": "./src/navigation/routes.tsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/public/index.html",
    }),
    new Dotenv({
      path: "./.env.development",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
