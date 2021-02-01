import {takeEvery, call, put} from 'redux-saga/effects';
import {safelyDownloadAddressList} from '../api';
import {LOAD_ADDRESS, loadAddressList} from '../actions'

export function* loadAddressSaga () {
    yield takeEvery(LOAD_ADDRESS, downloadAddressSaga)
}

export function* downloadAddressSaga () {
    const data = yield call(safelyDownloadAddressList);
    if (data) {
        yield put(loadAddressList(data.addresses));
    } else {
        console.log(data.error)
    }
}