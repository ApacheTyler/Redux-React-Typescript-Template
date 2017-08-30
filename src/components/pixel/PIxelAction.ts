/**
 * Pixel component actions
 */

import { ActionCreator } from 'redux'

export const SET_MESSAGE = 'SET_MESSAGE'

export type Action = {
    type: 'SET_MESSAGE',
    message: string,
}

export const creator = {
    setMessage: (message: string) => ({
        type: SET_MESSAGE as typeof SET_MESSAGE, message
    })
}        