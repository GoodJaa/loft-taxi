import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const PrivateRoute = connect(state => ({ isLoggedIn: state.authReducer.isLoggedIn }))(
    ({ component: Component, isLoggedIn, ...rest }) => (
        <Route
            {...rest}
            render={props => (!isLoggedIn) ? (<Component {...props} />) : (<Redirect to="/" />)} //убрать восклицательный знак чтобы включить аутенфикацию
        />
    )
)