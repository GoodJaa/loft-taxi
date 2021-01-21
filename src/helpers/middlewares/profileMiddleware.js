import {profileSuccess, PROFILE_SEND} from '../actions'
import {safelyServerProfile} from '../api'

export const profileMiddleware = (store) => (next) => async (action) => {
    if(action.type === PROFILE_SEND) {
        console.log(action)
        const {cardNumber, expiryDate, cardName, cvc} = action.payload;
        const success = await safelyServerProfile(cardNumber, expiryDate, cardName, cvc)
        if(success) {
            store.dispatch(profileSuccess())
        }
    } else {
        next(action)
    }
}