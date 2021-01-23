import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas/saga'
import logger from 'redux-logger';
import { loadState } from './initApp';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    loadState(),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga)