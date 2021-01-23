import {LOGIN_FORM, SIGNUP_FORM} from '../actions';

const initialState = {
    currentForm: 'login'
}

export default function formReducer( state = initialState, action) {
    switch(action.type) {
        case LOGIN_FORM: {
            return {currentForm: 'login'}
        }
        case SIGNUP_FORM: {
            return {currentForm: 'registration'}
        }
        default: {
            return state
        }
    }
}