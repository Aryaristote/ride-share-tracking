import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  return (
    <div style={{ width: '500px', height: '900px', overflow: 'hidden' }}>
      <MapContainer center={[-1.939826787816454, 30.0445426438232]} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Starting Point */}
        <Marker position={[-1.939826787816454, 30.0445426438232]}>
          <Popup>Starting Point: Nyabugogo</Popup>
        </Marker>

        {/* Intermediate Stops */}
        <Marker position={[-1.9355377074007851, 30.060163829002217]}>
          <Popup>Stop A</Popup>
        </Marker>
        <Marker position={[-1.9358808342336546, 30.08024820994666]}>
          <Popup>Stop B</Popup>
        </Marker>
        <Marker position={[-1.9489196023037583, 30.092607828989397]}>
          <Popup>Stop C</Popup>
        </Marker>
        <Marker position={[-1.9592132952818164, 30.106684061788073]}>
          <Popup>Stop D</Popup>
        </Marker>
        <Marker position={[-1.9487480402200394, 30.126596781356923]}>
          <Popup>Stop E</Popup>
        </Marker>

        {/* Ending Point */}
        <Marker position={[-1.9365670876910166, 30.13020167024439]}>
          <Popup>Ending Point: Kimironko</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;