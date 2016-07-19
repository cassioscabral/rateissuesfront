import {
  LOAD_STORIES_SUCCESS,
  ADD_STORY
} from '../constants'

export default function runtime (state = {
  stories:[],
  isfetching: false,
  completed: false,
  error: false
}, action) {
  switch (action.type) {
    case LOAD_STORIES_SUCCESS:
      return {
        stories:[...action.payload.stories],
        error: false,
        completed: true,
        isfetching: false
      }
    case ADD_STORY:
      return {
        ... this.state,
        stories:[action.payload, ...state.stories]
      }
    default:
      return state
  }
}
