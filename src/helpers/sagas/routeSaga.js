import { GET_ROUTE, setRoute } from '../actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import { safelyGetTaxiRoute } from '../api';

export function* routeSaga() {
    yield takeEvery(GET_ROUTE, getRouteSaga)
}

export function* getRouteSaga(action) {
    const { from, where } = action.payload;
    const coordinates = yield call(safelyGetTaxiRoute, from, where)
    if (coordinates) {
        yield put(setRoute(coordinates))
    }
}