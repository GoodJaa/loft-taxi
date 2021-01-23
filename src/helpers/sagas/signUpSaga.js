import { takeEvery, call, put } from 'redux-saga/effects'
import { signUp } from '../actions'
import { safelyServerSignUp } from '../api'
import { REGISTRATION } from '../actions'
import { uploadUserData } from '../localStorageUploder'

export function* signUpSaga() {
    yield takeEvery(REGISTRATION, registrationSaga)
}

export function* registrationSaga(action) {
    const { email, name, surname, password } = action.payload;

    const data = yield call(safelyServerSignUp, email, name, surname, password);
    console.log(data)
    if (data.success) {

        uploadUserData(data.token);
        put(signUp())
    } else {
        console.log(data.error)
    }
}