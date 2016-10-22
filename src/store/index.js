import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Auth from './auth.js'

export default new Vuex.Store({
  modules: {
    auth: Auth
  }
})
