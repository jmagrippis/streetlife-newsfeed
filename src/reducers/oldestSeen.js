// Constants
export const SET_OLDEST_SEEN = 'SET_OLDEST_SEEN'

// Action Creators
export const setOldestSeen = (date) => {
  return {
    type: SET_OLDEST_SEEN,
    date
  }
}

// Reducer
export const defaultState = new Date()

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_OLDEST_SEEN:
      return action.date
    default:
      return state
  }
}
