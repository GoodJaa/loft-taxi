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

export const PROFILE_SEND = 'PROFILE_SEND'
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'

// Action creators

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });
export const signUp = () => ({ type: SIGN_UP });
export const chooseLoginForm = () => ({ type: LOGIN_FORM });
export const chooseSignUpForm = () => ({ type: SIGNUP_FORM });
export const profileSuccess = () => ({ type: PROFILE_SUCCESS });

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