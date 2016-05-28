import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { StyleSheet, css } from 'aphrodite'
import moment from 'moment'

const styles = StyleSheet.create({
  small: {
    fontSize: '.75rem'
  },
  tdn: {
    textDecoration: 'none'
  },
  black: {
    color: '#212121'
  },
  grey: {
    color: '#727272'
  }
})

class Byline extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    let { className, profileLink, messageLink, name, date, now, location } = this.props
    return (
      <div className={className}>
        <a className={css(styles.tdn, styles.black)} href={profileLink}><strong>{name}</strong></a> <span className={css(styles.small, styles.grey)}><a className={css(styles.tdn, styles.grey)} href={messageLink}>{moment(date).from(now)}</a> {location ? 'in ' + location : ''}</span>
      </div>
    )
  }
}

Byline.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  now: PropTypes.object,
  location: PropTypes.string,
  profileLink: PropTypes.string,
  messageLink: PropTypes.string
}

Byline.defaultProps = {
  now: new Date()
}

export default Byline
