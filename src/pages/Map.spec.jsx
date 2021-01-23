import React from "react";
import {Map} from "./Map";
import {render} from "@testing-library/react";
import mapboxgl from "mapbox-gl";

jest.mock("mapbox-gl");

describe("Map", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<Map/>);
        expect(mapboxgl.Map).toHaveBeenCalledWith({
            container: getByTestId('map'),
            style: 'mapbox://styles/mapbox/light-v10',
            center: [30.3056504, 59.9429126],
            zoom: 12
        });
    });
});
