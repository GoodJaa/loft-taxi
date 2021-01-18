import { PROFILE_EDIT, PROFILE_SEND } from '../actions'

export const initialState = {
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: '',
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case PROFILE_EDIT:
            console.log(state, action);
            return Object.assign({}, ...state, {...action.payload})
        case PROFILE_SEND:
            return Object.assign({}, ...state, {...action.payload})
        default:
            return state
    }
}