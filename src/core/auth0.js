import env from '../env'
import Auth0Lock from 'auth0-lock'

const lock = new Auth0Lock(env.auth0.CLIENT_ID, env.auth0.CLIENT_DOMAIN)

export default {
  lock: {
    show: () => {
      // select a supported language
      // lock.show({
      //   dict: 'es'
      // });
      lock.show({
      }, (err, profile, idToken) => {
        if (err) {
          // do nothing
          // auth0-lock will deal with it
        }

        if (profile) {
          console.log(profile)
        }

        if (idToken) {
          // do nothing
        }
      })
    }
  }
}
