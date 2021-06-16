import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App.vue'
import axios from './axios'
import './globalFun'
import router from './router'
import store from './store'
// import global from './globalFun'
Vue.config.productionTip = false

Vue.prototype.$axios = axios
require('./mock')
Vue.use(ElementUI)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
