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
}) {
  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <div className="cardInfHotelMargenNegrilla">
            <h4>{nombre}</h4>
            <ViewCarouselHotel
              imagenes={imagenes}
              ancho={ancho}
              largo={alto}
            ></ViewCarouselHotel>
            <h5>
              Encargado: <span>{encargado}</span>{" "}
            </h5>

            <h5>
              Descripcion: <span>{descripcion}</span>
            </h5>
            <h5>
              Servicios: <span>{servicios}</span>
            </h5>
            <h5>
              Ubicacion: <span>{ubicacion}</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
