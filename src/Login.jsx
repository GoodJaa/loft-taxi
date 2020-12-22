import React from 'react';

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
        }
    }

    switchForm = (form) => {
        this.setState({ currentForm: form });
    }

    onInputChange = (e) => {
        this.setState({ formField: { [e.target.name]: e.target.value } });
    };

    directTo = (event) => {
        event.preventDefault();
        this.props.handleNavigate("map");
    };


    render() {
        const isLoginForm = this.state.currentForm === "login";

        const formElements = {
            title: isLoginForm ? "Войти" : "Регистрация",
            userName:
                isLoginForm ?
                    null :
                    <>
                        <label htmlFor="userName">Как вас зовут?</label>
                        <input
                            id="name"
                            type="text"
                            name="userName"
                            value={this.state.formField.userName}
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
            <form className="form__login" onSubmit={(e) => { this.directTo(e) }}>
                <h1>{formElements.title}</h1>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={this.state.formField.email}
                    onChange={this.onInputChange}
                    placeholder="mail@mail.ru"
                />
                {formElements.userName}
                <label htmlFor="password">{formElements.passwordLabel}</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={this.state.formField.password}
                    onChange={this.onInputChange}
                    placeholder="******"
                />
                {formElements.forgotPasswordBtn}
                <input type="submit" value={formElements.submitBtnValue} />
                <div className="switch-form">
                    <span className="switch-form__text">{formElements.switchFormText}</span>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            this.switchForm(formElements.switchFormPath);
                        }}
                    >
                        {isLoginForm ? "Регистрация" : "Логин"}
                    </button>
                </div>
            </form>
        )
    }

}

export default Login;