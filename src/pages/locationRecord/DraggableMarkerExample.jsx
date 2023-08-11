import React, {
  Component,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const center = {
  lat: -18.204607,
  lng: -65.183753,
};
let positionReal;
function DraggableMarker() {
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
function recordUbication() {
  alert("esta a punto de registrar algo XD" + positionReal);
}

export default class DraggableMarkerExample extends Component {
  render() {
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
                  <MapContainer
                    center={center}
                    zoom={15}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <DraggableMarker />
                  </MapContainer>
                  <div>
                    <button onClick={recordUbication}>
                      {" "}
                      registrar ubicacion
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
