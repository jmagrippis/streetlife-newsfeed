import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'

import Newsfeed from 'layouts/Newsfeed'
import DevTools from 'layouts/DevTools'

export default class Root extends Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <Newsfeed />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = { store: PropTypes.object.isRequired }
