import React from 'react'
import { shallow } from 'enzyme'
import ActionButton from '../../ActionButton'

describe('<ActionButton />', () => {
  it('Renders without crashing', () => {
    shallow(<ActionButton />)
  })
})