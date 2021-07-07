import {SET_ROUTE, NEW_TAXI_ORDER} from '../actions'

const initialState = {
    coordinates: [],
    calledTaxi: false
}

export default function routeReducer(state = initialState, action) {
    switch(action.type) {
        case SET_ROUTE: {
            return {
                coordinates: action.payload,
                calledTaxi: true
            }
        }
        case NEW_TAXI_ORDER: {
            return {
                coordinates: [],
                calledTaxi: false
            }
        }
        default: {
            return state
        }
    }
}