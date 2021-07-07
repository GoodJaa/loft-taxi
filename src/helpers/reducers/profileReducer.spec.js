import profileReducer from './profileReducer'
import { profileSuccess, profileSaveComplete, profileSend } from '../actions'

describe("profileReducer", () => {
    describe("#PROFILE_SUCCESS", () => {
        it('returns profile success', () => {
            expect(profileReducer({}, profileSuccess({
                id: 'testID',
                cardName: 'testCardName',
                expiryDate: 'testExpityDate',
                cardNumber: 'testCardNumber',
                cvc: 'testCVC',
            }))).toEqual({
                profileData: {
                    id: 'testID',
                    cardName: 'testCardName',
                    expiryDate: 'testExpityDate',
                    cardNumber: 'testCardNumber',
                    cvc: 'testCVC',
                }
            })
        })
    })

    describe("#PROFILE_SEND", () => {
        it('profile data sent', () => {
            expect(profileReducer({}, profileSend({card: 'card', date: 'date', number: 'number', cvc: 'cvc'}))).toEqual({
                profileData: undefined,
                profileSave: true
                }
            )
        })
    })
    describe("#PROFILE_SAVE_COMPLETE", () => {
        it('profile data sent', () => {
            expect(profileReducer({}, profileSaveComplete())).toEqual({
                profileData: undefined,
                profileSave: false
                }
            )
        })
    })
})