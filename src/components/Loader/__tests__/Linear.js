import React from 'react'
import { shallow } from 'enzyme'
import Linear from '../Linear'

describe('<Linear />', () => {
  it('Renders without crashing', () => {
    shallow(<Linear />)
  })
})