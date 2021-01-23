import { profileSuccess, PROFILE_SEND } from '../actions'
import { safelyServerProfile } from '../api'
import { uploadProfileData } from '../localStorageUploder'

export const profileMiddleware = (store) => (next) => async (action) => {
    try {
        if (action.type === PROFILE_SEND) {
            const { cardNumber, expiryDate, cardName, cvc } = action.payload;
            const token = JSON.parse(localStorage.token)
            const data = await safelyServerProfile(cardNumber, expiryDate, cardName, cvc, token)
            if (data.success) {
                uploadProfileData({ cardNumber, expiryDate, cardName, cvc, token });

                store.dispatch(profileSuccess())
            }
        } else {
            next(action)
        }
    } catch (e) {
        console.log(e)
    }

}