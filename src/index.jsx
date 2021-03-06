import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'purecss'
import '../node_modules/purecss/build/grids-responsive.css'

import configureStore from 'store/configureStore'
import Root from 'layouts/Root'
import { fetchMessages } from 'reducers/messages'

const store = configureStore()

// Query our API to fetch our initial messages
store.dispatch(fetchMessages())

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('newsfeed-app')
)

if (module.hot) {
  module.hot.accept('./layouts/Root', () => {
    const NextRoot = require('layouts/Root').default
    render(
      <AppContainer>
        <NextRoot store={store} />
      </AppContainer>,
    document.getElementById('newsfeed-app')
    )
  })
}
