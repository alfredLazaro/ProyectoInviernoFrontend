/* eslint-disable react/prop-types */
import React from "react";
//import ViewCarouselHotel from "../ViewCarouselHotel";
import ViewCarrucelRest from "../carruselRest/ViewCarrucelRest"
export default function CardResta({
  imagenes,
  ancho,
  alto,  
  descripcion,
  servicios,
  ubicacion,
  name,
  id,
}) {
  function redirectToRestaurant(event) {
    console.log(event.target.id);
    localStorage.setItem("idViewRestaurant", event.target.id);
    window.location = "/infRestaurant";
  }
  return (
    <>
      <div        
        className="col-md-4 col-sm-6"        
        style={{ marginBottom: "1em" }}
      >
        <div className="card">
          <div className="cardInfHotelMargenNegrilla">
            <h4>{name}</h4>
            <ViewCarrucelRest
              imagenes={imagenes}
              ancho={ancho}
              largo={alto}
              style={{ borderRadius: '20px',}}
            ></ViewCarrucelRest>

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
            <button id={id} onClick={redirectToRestaurant} style={{ width: "3em" }}>
              ver
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
