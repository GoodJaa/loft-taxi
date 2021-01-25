import {takeEvery, call, put} from 'redux-saga/effects';
import {safelyServerAddressList} from '../api';
import {LOAD_ADDRESS} from '../actions'