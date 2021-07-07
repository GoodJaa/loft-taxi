import { recordSaga } from './recordSaga';
import { downloadAddressSaga } from './loadAddressSaga';
import { loadAddressList, SET_ADDRESS_LIST } from '../actions'

jest.mock("../api", () => ({ safelyDownloadAddressList: () => true }));

describe("loadAddressSaga", () => {
    describe("#LOAD_ADDRESS", () => {
        it("loaded address from api", async () => {
            const dispatched = await recordSaga(
                downloadAddressSaga,
                loadAddressList({ addresses: undefined })
            )
            expect(dispatched).toEqual([
                {
                    type: SET_ADDRESS_LIST,
                    payload: { addresses: undefined }
                }
            ])
        })
    })
})