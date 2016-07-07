import {
  LOAD_STORIES_SUCCESS,
  ADD_STORY
} from '../constants'

export function loadStories ({stories}) {
  return {
    type: LOAD_STORIES_SUCCESS,
    payload: {
      stories
    }
  }
}

export function addStory (body) {
  return {
    type: ADD_STORY,
    payload: {
      id:'',
      body,
      publishedDate: new Date()
    }
  }
}
