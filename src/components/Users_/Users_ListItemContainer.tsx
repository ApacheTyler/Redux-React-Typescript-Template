import * as React from "react";
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { appReducers }  from '../../store'
import { creator, ActionTypes } from './Users_Duck'

import UsersListItemComponent from './Users_ListItemComponent'

interface ConnectedDispatch {
    toggleUser: (isActive: boolean, indexOfUser: number) => void
}

interface Users_ListItemContainerProps {
    index: number
}

interface ConnectedState {
    user: any
    isActive: boolean
}

const mapStateToProps = (state: appReducers, props: Users_ListItemContainerProps): ConnectedState => {
    const user = state.UserReducer.users[props.index]
    const activeState = state.UserReducer.users[props.index].isActive
    return {
        user: user,
        isActive: activeState,
    }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<appReducers>): ConnectedDispatch => ({
   toggleUser: (isActive: boolean, indexOfUser: number) => {
       dispatch(creator.userToggled(isActive, indexOfUser))
   } 
})

class UsersContainer extends React.Component<ConnectedDispatch & ConnectedState & Users_ListItemContainerProps> {
   
    clickHandler() {
        this.props.toggleUser(!this.props.isActive, this.props.index)
    }

    render() {
        return <div>
                <UsersListItemComponent name={this.props.user.name} isActive={this.props.isActive} handleClick={() => this.clickHandler()}/> 
            </div>
    }
    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersContainer)
