import { takeEvery, call, put, select } from 'redux-saga/effects'
import { AUTHENTICATE, logIn } from '../actions';
import { safelyServerLogin } from '../api';
import { uploadUserData } from '../localStorageUploder';
import { saveState } from '../initApp';


export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga)
}

export function* authenticateSaga(action) {
    const { email, password } = action.payload;
    const data = yield call(safelyServerLogin, email, password);
    if (data.success) {
        if (localStorage.getItem(data.token)) {
            localStorage.removeItem('token')
        }
        uploadUserData(data.token);
        yield put(logIn());
        saveState(yield select());
    } else {
        console.log(data.error)
    }
}