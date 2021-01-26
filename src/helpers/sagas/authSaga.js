import { takeEvery, call, put, select } from 'redux-saga/effects'
import { AUTHENTICATE, logIn, profileSuccess } from '../actions';
import { safelyServerLogin, safelyRequestProfileData } from '../api';
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
        const profileData = yield put(safelyRequestProfileData(data.token))
        if(profileData) {
            profileSuccess(profileData)
            console.log(profileData)
        }
        saveState(yield select());
    } else {
        console.log(data.error)
    }
}