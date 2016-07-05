import {
  USER_LOGIN,
  USER_LOGOUT
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

export function userLogout () {
  return {
    type: USER_LOGOUT,
    payload: {}
  }
}
