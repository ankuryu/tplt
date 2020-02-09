import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import { Server } from "miragejs"

new Server({
  routes() {
    this.namespace = "api"

    this.get("/bills", () => {
      return {
        bills: [

        ],
      }
    })
  },
})
 
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
