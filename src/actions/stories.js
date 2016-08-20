import {
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES_ERROR,
  LOAD_STORIES,
  ADD_STORY,
  ADD_LIKE,
  REMOVE_LIKE
} from '../constants'

import {toastr} from 'react-redux-toastr'
import fetch from '../core/fetch'

export function loadStories () {
  return (dispatch) => {
    dispatch({
      type: LOAD_STORIES,
      payload: {
      }
    })
    fetch('/graphql', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: '{stories{id,body,publishedDate,user{id,email,displayName,picture},rankings{id, userId, creationDate}}}'
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
    ).catch(
      (e) => {
        dispatch(
          {
            type: LOAD_STORIES_ERROR,
            payload: {
              error: e
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
      method: 'POST',
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
        if (!data.errors){
          dispatch(
            {
              type: ADD_STORY,
              payload: {story:{...data.data.addStory}}
            }
          )
        }else{
          toastr.error('Add story error:', 'User not found!')
        }
      }
    )
  }
}

export function removeLike (id) {
  return (dispatch) => {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `mutation{removeRanking(story:{id:"${id}"}){id,body,publishedDate,user{id,email,displayName,picture},rankings{id, userId, creationDate}}}`
      }),
      credentials: 'include'
    })
    .then(res => res.json())
    .then(
      data => {
        if (!data.errors){
          dispatch(
            {
              type: REMOVE_LIKE,
              payload: {story:{...data.data.removeRanking}}
            }
          )
        }else{
          toastr.error('Add like error:', 'User not found!')
        }
      }
    )
  }
}


export function addLike (id) {
  return (dispatch) => {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `mutation{addRanking(story:{id:"${id}"}){id,body,publishedDate,user{id,email,displayName,picture},rankings{id, userId, creationDate}}}`
      }),
      credentials: 'include'
    })
    .then(res => res.json())
    .then(
      data => {
        if (!data.errors){
          dispatch(
            {
              type: ADD_LIKE,
              payload: {story:{...data.data.addRanking}}
            }
          )
        }else{
          toastr.error('Add like error:', 'User not found!')
        }
      }
    )
  }
}
