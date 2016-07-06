import {
  LOAD_STORIES_SUCCESS
} from '../constants'

export function loadStories ({stories}) {
  return {
    type: LOAD_STORIES_SUCCESS,
    payload: {
      stories
    }
  }
}
