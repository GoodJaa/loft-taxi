import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Paper, Input, FormLabel, withStyles } from '@material-ui/core';
import { formStyles } from '../styles/formStyle'
import { Logo } from "loft-taxi-mui-theme";
import "../styles/login.css";
import "../styles/button.css";
import "../styles/layout.css";
import { Redirect } from 'react-router-dom';
import { MapWrapper } from './Map';
import {
    authenticate,
    registration,
    chooseLoginForm,
    chooseSignUpForm,
} from '../helpers/actions';


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formField: {
                email: "",
                name: "",
                surname: "",
                password: "",
                token: ""
            },
            requiredForm: true
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

        if (e.target.value) {
            this.setState({ requiredForm: true })
        }

        updateFormField[e.target.name] = e.target.value;

        this.setState({ formField: updateFormField });
    };

    logIn = (event) => {
        event.preventDefault();

        const { email, password } = event.target;

        if (this.state.formField.email && this.state.formField.password) {
            this.setState({ requiredForm: true })
            this.props.authenticate(email.value, password.value)
        } else {
            this.setState({ requiredForm: false })
        }

    }

    signUp = (event) => {
        event.preventDefault();

        const { email, name, surname, password } = event.target;

        if (
            this.state.formField.email &&
            this.state.formField.password &&
            this.state.formField.name &&
            this.state.formField.surname
        ) {
            this.setState({ requiredForm: true })
            this.props.registration(email.value, name.value, surname.value, password.value, this.state.token);
        } else {
            this.setState({ requiredForm: false })
        }
    }

    render() {
        const {
            buttonWrapper,
            notRequiredForm,
            notRequiredFormLogin,
            formWrapperLogin,
            formInput,
            formInputNotRequired
        } = this.props.classes;

        const { email, name, surname, password } = this.state.formField;
        const isLoginForm = this.props.currentForm === "login";

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
                            className={
                                this.state.formField.name || this.state.requiredForm ?
                                formInput :
                                formInputNotRequired
                            }
                            value={name}
                            onChange={this.onInputChange}
                        />
                        {
                            !this.state.formField.name && !this.state.requiredForm ?
                                <div className={`${notRequiredForm} ${notRequiredFormLogin}`}>Введите имя</div> :
                                null
                        }
                        <FormLabel htmlFor="surname" className="form__label label">Ваша фамилия?</FormLabel>
                        <Input
                            id="surname"
                            type="text"
                            name="surname"
                            className={
                                this.state.formField.surname || this.state.requiredForm ?
                                formInput :
                                formInputNotRequired
                            }
                            value={surname}
                            onChange={this.onInputChange}
                        />
                        {
                            !this.state.formField.surname && !this.state.requiredForm ?
                                <div className={`${notRequiredForm} ${notRequiredFormLogin}`}>Введите фамилию</div> :
                                null
                        }
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
                        <Paper className={formWrapperLogin} elevation={3}>
                            <form className="form" onSubmit={isLoginForm ? this.logIn : this.signUp}>
                                <h1 className="form__title">{formElements.title}</h1>
                                <div className="form__input-container">
                                    <FormLabel className="form__label label" htmlFor="email">Email</FormLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className={
                                            this.state.formField.email || this.state.requiredForm ?
                                            formInput :
                                            formInputNotRequired
                                        }
                                        value={email}
                                        onChange={this.onInputChange}
                                        placeholder="mail@mail.ru"
                                    />
                                    {
                                        !this.state.formField.email && !this.state.requiredForm ?
                                            <div className={`${notRequiredForm} ${notRequiredFormLogin}`}>Введите email</div> :
                                            null
                                    }
                                    {formElements.userName}
                                    <FormLabel className="form__label label" htmlFor="password">{formElements.passwordLabel}</FormLabel>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        className={
                                            this.state.formField.password || this.state.requiredForm ?
                                            formInput :
                                            formInputNotRequired
                                        }
                                        value={password}
                                        onChange={this.onInputChange}
                                        placeholder="******"
                                    />
                                    {
                                        !this.state.formField.password && !this.state.requiredForm ?
                                            <div className={`${notRequiredForm} ${notRequiredFormLogin}`}>Введите пароль</div> :
                                            null
                                    }
                                </div>
                                {formElements.forgotPasswordBtn}
                                <div className={buttonWrapper}>
                                    <input type="submit" className="button button--margin" value={formElements.submitBtnValue} />
                                </div>
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
                        </Paper>
                    </div>
                </div>
            )
        } else {
            return <>
                <Redirect to="/map" component={MapWrapper} />
            </>
        }
    }
}

export const LoginWrapper = connect(
    (state) => ({
        currentForm: state.formReducer.currentForm,
        isLoggedIn: state.authReducer.isLoggedIn,
    }),
    {
        authenticate,
        registration,
        chooseLoginForm,
        chooseSignUpForm,
    }
)(withStyles(formStyles)(Login));