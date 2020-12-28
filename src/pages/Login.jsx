import React from 'react';
import PropTypes from 'prop-types';
import { WithAuth } from '../helpers/AuthContext'
import {Button, Input, FormLabel} from '@material-ui/core';
import { Logo } from "loft-taxi-mui-theme";
import "../styles/login.css";


class Login extends React.Component {
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
                        <FormLabel htmlFor="userName">Как вас зовут?</FormLabel>
                        <Input
                            id="name"
                            type="text"
                            name="userName"
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
            submitBtnValue: isLoginForm ? "Войти" : "Регистрация",
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
                    <form className="form__login" onSubmit={(e) => { this.directTo(e) }}>
                        <h1>{formElements.title}</h1>
                        <FormLabel className="form-label" htmlFor="email">Email</FormLabel>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.onInputChange}
                            placeholder="mail@mail.ru"
                        />
                        {formElements.userName}
                        <FormLabel className="form-label" htmlFor="password">{formElements.passwordLabel}</FormLabel>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.onInputChange}
                            placeholder="******"
                        />
                        {formElements.forgotPasswordBtn}
                        <input type="submit" value={formElements.submitBtnValue}></input>
                        <div className="switch-form">
                            <span className="switch-form__text">{formElements.switchFormText}</span>
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.switchForm(formElements.switchFormPath);
                                }}
                            >
                                {isLoginForm ? "Регистрация" : "Логин"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default WithAuth(Login);