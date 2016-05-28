import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistState } from 'redux-devtools'

import rootReducer from 'reducers'
import DevTools from 'layouts/DevTools'

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
)

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default)
    )
  }

  return store
}
