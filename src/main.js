import Vue from "vue";
import AsyncComputed from "vue-async-computed";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import "font-awesome/css/font-awesome.css";

Vue.use(AsyncComputed);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
