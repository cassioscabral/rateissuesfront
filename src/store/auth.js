import Vue from 'vue'
import Vuex from 'vuex'
import {firebase} from '../helpers/adapter.js'
Vue.use(Vuex)


const GITHUB_TOKEN_KEY = 'UserGithubToken'

let _firebaseErrorHandler = (error) => {
  switch (error.code) {
    case 'auth/internal-error': // INVALID GITHUB TOKEN
      window.localStorage.removeItem(GITHUB_TOKEN_KEY)
      break
    case 'auth/popup-closed-by-user':
      break
    default:
  }
}


export default new Vuex.Store({
  state: {
    user: null,
    githubToken: null
  },

  mutations:{
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
  },

  getters: {
    user: (state) => {return state.user},
    githubToken: (state) => {return state.githubToken}
  },

  actions: {
    load: (store) => {
      let token = window.localStorage.getItem(GITHUB_TOKEN_KEY)
      if (token) {
        let credential = firebase.auth.GithubAuthProvider.credential(token)
        firebase.auth().signInWithCredential(credential)
        .then((result) => {
          store.commit('ADD_USER', result)
          store.commit('ADD_GITHUB_TOKEN', token)
        })
        .catch(_firebaseErrorHandler)
      }
    },
    login: (store) => {
      let provider = new firebase.auth.GithubAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then((result) => {
        store.commit('ADD_USER', result.user)
        store.commit('ADD_GITHUB_TOKEN', result.credential.accessToken)

        window.localStorage.setItem(GITHUB_TOKEN_KEY, result.credential.accessToken)
      }).catch(_firebaseErrorHandler)
    },
    logout: (store) => {
      firebase.auth().signOut().catch(_firebaseErrorHandler)

      window.localStorage.removeItem(GITHUB_TOKEN_KEY)

      store.commit('REMOVE_USER')
      store.commit('REMOVE_GITHUB_TOKEN')
    }
  }

})
