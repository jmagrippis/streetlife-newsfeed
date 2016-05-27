import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Message from 'components/Message'

describe('(Component) Message', () => {
  it('should exist', () => {
    let wrapper = shallow(<Message />)
    expect(wrapper.find('article').length).to.equal(1)
  })
})
