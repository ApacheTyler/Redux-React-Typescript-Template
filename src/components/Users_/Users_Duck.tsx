/**
 * X Duck
 */

import { ActionCreator } from 'redux'

export type UserState = {
    readonly errored: boolean
    readonly fetching: boolean
    readonly fetched: boolean
    readonly users: any[]
}

const initialState: UserState = {
    errored: false,
    fetching: false,
    fetched: false,
    users: []
}

export default function reducer (state: UserState = initialState, action: ActionTypes): UserState {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {
                ...state,
            };
        case UserActionTypes.FETCH_USERS_FULFILLED:
            const users: any[] = action.payload.data
            const firstTwo = users.slice(0,2)
            const mappedTwo = firstTwo.map( (user) => { return {...user, isActive: false}})
            return {
                ...state,
                users: mappedTwo,
                fetching: false,
                fetched: true
            }
        case UserActionTypes.FETCH_USERS_PENDING:
            return {
                ...state,
                fetching: true,
            }
        case UserActionTypes.USERS_TOGGLED:
            const updatedUsers = state.users.map((user, index) => {
                if (index === action.userIndex) {
                   user.isActive = action.isActive 
                }
                return user
            })
            return {
                ...state,
                users: updatedUsers
            }
        case UserActionTypes.FETCH_USERS_REJECTED:
            console.log(action.payload.data)
            return {
                ...state,
                errored: true,
                fetching: false,
                fetched: true
            }
        default:
            return {
                ...state
            }
    }
}

export type ActionTypes = FetchUsers |
UserToggled |
FetchUsersPending |
FetchUsersFuffiled |
FetchUsersRejected

export const creator = {
    fetchUsers: (promise: Promise<any>): FetchUsers => ({
        type: UserActionTypes.FETCH_USERS,
        payload: promise
    }),
    userToggled: (isActive: boolean, userIndex: number): UserToggled => ({
        type: UserActionTypes.USERS_TOGGLED,
        userIndex: userIndex,
        isActive: isActive
    })
}

enum UserActionTypes {
    FETCH_USERS = 'typescript-reactjs-webpack/Users_/FETCH_USERS',
    USERS_TOGGLED = 'typescript-reactjs-webpack/Users_/USERS_TOGGLED',
    //Dispatched via redux-promise-middleware
    FETCH_USERS_PENDING = 'typescript-reactjs-webpack/Users_/FETCH_USERS_PENDING',
    FETCH_USERS_FULFILLED = 'typescript-reactjs-webpack/Users_/FETCH_USERS_FULFILLED',
    FETCH_USERS_REJECTED = 'typescript-reactjs-webpack/Users_/FETCH_USERS_REJECTED',
}

/**
 * Fetch all users
 */
export interface FetchUsers {
    type: UserActionTypes.FETCH_USERS
    payload: Promise<any> //Need payload to be a promise for redux-promise-middleware
}

/**
 * Toggle user active state
 */
export interface UserToggled {
    type: UserActionTypes.USERS_TOGGLED
    userIndex: number
    isActive: boolean
}

/**
 * Dispacted by redux-promise-middleware
 */
export interface FetchUsersPending {
    type: UserActionTypes.FETCH_USERS_PENDING
    payload: any
}

/**
 * Dispatched by redux-promise-middleware
 */
export interface FetchUsersFuffiled {
    type: UserActionTypes.FETCH_USERS_FULFILLED
    payload: any
}

/**
 * Dispatched by redux-promise-middleware
 */
export interface FetchUsersRejected {
    type: UserActionTypes.FETCH_USERS_REJECTED
    payload: any
}







        




