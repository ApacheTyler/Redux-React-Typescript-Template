import * as React from 'react'
import * as ReactDOM from 'react-dom'
import appStore from './store'

import { Provider } from 'react-redux'
import { HashRouter, Route, Redirect, Link } from 'react-router-dom' 

import X from './components/X_/X_Container'
import Y from './components/Y_/Y_Component'
import UserRouter from './components/Users_/Users_Routes'

ReactDOM.render(
    <Provider store={appStore}>
        <HashRouter>
            <div>
            <Link to="/users"><button>Go to users</button></Link>
            {/** Use component with route **/}
            <Route exact path='/' component={X} /> 
            {/** Use render function with route **/}
            <Route exact path='/y' render={(props) => { 
                return <Y welcomeMessage='welcome to component y' />
            }} />
            {/** Route with parameter **/}
            <Route path='/y/:optional?' component={Y} />
            {/** Dyanmic Routes **/}
            <Route path='/users' component={UserRouter} />
            </div>
        </HashRouter>
    </Provider>
    ,
    document.getElementById("app")
);