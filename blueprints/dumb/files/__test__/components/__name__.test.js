import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import <%= pascalEntityName %> from 'components/<%= pascalEntityName %>'

describe('(Component) <%= pascalEntityName %>', () => {
  it('should exist', () => {
    let wrapper = shallow(<<%= pascalEntityName %> />)
    expect(wrapper).contains(<div></div>).to.equal(true)
  })
})
