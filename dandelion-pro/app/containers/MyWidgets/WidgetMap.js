import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Maps = (props) => {
  return (
    <MapContainer
      center={[props.lat, props.lon]}
      zoom={10}
      scrollWheelZoom={false}
      dragging={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.markerLat, props.markerLon]}>
        <Popup>
        Твій МАРКЕР на карті...
        </Popup>
  </Marker>
    </MapContainer>
  );
};

export default Maps;