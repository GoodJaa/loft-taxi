import React, { Component } from 'react';
import './styles/header.css';
import './styles/layout.css';
import { LoginWrapper } from './pages/Login';
import { ProfileWrapper } from './pages/Profile';
import { Map } from './pages/Map';
import { connect } from 'react-redux';
import { logOut } from './helpers/actions'
import { Logo } from 'loft-taxi-mui-theme';
import PropTypes from 'prop-types';
import { Link, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './helpers/PrivateRoute';
import { unloadState } from './helpers/initApp';

export class App extends Component {

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    signUpComplete: PropTypes.bool
  }

  render() {
    const renderHeader = {
      header:
        !this.props.isLoggedIn ?
          null :
          <header className="header">
            <div className="header__logo">
              <Logo />
            </div>
            <nav className="navigation">
              <ul className="navigation__list">
                <li className="navigation__list-item">
                  <Link to="/map" className="navigation__btn">
                    Карта
                  </Link>
                </li>
                <li className="navigation__list-item">
                  <Link to="/profile" className="navigation__btn">
                    Профиль
                  </Link>
                </li>
                <li className="navigation__list-item">
                  <button
                    onClick={(e) => {
                        e.preventDefault();
                        this.props.logOut();
                        unloadState();
                      }
                    }
                    className="navigation__btn"
                  >
                    Выйти
                  </button>
                </li>
              </ul>
            </nav>
          </header>
    }
    return (
      <>
        { renderHeader.header}
        <main className="main-page">
          <section className="main-section">
            <Switch>
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={ProfileWrapper} />
              <Route exact path="/" component={LoginWrapper} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

export const AppWithAuth = connect(
  (state) => ({
    isLoggedIn: state.authReducer.isLoggedIn,
  }),
  { logOut }
)(App);

