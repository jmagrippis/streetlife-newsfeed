import React, { Component } from 'react'

import ConnectedMessageList from 'containers/ConnectedMessageList'

class Newsfeed extends Component {
  render () {
    return (
      <div>
        <ConnectedMessageList />
      </div>
    )
  }
}

export default Newsfeed
