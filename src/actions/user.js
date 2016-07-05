import {
  USER_LOGIN
} from '../constants'

export function userLogin ({id, email, displayName, picture}) {
  return {
    type: USER_LOGIN,
    payload: {
      id,
      email,
      displayName,
      picture
    }
  }
}
