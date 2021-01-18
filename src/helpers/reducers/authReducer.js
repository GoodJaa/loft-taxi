import {LOG_IN, LOG_OUT, ONLINE} from '../actions'

const initialState = {
    isLoggedIn: false
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case LOG_IN: {
            return {isLoggedIn: true}
        }
        case LOG_OUT: {
            return {isLoggedIn: false}
        }
        case ONLINE: {
            return localStorage.authorizeStatus
        }
        default:
            return state
    }
}