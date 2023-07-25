import React from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet'

const customIcon = new Icon({
  iconUrl: "https://icons-for-free.com/iconfiles/png/512/map+marker+icon-1320166582858325800.png",
  // iconUrl: "../../../public/images/marker.png",
  iconSize: [38, 38]
});
const position = [-17.413977, -66.165321]

export default function MapView() {
  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          Marcador propio.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
