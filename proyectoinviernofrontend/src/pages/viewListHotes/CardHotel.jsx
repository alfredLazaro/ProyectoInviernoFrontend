/* eslint-disable react/prop-types */
import React from "react";
import ViewCarouselHotel from "../../components/ViewCarouselHotel";

export default function CardHotel({
  imagenes,
  ancho,
  alto,
  encargado,
  descripcion,
  servicios,
  ubicacion,
  nombre,
  id,
}) {
  function redirectToHotel(event) {
    console.log(event.target.id);
    localStorage.setItem("idViewHotel", event.target.id);
    window.location = "/infhotel";
  }
  return (
    <>
      <div        
        className="col-md-4 col-sm-6"        
        style={{ marginBottom: "1em" }}
      >
        <div className="card">
          <div className="cardInfHotelMargenNegrilla">
            <h4>{nombre}</h4>
            <ViewCarouselHotel
              imagenes={imagenes}
              ancho={ancho}
              largo={alto}
            ></ViewCarouselHotel>
            <h6>
              Encargado:
              <span>
                <p>{encargado}</p>
              </span>
            </h6>

            <h6>
              Descripcion:
              <span>
                <p>{descripcion}</p>
              </span>
            </h6>
            <h6>
              Servicios: <span>{servicios}</span>
            </h6>
            <h6>
              Ubicacion: <span>{ubicacion}</span>
            </h6>
            <button id={id} onClick={redirectToHotel} style={{ width: "3em" }}>
              ver
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
