import {LOAD_ADDRESS} from '../actions'

const initialState = {
    downloadRequest: false
}

export default function downloadAddressList(state = initialState, action) {
    switch(action.type) {
        case LOAD_ADDRESS: {
            return {downloadAddressList: true}
        }
        default: {
            return {downloadAddressList: false}
        }
    }
}