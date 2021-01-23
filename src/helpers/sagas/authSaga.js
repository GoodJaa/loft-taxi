// import {takeEvery, call, put} from 'redux-saga/effect'
// import {authenticate, logIn} from '../actions';
// import {safelyServerLogin} from '../api';
// import {localStorageUserFinder} from '../localStorageUploder';
// import {saveState} from '../initApp';


// export function* authSaga() {
//     yield takeEvery(authenticate, function* (action, store) {
//         const {email, password} = action.payload;
//         const success = yield call(safelyServerLogin, email, password);
//         if(success || localStorageUserFinder(email, password)) {
//             yield put(logIn())
//             yield saveState(store.getState())
//         }
//     })
// }