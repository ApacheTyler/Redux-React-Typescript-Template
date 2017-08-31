/**
 * X Duck
 */

import { ActionCreator } from 'redux'

export const SET_MESSAGE = 'typescript-reactjs-webpack/X_/SET_MESSAGE'
export const RESET = 'typescript-reactjs-webpack/X_/RESET'

export type Action = {
    type: 'typescript-reactjs-webpack/X_/SET_MESSAGE',
    message: string,
} | {
    type: 'typescript-reactjs-webpack/X_/RESET'
}

export type XState = {
    readonly message: string
}

const initialState: XState = {
    message: 'Hello World!' 
}

export default function reducer (state: XState = initialState, action: Action ): XState {
    (<any>window).state = state;
    switch (action.type) {
        case 'typescript-reactjs-webpack/X_/SET_MESSAGE':
            return {
                ...state,
                message: action.message
            };
        case 'typescript-reactjs-webpack/X_/RESET':
            return initialState
        default:
            return {
                ...state
            }
    }
}

export const creator = {
    setMessage: (message: string) => ({
        type: SET_MESSAGE as typeof SET_MESSAGE, message
    }),
    reset: () => ({
        type: RESET as typeof RESET
    })
}        




