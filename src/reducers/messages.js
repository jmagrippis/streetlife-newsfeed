import { OrderedMap } from 'immutable'

import Message from 'records/Message'

// Constants
export const ADD_MESSAGES = 'ADD_MESSAGES'

// Action Creators
export const addMessages = (messages) => {
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
