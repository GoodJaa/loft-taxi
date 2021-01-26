import {ADDRESS_LIST} from '../actions'

const initialState = {
    addresses: null
}

export default function loadAddressReducer(state = initialState, action) {
    switch(action.type) {
        case ADDRESS_LIST: {
            return {addresses: action.payload}
        }
        default: {
            return state
        }
    }
}