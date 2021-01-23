import React from 'react';
import {ProfileWrapper} from './Profile';
import {render} from '@testing-library/react';
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

describe("Profile", () => {
    it("renders profile page", () => {
        const mockStore = {
            getState: () => {},
            subscribe: () => {},
            dispatch: () => {},
        };
        const history = createMemoryHistory();
        const {container} = render(
            <Router history={history}>
                <Provider store={mockStore}>
                    <ProfileWrapper/>
                </Provider>
            </Router>
        )

        expect(container.innerHTML).toMatch("Профиль")
    })
})