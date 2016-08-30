import {
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES_ERROR,
  ADD_STORY,
  ADD_UP_VOTE,
  REMOVE_UP_VOTE
} from '../constants'

import {toastr} from 'react-redux-toastr'
import graphql from './graphql'

function getStory () {
  return `id,
          body,
          publishedDate,
          user{
            id,
            email,
            displayName,
            picture
          },
          upvotes{
            id,
            userId,
            creationDate
          }`
}

export function loadStories () {
  return (dispatch) => {
    graphql.query(
      `query{
        stories{
          ${getStory()}
        }
      }`,

      (data) => {
        dispatch({
          type: LOAD_STORIES_SUCCESS,
          payload: {stories: data.data.stories}
        })
      },
      (e) => {
        dispatch({
          type: LOAD_STORIES_ERROR,
          payload: {error: e}
        })
      }
    )
  }
}

export function addStory (body) {
  return (dispatch) => {
    graphql.query(
      `mutation{
        addStory(story:{body:"${body}"}){
          ${getStory()}
        }
      }`,
      (data) => {
        if (!data.errors){
          dispatch({type: ADD_STORY,payload: {story:{...data.data.addStory}}})
        }else{
          toastr.error('Add story error:', 'User not found!')
        }
      }
    )
  }
}

export function removeUpVote (id) {
  return (dispatch) => {
    graphql.query(
      `mutation{
        removeUpVote(story:{id:"${id}"}){
          ${getStory()}
        }
      }`,
      (data) => {
        if (!data.errors){
          dispatch(
            {
              type: REMOVE_UP_VOTE,
              payload: {story:{...data.data.removeUpVote}}
            }
          )
        }else{
          toastr.error('Remove like error:', 'User not found!')
        }
      }
    )
  }
}

export function addUpVote (id) {
  return (dispatch) => {
    graphql.query(
      `mutation{
        addUpVote(story:{id:"${id}"}){
          ${getStory()}
        }
      }`,
      (data) => {
        if (!data.errors){
          dispatch(
            {
              type: ADD_UP_VOTE,
              payload: {story:{...data.data.addUpVote}}
            }
          )
        }else{
          toastr.error('Add like error:', 'User not found!')
        }
      }
    )
  }
}
