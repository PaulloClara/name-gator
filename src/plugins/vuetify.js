import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa"
  },
  theme: {
    dark: localStorage.getItem("theme") === "dark",
    themes: {
      light: {
        primary: colors.lightBlue,
        secondary: colors.green.lighten1,
        ternary: colors.red,
        quaternary: colors.grey.lighten3
      },
      dark: {
        primary: colors.blue.darken2,
        secondary: colors.green.darken2,
        ternary: colors.red.darken1,
        quaternary: colors.grey.darken3
      }
    }
  }
});
