import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import pics from '../store/modules/store'
import recommends from '../store/modules/recommend'
import zxWenzhang from '../store/modules/zxWenzhang'
import users from '../store/modules/user'
const store = new Vuex.Store({
  modules: {
    pics,
    recommends,
    zxWenzhang,
    users
  }
})
export default store
