import {
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES_ERROR,
  ADD_STORY,
  ADD_LIKE,
  REMOVE_LIKE
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
          rankings{
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

export function removeLike (id) {
  return (dispatch) => {
    graphql.query(
      `mutation{
        removeRanking(story:{id:"${id}"}){
          ${getStory()}
        }
      }`,
      (data) => {
        if (!data.errors){
          dispatch(
            {
              type: REMOVE_LIKE,
              payload: {story:{...data.data.removeRanking}}
            }
          )
        }else{
          toastr.error('Remove like error:', 'User not found!')
        }
      }
    )
  }
}

export function addLike (id) {
  return (dispatch) => {
    graphql.query(
      `mutation{
        addRanking(story:{id:"${id}"}){
          ${getStory()}
        }
      }`,
      (data) => {
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
