import React, {useState, useEffect} from 'react';
import { Map,  Draggable} from "pigeon-maps"
import pigeon from './pigeon.svg';

export default function MapView() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [center, setCenter] = useState(null)
  // const [hue, setHue] = useState(0)
  // const color = `hsl(${hue % 360}deg 39% 70%)`

  useEffect(() => {
    const getLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error)
          );
        });

        const { latitude, longitude } = position.coords;
        setCenter([latitude, longitude]);
        setCurrentLocation([latitude, longitude]);
      } catch (error) {
        console.error('Error obteniendo la ubicación: ', error);
      }
    };

    getLocation();
  }, []);
  
  return (
    <Map 
      height={800}
      width={800}
      center={center} 
      defaultZoom={16}
    >
      <Draggable offset={[60, 87]} anchor={currentLocation} onDragEnd={setCurrentLocation}>
        <img src={pigeon} width={100} height={95} alt="Pigeon!" />
      </Draggable> 
    </Map>
  )
}