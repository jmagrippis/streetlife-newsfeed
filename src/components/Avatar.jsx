import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  br: {
    borderRadius: '.5rem'
  }
})

const renderImg = ({ imgSrc, name }) => (
  <img
    className={'pure-img ' + css(styles.br)}
    src={imgSrc}
    alt={name ? 'User avatar of ' + name : 'User avatar'}></img>
)

const renderWithAnchor = ({ className, link, imgSrc, name }) => <a className={className} href={link}>{renderImg({ imgSrc, name })}</a>

class Avatar extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return this.props.link ? renderWithAnchor(this.props) : renderImg(this.props)
  }
}

Avatar.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  link: PropTypes.string,
  name: PropTypes.string
}

export default Avatar
