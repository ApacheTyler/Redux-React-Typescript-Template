/**
 * Pixel component reducer
 */

import * as PixelActions from './PixelAction'

export type PixelState = {
    readonly message: string
}

const initialState: PixelState = {
    message: 'Hello World!' 
}

export function pixelReducer (state: PixelState = initialState, action: PixelActions.Action ): PixelState {
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
