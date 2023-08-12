import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import OtherButton from "../../components/Forms/OtherButton";
import PostRecordLocation from "./PostRecordLocation";
import './DraggableMarkerExample.css'

let positionReal;
// eslint-disable-next-line react/prop-types
function DraggableMarker({ center }) {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
          console.log(marker.getLatLng());
          positionReal = marker.getLatLng();
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "El marcador se puede arrastrar"
            : "Haga clic aquí para hacer que el marcador se pueda arrastrar"}
        </span>
      </Popup>
    </Marker>
  );
}

// eslint-disable-next-line react/prop-types
export default function DraggableMarkerExample({ idEstablishment }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPost(position);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }, [!post]);
  /* 
  Latitud: {position.coords.latitude}
          Longitud: {position.coords.longitude} */
  let center;
  if (post != null) {
    center = {
      lat: post.coords.latitude,
      lng: post.coords.longitude,
    };
  } else {
    center = {
      lat: -18.204607,
      lng: -65.183753,
    };
  }
  function recordUbication() {
    alert("esta a punto de registrar algo XD" + positionReal);
    PostRecordLocation(
      (idEstablishment = { idEstablishment }),
      (positionReal = { positionReal })
    );
  }

  return (
    <>
      <div className=" container">
        <div className="row">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "80vh", fontWeight: "bold", margin: "10px" }}
          >
            <div className="card col-md-7 m-3">
              <div className="cardInfHotelMargenNegrilla">
                <h1>Registro del establecimiento</h1>
                <p>(Presione sobre el icono azul y siga las instrucciones)</p>
                <MapContainer center={center} zoom={15} scrollWheelZoom={true}>
                  <TileLayer                    
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <DraggableMarker center={center} />
                </MapContainer>
                <div>
                  <OtherButton
                    text={"registrar ubicacion"}
                    onClick={recordUbication}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
