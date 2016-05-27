import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'

import Newsfeed from 'layouts/Newsfeed'

export default class Root extends Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <Newsfeed />
      </Provider>
    )
  }
}

Root.propTypes = { store: PropTypes.object }
