import * as React from 'react'
import { shallow, mount, render } from 'enzyme'

import { createStore } from 'redux'

import Y from './Y_Component'


describe('<Y />', () => {

  it('renders', () => {
    expect(shallow(
      <Y welcomeMessage={'welcome to component y'} />
    )).toMatchSnapshot()
  });

})
