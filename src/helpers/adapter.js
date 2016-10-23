import {FirebaseAdapter} from 'js-data-firebase'
import firebase from 'firebase'

const dataSource = 'firebase'

let config = {
  apiKey: 'AIzaSyBnrMHd4NrB3ldmvtvWBp3dnRY8BJjTOpE',
  authDomain: 'rateissue.firebaseapp.com',
  databaseURL: 'https://rateissue.firebaseio.com',
  storageBucket: 'rateissue.appspot.com',
  messagingSenderId: '442562743753'
}
firebase.initializeApp(config)

const adapter = new FirebaseAdapter({
  db: firebase.database()
})

export default adapter
export {dataSource, firebase}
