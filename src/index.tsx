import * as React from 'react'
import * as ReactDOM from 'react-dom'
import appStore from './store'

import { Provider } from 'react-redux'

import Pixel from './components/pixel/PixelContainer'

// import { Pixel } from './components/pixel/Pixel'

ReactDOM.render(
    <Provider store={appStore}>
       <Pixel /> 
    </Provider>
    ,
    document.getElementById("app")
);