require('./Users_.scss')
import * as React from "react";
import { match } from 'react-router-dom'

export interface Users_ListItemProps {
    name: string
    isActive: boolean
    handleClick: Function
}

export default class UsersListItem extends React.Component<Users_ListItemProps, {}> {
    
    handleClick() {
        this.props.handleClick()
    }
    
    render() {
        console.log('renderd')
        return <div>
                <h2 onClick={ () => this.handleClick()}>{this.props.name}</h2>
                <span>{this.props.isActive + ''}</span>
            </div>
    }
    
}

