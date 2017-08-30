/**
 * Pixel Duck
 */

import { ActionCreator } from 'redux'

export const SET_MESSAGE = 'typescript-reactjs-webpack/pixel/SET_MESSAGE'
export const RESET = 'typescript-reactjs-webpack/pixel/RESET'

export type Action = {
    type: 'SET_MESSAGE',
    message: string,
} | {
    type: 'RESET'
}

export type PixelState = {
    readonly message: string
}

const initialState: PixelState = {
    message: 'Hello World!' 
}

export default function reducer (state: PixelState = initialState, action: Action ): PixelState {
    (<any>window).state = state;
    switch (action.type) {
        case 'SET_MESSAGE':
            return {
                ...state,
                message: action.message
            };
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




