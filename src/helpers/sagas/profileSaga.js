import { takeEvery, call, put } from 'redux-saga/effects';
import { safelyServerProfile } from '../api';
import { PROFILE_SEND, profileSuccess } from '../actions';
import {uploadProfileData} from '../localStorageUploder'

export function* profileSaga() {
    yield takeEvery(PROFILE_SEND, profileSendSaga)
}

export function* profileSendSaga(action) {
    const { cardNumber, expiryDate, cardName, cvc } = action.payload;
    const token = JSON.parse(localStorage.token)
    const data = yield call(safelyServerProfile, cardNumber, expiryDate, cardName, cvc, token)
    if (data.success) {
        uploadProfileData({ cardNumber, expiryDate, cardName, cvc, token });

        put(profileSuccess())
    }
}