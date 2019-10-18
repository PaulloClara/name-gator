module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/name-gator/" : "/",
  outputDir: "docs",
  lintOnSave: false,
  transpileDependencies: ["vuetify"]
};
