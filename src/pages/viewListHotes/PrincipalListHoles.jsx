import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import CardHotel from "./CardHotel";

export default function PrincipalListHoteles() {
  const [data, setPost] = useState([]);
  const [loading, setLoading] = useState(true);  
  useEffect(() => {
    axios.get(`http://localhost:8080/inf/alojamiento/all`).then((response) => {
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
            style={{ height: "80vh", fontWeight: "bold", margin: "10px" }}
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
  console.log(data.dateRegistration);
  const createdCards = data.map((establishments) => (
    <>
      <CardHotel
        encargado1 = {data.name}
        imagenes={establishments.pictures.map(
          (imagen) => imagen.establishment_picture
        )}
        ancho={100}
        alto={200}
        descripcion={establishments.description}
        servicios={establishments.establishmentPackages.map((services) =>
          services.establishmentServices.map((servicio) => servicio.serviceName)
        )}
        ubicacion={establishments.location.location_name}
        name={establishments.name}
        id={establishments.idEstablishment}
      />
    </>
  ));

  return (
    <>
      <div className="main">        
        <div className="container">
          <div className="row">{createdCards}</div>
        </div>
      </div>
    </>
  );
}
