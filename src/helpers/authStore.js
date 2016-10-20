import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  user: null,
  githubToken: null
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
  user: (state) => {return state.user},
  githubToken: (state) => {return state.githubToken}
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions: {}
})
