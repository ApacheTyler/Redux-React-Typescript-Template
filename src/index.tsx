import * as React from 'react'
import * as ReactDOM from 'react-dom'
import appStore from './store'

import { Provider } from 'react-redux'
import { HashRouter, Route, Redirect } from 'react-router-dom' 

import X from './components/X_/X_Container'
import Y from './components/Y_/Y_Component'

ReactDOM.render(
    <Provider store={appStore}>
        <HashRouter>
            <div>
            <Route exact path='/' component={X} /> {/** Use component with route **/}
            <Route exact path='/y' render={(props) => { /** Use render function with route **/
                return <Y welcomeMessage='welcome to component y' />
            }} />
            <Route path='/y/:optional?' component={Y} /> 
            </div>
        </HashRouter>
    </Provider>
    ,
    document.getElementById("app")
);