import NavBar from "../../components/NavBar";
import "./PrincipalHotel.css";
import CarruselVistaInf from "../../components/CarruselVistaInf";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";

function PrincipalHotel() {
  const [data, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  let idHotel = 4;
  useEffect(() => {
    axios
      .get(`http://localhost:8080/inf/alojamiento/${idHotel}`)
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="main">
        <div className="showTournamentTitle">
          <div
            className="d-flex justify-content-center align-items-center "
            style={{ height: "100", fontWeight: "bold", margin: "10px" }}
          >
            <ReactLoading
              type={"bubbles"}
              color={"#fffff"}
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    );
  }
  let nombre = data.nombre;
  let encargado = "Alejandro";
  let cantidadHuespedes = "12";
  let cantidadCamas = "1";
  let banios = 1;
  let descripcion =
    "Bienvenido al lujoso Hotel Oasis del Mar, un paraíso vacacional situado en la impresionante costa de una isla tropical. Este magnífico resort de cinco estrellas es el lugar ideal para aquellos que buscan un escape inolvidable y relajante.";
  let servicios = 123;
  let ubicacion = data.ubicacion.nombre_ubicacion;

  let imagenes = data.imagenes.map((imagen) => imagen.imgenen_establecimiento);

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
