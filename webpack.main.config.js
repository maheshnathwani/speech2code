const rules = require('./webpack.rules');

rules.push({
  test: /\.(png|jpg|svg|ico|icns)$/,
  use: {
    loader: "file-loader",
    options: {
      outputPath: "icons"
    }
  }
});


module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.js',
  // Put your normal webpack config below here
  module: {
    rules: rules,
  },
};
