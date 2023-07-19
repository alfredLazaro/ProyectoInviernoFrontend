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

  let imagenes= [
    "https://a0.muscache.com/im/pictures/miso/Hosting-43333686/original/b6f40ac4-3468-443e-81d8-ce3b6f526943.jpeg?im_w=720",
    "https://mdbootstrap.com/img/new/slides/042.jpg",
    "https://mdbootstrap.com/img/new/slides/043.jpg",
  ];

  function cardVistaInf() {
    return (
      <>
        <div className="col-md-5 card">
          <CarruselVistaInf imagenes={imagenes} />
          <h5>{nombre}</h5>
          <h5>Encargado</h5>
          {encargado}
          <h5>Cantidad de huespedes</h5>
          {cantidadHuespedes}
          <h5>Cantidad Camas</h5>
          {cantidadCamas}
          <h5>Banios</h5>
          {banios}
          <h5>Descripcion</h5>
          {descripcion}
          <h5>Servicios</h5>
          {servicios}
          <h5>Ubicacion</h5>
          {ubicacion}
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
