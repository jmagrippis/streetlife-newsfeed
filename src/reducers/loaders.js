import { Map } from 'immutable'

// Constants
export const SET_LOADING = 'SET_LOADING'

// Action Creators
export const setLoading = (key, value) => {
  return {
    type: SET_LOADING,
    key,
    value
  }
}

// Reducer
export const defaultState = Map({
  'messages': false,
  'comments': false
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_LOADING:
      return state.get(action.key) === action.value ? state : state.set(action.key, action.value)
    default:
      return state
  }
}
