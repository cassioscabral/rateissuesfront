import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  user: {},
  githubToken: ''
}

const mutations = {
  ADD_USER: (state, user) => {
    state.user = user
  },
  ADD_GITHUB_TOKEN: (state, token) => {
    state.githubToken = token
  },
  REMOVE_USER: (state) => {
    state.user = null
  },
  REMOVE_GITHUB_TOKEN: (state) => {
    state.githubToken = null
  }
}

const getters = {
  user: (state) => {state.user},
  githubToken: (state) => {state.githubToken}
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions: {}
})
