import {REQUIRED_FORM_FALSE, REQUIRED_FORM_TRUE} from '../actions'

const initialState = {
    requiredForm: true
}

export default function requiredFormReducer(state = initialState, action) {
    switch(action.type) {
        case REQUIRED_FORM_FALSE: {
            return {requiredForm: false}
        }
        case REQUIRED_FORM_TRUE: {
            return {requiredForm: true}
        }
        default:
            return state
    }
}