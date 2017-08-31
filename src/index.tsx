import * as React from 'react'
import * as ReactDOM from 'react-dom'
import appStore from './store'

import { Provider } from 'react-redux'

import X from './components/X_/X_Container'

// import { X } from './components/X/X'

ReactDOM.render(
    <Provider store={appStore}>
       <X /> 
    </Provider>
    ,
    document.getElementById("app")
);