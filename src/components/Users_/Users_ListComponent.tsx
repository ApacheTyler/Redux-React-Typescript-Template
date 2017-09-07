import * as React from 'react'
import UsersListItemContainer from './Users_ListItemContainer'


export interface UserListProps {
    users: any[]
    isFetching: boolean
    isErrored: boolean
}

export default class UsersListComponent extends React.Component<UserListProps, {}> {

    getUserList () {
        return this.props.users.map( (user, index) => {
            return <UsersListItemContainer index={index} key={index}/>
        })
    }

    render() {
        const listBody = this.props.isFetching ? <img src="/images/loading.gif" /> : this.getUserList() 
        return <div>
            <h1>Welcome to the user component</h1>
            {listBody}
        </div>
    }

}