import {combineReducers} from 'redux'
import runtime from './runtime'
import intl from './intl'
import user from './user'

export default combineReducers({
  runtime,
  intl,
  user
})
