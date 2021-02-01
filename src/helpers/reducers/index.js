import { combineReducers } from 'redux';
import authReducer from './authReducer';
import signUpReducer from './signUpReducer';
import formReducer from './formReducer';
import profileReducer from './profileReducer';
import profileSaveReducer from './profileSaveReducer';
import loadAddressReducer from './loadAddressReducer';
import routeReducer from './routeReducer';
import loadedMapReducer from './loadedMapReducer';
import requiredFormReducer from './requiredFormReducer'

export default combineReducers(
    {
        authReducer,
        signUpReducer,
        formReducer,
        profileReducer,
        profileSaveReducer,
        loadAddressReducer,
        routeReducer,
        loadedMapReducer,
        requiredFormReducer
    }
);