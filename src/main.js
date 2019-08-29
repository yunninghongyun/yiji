import Vue from 'vue'
import App from './App.vue'
import './rem'
import router from './router'
import './static/iconfont.css'
import store from './store/index'
import { PUBLICURL } from './constants'
Vue.prototype.$publicUrl = PUBLICURL
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
