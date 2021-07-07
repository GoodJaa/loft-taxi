import { recordSaga } from './recordSaga';
import { getRouteSaga } from './routeSaga';
import { setRoute } from '../actions';

jest.mock("../api", () => ({ safelyGetTaxiRoute: () => true }));
describe('routeSaga', () => {
    describe("#GET_ROUTE", () => {
        it('get route', async () => {
            const dispatched = await recordSaga(
                getRouteSaga,
                setRoute({coordinates: true})
            )
            expect(dispatched).toEqual([
                {
                    type: 'SET_ROUTE',
                    payload: {coordinates: true}
                }
            ])
        })
    })
})