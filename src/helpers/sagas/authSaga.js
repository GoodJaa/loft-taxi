import { takeEvery, call, put, select } from 'redux-saga/effects'
import { AUTHENTICATE, logIn, profileSuccess } from '../actions';
import { safelyServerLogin, requestProfileData } from '../api';
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

        yield call(loadProfileData, data);

        saveState(yield select());
    } else {
        console.log(data.error)
    }
}

export function* loadProfileData(data) {
    const profileData = yield call(requestProfileData, data.token);

    uploadUserData(data.token);

    yield put(logIn());

    if (profileData) {
        yield put(profileSuccess(profileData));
    }
}