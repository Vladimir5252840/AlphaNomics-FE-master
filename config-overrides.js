const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackModuleRule
} = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true
  }),
  addWebpackModuleRule(
    // This rule will only be used for converting our sass-variables to less-variables
    {
      test: /\.scss$/,
      issuer: /\.less$/,
      use: {
        loader: "./sassVarsToLess.js" // Change path if necessary
      }
    }
  )
);