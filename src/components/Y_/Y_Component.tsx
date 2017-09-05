require('./Y_.scss')
import * as React from "react";
import { match } from 'react-router-dom'

export interface YProps {
    welcomeMessage: string,
    match?: match<{optional: string}>
}

export interface YState {
    numberOfClicks: number
}

export default class Y extends React.Component<YProps, YState> {
    
    componentWillMount() {
        this.setState({
            numberOfClicks: 0
        })
    }

    handleClick() {
        this.setState({
            numberOfClicks: this.state.numberOfClicks + 1
        })
    }
    
    render() {
        const message = this.props.match ? this.props.match.params.optional : this.props.welcomeMessage
        return <div>
                <h1>{message}</h1>
                <h2 onClick={() => this.handleClick()}>{this.state.numberOfClicks}</h2>
            </div>
    }
    
}

