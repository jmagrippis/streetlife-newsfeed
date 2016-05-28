import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Avatar from 'components/Avatar'
class Message extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return (
      <article className={this.props.className}>
        <h2><a href={'#'}>Title!</a></h2>
        <div className={'pure-g'}>
          <aside className={'pure-u-1-6'}><Avatar imgSrc={'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg'} /></aside>
          <div className={'pure-u-5-6'}>
            <div>byline</div>
            <div>Topics!</div>
            <hr />
            <div>Comments!</div>
          </div>
        </div>
      </article>
    )
  }
}

Message.propTypes = {
  className: PropTypes.string
}

export default Message
