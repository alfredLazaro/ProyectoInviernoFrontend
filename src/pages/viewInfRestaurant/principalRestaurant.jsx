import React, { useEffect } from "react";
//import CardRestau from "../components/cardRestau/CardResta";
import ReactLoading from "react-loading";
import ViewCarruselRest from "../../components/carruselRest/ViewCarrucelRest";
import Axios from "axios";
function PrincipalRestaurant() {
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
        Axios.get(`http://localhost:8080/restaurant/${idRestaurant}`).then((response) => {
            setData(response.data);
            setLoading(false);
        });
    }, []);
    if (loading) {
        return (
        <div className="main">
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
    /* esto la carga de los datos de la tabla */
    let datosEstablecimiento=data.establishments[0];
    let nombre = datosEstablecimiento.name;
    let nombreEncargado = data.name;
    let tipoDeComida =datosEstablecimiento.cookingKind;
    let descripcion = datosEstablecimiento.description;
    let tipoServicio=datosEstablecimiento.establishmentPackages[0].establishmentServices.map((servicio) => servicio.typeService);  
    let servicios= datosEstablecimiento.establishmentPackages[0].establishmentServices.map((servicio) => servicio.serviceName);
    let ubicacion = datosEstablecimiento.location.location_name;
    let imagenes= datosEstablecimiento.pictures.map((imagen) => imagen.id_picture);  
    
    function cardVistaInf(){
      return(
        <>
          <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh", fontWeight: "bold", margin: "10px" }}>
            <div className="col-md-4 card m-5">
              <div>
                <h4>{nombre}</h4>
                <ViewCarruselRest imagenes={imagenes} ancho={250} largo={200}/>
                <h5>Tipo de Cocina: <span>{tipoDeComida}</span></h5>
                <h5>Descripcion: <span>{descripcion}</span></h5>
                <h5>Servicios: <span>{servicios}</span></h5>
                <h5>Tipo de Servicio: <span>{tipoServicio}</span></h5>
                <h5>Ubicacion: <span>{ubicacion}</span></h5>
                <h5>Encargado: <span>{nombreEncargado}</span></h5>
              </div>
            </div>
          </div>
        </>
      );
    }
    return(
      <>
        <div>
          <div>{cardVistaInf()}</div>
        </div>
      </>
    );
}
export default PrincipalRestaurant;