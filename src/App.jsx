import React from 'react';
// import './App.css';
import Home from './Home';
import {Profile} from './Profile';
import {AppMap} from './AppMap';

const PAGES = {
  map: <AppMap/>,
  profile: <Profile/>,
  home: <Home/>,
}

class App extends React.Component {

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  }

  state = { currentPage: "home" };

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
                    this.navigateTo("home");
                  }}
                >
                  Выход
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
            {PAGES[this.state.currentPage]}
          </section>
        </main>
      </>
    );
  }
}

export default App;
