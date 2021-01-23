import {logIn} from '../actions'
import {safelyServerLogin} from '../api'
import {AUTHENTICATE} from '../actions'
import {localStorageUserFinder} from '../localStorageUploder'
import {saveState} from '../initApp'

export const authMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTHENTICATE) {
        const {email, password} = action.payload;
        const success = await safelyServerLogin(email, password)
        if(success || localStorageUserFinder(email, password)) {
            store.dispatch(logIn())
            saveState(store.getState())
        }
    } else {
        next(action)
    }
}