import React from 'react';
import {AppMap} from './AppMap';

class Form extends React.Component {

    switchForm = (form) => {
        this.setState({ currentForm: form });
    }

    directTo = (event) => {
        event.preventDefault();

    }

    state = { currentForm: "login" };


    render() {
        if (this.state.currentForm !== "login") {
            return (
                <form className="form__registration" onSubmit={(e) => {this.directTo(e)}}>
                    <h2 className="form__title">Регистрация</h2>
                    <label htmlFor="email">Email*</label>
                    <input id="email" type="email" name="email" placeholder="mail@mail.ru" />
                    <label htmlFor="userName">Как вас зовут?*</label>
                    <input id="name" type="text" name="userName" />
                    <label htmlFor="password">Придумайте пароль*</label>
                    <input id="password" type="password" name="password" placeholder="******" />
                    <input type="submit" value="Зарегистрироваться" />
                    <div className="switch-form">
                        <span className="switch-form__text">Уже есть аккаунт?</span>
                        <button onClick={(e) => {
                            e.preventDefault();
                            this.switchForm("login");
                        }}>
                            Логин
                        </button>
                    </div>
                </form>
            )
        } else {
            return (
                <form className="form__login" onSubmit={(e) => {this.directTo(e)}}>
                    <h2 className="form__title">Войти</h2>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="mail@mail.ru" />
                    <label htmlFor="password">Пароль</label>
                    <input id="password" type="password" name="password" placeholder="******" />
                    <div className="forgot-password__btn-wrapper">
                        <button className="forgot-password__btn">Забыли пароль?</button>
                    </div>
                    <input type="submit" value="Войти" />
                    <div className="switch-form">
                        <span className="switch-form__text">Новый пользователь?</span>
                        <button onClick={(e) => {
                            e.preventDefault();
                            this.switchForm("regitration");
                        }}>
                            Регистрация
                        </button>
                    </div>
                </form>
            )
        }
    }

}

export default Form;