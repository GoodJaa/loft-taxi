import { recordSaga } from './recordSaga';
import { registrationSaga } from './signUpSaga';
import { registration } from '../actions';

jest.mock("../api", () => ({ safelyServerSignUp: () => true }));

describe("signUpSaga", () => {
    describe("#REGISTRATION", () => {
        it("registrations through api", async () => {
            const dispatched = await recordSaga(
                registrationSaga,
                registration("testlogin", "testname", "testsurname", "testpassword")
            )
            expect(dispatched).toEqual([
                {
                    type: "SIGN_UP"
                }
            ])
        })
    })
})