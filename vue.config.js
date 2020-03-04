module.exports = {
  publicPath:
    process.env.NODE_ENV !== "production" ||
    process.argv.includes("--local-server")
      ? "/"
      : "/name-gator/",
  outputDir: "dist",
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "NameGator",
    display: "standalone",
    themeColor: "#87c440",
    msTileColor: "#87c440",
    manifestOptions: {
      short_name: "NG",
      background_color: "#000000"
    }
  }
};
