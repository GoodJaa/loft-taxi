import {PROFILE_SAVE_COMPLETE, PROFILE_SEND} from '../actions'
import profileSaveReducer from './profileSaveReducer'

describe('profileSaveReducer', () => {
    it('profile saving is not complete', () => {
        expect(profileSaveReducer({}, {type: PROFILE_SAVE_COMPLETE, profileSave: false})).toEqual({profileSave: false})
    })

    it('profile saving is complete', () => {
        expect(profileSaveReducer({}, {type: PROFILE_SEND, profileSave: true})).toEqual({profileSave: true})
    })
})