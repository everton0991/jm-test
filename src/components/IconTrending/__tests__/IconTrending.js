import React from 'react'
import { shallow } from 'enzyme'
import IconTrending from '../../IconTrending'

describe('<IconTrending />', () => {
  it('Renders without crashing', () => {
    shallow(<IconTrending />)
  })
})