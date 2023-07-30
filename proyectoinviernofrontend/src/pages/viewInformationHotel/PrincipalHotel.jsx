import "./PrincipalHotel.css";
import ViewCarouselHotel from "../../components/ViewCarouselHotel";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";


function PrincipalHotel() {
  const [data, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  let idHotel = localStorage.getItem("idViewHotel")
  useEffect(() => {
    axios
      .get(`http://localhost:8080/inf/alojamiento/es/${idHotel}`)
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
  console.log(data);
  let nombre = data.establishments[0].name;
  let encargado = data.name;
  let cantidadHuespedes = "12";
  let cantidadCamas = "1";
  let banios = 1;
  let descripcion =data.establishments[0].description;
    data.establishments[0].establishmentPackages[0].establishmentServices.map(
      (servicio) => servicio.tipoServicio
    );
  let servicios =
    data.establishments[0].establishmentPackages[0].establishmentServices.map(
      (servicio) => servicio.serviceName
    );
  let ubicacion = data.establishments[0].location.location_name;
  let imagenes = data.establishments[0].pictures.map(
    (imagen) => imagen.establishment_picture
  );

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
              <ViewCarouselHotel imagenes={imagenes} ancho={250} largo={200} />

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
        <div className="container">{cardVistaInf()}</div>
      </div>
    </>
  );
}

export default PrincipalHotel;
