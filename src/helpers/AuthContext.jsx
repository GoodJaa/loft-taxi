import React, {Component} from 'react';

export const {Provider, Consumer} = React.createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const logIn = (email, password) => {
        if (email === "test@test.com" && password === "123123") {
            setIsLoggedIn(true)
        };
    }

    const logOut = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    const context = {logIn, logOut, isLoggedIn};

    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}

export const WithAuth = (WrapperdComponent) => {
    return class extends Component {
        render() {
            return (
                <Consumer>
                    {
                        context => {
                            return <WrapperdComponent {...context} {...this.props} />
                        }
                    }
                </Consumer>
            )
        }
    }
}