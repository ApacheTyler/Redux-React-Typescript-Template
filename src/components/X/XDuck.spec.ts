import reducer, * as XDuck from './XDuck'

describe('ScreenActions', () => {

    it('creates a set message action', () => {
        const action: XDuck.Action = XDuck.creator.setMessage('Hello World')
        expect(action).toEqual({
            type: XDuck.SET_MESSAGE,
            message: 'Hello World',
        })
    })

    it('tests the reducer', () => {
        const state = reducer({message: 'Hello World'},XDuck.creator.setMessage('foo'))
        expect(state.message).toEqual('foo')
    })

})
