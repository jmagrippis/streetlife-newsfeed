import { OrderedMap } from 'immutable'
import fetch from 'isomorphic-fetch'

import Message from 'records/Message'
import { setLoading } from 'reducers/loaders'

// Constants
export const ADD_MESSAGES = 'ADD_MESSAGES'

// Action Creators
export const fetchMessages = (cutoffDate = undefined) => {
  return dispatch => {
    dispatch(setLoading('messages', true))
    // TODO: This should actually hit our API
    let endpoint = 'https://s3-eu-west-1.amazonaws.com/streetlife-coding-challenge/newsfeed.json'
    // NOTE: We are imagining our endpoint optionally takes a minDate as a query paramater.
    endpoint += cutoffDate ? '?minDate=' + cutoffDate : ''
    return fetch(endpoint)
      .then(response => {
        dispatch(setLoading('messages', false))
        if (!response.ok) {
          // TODO: Something more substantial with bad response?
          console.log(response.statusText)
        }
        return response.json()
      })
      .then(data => {
        return dispatch(addMessages(data.messages))
      })
  }
}

export const addMessages = messages => {
  return {
    type: ADD_MESSAGES,
    messages
  }
}

// Reducer
export const defaultState = new OrderedMap()

export default function (state = defaultState, action) {
  switch (action.type) {
    case ADD_MESSAGES:
      return action.messages.reduce((r, message) => {
        if (r.has(message.id)) return r
        return r.set(message.id, new Message(message))
      }, state).sort((a, b) => a.posted_at < b.posted_at ? 1 : -1)
    default:
      return state
  }
}
