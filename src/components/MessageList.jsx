import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { StyleSheet, css } from 'aphrodite'

import Message from 'components/Message'

const styles = StyleSheet.create({
  fc: {
    display: 'flex',
    flexDirection: 'column'
  }
})

class MessageList extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    const { className, messages } = this.props
    return (
      <div className={className + ' ' + css(styles.fc)}>
        {messages.valueSeq().map(message => (
          <Message
            key={message.id}
            id={message.id}
            subject={message.subject}
            author={message.author}
            postedAt={new Date(message.posted_at)}
            body={message.body}
          />
        ))}
      </div>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default MessageList
