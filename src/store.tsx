
import { compose, applyMiddleware, createStore, combineReducers, Store as ReduxStore } from 'redux'
import XReducer, { XState } from './components/X_/X_Duck'
import UserReducer, { UserState } from './components/Users_/Users_Duck'
import promiseMiddleware from 'redux-promise-middleware'

export type appReducers = {
    XReducer: XState,
    UserReducer: UserState
}

const combinedReducers = combineReducers<XState>(
    {
        'XReducer': XReducer,
        'UserReducer': UserReducer
    }
)

// (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhancers = typeof window === 'object' &&
(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enahncer = composeEnhancers(
    applyMiddleware(promiseMiddleware())    
)

const appStore: ReduxStore<XState> = createStore(combinedReducers, enahncer)

export default appStore
