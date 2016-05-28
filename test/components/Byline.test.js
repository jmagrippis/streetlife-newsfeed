import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Byline from 'components/Byline'

describe('(Component) Byline', () => {
  it('should exist', () => {
    let data = {
      name: 'Timmy Tester',
      date: new Date(1464438560 * 1000)
    }
    let wrapper = shallow(<Byline {...data} />)
    expect(wrapper.type()).to.equal('div')
  })
  it('displays the author\'s name in bold', () => {
    let data = {
      name: 'Timmy Tester',
      date: new Date(1464438560 * 1000)
    }
    let wrapper = shallow(<Byline {...data} />)
    expect(wrapper.find('strong').text()).to.equal('Timmy Tester')
  })
  it('displays the relative time ago', () => {
    let data = {
      name: 'Timmy Tester',
      date: new Date(1464438560 * 1000),
      now: new Date(1464438680 * 1000)
    }
    let wrapper = shallow(<Byline {...data} />)
    expect(wrapper.find('span a').text()).to.equal('2 minutes ago')
  })
  it('displays the location only when provided', () => {
    let data = {
      name: 'Timmy Tester',
      date: new Date(1464438560 * 1000),
      now: new Date(1464438561 * 1000)
    }
    let wrapper = shallow(<Byline {...data} />)
    expect(wrapper.find('span a').text()).to.equal('a few seconds ago')

    data = {
      name: 'Timmy Tester',
      date: new Date(1464438560 * 1000),
      now: new Date(1464438561 * 1000),
      location: 'Manchester City Center'
    }
    wrapper = shallow(<Byline {...data} />)
    expect(wrapper.find('span').text()).to.equal('a few seconds ago in Manchester City Center')
  })
})
