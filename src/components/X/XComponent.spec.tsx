import * as React from 'react'
import { shallow, mount, render } from 'enzyme'

import { createStore } from 'redux'

import X from './XComponent'


describe('<X />', () => {

  it('renders', () => {
    expect(shallow(
      <X placeholderText='Welcome To Redux!' message='Hello World!' buttonText='Set Text' buttonClicked={() => {}}/>
    )).toMatchSnapshot()
  });

})
