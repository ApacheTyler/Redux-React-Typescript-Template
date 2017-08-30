import * as React from 'react'
import { shallow, mount, render } from 'enzyme'

import { createStore } from 'redux'

import mockStore from '../../fixtures/mock-store'

import { Provider } from 'react-redux'
import Pixel from './PixelContainer'


describe('<Pixel />', () => {

  it('renders', () => {
    expect(shallow(
        <Provider store={mockStore} >
            <Pixel />
        </Provider>
    )).toMatchSnapshot()
  });

})
