import { PROFILE_SUCCESS, PROFILE_SAVE_COMPLETE, PROFILE_SEND } from '../actions'

export const initialState = {
    profileData: {
        id: '',
        cardName: '',
        expiryDate: '',
        cardNumber: '',
        cvc: '',
    }
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case PROFILE_SUCCESS: {
            return {
                profileData: {
                    id: action.payload.id,
                    cardName: action.payload.cardName,
                    expiryDate: action.payload.expiryDate,
                    cardNumber: action.payload.cardNumber,
                    cvc: action.payload.cvc,
                },
            }
        }
        case PROFILE_SEND: {
            return {
                profileData: state.profileData,
                profileSave: true
            }
        }
        case PROFILE_SAVE_COMPLETE: {
            return {
                profileData: state.profileData,
                profileSave: false
            }
        }
        default:
            return state
    }
}