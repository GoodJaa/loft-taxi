import {signUp} from '../actions'
import {safelyServerSignUp} from '../api'
import {REGISTRATION} from '../actions'
import {uploadUserData} from '../localStorageUploder'

export const signUpMiddleware = (store) => (next) => async (action) => {
    if (action.type === REGISTRATION) {
        const {email, name, surname, password} = action.payload;

        if (email && name && surname && password) {
            uploadUserData({email, name, surname, password});
        }

        const success = await safelyServerSignUp(email, name, surname, password);
        if (success) {
            store.dispatch(signUp())
        }
    } else {
        return next(action)
    }
}