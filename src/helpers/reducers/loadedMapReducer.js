import { LOADED_MAP } from '../actions'

const initialState = {
    loadedMap: {}
}

export default function loadedMapReducer(state = initialState, action) {
    switch(action.type) {
        case LOADED_MAP: {
            return {loadedMap: action.payload}
        }
        default:
            return state
    }
}