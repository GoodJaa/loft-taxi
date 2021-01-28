import {combineReducers} from 'redux';
import authReducer from './authReducer';
import signUpReducer from './signUpReducer';
import formReducer from './formReducer';
import profileReducer from './profileReducer';
import profileSaveReducer from './profileSaveReducer'
import loadAddressReducer from './loadAddressReducer';

export default combineReducers({authReducer, signUpReducer, formReducer, profileReducer, profileSaveReducer, loadAddressReducer});