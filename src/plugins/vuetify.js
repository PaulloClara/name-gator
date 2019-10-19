import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    dark: localStorage.theme === "dark" ? true : false,
    themes: {
      light: {
        primary: colors.lightBlue,
        secondary: colors.green.lighten1,
        ternary: colors.red
      },
      dark: {
        primary: colors.blue.darken2,
        secondary: colors.green.darken2,
        ternary: colors.red.darken1
      }
    }
  }
});
