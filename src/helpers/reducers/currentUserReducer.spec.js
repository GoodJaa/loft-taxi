import currentUserReducer from './currentUserReducer';
import {getCurrentUser} from '../actions'

describe("currentUserReducer", () => {
    describe("#CURRENT_USER", () => {
        it('returns profile success', () => {

            expect(currentUserReducer({}, getCurrentUser('test@mail.com'))).toEqual({currentUser: {email: 'test@mail.com'}})
        })
    })
})