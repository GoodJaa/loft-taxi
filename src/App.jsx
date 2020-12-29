import React from 'react';
import './App.css';
import './styles/header.css';
import Login from './pages/Login';
import { Profile } from './pages/Profile';
import { AppMap } from './pages/AppMap';
import { WithAuth } from './helpers/AuthContext';
import {Logo} from 'loft-taxi-mui-theme';
import PropTypes from 'prop-types';

const PAGES = {
  map: (props) => <AppMap {...props} />,
  profile: (props) => <Profile {...props} />,
  login: (props) => <Login {...props} />,
}

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  static propTypes = {
    authData: PropTypes.shape({
      isLoggedIn: PropTypes.bool.isRequired,
      logIn: PropTypes.func.isRequired,
      logOut: PropTypes.func.isRequired
    })
  }

  state = { currentPage: "login" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      return this.setState({ currentPage: page });
    }
    return this.setState({ currentPage: "login" });
  }

  render() {

    return (
      <>
        <header className="header">
          <div className="header__logo">
            <Logo/>
          </div>
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__list-item">
                <button
                  className="navigation__btn"
                  onClick={() => {
                    this.navigateTo("map");
                  }}
                >
                  Карта
              </button>
              </li>
              <li className="navigation__list-item">
                <button
                  className="navigation__btn"
                  onClick={() => {
                    this.navigateTo("profile");
                  }}
                >
                  Профиль
              </button>
              </li>
              <li className="navigation__list-item">
                <button
                  className="navigation__btn"
                  onClick={() => {
                    this.props.logOut();
                    this.navigateTo("login");
                  }}
                >
                  Выйти
              </button>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main-page">
          <section className="main-section">
            {PAGES[this.state.currentPage]({
              handleNavigate: this.navigateTo.bind(this)
            })
            }
          </section>
        </main>
      </>
    );
  }
}

export default WithAuth(App);
