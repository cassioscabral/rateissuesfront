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
    currentUser: {}
  },

  mutations:{
    [ADD_CURRENT_USER] (state, currentUser) {
      state.currentUser = currentUser
    },
    [REMOVE_CURRENT_USER] (state) {
      state.currentUser = {}
    }
  },

  getters: {
    currentUser: (state) => state.currentUser
  },

  actions: {
    authLoad ({commit}) {
      firebase.auth().onAuthStateChanged((user) => {
        let currentUser = user || {}
        commit(ADD_CURRENT_USER, currentUser)
      })
    },
    login () {
      let provider = new firebase.auth.GithubAuthProvider()

      firebase.auth()
      .signInWithPopup(provider)
      .catch(_firebaseErrorHandler)
    },
    logout () {
      firebase.auth()
      .signOut()
      .catch(_firebaseErrorHandler)
    }
  }

}
