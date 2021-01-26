import { PROFILE_SUCCESS } from '../actions'

export const initialState = {
    profileData: null
}

export default function profileReducer(state = initialState, action) {
    switch(action.type) {
        case PROFILE_SUCCESS: {
            return {profileData: action.payload}
        }
        default:
            return state
    }
}