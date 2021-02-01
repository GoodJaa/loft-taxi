import {SET_ROUTE, NEW_TAXI_ORDER} from '../actions'
import routeReducer from './routeReducer'

describe('routeReducer', () => {
    it('the route is set and the taxi is taken', () => {
        expect(routeReducer({}, {type: SET_ROUTE, payload: ['111', '222']})).toEqual({coordinates: ['111', '222'], calledTaxi: true})
    })
    it('new taxi order', () => {
        expect(routeReducer({}, {type: NEW_TAXI_ORDER})).toEqual({coordinates: [], calledTaxi: false})
    })
})