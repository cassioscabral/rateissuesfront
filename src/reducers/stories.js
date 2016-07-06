import {
  LOAD_STORIES_SUCCESS
} from '../constants'

export default function runtime (state = [], action) {
  switch (action.type) {
    case LOAD_STORIES_SUCCESS:
      return [...action.payload.stories]
    default:
      return state
  }
}
