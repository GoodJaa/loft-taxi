import {logIn} from '../actions'
import {safelyServerLogin} from '../api'
import {AUTHENTICATE} from '../actions'
import {uploadAuthorizeStatus, localStorageUserFinder} from '../localStorageUploder'

export const authMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTHENTICATE) {
        const {email, password} = action.payload;
        const success = await safelyServerLogin(email, password)
        if(success || localStorageUserFinder(email, password)) {
            store.dispatch(logIn())
            uploadAuthorizeStatus('ONLINE')
        }
    } else {
        next(action)
    }
}