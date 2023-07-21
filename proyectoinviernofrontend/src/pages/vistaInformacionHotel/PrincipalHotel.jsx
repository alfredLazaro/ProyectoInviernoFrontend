import React from "react";
import NavBar from "../../components/NavBar";
import "./PrincipalHotel.css";
import CarruselVistaInf from "../../components/CarruselVistaInf";

function PrincipalHotel() {
  let nombre = "Daniels Hotel";
  let encargado = "Alejandro";
  let cantidadHuespedes = "12";
  let cantidadCamas = "1";
  let banios = 1;
  let descripcion =
    "Bienvenido al lujoso Hotel Oasis del Mar, un paraíso vacacional situado en la impresionante costa de una isla tropical. Este magnífico resort de cinco estrellas es el lugar ideal para aquellos que buscan un escape inolvidable y relajante.";
  let servicios = "Tenemos 2 servicios nomas.";
  let ubicacion = "link";

  let imagenes = [
    "https://mdbootstrap.com/img/new/slides/041.jpg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-43333686/original/b6f40ac4-3468-443e-81d8-ce3b6f526943.jpeg?im_w=720",
    "https://mdbootstrap.com/img/new/slides/042.jpg",
    "https://mdbootstrap.com/img/new/slides/043.jpg",
  ];

  function cardVistaInf() {
    return (
      <>
        <div
          className="d-flex justify-content-center align-items-center "
          style={{ height: "", fontWeight: "bold", margin: "10px" }}
        >
          <div className=" col-md-4 card m-5  ">
            <div className="cardInfHotelMargenNegrilla">
              <h4>{nombre}</h4>
              <CarruselVistaInf imagenes={imagenes} ancho={250} largo={200} />

              <h5>
                Encargado: <span>{encargado}</span>{" "}
              </h5>
              <h5>
                Cantidad de huespedes: <span>{cantidadHuespedes}</span>
              </h5>
              <h5>
                Cantidad Camas: <span>{cantidadCamas}</span>
              </h5>

              <h5>
                Baños: <span>{banios}</span>
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

  return (
    <>
      <div>
        <NavBar />
        <div className="container">{cardVistaInf()}</div>
      </div>
    </>
  );
}

export default PrincipalHotel;
