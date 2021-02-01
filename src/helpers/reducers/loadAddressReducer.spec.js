import loadAddressReducer from './loadAddressReducer';
import {loadAddressList} from '../actions'

describe("loadAddressReducer", () => {
    describe("#SET_ADDRESS_LIST", () => {
        it('returns address list', () => {

            expect(loadAddressReducer({}, loadAddressList(['address1', 'address2']))).toEqual({addresses: ['address1', 'address2']})
        })
    })
})