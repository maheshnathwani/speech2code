const rules = require('./webpack.rules');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

rules.push({
  test: /\.(sa|sc|c)ss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader
    },
    {
      loader: "css-loader"
    },
    {
      loader: "postcss-loader"
    },
    {
      loader: "sass-loader",
      options: {
        implementation: require("sass")
      }
    }
  ]
});

rules.push({
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/'
      }
    }
  ]
});

rules.push({
  test: /\.(png|jpg|svg)$/,
  use: {
    loader: "file-loader",
    options: {
      outputPath: "images"
    }
  }
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: { extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'] },
  watch: true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ]
};
