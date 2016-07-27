import {
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES_ERROR,
  LOAD_STORIES,
  ADD_STORY
} from '../constants'

export default function runtime (state = {
  stories:[],
  isfetching: false,
  completed: false,
  error: false
}, action) {
  switch (action.type) {
    case LOAD_STORIES:
      return{
        ... state,
        isfetching: true
      }
    case LOAD_STORIES_SUCCESS:
      return {
        stories:[...action.payload.stories],
        error: false,
        completed: true,
        isfetching: false
      }
    case LOAD_STORIES_ERROR:
      return{
        ... state,
        isfetching: false,
        error: action.payload.error
      }
    case ADD_STORY:
      return {
        ... state,
        stories:[action.payload.story, ...state.stories]
      }
    default:
      return state
  }
}
