import * as React from 'react'
import { shallow, mount, render } from 'enzyme'

import { createStore } from 'redux'

import Pixel from './PixelComponent'


describe('<Pixel />', () => {

  it('renders', () => {
    expect(shallow(
      <Pixel placeholderText='Welcome To Redux!' message='Hello World!' buttonText='Set Text' buttonClicked={() => {}}/>
    )).toMatchSnapshot()
  });

})
