import {logIn} from '../actions'
import {safelyServerLogin} from '../api'
import {AUTHENTICATE} from '../actions'
import {saveState} from '../initApp'
import {uploadUserData} from '../localStorageUploder'

export const authMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTHENTICATE) {
        const {email, password} = action.payload;
        const data = await safelyServerLogin(email, password)
        if(data.success) {
            console.log(data)
            if (localStorage.getItem(data.token)) {
                localStorage.removeItem('token')
            }
            uploadUserData(data.token);
            store.dispatch(logIn());
            saveState(store.getState());
        } else {
            console.log(data.error)
        }
    } else {
        next(action)
    }
}