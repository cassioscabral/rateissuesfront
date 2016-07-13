import {
  LOAD_STORIES_SUCCESS,
  ADD_STORY
} from '../constants'

import fetch from '../core/fetch'

export function loadStories () {
  return (dispatch) => {
    fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: '{stories{id,body,publishedDate}}'
      }),
      credentials: 'include'
    })
    .then(res => res.json())
    .then(
      data => {
        dispatch(
          {
            type: LOAD_STORIES_SUCCESS,
            payload: {
              stories: data.data.stories
            }
          }
        )
      }
    )
  }
}

export function addStory (body) {
  return (dispatch) => {
    fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `mutation{addStory(story:{body:"${body}"}){id,body,publishedDate}}`
      }),
      credentials: 'include'
    })
    .then(res => res.json())
    .then(
      data => {
        console.log(data)
        dispatch(
          {
            type: ADD_STORY,
            payload: {...data.data.addStory}
          }
        )
      }
    )
  }
}
