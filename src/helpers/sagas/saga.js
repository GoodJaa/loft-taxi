import { fork } from 'redux-saga/effects'
import { authSaga } from './authSaga'
import { signUpSaga } from './signUpSaga'
import { profileSaga } from './profileSaga'

export default function* rootSaga() {
    yield fork(authSaga);
    yield fork(signUpSaga);
    yield fork(profileSaga);
}