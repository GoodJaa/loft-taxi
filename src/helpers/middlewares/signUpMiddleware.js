import {signUp} from '../actions'
import {safelyServerSignUp} from '../api'
import {REGISTRATION} from '../actions'
import {uploadUserData} from '../localStorageUploder'

export const signUpMiddleware = (store) => (next) => async (action) => {
    if (action.type === REGISTRATION) {
        const {email, name, surname, password} = action.payload;

        const data = await safelyServerSignUp(email, name, surname, password);
        if (data.success) {

            uploadUserData(data.token);
            store.dispatch(signUp())
        } else {
            console.log(data.error)
        }
    } else {
        return next(action)
    }
}