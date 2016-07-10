import {combineReducers} from 'redux'
import runtime from './runtime'
import intl from './intl'
import user from './user'
import stories from './stories'

export default combineReducers({
  runtime,
  intl,
  user,
  stories
})
