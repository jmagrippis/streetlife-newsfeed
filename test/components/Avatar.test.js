import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Avatar from 'components/Avatar'

describe('(Component) Avatar', () => {
  it('should exist', () => {
    let imgSrc = 'test.png'
    let wrapper = shallow(<Avatar imgSrc={imgSrc} />)
    expect(wrapper.find('img').length).to.equal(1)
  })
  it('should contain a responsive image', () => {
    let imgSrc = 'test.png'
    let wrapper = shallow(<Avatar imgSrc={imgSrc} />)
    expect(wrapper.type()).to.equal('img')
    expect(wrapper.hasClass('pure-img')).to.equal(true)
    expect(wrapper.prop('src')).to.equal(imgSrc)
  })
  it('has an anchor and href when given a link', () => {
    let imgSrc = 'test.png'
    let link = 'profile/1'
    let wrapper = shallow(<Avatar imgSrc={imgSrc} link={link} />)
    expect(wrapper.type()).to.equal('a')
    expect(wrapper.prop('href')).to.equal(link)
  })
  it('has an alt text that is customized when a name is given', () => {
    let imgSrc = 'test.png'
    let wrapper = shallow(<Avatar imgSrc={imgSrc} />)
    expect(wrapper.prop('alt')).to.equal('User avatar')

    let name = 'Timmy Tester'
    wrapper = shallow(<Avatar imgSrc={imgSrc} name={name} />)
    expect(wrapper.prop('alt')).to.equal('User avatar of Timmy Tester')

    name = 'Elena Example'
    wrapper = shallow(<Avatar imgSrc={imgSrc} name={name} />)
    expect(wrapper.prop('alt')).to.equal('User avatar of Elena Example')
  })
})
