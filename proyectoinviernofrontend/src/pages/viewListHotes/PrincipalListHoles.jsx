import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import CardHotel from "./CardHotel";

export default function PrincipalListHoteles() {
  const [data, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8080/inf/alojamiento`).then((response) => {
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
  let nombre = data.establishments[0].name;  
  let descripcion = data.establishments[0].description;
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

  return (
    <>
      <div>
        <CardHotel
          imagenes={imagenes}
          ancho={300}
          alto={250}
          descripcion={descripcion}
          servicios={servicios}
          ubicacion={ubicacion}
          nombre={nombre}
        ></CardHotel>
      </div>
    </>
  );
}
