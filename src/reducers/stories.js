import {
  LOAD_STORIES_SUCCESS,
  ADD_STORY
} from '../constants'

export default function runtime (state = [], action) {
  switch (action.type) {
    case LOAD_STORIES_SUCCESS:
      return [...action.payload.stories]
    case ADD_STORY:
      return [action.payload, ...state]
    default:
      return state
  }
}
