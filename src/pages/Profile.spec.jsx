import React from 'react';
import {ProfileWrapper} from './Profile';
import {render} from '@testing-library/react';

describe("Profile", () => {
    it("renders profile page", () => {
        const {container} = render(<ProfileWrapper/>)
        expect(container.innerHTML).toMatch("Профиль")
    })
})