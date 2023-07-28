import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import CardHotel from "./CardHotel";
import NavBar from "../../components/NavBar";

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

  const createdCards = data.map((establishments) => (
    <>
      <CardHotel
        imagenes={establishments.pictures.map(
          (imagen) => imagen.establishment_picture
        )}
        ancho={300}
        alto={250}
        descripcion={establishments.description}
        servicios={establishments.establishmentPackages.map((services) =>
          services.establishmentServices.map((servicio) => servicio.serviceName)
        )}
        ubicacion={establishments.location.location_name}
        nombre={establishments.name}
      />
    </>
  ));

  return (
    <>
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="row">{createdCards}</div>
        </div>
      </div>
    </>
  );
}
