// MapContainer.js
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14} initialCenter={{ lat: -1.944, lng: 30.060 }} >
                {/* Add markers for stops */}
                <Marker position={{ lat: -1.944, lng: 30.060 }} />
                {/* Add more markers for other stops */}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    // apiKey: YOUR_GOOGLE_MAPS_API_KEY
})(MapContainer);
