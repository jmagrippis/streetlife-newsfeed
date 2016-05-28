import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { StyleSheet, css } from 'aphrodite'

import Avatar from 'components/Avatar'
import Byline from 'components/Byline'

const styles = StyleSheet.create({
  jc_sa: {
    justifyContent: 'space-between'
  },
  ai_c: {
    alignItems: 'center'
  },
  link: {
    color: '#607D8B',
    textDecoration: 'none',
    transition: 'color .125s ease-in',
    ':hover': {
      color: '#00BCD4'
    }
  }
})

class Message extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    let { className, id, subject, author, postedAt, body } = this.props
    let messageLink = 'conversation/' + id
    let profileLink = 'p/' + author.id
    return (
      <article className={className}>
        <div className={'pure-g ' + css(styles.jc_sa, styles.ai_c)}>
          <h2 className={'pure-u-3-4 pure-u-xl-5-6'}><a className={css(styles.link)} href={messageLink}>{subject}</a></h2>
          <button className={'pure-u-1-8 pure-u-xl-1-12'}>
            Action!
          </button>
        </div>
        <div className={'pure-g ' + css(styles.jc_sa)}>
          <aside className={'pure-u-1-12 pure-u-xl-1-24'}>
            <Avatar imgSrc={author.avatar} link={profileLink} />
          </aside>
          <div className={'pure-u-21-24 pure-u-xl-11-12'}>
            <Byline
              messageLink={messageLink}
              profileLink={profileLink}
              name={author.display_name}
              date={postedAt}
              location={author.nearest_area.name} // NOTE: Messages should probably have their own Neighbourhood? What happens when the author moves?
            />
            <div>{body}</div>
            <div>
              Topics!
            </div>
            <hr />
            <div>
              Comments!
            </div>
          </div>
        </div>
      </article>
    )
  }
}

Message.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  body: PropTypes.string,
  postedAt: PropTypes.object.isRequired
}

export default Message
