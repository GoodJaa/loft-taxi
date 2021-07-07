import authReducer from './authReducer'
import { logIn, logOut } from '../actions'

describe("authReducer", () => {
    describe("#LOG_IN", () => {
        it('returns isLoggedIn true', () => {
            expect(authReducer({}, logIn())).toEqual({ isLoggedIn: true })
        })
    })

    describe("#LOG_OUT", () => {
        it('returns isLoggedIn false', () => {
            expect(authReducer({}, logOut())).toEqual({ isLoggedIn: false })
        })
    })
})