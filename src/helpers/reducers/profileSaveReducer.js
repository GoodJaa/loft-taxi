import { PROFILE_SAVE_COMPLETE, PROFILE_SEND } from '../actions'

export const initialState = {
    profileSave: false
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case PROFILE_SEND: {
            return {
                profileSave: true
            }
        }
        case PROFILE_SAVE_COMPLETE: {
            return {
                profileSave: false
            }
        }
        default:
            return state
    }
}