import { SIGN_UP } from '../actions';

const initialState = {
    signUpComplete: false
}

export default function signUpReducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP: {
            return { signUpComplete: true }
        }
        default:
            return state
    }
}