import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Message extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return <article className={this.props.className}>Let's pretend this is our message component!</article>
  }
}

Message.propTypes = {
  className: PropTypes.string
}

export default Message
