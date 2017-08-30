import reducer, * as PixelDuck from './PixelDuck'

describe('ScreenActions', () => {

    it('creates a set message action', () => {
        const action: PixelDuck.Action = PixelDuck.creator.setMessage('Hello World')
        expect(action).toEqual({
            type: PixelDuck.SET_MESSAGE,
            message: 'Hello World',
        })
    })

    it('tests the reducer', () => {
        const state = reducer({message: 'Hello World'},PixelDuck.creator.setMessage('foo'))
        expect(state.message).toEqual('foo')
    })

})
