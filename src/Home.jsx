import React from 'react';


export const Home = () => {

    return (
        <div className="form-wrapper">
            <form className="form__login">
                <h2 className="form__title">Войти</h2>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="mail@mail.ru" />
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" name="password" placeholder="******" />
                <div className="forgot-password__btn-wrapper">
                    <button className="forgot-password__btn">Забыли пароль?</button>
                </div>
                <button>
                    Войти
                    </button>
                <div className="switch-form">
                    <span className="switch-form__text">Новый пользователь?</span>
                    <button>
                        Регистрация
                        </button>
                </div>
            </form>
        </div>
    );
};