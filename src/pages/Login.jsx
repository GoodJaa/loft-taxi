import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, FormLabel } from '@material-ui/core';
import { Logo } from "loft-taxi-mui-theme";
import "../styles/login.css";
import "../styles/button.css";
import "../styles/layout.css";
import { Redirect } from 'react-router-dom';
import { Map } from './Map';
import { authenticate, registration, chooseLoginForm, chooseSignUpForm } from '../helpers/actions';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formField: {
                email: "",
                name: "",
                surname: "",
                password: "",
            }
        };
    }

    static propTypes = {
        authenticate: PropTypes.func,
        isLoggedIn: PropTypes.bool
    }

    switchForm = () => {
        this.props.currentForm === 'login' ?
            this.props.chooseSignUpForm() :
            this.props.chooseLoginForm()
    }

    onInputChange = (e) => {
        const updateFormField = { ...this.state.formField };
        updateFormField[e.target.name] = e.target.value;

        this.setState({ formField: updateFormField });
    };

    logIn = (event) => {
        event.preventDefault();

        const { email, password } = event.target;
        this.props.authenticate(email.value, password.value);
    }

    signUp = (event) => {
        event.preventDefault();
        const { email, name, surname, password } = event.target;
        this.props.registration(email.value, name.value, surname.value, password.value);
    }

    render() {

        const { email, name, surname, password } = this.state.formField;
        const isLoginForm = this.props.currentForm === "login";

        let inputClass = "form__input";
        if (!isLoginForm) {
            inputClass += " form__input--margin";
        }

        const formElements = {
            title: isLoginForm ? "Войти" : "Регистрация",
            userName:
                isLoginForm ?
                    null :
                    <>
                        <FormLabel htmlFor="name" className="form__label label">Как вас зовут?</FormLabel>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            className="form__input"
                            value={name}
                            onChange={this.onInputChange}
                        />
                        <FormLabel htmlFor="surname" className="form__label label">Ваша фамилия?</FormLabel>
                        <Input
                            id="surname"
                            type="text"
                            name="surname"
                            className="form__input"
                            value={surname}
                            onChange={this.onInputChange}
                        />
                    </>,
            passwordLabel: isLoginForm ? "Пароль" : "Придумайте пароль",
            forgotPasswordBtn:
                isLoginForm ?
                    <>
                        <div className="forgot-password__btn-wrapper">
                            <button className="forgot-password__btn">Забыли пароль?</button>
                        </div>
                    </> :
                    null,
            submitBtnValue: isLoginForm ? "Войти" : "Зарегистрироваться",
            switchFormText: isLoginForm ? "Новый пользователь?" : "Уже есть аккаунт?"
        }

        if (!this.props.isLoggedIn) {
            return (
                <div className="login-page-wrapper">
                    <div className="logo-section">
                        <div className="logo">
                            <Logo />
                        </div>
                    </div>
                    <div className="login-section">
                        <form className="form" onSubmit={isLoginForm ? this.logIn : this.signUp}>
                            <h1 className="form__title">{formElements.title}</h1>
                            <div className="form__input-container">
                                <FormLabel className="form__label label" htmlFor="email">Email</FormLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="form__input"
                                    value={email}
                                    onChange={this.onInputChange}
                                    placeholder="mail@mail.ru"
                                />
                                {formElements.userName}
                                <FormLabel className="form__label label" htmlFor="password">{formElements.passwordLabel}</FormLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    className={inputClass}
                                    value={password}
                                    onChange={this.onInputChange}
                                    placeholder="******"
                                />
                            </div>
                            {formElements.forgotPasswordBtn}
                            <input type="submit" className="button button--margin" value={formElements.submitBtnValue} />
                            <div className="switch-form">
                                <span className="switch-form__text">{formElements.switchFormText}</span>
                                <button
                                    className="switch-form__btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.switchForm()
                                    }}
                                >
                                    {isLoginForm ? "Регистрация" : "Логин"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        } else {
            return <>
                <Redirect to="/map" component={Map} />
            </>
        }
    }
}

export const LoginWrapper = connect(
    (state) => ({
        currentForm: state.formReducer.currentForm,
        isLoggedIn: state.authReducer.isLoggedIn
    }),
    { authenticate, registration, chooseLoginForm, chooseSignUpForm }
)(Login);