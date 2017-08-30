require('./Pixel.scss')
import * as React from "react";

export interface PixelProps {
    message: string,
    placeholderText: string,
    buttonText: string,
    buttonClicked?: Function,
}

export default class Pixel extends React.Component<PixelProps> {

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

