import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {authMiddleware} from './middlewares/authMiddleware';
import {signUpMiddleware} from './middlewares/signUpMiddleware';
import {profileMiddleware} from './middlewares/profileMiddleware';
import {authSaga} from './sagas/authSaga'
import logger from 'redux-logger';
import {loadState} from './initApp';
import createSagaMiddleware from 'redux-saga';

// const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    loadState(),
    applyMiddleware(authMiddleware, profileMiddleware, signUpMiddleware, logger)
);

// sagaMiddleware.run(authSaga)