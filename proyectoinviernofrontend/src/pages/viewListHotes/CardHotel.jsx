import React from "react";
import ViewCarouselHotel from "../../components/ViewCarouselHotel";

// eslint-disable-next-line react/prop-types
export default function CardHotel({ imagenes, ancho, alto,encargado,descripcion,servicios,ubicacion,nombre}) {
  return (
    <div>
      <div className="col-md-4 card m-5">
        <div className="cardInfHotelMargenNegrilla">
        <h4>{nombre}</h4>
        <ViewCarouselHotel
          imagenes={imagenes}
          ancho={ancho}
          largo={alto}
        ></ViewCarouselHotel>
        
        </div>
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
  );
}
