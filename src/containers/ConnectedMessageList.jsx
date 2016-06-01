import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import MessageList from 'components/MessageList'

class ConnectedMessageList extends Component {
  render () {
    let { messages } = this.props
    return <MessageList messages={messages} />
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

ConnectedMessageList.propTypes = {
  messages: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps
)(ConnectedMessageList)
