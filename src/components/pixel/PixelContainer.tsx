import * as React from "react";
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { appReducers }  from '../../store'
import { creator, Action } from './PixelAction'

import PixelComponent from './PixelComponent'

interface ConnectedDispatch {
    setMessage: (message: string) => void
}

interface ConnectedState {
    message: string
}

const mapStateToProps = (state: appReducers): ConnectedState => {
    return {
        message: state.pixelReducer.message
    }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<appReducers>): ConnectedDispatch => ({
    setMessage: (message: string) => {
        dispatch(creator.setMessage(message))
    }
})

class PixelContainer extends React.Component<ConnectedDispatch & ConnectedState & {}> {

    private onSetMessageClicked: Function = (message: string): void => {
        this.props.setMessage(message)
    }
    
    render() {
        return <div>
            <PixelComponent placeholderText='placeholderText' message={this.props.message} buttonText='Set new message' buttonClicked={this.onSetMessageClicked.bind(this)}/>
            </div>
    }
    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PixelContainer)
