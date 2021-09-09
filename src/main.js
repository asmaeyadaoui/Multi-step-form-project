import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from 'axios'


import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify'
import VueDndZone from 'vue-dnd-zone'
import 'vue-dnd-zone/vue-dnd-zone.css'
import VueSession from 'vue-session'




// Global registration

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(VueDndZone)
Vue.use(VueSession)

Vue.prototype.$http=axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
