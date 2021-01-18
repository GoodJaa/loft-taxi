export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const SIGN_UP = 'SIGN_UP'
export const AUTHENTICATE = 'AUTHENTICATE'
export const REGISTRATION = 'REGISTRATION'
export const LOGIN_FORM = 'LOGIN_FORM'
export const SIGNUP_FORM = 'SIGNUP_FORM'
export const CURRENT_USER = 'CURRENT_USER'
export const PROFILE_EDIT = 'PROFILE_EDIT'
export const PROFILE_SEND = 'PROFILE_SEND'
export const ONLINE = 'ONLINE'

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });
export const signUp = () => ({ type: SIGN_UP });
export const chooseLoginForm = () => ({ type: LOGIN_FORM });
export const chooseSignUpForm = () => ({ type: SIGNUP_FORM });
export const online = () => ({type: ONLINE})

export const profileEdit = (cardNumber, expiryDate, cardName, cvc) => (
    {
        type: PROFILE_EDIT,
        payload: {cardNumber, expiryDate, cardName, cvc},
    }
    );

export const profileSend = (cardNumber, expiryDate, cardName, cvc) => (
    {
        type: PROFILE_SEND,
        payload: {cardNumber, expiryDate, cardName, cvc}
    }
)

export const getCurrentUser = (email) => (
    {
        type: CURRENT_USER,
        payload: {email}
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