import {
  USER_LOGIN
} from '../constants'

export default function runtime (state = {}, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {...action.payload}
    default:
      return state
  }
}
