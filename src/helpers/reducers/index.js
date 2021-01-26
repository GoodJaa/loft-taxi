import {combineReducers} from 'redux';
import authReducer from './authReducer';
import signUpReducer from './signUpReducer';
import formReducer from './formReducer';
import profileReducer from './profileReducer';
import loadAddressReducer from './loadAddressReducer';

export default combineReducers({authReducer, signUpReducer, formReducer, profileReducer, loadAddressReducer});