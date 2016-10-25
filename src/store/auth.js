import {firebase} from '../helpers/adapter.js'
import {ADD_CURRENT_USER, REMOVE_CURRENT_USER} from './mutations.js'

let _firebaseErrorHandler = (error) => {
  let code = error.code
  let message = JSON.parse(error.message).error.message

  let networkCheck = 'Network error, please try again.'

  switch (code) {
    case 'auth/network-request-failed': // TIMEOUT
    case 'auth/internal-error':
      if (message === networkCheck){
        // TODO: add retry function
      }
      break
    case 'auth/popup-closed-by-user':
      break
    default:
  }
}

export default {
  state: {
    currentUser: {},
    accessToken: ''
  },

  mutations:{
    [ADD_CURRENT_USER] (state, payload) {
      state.currentUser = payload.currentUser
      state.accessToken = payload.accessToken
    },
    [REMOVE_CURRENT_USER] (state) {
      state.currentUser = {}
      state.accessToken = ''
    }
  },

  getters: {
    currentUser: (state) => state.currentUser,
    accessToken: (state) => state.accessToken
  },

  actions: {
    authLoad ({commit}) {
      firebase.auth().onAuthStateChanged((user) => {
        let currentUser = user || {}
        let accessToken = window.localStorage.getItem('GITHUB_TOKEN_KEY')
        commit(ADD_CURRENT_USER, {currentUser, accessToken})
      })
    },
    login () {
      let provider = new firebase.auth.GithubAuthProvider()

      firebase.auth()
      .signInWithPopup(provider)
      .catch(_firebaseErrorHandler)
      .then(data => {
        window.localStorage.setItem('GITHUB_TOKEN_KEY', data.credential.accessToken)
      })
    },
    logout () {
      firebase.auth()
      .signOut()
      .catch(_firebaseErrorHandler)
      .then(()=>{
        window.localStorage.removeItem('GITHUB_TOKEN_KEY')
      })
    }
  }

}
