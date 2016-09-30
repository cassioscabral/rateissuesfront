import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueFire)

let firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyBnrMHd4NrB3ldmvtvWBp3dnRY8BJjTOpE",
    authDomain: "rateissue.firebaseapp.com",
    databaseURL: "https://rateissue.firebaseio.com",
    storageBucket: "rateissue.appspot.com",
    messagingSenderId: "442562743753"
  })
let db = firebaseApp.database()

export {db}
