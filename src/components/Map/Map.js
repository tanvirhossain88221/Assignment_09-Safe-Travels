import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 23.727212,
    lng: 90.407686
};

function Map() {
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyDoo5cqzSZoLeju4tMvcj1K2LPxYsZQ8CU'
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript >
    )
}

export default Map;