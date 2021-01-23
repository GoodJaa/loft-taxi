import { PROFILE_SUCCESS } from '../actions'

export const initialState = {
    profileSend: false
}

export default function profileReducer(state = initialState, action) {
    switch(action.type) {
        case PROFILE_SUCCESS: {
            return {profileSend: true}
        }
        default:
            return state
    }
}