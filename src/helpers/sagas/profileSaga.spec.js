import { recordSaga } from './recordSaga';
import { profileSendSaga } from './profileSaga';
import { profileSuccess } from '../actions';

jest.mock("../api", () => ({ safelyServerProfile: () => true} ));
describe('profileSaga', () => {
    describe('#PROFILE_SEND', () => {
        it('profile data sent', async () => {
            const dispatched = await recordSaga(
                profileSendSaga,
                profileSuccess({
                    payload: {profileData: true}
                })
            )
            expect(dispatched).toEqual([
                {
                    type: 'PROFILE_SUCCESS',
                    payload: {profileData: true}
                }
            ])
        })
    })
})