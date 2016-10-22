import {firebase} from '../helpers/adapter.js'
import {ADD_USER, ADD_GITHUB_TOKEN, REMOVE_USER, REMOVE_GITHUB_TOKEN} from './mutations.js'

const GITHUB_TOKEN_KEY = 'UserGithubToken'

let _firebaseErrorHandler = (error) => {
  let code = error.code
  let message = JSON.parse(error.message).error.message

  let invalidGithubTokenCheck = 'Unsuccessful check authorization response from Github: {"message":"Not Found","documentation_url":"https://developer.github.com/v3"}'
  let networkCheck = 'Network error, please try again.'

  switch (code) {
    case 'auth/network-request-failed': // TIMEOUT
    case 'auth/internal-error':
      if (message === invalidGithubTokenCheck){
        window.localStorage.removeItem(GITHUB_TOKEN_KEY)
      }
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
    user: {},
    githubToken: ''
  },

  mutations:{
    [ADD_USER] (state, user) {
      state.user = user
    },
    [ADD_GITHUB_TOKEN] (state, token) {
      state.githubToken = token
    },
    [REMOVE_USER] (state) {
      state.user = {}
    },
    [REMOVE_GITHUB_TOKEN] (state) {
      state.githubToken = ''
    }
  },

  getters: {
    user: (state) => state.user,
    githubToken: (state) => state.githubToken
  },

  actions: {
    load ({commit}) {
      let user = firebase.auth().currentUser
      let token = window.localStorage.getItem(GITHUB_TOKEN_KEY)
      if (!user && token) {
        let credential = firebase.auth.GithubAuthProvider.credential(token)
        firebase.auth().signInWithCredential(credential)
        .then((result) => {
          commit(ADD_USER, result)
          commit(ADD_GITHUB_TOKEN, token)
        })
        .catch(_firebaseErrorHandler)
      }
    },
    login ({commit}) {
      let provider = new firebase.auth.GithubAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then((result) => {
        commit(ADD_USER, result.user)
        commit(ADD_GITHUB_TOKEN, result.credential.accessToken)

        window.localStorage.setItem(GITHUB_TOKEN_KEY, result.credential.accessToken)
      }).catch(_firebaseErrorHandler)
    },
    logout ({commit}) {
      firebase.auth().signOut().catch(_firebaseErrorHandler)

      window.localStorage.removeItem(GITHUB_TOKEN_KEY)

      commit(REMOVE_USER)
      commit(REMOVE_GITHUB_TOKEN)
    }
  }

}
