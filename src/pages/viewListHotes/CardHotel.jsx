/* eslint-disable react/prop-types */
import React from "react";
import ViewCarouselHotel from "../../components/ViewCarouselHotel";

export default function CardHotel({
  imagenes,
  ancho,
  alto,
  descripcion,
  servicios,
  ubicacion,
  name,
  id,
}) {
  function redirectToHotel(event) {
    console.log(event.target.id);
    localStorage.setItem("idViewHotel", event.target.id);
    window.location = "/infhotel";
  }
  return (
    <>
      <div className="col-md-4 col-sm-6" style={{ marginBottom: "1em" }}>
        <div className="card">
          <div className="cardInfHotelMargenNegrilla">
            <h4>{name}</h4>
            <ViewCarouselHotel
              imagenes={imagenes}
              ancho={ancho}
              largo={alto}
              style={{ borderRadius: "20px" }}
            ></ViewCarouselHotel>

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
