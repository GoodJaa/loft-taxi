import React from 'react';
// import './App.css';
import Login from './Login';
import { Profile } from './Profile';
import { AppMap } from './AppMap';

const PAGES = {
  map: (props) => <AppMap {...props} />,
  profile: (props) => <Profile {...props} />,
  login: (props) => <Login {...props} />,
}

class App extends React.Component {

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  }

  state = { currentPage: "login" };

  render() {
    return (
      <>
        <header className="header">
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
                    this.navigateTo("login");
                  }}
                >
                  Логин
              </button>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main-page">
          <section className="logo-section">
            логотип
        </section>
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

export default App;
