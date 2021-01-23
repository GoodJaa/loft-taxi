import currentUserReducer from './currentUserReducer'

describe("currentUserReducer", () => {
    describe("#CURRENT_USER", () => {
        it('returns profile success', () => {
            const getCurrentUser = jest.fn(() => ({}))

            expect(currentUserReducer({}, getCurrentUser())).toEqual({})
        })
    })
})