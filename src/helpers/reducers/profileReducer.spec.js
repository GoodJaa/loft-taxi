import profileReducer from './profileReducer'
import { profileSuccess } from '../actions'

describe("profileReducer", () => {
    describe("#PROFILE_SUCCESS", () => {
        it('returns profile success', () => {
            expect(profileReducer({}, profileSuccess())).toEqual({ profileSend: true })
        })
    })
})