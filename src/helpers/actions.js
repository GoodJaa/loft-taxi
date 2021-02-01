// Login action

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'
export const LOGIN_FORM = 'LOGIN_FORM'
export const CURRENT_USER = 'CURRENT_USER'

// Registration action

export const SIGN_UP = 'SIGN_UP'
export const REGISTRATION = 'REGISTRATION'
export const SIGNUP_FORM = 'SIGNUP_FORM'

// Profile action

export const PROFILE_SAVE_COMPLETE = 'PROFILE_SAVE_COMPLETE'
export const PROFILE_SEND = 'PROFILE_SEND'
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'

// TaxiForm action

export const LOAD_ADDRESS = 'LOAD_ADDRESS'
export const SET_ADDRESS_LIST = 'SET_ADDRESS_LIST'
export const GET_ROUTE = 'GET_ROUTE'
export const SET_ROUTE = 'SET_ROUTE'
export const NEW_TAXI_ORDER = 'NEW_TAXI_ORDER'

// Map action

export const LOADED_MAP = 'LOADED_MAP'

// All forms

export const REQUIRED_FORM_FALSE = 'REQUIRED_FORM_FALSE'
export const REQUIRED_FORM_TRUE = 'REQUIRED_FORM_TRUE'

// Action creators

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });
export const signUp = () => ({ type: SIGN_UP });
export const chooseLoginForm = () => ({ type: LOGIN_FORM });
export const chooseSignUpForm = () => ({ type: SIGNUP_FORM });
export const loadAddress = () => ({ type: LOAD_ADDRESS });
export const profileSaveComplete = () => ({ type: PROFILE_SAVE_COMPLETE });
export const newTaxiOrder = () => ({ type: NEW_TAXI_ORDER });
export const requiredFormFalse = () => ({ type: REQUIRED_FORM_FALSE });
export const requiredFormTrue = () => ({ type: REQUIRED_FORM_TRUE });


export const loadedMap = (map) => (
    {
        type: LOADED_MAP,
        payload: { map }
    }
)

export const setRoute = (coordinates) => (
    {
        type: SET_ROUTE,
        payload: { coordinates }
    }
)

export const getRoute = (from, where) => (
    {
        type: GET_ROUTE,
        payload: { from, where }
    }
)

export const loadAddressList = (addresses) => (
    {
        type: SET_ADDRESS_LIST,
        payload: { addresses }
    }
)

export const profileSuccess = (profileData) => (
    {
        type: PROFILE_SUCCESS,
        payload: { ...profileData }
    }
);

export const profileSend = (cardNumber, expiryDate, cardName, cvc) => (
    {
        type: PROFILE_SEND,
        payload: { cardNumber, expiryDate, cardName, cvc }
    }
)

export const getCurrentUser = (email) => (
    {
        type: CURRENT_USER,
        payload: { email }
    }
)

export const authenticate = (email, password) => (
    {
        type: AUTHENTICATE,
        payload: { email, password }
    }
)

export const registration = (email, name, surname, password) => (
    {
        type: REGISTRATION,
        payload: { email, name, surname, password }
    }
)