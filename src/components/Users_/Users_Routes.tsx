
import * as React from 'react'
import * as Redux from 'redux'
import { Switch, Route, RouteComponentProps } from 'react-router-dom' 
import UsersListContainer from './Users_Container'

export default class UserRouter extends React.Component<RouteComponentProps<any>> {
    
    render() {
    return <div>
        <UsersListContainer />
        <Switch>
            <Route exact path={this.props.match.path + '/x'} component={UsersListContainer} />
        </Switch>
    </div>
    }

}