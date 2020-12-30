import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import "../styles/map.css";


export class Map extends Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken = "pk.eyJ1IjoiZ29vZGphYSIsImEiOiJja2o1czR1MTMweWJyMnlucWljYjcyamh5In0.1bu9hCKvBwiWP3UWqLKp7A";

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [30.3056504, 59.9429126],
            zoom: 12
        })
    }

    componentWillUnmount() {
        this.map.remove()
    }

    render() {
        return (
            <div className="map-wrapper">
                <div className="map" data-testid="map" ref={this.mapContainer} />
            </div>
        );
    }
};