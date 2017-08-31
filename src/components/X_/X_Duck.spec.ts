import reducer, * as X_Duck from './X_Duck'

describe('ScreenActions', () => {

    it('creates a set message action', () => {
        const action: X_Duck.Action = X_Duck.creator.setMessage('Hello World')
        expect(action).toEqual({
            type: X_Duck.SET_MESSAGE,
            message: 'Hello World',
        })
    })

    it('tests the reducer', () => {
        const state = reducer({message: 'Hello World'},X_Duck.creator.setMessage('foo'))
        expect(state.message).toEqual('foo')
    })

})
