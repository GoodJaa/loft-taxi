import React from 'react'
import { render } from '@testing-library/react'
import { Map } from './Map'


jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: jest.fn()
}));

describe('Map', () => {
    it('renders map page', () => {
        const {container} = render(<Map/>)
        expect(container.innerHTML).toMatch("<div class=\"map-wrapper\"><div class=\"map\" data-testid=\"map\"></div></div>")
    })
})