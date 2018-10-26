import React from 'react'
import { shallow } from 'enzyme'
import Error from '../Error'

describe('<Error />', () => {
  it('Renders without crashing', () => {
    shallow(<Error />)
  })
})