import {profileSend, PROFILE_SEND} from '../actions'
import {safelyServerProfile} from '../api'

export const profileMiddleware = (store) => (next) => async (action) => {
    if(action.type === PROFILE_SEND) {
        console.log(action)
        const {cardNumber, expiryDate, cardName, cvc} = action.payload;
        const success = await safelyServerProfile(cardNumber, expiryDate, cardName, cvc)
        if(success) {
            store.dispatch(profileSend(cardNumber, expiryDate, cardName, cvc))
        }
    } else {
        next(action)
    }
}