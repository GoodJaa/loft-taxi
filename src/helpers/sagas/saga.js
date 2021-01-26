import { fork } from 'redux-saga/effects'
import { authSaga } from './authSaga'
import { signUpSaga } from './signUpSaga'
import { profileSaga } from './profileSaga'
import {loadAddressSaga} from './loadAddressSaga'

export default function* rootSaga() {
    yield fork(authSaga);
    yield fork(signUpSaga);
    yield fork(profileSaga);
    yield fork(loadAddressSaga);
}