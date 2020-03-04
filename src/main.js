import Vue from "vue";
import AsyncComputed from "vue-async-computed";
import "@fortawesome/fontawesome-free/css/all.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.use(AsyncComputed);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
