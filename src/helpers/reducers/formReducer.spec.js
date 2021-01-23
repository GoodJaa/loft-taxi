import formReducer from './formReducer'
import { chooseSignUpForm, chooseLoginForm } from '../actions'

describe("fromReducer", () => {
    describe("#LOGIN_FORM", () => {
        it('returns login form', () => {
            expect(formReducer({}, chooseLoginForm())).toEqual({ currentForm: "login" })
        })
    })

    describe("#SIGNUP_FORM", () => {
        it('returns registration form', () => {
            expect(formReducer({}, chooseSignUpForm())).toEqual({ currentForm: "registration" })
        })
    })
})