import { combineReducers } from 'redux'

import messages from 'reducers/messages'
import loaders from 'reducers/loaders'
import oldestSeen from 'reducers/oldestSeen'

const rootReducer = combineReducers({
  messages,
  loaders,
  oldestSeen
})

export default rootReducer
