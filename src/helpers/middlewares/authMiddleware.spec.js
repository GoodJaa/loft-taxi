import { authMiddleware } from './authMiddleware'
import { authenticate } from '../actions'
import { safelyServerLogin } from '../api'

jest.mock("../api", () => ({ safelyServerLogin: () => true }));

describe("authMiddleware", () => {
    describe("AUTHENTICATE", () => {
        it("authenticates through api", async () => {
            const dispatch = jest.fn();
            const getState = jest.fn(() => ({}));

            await authMiddleware({ dispatch, getState })()(
                authenticate("testlogin", "testpassword")
            )

            expect(dispatch).toBeCalledWith(
                { type: "LOG_IN" }
            )
        })
    })
})