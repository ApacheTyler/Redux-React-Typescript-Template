require('./X.scss')
import * as React from "react";

export interface XProps {
    message: string,
    placeholderText: string,
    buttonText: string,
    buttonClicked?: Function,
}

export default class X extends React.Component<XProps> {

    refs: {
        textInput?: HTMLInputElement
    }
    
    render() {
        return <div>
                <h1>{this.props.message}</h1> 
                <input type='text' ref='textInput' name='messageText' placeholder={this.props.placeholderText}></input>
                <button onClick={ () => {this.props.buttonClicked(this.refs.textInput.value)}}>{this.props.buttonText}</button>
            </div>
    }
    
}

