import {CURRENT_USER} from '../actions'

const initialState = {
    currentUser: ''
}

export default function currentUserReducer(state = initialState, action) {
    switch (action.type) {
        case CURRENT_USER:
            return {currentUser: action.payload}
        default:
            return state
    }
}