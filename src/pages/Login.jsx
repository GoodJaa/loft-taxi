import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { WithAuth } from '../helpers/AuthContext'
import {Input, FormLabel} from '@material-ui/core';
import { Logo } from "loft-taxi-mui-theme";
import "../styles/login.css";
import "../styles/button.css";


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentForm: "login",
            formField: {
                email: "",
                userName: "",
                password: "",
            }
        };
    }

    static propTypes = {
        handleNavigate: PropTypes.func
    }

    switchForm = (form) => {
        this.setState({ currentForm: form });
    }

    onInputChange = (e) => {
        const updateFormField = {...this.state.formField};
        updateFormField[e.target.name] = e.target.value;

        this.setState({formField : updateFormField});
    };

    directTo = async (event) => {
        event.preventDefault();
        if (this.state.currentForm === "login") {
            const formFieldValue = {...this.state.formField}

            await this.props.logIn(formFieldValue.email, formFieldValue.password);

            await this.props.handleNavigate("map");
        }
    };


    render() {
        const {email, userName, password} = this.state.formField;
        const isLoginForm = this.state.currentForm === "login";

        const formElements = {
            title: isLoginForm ? "Войти" : "Регистрация",
            userName:
                isLoginForm ?
                    null :
                    <>
                        <FormLabel htmlFor="userName" className="form__label label">Как вас зовут?</FormLabel>
                        <Input
                            id="name"
                            type="text"
                            name="userName"
                            className="form__input"
                            value={userName}
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
            switchFormText: isLoginForm ? "Новый пользователь?" : "Уже есть аккаунт?",
            switchFormPath: isLoginForm ? "registration" : "login"
        }

        return (
            <div className="login-page-wrapper">
                <div className="logo-section">
                    <div className="logo">
                        <Logo/>
                    </div>
                </div>
                <div className="login-section">
                    <form className="form" onSubmit={(e) => { this.directTo(e) }}>
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
                                className="form__input"
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
                                    this.switchForm(formElements.switchFormPath);
                                }}
                            >
                                {isLoginForm ? "Регистрация" : "Логин"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export const LoginWithAuth = WithAuth(Login);