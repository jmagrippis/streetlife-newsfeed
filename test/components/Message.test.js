import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Message from 'components/Message'

describe('(Component) Message', () => {
  it('should exist', () => {
    let message = {
      id: '1ab',
      subject: 'Hello world!',
      author: {
        id: 100,
        display_name:
        'Timmy Tester',
        nearest_area: { name: 'Neverwinter' },
        avatar: 'profile.png'
      },
      postedAt: new Date(1464438560),
      body: 'We are testing the Message component.'
    }
    let wrapper = shallow(<Message {...message} />)
    expect(wrapper.find('article').length).to.equal(1)
  })
})
