import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Auth from './auth.js'
import Github from './github.js'
import Project from './project.js'

export default new Vuex.Store({
  modules: {
    auth: Auth,
    github: Github,
    project: Project
  }
})
