import React, { useEffect } from "react";
import ViewCarouselHotel from "../../components/ViewCarouselHotel";
import Axios from "axios";
function PrincipalRestaurant(props) {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    let idRestaurant = localStorage.getItem("idViewRestaurant");
    if (idRestaurant === null) {
        return (<>
        <div className="d-flex justify-content-center align-items-center " style={{ height: "80vh", fontWeight: "bold", margin: "10px" }}>
          <h1>Lista los restaurantes y selecciona uno.</h1>
        </div>
      </>);
    }
    useEffect(() => {
        Axios.get(`http://localhost:8080/inf/restaurant/${idRestaurant}`).then((response) => {
            setData(response.data);
            console.log(response.data);
            setLoading(false);
        });
    }, []);
    if (loading) {
        return (<div className="main">
        <div className="showTournamentTitle">
          <div className="d-flex justify-content-center align-items-center " style={{ height: "100", fontWeight: "bold", margin: "10px" }}>
            <h1>Loading...</h1>
            <ReactLoading type={"bubbles"} color={"#fffff"} height={100} width={100}/>
          </div>
        </div>
      </div>);
    }
    if (data.establishments[0].pictures.length <= 2) {
        return (<>
        <h1>No se tiene datos completos del restaurante.</h1>
      </>);
    }
    let nombre = data.establishments[0].name;
    let nombreEncargado = data.name;
    let descripcion = data.establishments[0].description;
    data.establishments[0].establishmentsPackages[0].establishmentServices.map((servicio) => servicio.tipoServicio);  
    let servicios= data.establishments[0].establishmentsPackages[0].establishmentServices.map((servicio) => servicio.serviceName);
    let ubicacion = data.establishments[0].location.location_name;
    let imagenes= data.establishments[0].pictures.map((imagen) => imagen.imagen_stablishment);  
    
    function cardVistaInf(){
      return(
        <>
          <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh", fontWeight: "bold", margin: "10px" }}>
            <div className="col-md-4 card m-5">
              <div>
                <h4>{nombre}</h4>
                <viewCarouselHotel imagenes={imagenes} ancho={250} largo={200}/>
                <h5>Descripcion: {descripcion}</h5>
                <h5>Encargado: <span>{nombreEncargado}</span></h5>
                <h5>Servicios: <span>{servicios}</span></h5>
              </div>
            </div>
          </div>
        </>
      );
    }
}
export default PrincipalRestaurant;