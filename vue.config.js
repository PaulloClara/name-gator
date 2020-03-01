module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/name-gator/" : "/",
  outputDir: "dist",
  lintOnSave: false,
  transpileDependencies: ["vuetify"]
};
