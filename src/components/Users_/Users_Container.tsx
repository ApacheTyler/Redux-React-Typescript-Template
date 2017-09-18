import * as React from "react";
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { appReducers }  from '../../store'
import { creator, ActionTypes } from './Users_Duck'
import { getUsers } from '../../lib/users-api'

import UsersListComponent from './Users_ListComponent'

interface ConnectedDispatch {
    fetchUsers: (promise: Promise<any>) => void
}

interface ConnectedState {
    users: any[]
    isFetching: boolean
    isErrored: boolean
    hasFetched: boolean
}

const mapStateToProps = (state: appReducers): ConnectedState => {
    return {
        users: state.UserReducer.users,
        isFetching: state.UserReducer.fetching,
        isErrored: state.UserReducer.errored,
        hasFetched: state.UserReducer.fetched
    }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<appReducers>): ConnectedDispatch => ({
   fetchUsers: (promise: Promise<any>) => {
       dispatch(creator.fetchUsers(promise))
   } 
})

class UsersContainer extends React.Component<ConnectedDispatch & ConnectedState & {}> {
    
    componentDidMount() {
        if (!this.props.hasFetched) {
            this.props.fetchUsers(getUsers())
        }
    }

    render() {
        return <div>
            <UsersListComponent users={this.props.users} isFetching={this.props.isFetching} isErrored={this.props.isErrored}/>
            </div>
    }
    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersContainer)
