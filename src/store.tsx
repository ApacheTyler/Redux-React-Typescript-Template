
import { createStore, combineReducers, Store as ReduxStore } from 'redux'
import pixelReducer, { PixelState } from './components/pixel/PixelDuck'

export type appReducers = {
    pixelReducer: PixelState
}

const combinedReducers = combineReducers<PixelState>(
    {'pixelReducer': pixelReducer}
)

const appStore: ReduxStore<PixelState> = createStore(combinedReducers)

export default appStore
