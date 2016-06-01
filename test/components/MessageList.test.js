import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Map } from 'immutable'

import MessageList from 'components/MessageList'
import Message from 'components/Message'

describe('(Component) MessageList', () => {
  it('should exist even when given an empty Map of Messages', () => {
    let messages = Map({})
    let wrapper = shallow(<MessageList messages={messages} />)
    expect(wrapper.find(Message).length).to.equal(0)
  })
})
