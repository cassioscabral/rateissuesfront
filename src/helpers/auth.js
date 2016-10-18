import {firebase} from './adapter.js'

const GITHUB_TOKEN_KEY = 'UserGithubToken'

let user, token

function load (callback) {
  token = _getStoredToken()
  if (token) { _signInWithCredential(callback) }
}
function login (callback) {
  _signInWithPopup(callback)
}
function logout () {
  _signOut()
  _removeToken()
}
function getUser () {
  return user
}
function getGithubAPI () {
  return token
}


function _signInWithCredential (callback) {
  let credential = firebase.auth.GithubAuthProvider.credential(token)
  firebase.auth().signInWithCredential(credential).then(function (result) {
    user = result
    callback({credential, user})
  }).catch(_firebaseErrorHandler)
}
function _signInWithPopup (callback) {
  let provider = new firebase.auth.GithubAuthProvider()
  firebase.auth().signInWithPopup(provider).then(function (result) {
    token = result.credential.accessToken
    // SAVING BOTH FOR TEST
    _storeLocalToken(token)
    user = result.user
    // ...
    callback(result)
  }).catch(_firebaseErrorHandler)
}
function _signOut () {
  firebase.auth().signOut().catch(_firebaseErrorHandler)
}
function _firebaseErrorHandler (error) {
    console.log(error)
    // // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
    // // ...
}
function _getStoredToken () {
  return window.sessionStorage.getItem(GITHUB_TOKEN_KEY) || window.localStorage.getItem(GITHUB_TOKEN_KEY)
}
function _storeLocalToken () {
  window.localStorage.setItem(GITHUB_TOKEN_KEY, token)
}
function _removeToken () {
  window.localStorage.removeItem(GITHUB_TOKEN_KEY)
}

export default {
  load,
  login,
  logout,
  getUser,
  getGithubAPI
}
