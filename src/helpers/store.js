import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {authMiddleware} from './middlewares/authMiddleware';
import {signUpMiddleware} from './middlewares/signUpMiddleware';
import {profileMiddleware} from './middlewares/profileMiddleware';
import logger from 'redux-logger';
import {loadState} from './initApp';

export const store = createStore(rootReducer, loadState(), applyMiddleware(authMiddleware, signUpMiddleware, profileMiddleware, logger));