import signUpReducer from './signUpReducer'
import { signUp } from '../actions'

describe("signUpReducer", () => {
    describe("#SIGN_UP", () => {
        it('returns signup complete', () => {
            expect(signUpReducer({}, signUp())).toEqual({ signUpComplete: true })
        })
    })
})