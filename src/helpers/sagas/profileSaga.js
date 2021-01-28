import { takeEvery, call, put, select } from 'redux-saga/effects';
import { safelyServerProfile } from '../api';
import { PROFILE_SEND, profileSuccess } from '../actions';
import { saveState } from '../initApp';

export function* profileSaga() {
    yield takeEvery(PROFILE_SEND, profileSendSaga)
}

export function* profileSendSaga(action) {
    const { cardNumber, expiryDate, cardName, cvc } = action.payload;
    const token = JSON.parse(localStorage.token)
    const data = yield call(safelyServerProfile, cardNumber, expiryDate, cardName, cvc, token)

    if (data.success) {

        yield put(profileSuccess(
            {
            id: token,
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cardName: cardName,
            cvc: cvc
        }
        ))

        saveState(yield select());
    }
}