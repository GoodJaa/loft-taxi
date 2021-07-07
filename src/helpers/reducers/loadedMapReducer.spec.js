import loadedMapReducer from './loadedMapReducer';
import { LOADED_MAP } from '../actions'

describe("loadedMapReducer", () => {
        it('returns map object', () => {

            expect(loadedMapReducer({}, {type: LOADED_MAP, payload: {map: 'map'}})).toEqual({loadedMap: {map: 'map'}})
        })
})