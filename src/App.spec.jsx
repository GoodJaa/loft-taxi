import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {AppWithAuth} from './App.jsx'

jest.mock('./pages/Login', () =>  ({LoginWithAuth: () => <div>Login component</div>}))
jest.mock('./pages/Map', () => ({Map: () => <div>Map component</div>}))
jest.mock('./pages/Profile', () => ({Profile: () => <div>Profile component</div>}))

describe('App', () => {
    it("renders correctly", () => {
        const {container} = render(<AppWithAuth/>)
        expect(container.innerHTML).toMatch("Login component")
    })

    describe("when on click on navigation buttons", () => {
        it("opens the page", () => {
            const {getByTestId, container} = render(<AppWithAuth isLoggedIn={true} />)
            fireEvent.click(getByTestId('map-btn'))
            expect(container.innerHTML).toMatch("Map component")
            fireEvent.click(getByTestId('profile-btn'))
            expect(container.innerHTML).toMatch("Profile component")
        })
    })
})