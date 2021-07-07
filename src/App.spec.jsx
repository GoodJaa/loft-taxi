import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { AppWithAuth } from './App.jsx';
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

jest.mock('./pages/Login', () => ({ LoginWrapper: () => <div>Login component</div> }))
jest.mock('./pages/Map', () => ({ Map: () => <div>Map component</div> }))
jest.mock('./pages/Profile', () => ({ ProfileWrapper: () => <div>Profile component</div> }))

describe('App', () => {
    it("renders correctly", () => {
        const mockStore = {
            getState: () => ({authReducer: {isLoggedIn: true} }),
            subscribe: () => { },
            dispatch: () => { },
        };
        const history = createMemoryHistory();
        const { container } = render(
            <Router history={history}>
                <Provider store={mockStore}>
                    <AppWithAuth />
                </Provider>
            </Router>
        )
        expect(container.innerHTML).toMatch("Login component")
    })

    describe("when on click on navigation buttons", () => {
        it("opens the page", () => {
            const mockStore = {
                getState: () => ({authReducer: {isLoggedIn: true} }),
                subscribe: () => { },
                dispatch: () => { },
            };
            const history = createMemoryHistory();
            const { getByText, container } = render(
                <Router history={history}>
                    <Provider store={mockStore}>
                        <AppWithAuth />
                    </Provider>
                </Router>
            )
            fireEvent.click(getByText('Карта'))
            expect(container.innerHTML).toMatch("Map component")
            fireEvent.click(getByText('Профиль'))
            expect(container.innerHTML).toMatch("Profile component")
        })
    })
})