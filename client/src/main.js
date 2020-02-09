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
        { id:1,pname: "Party 1", bno: "00001", bdt: "2020/01/01", bamt: 1001 },
        { id:2,pname: "Party 2", bno: "00002", bdt: "2020/01/01", bamt: 1001 },
        { id:3,pname: "Party 3", bno: "00003", bdt: "2020/01/01", bamt: 1001 },
        { id:4,pname: "Party 4", bno: "00004", bdt: "2020/01/01", bamt: 1001 }
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
