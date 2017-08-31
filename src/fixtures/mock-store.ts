
import { createStore, combineReducers, Store as ReduxStore } from 'redux'
import XReducer, { XState } from '../components/X_/X_Duck'

export type appReducers = {
    XReducer: XState
}

const combinedReducers = combineReducers<XState>(
    {'XReducer': XReducer}
)

const appStore: ReduxStore<XState> = createStore(combinedReducers)

export default appStore 
