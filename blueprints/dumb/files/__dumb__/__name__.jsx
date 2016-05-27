import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class <%= pascalEntityName %> extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return <div className={this.props.className}>foo</div>
  }
}

<%= pascalEntityName %>.propTypes = {
  name: PropTypes.string.isRequired
}

export default <%= pascalEntityName %>
