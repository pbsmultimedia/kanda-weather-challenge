import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCloudRain,
  faThermometerHalf,
  faTint,
  faWind
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCloudRain, faThermometerHalf, faTint, faWind);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App)
}).$mount("#app");
