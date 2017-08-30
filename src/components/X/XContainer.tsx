import * as React from "react";
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { appReducers }  from '../../store'
import { creator, Action } from './XDuck'

import XComponent from './XComponent'

interface ConnectedDispatch {
    setMessage: (message: string) => void
}

interface ConnectedState {
    message: string
}

const mapStateToProps = (state: appReducers): ConnectedState => {
    return {
        message: state.XReducer.message
    }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<appReducers>): ConnectedDispatch => ({
    setMessage: (message: string) => {
        dispatch(creator.setMessage(message))
    }
})

class XContainer extends React.Component<ConnectedDispatch & ConnectedState & {}> {

    private onSetMessageClicked: Function = (message: string): void => {
        this.props.setMessage(message)
    }
    
    render() {
        return <div>
            <XComponent placeholderText='placeholderText' message={this.props.message} buttonText='Set new message' buttonClicked={this.onSetMessageClicked.bind(this)}/>
            </div>
    }
    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(XContainer)
