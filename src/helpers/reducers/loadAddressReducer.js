import {SET_ADDRESS_LIST} from '../actions'

const initialState = {
    addresses: []
}

export default function loadAddressReducer(state = initialState, action) {
    switch(action.type) {
        case SET_ADDRESS_LIST: {
            return {addresses: action.payload.addresses}
        }
        default: {
            return state
        }
    }
}